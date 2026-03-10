import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, X, ChevronLeft, ChevronRight, Zap, Shield, Gem, Sparkles } from 'lucide-react'

// Padding to account for fixed navbar (top bar ~40px + navbar ~80px = ~120px)
const IMG_PADDING = 12
const NAV_HEIGHT = 120

// Preload images hook
function useImagePreloader(imageUrls) {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)

  useEffect(() => {
    let loadedCount = 0
    const totalImages = imageUrls.length

    if (totalImages === 0) {
      setImagesLoaded(true)
      return
    }

    const preloadImage = (url) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = () => {
          loadedCount++
          setLoadProgress(Math.round((loadedCount / totalImages) * 100))
          resolve()
        }
        img.onerror = () => {
          loadedCount++
          setLoadProgress(Math.round((loadedCount / totalImages) * 100))
          resolve() // Resolve anyway to not block
        }
        img.src = url
      })
    }

    Promise.all(imageUrls.map(preloadImage)).then(() => {
      setImagesLoaded(true)
    })
  }, [imageUrls])

  return { imagesLoaded, loadProgress }
}

// Loading Screen Component
function LoadingScreen({ progress }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900"
    >
      {/* Animated Logo/Icon */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="mb-8"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-2xl">
          <span className="text-white text-3xl font-bold">W</span>
        </div>
      </motion.div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-lg font-medium mb-6"
      >
        Loading Product Series
      </motion.p>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Progress Text */}
      <motion.p
        className="text-slate-400 text-sm mt-3"
        key={progress}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
      >
        {progress}%
      </motion.p>
    </motion.div>
  )
}

// ISO Material Classification Tags (from catalog - exact colors)
const materialTags = {
  P: { label: 'P', name: 'Steel', color: '#5BC0EB', borderColor: '#3AAED8' },           // Light Blue
  K: { label: 'K', name: 'Cast Iron', color: '#E63946', borderColor: '#C5303C' },       // Red
  N: { label: 'N', name: 'Non-Ferrous', color: '#7CB518', borderColor: '#6A9E15' },     // Green
  M: { label: 'M', name: 'Stainless Steel', color: '#F4D35E', borderColor: '#E5C24A' }, // Yellow
  H: { label: 'H', name: 'Hardened Steel', color: '#9E9E9E', borderColor: '#7E7E7E' },  // Gray
  S: { label: 'S', name: 'Super Alloys', color: '#F58A07', borderColor: '#D97706' },    // Orange
}

