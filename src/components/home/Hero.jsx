import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Button from "../ui/Button";
import { useState, useEffect } from "react";

const features = [
  "Premium International Brands",
  "Custom Tooling Solutions",
  "Technical Support",
];

const stats = [
  { value: "12+", label: "Global Brands", sublabel: "World-class partners" },
  { value: "15+", label: "Years Experience", sublabel: "Industry expertise" },
  { value: "500+", label: "Happy Clients", sublabel: "Across India" },
];


const heroImages = [
  "/assets/hero/hero-img1.webp",
  "/assets/hero/hero-img2.webp",
  "/assets/hero/hero-img3.webp",
  "/assets/hero/hero-img4.webp",
  "/assets/hero/hero-img5.webp",
  "/assets/hero/hero-img6.webp",
];

export default function Hero({ openQuoteModal }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image Carousel */}
      {heroImages.map((img, index) => (
        <img
          key={img}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Gradient Overlay - darker on left, transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-500 via-navy-500/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 pt-12 pb-28 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mr-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            <span className="text-white text-sm font-medium">
              Trusted by 500+ Manufacturing Companies
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Premium Industrial
            <br />
            <span className="text-white font-extrabold px-3 py-1 rounded-lg bg-white/5 shadow-[0_4px_20px_rgba(255,255,255,0.15)]">
              Tooling Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
          >
            Your trusted partner for world-class cutting tools, precision
            equipment, and custom machining solutions. Quality you can rely on,
            delivered on time.
          </motion.p>

          {/* Features */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {features.map((feature) => (
              <li key={feature} className="flex items-center text-white">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-sm md:text-base">{feature}</span>
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/products">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Explore Products
              </Button>
            </Link>
            <Button variant="outline-white" size="lg" onClick={openQuoteModal}>
              Request a Quote
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center gap-8"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span className="text-4xl font-bold text-green-400">
                {stat.value}
              </span>
              <div className="border-l border-white/30 pl-3">
                <p className="text-white font-medium text-sm">{stat.label}</p>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-8 bg-white/20 ml-4" />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