// Material Tag Component - circular badge like in catalog
function MaterialTag({ tag, size = 'md' }) {
  const material = materialTags[tag]
  if (!material) return null

  const sizeClasses = {
    sm: 'w-6 h-6 text-[10px]',
    md: 'w-8 h-8 text-xs',
    lg: 'w-10 h-10 text-sm',
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-bold text-white shadow-lg`}
      style={{
        backgroundColor: material.color,
        border: `2px solid ${material.borderColor}`,
      }}
      title={material.name}
    >
      {material.label}
    </div>
  )
}

// Material Tags Row Component
function MaterialTags({ tags, size = 'md' }) {
  return (
    <div className="flex items-center gap-2">
      {tags.map((tag) => (
        <MaterialTag key={tag} tag={tag} size={size} />
      ))}
    </div>
  )
}

// Product Series Data from Catalog (matched with products.json)
const productSeries = [
  {
    id: 'economy',
    name: 'Economy Series',
    tagline: 'High Performance, Smart Value',
    subtitle: 'HRC 58 END MILLS',
    description: 'Designed for demanding machining applications with excellent cost-performance ratio. ALTiSiN coated tools for hardened materials up to HRC 58.',
    features: ['ALTiSiN Coating', '35° Helix', '2F & 4F Options', 'Long Neck Available'],
    materials: ['P', 'K'], // Steel, Cast Iron (from catalog page 21)
    specs: {
      hardness: 'HRC 58',
      coating: 'ALTiSiN',
      flutes: '2F / 4F',
      application: 'General Machining'
    },
    tools: [
      { name: '4F Flat End Mill', image: '/assets/products/economy-4f-fem.png' },
      { name: '2F Ball Nose', image: '/assets/products/economySeries2FBN.png' },
      { name: '4F Corner Radius', image: '/assets/products/economyseries4FSREM.png' },
      { name: '4F Long Neck Flat', image: '/assets/products/economySeries4FLNRFEM.png' },
    ],
    heroImage: '/assets/cnc-machining-bg.jpg',
    accentColor: '#f97316',
    gradientFrom: '#0f172a',
    gradientTo: '#1e293b',
    icon: Zap,
  },
  {
    id: 'prime',
    name: 'Prime Series',
    tagline: 'Professional Grade Excellence',
    subtitle: 'HRC 55 STANDARD SERIES',
    description: 'Engineered for general machining applications in steel, cast iron, and non-ferrous materials. Available in standard, long, and extra-long configurations.',
    features: ['Nanocomposite Coat', '28° Helix', 'Std/Long/XL Reach', 'Micro-Grain Carbide'],
    materials: ['P', 'K', 'N'], // Steel, Cast Iron, Non-Ferrous (from catalog page 5)
    specs: {
      hardness: 'HRC 55',
      coating: 'Nanocomposite',
      flutes: '4F',
      application: 'Precision Machining'
    },
    tools: [
      { name: 'Standard Flat End Mill', image: '/assets/products/prime-scfe.png' },
      { name: 'Long Flat End Mill', image: '/assets/products/prime-lcfe.png' },
      { name: 'Extra Long End Mill', image: '/assets/products/prime-elcfe.png' },
    ],
    heroImage: '/assets/cnc-machine-bg-2.jpg',
    accentColor: '#22c55e',
    gradientFrom: '#0f172a',
    gradientTo: '#1e293b',
    icon: Shield,
  },
  {
    id: 'premium',
    name: 'Premium Series',
    tagline: 'Ultimate Precision Engineering',
    subtitle: 'HRC 65 ULTRA PERFORMANCE',
    description: 'The pinnacle of cutting tool technology. ALTiXiN coated for hardened steel machining up to HRC 65 with mirror-finish surface quality.',
    features: ['ALTiXiN Coating', '35° Helix', 'Ultra-Fine Carbide', 'Mirror Finish'],
    materials: ['P', 'M', 'H', 'K', 'S'], // Steel, Stainless, Hardened, Cast Iron, Super Alloys (from catalog page 33)
    specs: {
      hardness: 'HRC 65',
      coating: 'ALTiXiN',
      flutes: '2F / 4F',
      application: 'Hardened Steel'
    },
    tools: [
      { name: '4F Flat End Mill', image: '/assets/products/premiumseries4FSFEM.png' },
      { name: '2F Ball Nose', image: '/assets/products/premium-2f-bn.png' },
      { name: '4F Corner Radius', image: '/assets/products/premium-4f-rem.png' },
      { name: '4F Long Neck Flat', image: '/assets/products/premium-4f-lnfem.png' },
    ],
    heroImage: '/assets/cnc-machine-bg-3.jpg',
    accentColor: '#ef4444',
    gradientFrom: '#0f172a',
    gradientTo: '#1e293b',
    icon: Gem,
  },
  {
    id: 'alu',
    name: 'ALU Series',
    tagline: 'Aluminum Machining Perfected',
    subtitle: 'SPECIALIZED ALUMINUM TOOLS',
    description: 'Purpose-built for aluminum and non-ferrous materials. Highly polished flutes with 45° helix ensure chip evacuation and superior surface finish.',
    features: ['Mirror Polish', '45° Helix', 'Anti-Adhesion', 'High-Speed Ready'],
    materials: ['N'], // Non-ferrous only
    specs: {
      hardness: 'HRC 65',
      coating: 'Polished',
      flutes: '2F / 3F',
      application: 'Aluminum & Non-Ferrous'
    },
    tools: [
      { name: '2F Flat End Mill', image: '/assets/products/alu-2FEMFHP.png' },
      { name: '2F Ball Nose', image: '/assets/products/alu-2FBNEMFHP.png' },
      { name: '3F Flat End Mill', image: '/assets/products/alu-3FFEMFHP.png' },
      { name: '3F Rougher', image: '/assets/products/alu-3ale-rougher.png' },
    ],
    heroImage: '/assets/cnc-machine-bg-4.jpg',
    accentColor: '#3b82f6',
    gradientFrom: '#0f172a',
    gradientTo: '#1e293b',
    icon: Sparkles,
  },
]

// Sticky Image Component - CNC machine background
function StickyImage({ imgUrl, scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.85])

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100vh - ${NAV_HEIGHT + IMG_PADDING}px)`,
        top: NAV_HEIGHT,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl mx-3"
    >
      {/* Dark gradient overlay for text readability */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, rgba(30, 41, 59, 0.85) 50%, rgba(15, 23, 42, 0.75) 100%)',
          opacity
        }}
      />
    </motion.div>
  )
}

// Redesigned Overlay Content - matches reference UI
function OverlayCopy({ series, onExplore, scrollYProgress }) {
  const y = useTransform(scrollYProgress, [0, 1], [150, -150])
  const opacity = useTransform(scrollYProgress, [0.1, 0.25, 0.75, 0.9], [0, 1, 1, 0])

  const Icon = series.icon

  return (
    <motion.div
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white px-4"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Top Header Bar */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div
            className="h-[2px] w-16 md:w-24"
            style={{ backgroundColor: series.accentColor }}
          />
          <div className="flex items-center gap-2">
            <Icon className="w-5 h-5" style={{ color: series.accentColor }} />
            <span
              className="text-sm md:text-base font-bold tracking-[0.2em] uppercase"
              style={{ color: series.accentColor }}
            >
              {series.subtitle}
            </span>
          </div>
          <div
            className="h-[2px] w-16 md:w-24"
            style={{ backgroundColor: series.accentColor }}
          />
        </motion.div>

        {/* Series Name - Large Bold */}
        <h2
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-center mb-4 tracking-tight"
          style={{
            fontFamily: "'Poppins', sans-serif",
            textShadow: '0 4px 30px rgba(0,0,0,0.5)'
          }}
        >
          {series.name}
        </h2>

        {/* Tagline - Italic */}
        <p
          className="text-xl md:text-2xl lg:text-3xl font-light italic text-center mb-6"
          style={{ color: series.accentColor }}
        >
          "{series.tagline}"
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-300 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
          {series.description}
        </p>

        {/* Compatible Materials - Inline */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <span className="text-xs md:text-sm text-gray-400 font-semibold tracking-wider uppercase">
            Compatible Materials:
          </span>
          <MaterialTags tags={series.materials} size="md" />
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {series.features.map((feature) => (
            <span
              key={feature}
              className="px-4 py-2 rounded-full text-xs md:text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => onExplore(series)}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 text-sm md:text-base"
            style={{
              backgroundColor: series.accentColor,
              boxShadow: `0 10px 40px ${series.accentColor}50`
            }}
          >
            Explore {series.name.split(' ')[0]}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border-2 border-white/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm md:text-base"
          >
            View All Products
          </Link>
        </div>

        {/* Specs Row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16 mb-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-black text-white">{series.specs.hardness}</p>
            <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mt-1">Hardness</p>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block" />
          <div className="text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-black text-white">{series.specs.coating}</p>
            <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mt-1">Coating</p>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block" />
          <div className="text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-black text-white">{series.specs.flutes}</p>
            <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mt-1">Flutes</p>
          </div>
        </div>

        {/* Application Label */}
        <p className="text-center">
          <span className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">
            Application: <span className="text-gray-300">{series.specs.application}</span>
          </span>
        </p>
      </div>
    </motion.div>
  )
}

// Text Parallax Content Section
function TextParallaxContent({ series, onExplore }) {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  return (
    <div ref={targetRef}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={series.heroImage} scrollYProgress={scrollYProgress} />
        <OverlayCopy series={series} onExplore={onExplore} scrollYProgress={scrollYProgress} />
      </div>
    </div>
  )
}

// Detail Modal
function SeriesDetailModal({ series, onClose }) {
  const [activeToolIndex, setActiveToolIndex] = useState(0)

  if (!series) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ type: 'spring', damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                style={{ backgroundColor: `${series.accentColor}20`, border: `1px solid ${series.accentColor}40` }}
              >
                <series.icon className="w-4 h-4" style={{ color: series.accentColor }} />
                <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: series.accentColor }}>
                  {series.subtitle}
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                {series.name}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                {series.description}
              </motion.p>
            </div>

            {/* Tool Carousel */}
            <div className="mb-12">
              <div className="relative">
                {/* Main Image */}
                <motion.div
                  key={activeToolIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative aspect-[16/9] max-w-3xl mx-auto bg-gradient-to-b from-white/5 to-transparent rounded-3xl overflow-hidden mb-6"
                >
                  <img
                    src={series.tools[activeToolIndex].image}
                    alt={series.tools[activeToolIndex].name}
                    className="w-full h-full object-contain p-8"
                  />

                  {/* Navigation arrows */}
                  {series.tools.length > 1 && (
                    <>
                      <button
                        onClick={() => setActiveToolIndex((prev) => (prev === 0 ? series.tools.length - 1 : prev - 1))}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>
                      <button
                        onClick={() => setActiveToolIndex((prev) => (prev === series.tools.length - 1 ? 0 : prev + 1))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>
                    </>
                  )}
                </motion.div>

                {/* Tool name */}
                <motion.h3
                  key={`name-${activeToolIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-semibold text-white text-center mb-6"
                >
                  {series.tools[activeToolIndex].name}
                </motion.h3>

                {/* Thumbnails */}
                <div className="flex justify-center gap-4">
                  {series.tools.map((tool, i) => (
                    <button
                      key={tool.name}
                      onClick={() => setActiveToolIndex(i)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                        i === activeToolIndex
                          ? 'ring-2 ring-offset-2 ring-offset-transparent scale-110'
                          : 'opacity-50 hover:opacity-80'
                      }`}
                      style={{
                        ringColor: i === activeToolIndex ? series.accentColor : 'transparent',
                        backgroundColor: 'rgba(255,255,255,0.1)'
                      }}
                    >
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Features & Specs Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Features */}
              <div className="bg-white/5 rounded-2xl p-8">
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${series.accentColor}30` }}
                  >
                    <series.icon className="w-4 h-4" style={{ color: series.accentColor }} />
                  </span>
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {series.features.map((feature, i) => (
                    <motion.span
                      key={feature}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="px-4 py-2 rounded-full text-sm bg-white/10 text-gray-200 border border-white/10"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-white/5 rounded-2xl p-8">
                <h4 className="text-lg font-semibold text-white mb-6">Technical Specifications</h4>
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(series.specs).map(([key, value], i) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">{key}</p>
                      <p className="text-xl font-semibold text-white">{value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Material Compatibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 rounded-2xl p-8 mb-12"
            >
              <h4 className="text-lg font-semibold text-white mb-6 text-center">Material Compatibility (ISO Classification)</h4>
              <div className="flex flex-wrap justify-center gap-6">
                {series.materials.map((tag) => (
                  <div key={tag} className="flex flex-col items-center gap-2">
                    <MaterialTag tag={tag} size="lg" />
                    <span className="text-sm text-gray-300">{materialTags[tag]?.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: series.accentColor,
                  boxShadow: `0 10px 40px ${series.accentColor}40`
                }}
                onClick={onClose}
              >
                View Full Catalog
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
                onClick={onClose}
              >
                Request Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// Collect all images that need to be preloaded (called once, outside component)
const allImageUrls = (() => {
  const urls = []
  // Background images
  productSeries.forEach(series => {
    urls.push(series.heroImage)
    // Tool images
    series.tools.forEach(tool => {
      urls.push(tool.image)
    })
  })
  return urls
})()

// Main Component
export default function ProductHighlights() {
  const [selectedSeries, setSelectedSeries] = useState(null)

  // Preload all images
  const { imagesLoaded, loadProgress } = useImagePreloader(allImageUrls)

  return (
    <section>
      {/* Loading Screen */}
      <AnimatePresence>
        {!imagesLoaded && <LoadingScreen progress={loadProgress} />}
      </AnimatePresence>

      {/* Main Content - renders but hidden until images load */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: imagesLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Section header */}
        <div className="bg-gradient-to-b from-white to-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={imagesLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-navy-500/10 text-navy-500 rounded-full text-sm font-semibold tracking-wider uppercase mb-6"
            >
              Our Product Lines
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={imagesLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-500 mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Engineered for Excellence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={imagesLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Four specialized series designed to meet every machining challenge.
              From cost-effective solutions to ultra-premium performance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={imagesLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-2 text-gray-400"
            >
              <span className="text-sm">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center p-1"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-1 rounded-full bg-gray-400"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Parallax sections */}
        {productSeries.map((series) => (
          <TextParallaxContent
            key={series.id}
            series={series}
            onExplore={setSelectedSeries}
          />
        ))}
      </motion.div>

      {/* Detail Modal */}
      {selectedSeries && (
        <SeriesDetailModal
          series={selectedSeries}
          onClose={() => setSelectedSeries(null)}
        />
      )}
    </section>
  )
}
