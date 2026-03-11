# Client Feedback Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement 8 client feedback items across 3 phases - text updates, visual fixes, and new content.

**Architecture:** Phased approach with commits after each phase. Phase 1 modifies static data/content in About.jsx, ProductHighlights.jsx, and products.json. Phase 2 addresses Hero.jsx redesign and brand switching bug. Phase 3 adds Boehlerit brand and ETP images.

**Tech Stack:** React, Tailwind CSS, Framer Motion

**Spec Document:** `docs/superpowers/specs/2026-03-10-client-feedback-implementation-design.md`

---

## Chunk 1: Phase 1 - Text & Content Updates

### Task 1: Update About Page Capabilities Order

**Files:**
- Modify: `src/pages/About.jsx:49-57`

- [ ] **Step 1: Open About.jsx and locate capabilities array**

The array is at lines 49-57:
```javascript
const capabilities = [
  "PCD & CBN Tool Solutions",
  "Solid Carbide End Mills",
  "Indexable Cutting Tools",
  "Tool Holding Systems",
  "Tool Presetting Equipment",
  "Custom Tooling Solutions",
  "Technical Consultation",
];
```

- [ ] **Step 2: Replace capabilities array with new order**

```javascript
const capabilities = [
  "Solid Carbide",
  "Tool Holding",
  "Indexable Cutting",
  "Machine Tool",
  "PCD & CBN Tool Solutions",
  "Tool Presetting Equipment",
  "Custom Tooling Solutions",
  "Technical Consultation",
];
```

- [ ] **Step 3: Verify changes in browser**

Run: `npm run dev`
Navigate to: `/about`
Expected: Capabilities section shows new order with "Machine Tool" as 4th item

- [ ] **Step 4: Commit**

```bash
git add src/pages/About.jsx
git commit -m "feat(about): reorder capabilities and add Machine Tool"
```

---

### Task 2: Rewrite Quality Commitment Section (Remove Certifications)

**Files:**
- Modify: `src/pages/About.jsx:300-337`

- [ ] **Step 1: Locate Quality Commitment section**

Lines 300-337 contain the section with ISO 9001:2015, CE Certified badges.

- [ ] **Step 2: Replace the Quality Section with certification-free version**

Replace lines 300-337 with:

```jsx
{/* Quality Section */}
<section className="py-20 bg-white">
  <div className="container-custom">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto"
    >
      <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
        Quality Commitment
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Committed to Excellence{" "}
        <span className="text-green-500">Every Step of the Way</span>
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        Quality is at the heart of everything we do. We partner exclusively with
        world-renowned manufacturers who maintain the highest international
        standards. Every product undergoes thorough inspection before reaching
        you, backed by our 25+ years of industry expertise and unwavering
        commitment to customer satisfaction.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium">
          Rigorous Inspection
        </div>
        <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium">
          Global Brand Partners
        </div>
        <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium">
          Expert Technical Support
        </div>
        <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium">
          Customer Satisfaction
        </div>
      </div>
    </motion.div>
  </div>
</section>
```

- [ ] **Step 3: Verify changes in browser**

Navigate to: `/about`
Expected: Quality Commitment section shows new copy without ISO/CE badges

- [ ] **Step 4: Commit**

```bash
git add src/pages/About.jsx
git commit -m "fix(about): remove certification references from quality section

Client is not certified - replaced with quality-focused messaging"
```

---

### Task 3: Update ProductHighlights Series Coating Info

**Files:**
- Modify: `src/components/home/ProductHighlights.jsx:155-180` (Economy)
- Modify: `src/components/home/ProductHighlights.jsx:207-232` (Premium)

- [ ] **Step 1: Locate Economy series and update coating**

Find the economy series object (~line 155-180). Update:
- `specs.coating`: Change from `'TiSiN'` to `'ALTiSiN'`
- `features` array: Change `'TiSiN Coating'` to `'ALTiSiN Coating'`

```javascript
{
  id: 'economy',
  name: 'Economy Series',
  tagline: 'High Performance, Smart Value',
  subtitle: 'HRC 58 END MILLS',
  description: 'Designed for demanding machining applications with excellent cost-performance ratio. ALTiSiN coated tools for hardened materials up to HRC 58.',
  features: ['ALTiSiN Coating', '35° Helix', '2F & 4F Options', 'Long Neck Available'],
  materials: ['P', 'K'],
  specs: {
    hardness: 'HRC 58',
    coating: 'ALTiSiN',
    flutes: '2F / 4F',
    application: 'General Machining'
  },
  // ... rest unchanged
}
```

- [ ] **Step 2: Locate Premium series and update coating**

Find the premium series object (~line 207-232). Update:
- `specs.coating`: Change from `'ALTiSiN'` to `'ALTiXiN'`
- `features` array: Change `'ALTiSiN Coating'` to `'ALTiXiN Coating'`
- `description`: Update to mention ALTiXiN

```javascript
{
  id: 'premium',
  name: 'Premium Series',
  tagline: 'Ultimate Precision Engineering',
  subtitle: 'HRC 65 ULTRA PERFORMANCE',
  description: 'The pinnacle of cutting tool technology. ALTiXiN coated for hardened steel machining up to HRC 65 with mirror-finish surface quality.',
  features: ['ALTiXiN Coating', '35° Helix', 'Ultra-Fine Carbide', 'Mirror Finish'],
  materials: ['P', 'M', 'H', 'K', 'S'],
  specs: {
    hardness: 'HRC 65',
    coating: 'ALTiXiN',
    flutes: '2F / 4F',
    application: 'Hardened Steel'
  },
  // ... rest unchanged
}
```

- [ ] **Step 3: Verify changes in browser**

Navigate to: `/` (homepage)
Scroll to Product Highlights section
Expected:
- Economy shows "ALTiSiN" coating
- Premium shows "ALTiXiN" coating

- [ ] **Step 4: Commit**

```bash
git add src/components/home/ProductHighlights.jsx
git commit -m "fix(products): correct coating names - ALTiSiN for Economy, ALTiXiN for Premium"
```

---

### Task 4: Update Prime Series Material Compatibility in ProductHighlights

**Files:**
- Modify: `src/components/home/ProductHighlights.jsx:182-206` (Prime series)

- [ ] **Step 1: Verify Prime series materials array**

Locate the prime series object. The materials array should be `['P', 'K', 'N']`.

Current (should already be correct):
```javascript
materials: ['P', 'K', 'N'], // Steel, Cast Iron, Non-Ferrous
```

- [ ] **Step 2: Update Prime series description to match**

Update the description to explicitly mention the correct materials:

```javascript
{
  id: 'prime',
  name: 'Prime Series',
  tagline: 'Professional Grade Excellence',
  subtitle: 'HRC 55 STANDARD SERIES',
  description: 'Engineered for general machining applications in steel, cast iron, and non-ferrous materials. Available in standard, long, and extra-long configurations.',
  // ... rest unchanged
}
```

- [ ] **Step 3: Verify in browser**

Navigate to homepage, scroll to Prime Series
Expected: Shows P, K, N material tags and correct description

- [ ] **Step 4: Commit (if changes made)**

```bash
git add src/components/home/ProductHighlights.jsx
git commit -m "fix(products): update Prime series material description"
```

---

### Task 5: Update products.json Product Data

**Files:**
- Modify: `src/data/products.json`

- [ ] **Step 1: Verify Prime products have correct material compatibility**

Search for Prime products (PRIME-001, PRIME-002, PRIME-003).
Each should have:
```json
"materialCompatibility": "P - Steel / K - Cast Iron / N - Non-Ferrous"
```

Current in file shows: `"P - Steel / M - Stainless Steel / K - Cast Iron"` - needs update!

- [ ] **Step 2: Update all Prime products material compatibility**

Update PRIME-001, PRIME-002, PRIME-003:
```json
"materialCompatibility": "P - Steel / K - Cast Iron / N - Non-Ferrous"
```

- [ ] **Step 3: Verify Economy products have ALTiSiN coating**

Economy products (ECONOMY-001 through ECONOMY-008) should show:
```json
"Coating": "ALTiSiN"
```
(These appear correct based on CSV data)

- [ ] **Step 4: Verify Premium products have ALTiXiN coating**

Premium products (PREMIUM-001 through PREMIUM-007) should show:
```json
"Coating": "ALTiXiN"
```
(These appear correct based on CSV data)

- [ ] **Step 5: Run dev server and test product detail pages**

Run: `npm run dev`
Navigate to: `/products`
Click on a Prime product, verify material compatibility shows correctly

- [ ] **Step 6: Commit**

```bash
git add src/data/products.json
git commit -m "fix(data): update Prime series material compatibility to P/K/N"
```

---

### Task 6: Phase 1 Complete - Create Phase Checkpoint Commit

- [ ] **Step 1: Verify all Phase 1 changes**

Checklist:
- [ ] About page capabilities reordered with Machine Tool added
- [ ] Quality Commitment section has no certification references
- [ ] Economy series shows ALTiSiN coating on homepage
- [ ] Premium series shows ALTiXiN coating on homepage
- [ ] Prime series shows P/K/N materials on homepage
- [ ] products.json Prime products have correct material compatibility

- [ ] **Step 2: Create phase checkpoint commit (if not already committed individually)**

```bash
git add -A
git commit -m "chore: complete Phase 1 - text and content updates

- Reorder About page capabilities, add Machine Tool
- Remove certifications from Quality Commitment
- Fix coating names: ALTiSiN (Economy), ALTiXiN (Premium)
- Update Prime material compatibility to P/K/N"
```

---

## Chunk 2: Phase 2 - Visual/UI Fixes

### Task 7: Redesign Hero Section for White Background

**Files:**
- Modify: `src/components/home/Hero.jsx`

- [ ] **Step 1: Understand current Hero structure**

Current Hero (lines 40-169):
- Full-bleed background images with carousel
- Navy gradient overlay from left
- White text on dark background
- Wave SVG at bottom

Target (per client reference - school.ssms.edu.in):
- White page background
- Contained hero image (not edge-to-edge)
- Clean, light aesthetic

- [ ] **Step 2: Replace Hero component with white background design**

```jsx
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
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-green-50 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              <span className="text-green-700 text-sm font-medium">
                Trusted by 500+ Manufacturing Companies
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Premium Industrial
              <br />
              <span className="text-green-500">Tooling Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed"
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
                <li key={feature} className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
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
              <Button variant="outline" size="lg" onClick={openQuoteModal}>
                Request a Quote
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-wrap items-center gap-8"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="text-4xl font-bold text-green-500">
                    {stat.value}
                  </span>
                  <div className="border-l border-gray-300 pl-3">
                    <p className="text-gray-900 font-medium text-sm">{stat.label}</p>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="hidden md:block w-px h-8 bg-gray-200 ml-4" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Contained Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3]">
              {heroImages.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt="Industrial tooling"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Image indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImage
                      ? "bg-green-500 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Check if Button component has "outline" variant**

The current Hero uses `variant="outline-white"`. New design needs `variant="outline"`.
Check `src/components/ui/Button.jsx` for available variants.

If "outline" variant doesn't exist, use an existing variant or add inline styling:
```jsx
<button
  onClick={openQuoteModal}
  className="px-6 py-3 border-2 border-navy-500 text-navy-500 rounded-lg font-medium hover:bg-navy-50 transition"
>
  Request a Quote
</button>
```

- [ ] **Step 4: Verify changes in browser**

Run: `npm run dev`
Navigate to: `/`
Expected:
- White background
- Two-column layout (text left, image right)
- Contained rounded image carousel
- Dark text on white background
- Image indicators below carousel

- [ ] **Step 5: Test responsive behavior**

Test on mobile viewport (< 768px)
Expected: Single column, image below text

- [ ] **Step 6: Commit**

```bash
git add src/components/home/Hero.jsx
git commit -m "feat(hero): redesign with white background and contained imagery

Per client feedback - matches school.ssms.edu.in reference"
```

---

### Task 8: Fix Brand Switching Image Bug

**Files:**
- Modify: `src/components/products/ExternalBrandInfo.jsx`

- [ ] **Step 1: Analyze current implementation**

Current code (lines 11-14) already resets index on brand change:
```javascript
useEffect(() => {
  setCurrentIndex(0)
}, [brand])
```

The issue is that images don't clear visually - old images remain visible during loading.

- [ ] **Step 2: Add loading state and image clearing**

Add loading state and clear images when brand changes:

```jsx
import { useState, useEffect } from "react"
import QuoteModal from "../common/QuoteModal"

export default function ExternalBrandInfo({ brand }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState({})

  const images = brand?.carouselImages || []
  const imageCount = images.length

  // Reset state when brand changes
  useEffect(() => {
    setCurrentIndex(0)
    setIsLoading(true)
    setImagesLoaded({})
  }, [brand?.slug])

  // Preload current image
  useEffect(() => {
    if (imageCount === 0) {
      setIsLoading(false)
      return
    }

    const currentImage = images[currentIndex]
    if (imagesLoaded[currentImage]) {
      setIsLoading(false)
      return
    }

    const img = new Image()
    img.onload = () => {
      setImagesLoaded(prev => ({ ...prev, [currentImage]: true }))
      setIsLoading(false)
    }
    img.onerror = () => {
      setIsLoading(false)
    }
    img.src = currentImage
  }, [currentIndex, images, imageCount, imagesLoaded])

  // Automatic image change
  useEffect(() => {
    if (imageCount === 0 || isLoading) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageCount)
    }, 3000)

    return () => clearInterval(interval)
  }, [imageCount, isLoading])

  // Next image
  const nextSlide = () => {
    setIsLoading(true)
    setCurrentIndex((prev) => (prev + 1) % imageCount)
  }

  // Previous image
  const prevSlide = () => {
    setIsLoading(true)
    setCurrentIndex((prev) => (prev === 0 ? imageCount - 1 : prev - 1))
  }

  if (!brand) return null

  return (
    <div className="bg-white rounded-2xl p-8 shadow-card">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Brand Image */}
        <div className="flex justify-center">
          <img
            src={brand.image}
            alt={brand.name}
            className="rounded-xl shadow-md max-h-64 object-contain"
          />
        </div>

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {brand.name}
          </h2>

          <p className="text-gray-600 mb-6">
            {brand.description}
          </p>

          {brand.ctaType === "quote" ? (
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="inline-block px-6 py-3 bg-navy-500 text-white rounded-lg hover:bg-navy-600 transition"
            >
              Request Quote →
            </button>
          ) : (
            <a
              href={brand.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-navy-500 text-white rounded-lg hover:bg-navy-600 transition"
            >
              Explore More Products →
            </a>
          )}
        </div>
      </div>

      {/* IMAGE CAROUSEL */}
      {images.length > 0 && (
        <div className="mt-10">
          {/* Main Image */}
          <div className="relative bg-gray-50 rounded-xl p-8 flex items-center justify-center min-h-[280px] border border-gray-100 shadow-sm">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center">
                <div className="w-10 h-10 border-4 border-gray-200 border-t-navy-500 rounded-full animate-spin" />
                <p className="text-gray-400 text-sm mt-3">Loading...</p>
              </div>
            ) : (
              <img
                key={`${brand.slug}-${currentIndex}`}
                src={images[currentIndex]}
                alt="product"
                className="max-h-[220px] w-full object-contain transition-all duration-500 hover:scale-105"
              />
            )}

            {/* Prev */}
            <button
              onClick={prevSlide}
              disabled={isLoading}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow-md px-3 py-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              ◀
            </button>

            {/* Next */}
            <button
              onClick={nextSlide}
              disabled={isLoading}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow-md px-3 py-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              ▶
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsLoading(true)
                  setCurrentIndex(index)
                }}
                className={`border rounded-lg p-2 transition ${
                  currentIndex === index
                    ? "border-navy-500"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <img
                  src={img}
                  alt="thumbnail"
                  className="h-14 w-14 object-contain"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        product={{ productName: brand.name }}
      />
    </div>
  )
}
```

- [ ] **Step 3: Test brand switching**

Run: `npm run dev`
Navigate to: `/products`
1. Click on "Palbit" brand
2. Wait for images to load
3. Click on "Bilz" brand
4. Expected: Old images clear immediately, loading spinner shows, then new images appear

- [ ] **Step 4: Test multiple brand switches rapidly**

Click between brands quickly
Expected: No stale images visible, loading state handles rapid switches

- [ ] **Step 5: Commit**

```bash
git add src/components/products/ExternalBrandInfo.jsx
git commit -m "fix(products): clear images immediately when switching brands

Added loading state and image preloading to prevent stale images
from showing during brand transitions"
```

---

### Task 9: Phase 2 Complete - Create Phase Checkpoint

- [ ] **Step 1: Verify all Phase 2 changes**

Checklist:
- [ ] Hero section has white background with contained image carousel
- [ ] Hero is responsive (single column on mobile)
- [ ] Brand switching clears old images immediately
- [ ] Loading spinner shows during image transitions

- [ ] **Step 2: Create phase checkpoint commit**

```bash
git add -A
git commit -m "chore: complete Phase 2 - visual and UI fixes

- Redesign Hero with white background and contained imagery
- Fix brand switching image bug with loading state"
```

---

## Chunk 3: Phase 3 - New Content

### Task 10: Add Boehlerit Brand to Brand Slider

**Files:**
- Modify: `src/components/home/BrandSlider.jsx:3-50`
- Create: Download Boehlerit logo to `public/assets/brands/boehlerit.png`

- [ ] **Step 1: Download Boehlerit logo**

Visit boehlerit.com and save their logo to `public/assets/brands/boehlerit.png`
(Logo should be PNG or SVG, transparent background preferred)

- [ ] **Step 2: Add Boehlerit to brands array in BrandSlider.jsx**

Add after Speroni entry (line ~48):

```javascript
{
  name: 'Boehlerit',
  logo: '/assets/brands/boehlerit.png',
  url: 'https://www.boehlerit.com/en/',
},
```

- [ ] **Step 3: Verify in browser**

Navigate to: `/`
Expected: Boehlerit logo appears in the brand slider carousel

- [ ] **Step 4: Commit**

```bash
git add src/components/home/BrandSlider.jsx public/assets/brands/boehlerit.png
git commit -m "feat(brands): add Boehlerit to homepage brand slider"
```

---

### Task 11: Add Boehlerit Brand Page Data

**Files:**
- Modify: `src/data/products.json` (brands array)
- Create: Download Boehlerit images to `public/assets/brandimg/`

- [ ] **Step 1: Download Boehlerit product images**

Visit boehlerit.com and save 5-7 product images to:
- `public/assets/brandimg/boehlerit-tool1.jpg`
- `public/assets/brandimg/boehlerit-tool2.jpg`
- `public/assets/brandimg/boehlerit-tool3.jpg`
- `public/assets/brandimg/boehlerit-tool4.jpg`
- `public/assets/brandimg/boehlerit-tool5.jpg`

Also save a main brand image:
- `public/assets/brandimg/boehlerit-main.jpg`

- [ ] **Step 2: Add Boehlerit to brands array in products.json**

Add after the PCD entry (before closing `]`):

```json
,
{
  "name": "Boehlerit",
  "slug": "boehlerit",
  "type": "external",
  "description": "Austrian manufacturer of precision cutting tools and carbide solutions. Boehlerit specializes in high-performance indexable inserts, milling tools, and turning solutions for demanding machining applications across automotive, aerospace, and general engineering industries.",
  "image": "/assets/brandimg/boehlerit-main.jpg",
  "externalUrl": "https://www.boehlerit.com/en/",
  "productCount": 0,
  "carouselImages": [
    "/assets/brandimg/boehlerit-tool1.jpg",
    "/assets/brandimg/boehlerit-tool2.jpg",
    "/assets/brandimg/boehlerit-tool3.jpg",
    "/assets/brandimg/boehlerit-tool4.jpg",
    "/assets/brandimg/boehlerit-tool5.jpg"
  ]
}
```

- [ ] **Step 3: Verify in browser**

Navigate to: `/products?brand=boehlerit`
Expected: Boehlerit brand page shows with description, images, and "Explore More Products" button

- [ ] **Step 4: Commit**

```bash
git add src/data/products.json public/assets/brandimg/boehlerit-*
git commit -m "feat(brands): add Boehlerit brand page with product images"
```

---

### Task 12: Add More ETP Images

**Files:**
- Modify: `src/data/products.json` (ETP brand carouselImages)
- Create: Download additional ETP images to `public/assets/brandimg/`

- [ ] **Step 1: Download additional ETP images**

Visit the specified URLs and save images:
- https://www.etp.se/en/catalog/node/cnc-metalworking
- https://www.etp.se/en/catalog/node/cnc-turning-metalworking

Save to:
- `public/assets/brandimg/etp-cnc-metalworking1.jpg`
- `public/assets/brandimg/etp-cnc-metalworking2.jpg`
- `public/assets/brandimg/etp-turning1.jpg`
- `public/assets/brandimg/etp-turning2.jpg`

- [ ] **Step 2: Update ETP carouselImages in products.json**

Find ETP brand entry (line ~938-953) and update carouselImages:

```json
"carouselImages": [
  "/assets/brandimg/etpcnc.jpg",
  "/assets/brandimg/etpcncturning.jpg",
  "/assets/brandimg/etphsc.jpg",
  "/assets/brandimg/etptool4.jpg",
  "/assets/brandimg/etptool5.jpg",
  "/assets/brandimg/etptool6.jpg",
  "/assets/brandimg/etptool7.jpg",
  "/assets/brandimg/etp-cnc-metalworking1.jpg",
  "/assets/brandimg/etp-cnc-metalworking2.jpg",
  "/assets/brandimg/etp-turning1.jpg",
  "/assets/brandimg/etp-turning2.jpg"
]
```

- [ ] **Step 3: Verify in browser**

Navigate to: `/products?brand=etp`
Expected: ETP brand page shows additional images in carousel

- [ ] **Step 4: Commit**

```bash
git add src/data/products.json public/assets/brandimg/etp-*
git commit -m "feat(brands): add more ETP product images from CNC catalog"
```

---

### Task 13: Final Verification and Completion

- [ ] **Step 1: Run full verification checklist**

| Item | Location | Expected |
|------|----------|----------|
| Capabilities order | /about | Solid Carbide, Tool Holding, Indexable Cutting, Machine Tool, then others |
| Quality section | /about | No ISO/CE badges, quality-focused messaging |
| Economy coating | / (homepage) | Shows "ALTiSiN" |
| Premium coating | / (homepage) | Shows "ALTiXiN" |
| Prime materials | / (homepage) | Shows P, K, N tags |
| Prime product data | /products (Prime product detail) | "P - Steel / K - Cast Iron / N - Non-Ferrous" |
| Hero design | / (homepage) | White background, contained image |
| Brand switching | /products | No stale images, loading state works |
| Boehlerit slider | / (homepage) | Logo in brand slider |
| Boehlerit page | /products?brand=boehlerit | Brand page with images |
| ETP images | /products?brand=etp | Additional images in carousel |

- [ ] **Step 2: Test on mobile viewport**

Check all pages on mobile viewport (375px width)
Expected: All layouts responsive, no overflow issues

- [ ] **Step 3: Create final completion commit**

```bash
git add -A
git commit -m "chore: complete all client feedback implementation

Phase 1: Text & content updates (About, ProductHighlights, products.json)
Phase 2: Visual fixes (Hero redesign, brand switching bug)
Phase 3: New content (Boehlerit brand, ETP images)"
```

- [ ] **Step 4: Report completion**

All 8 feedback items implemented:
1. ✅ Hero background - white with contained imagery
2. ✅ Boehlerit brand - added to slider and products page
3. ✅ ETP images - additional images from CNC catalog
4. ✅ Brand switching bug - fixed with loading state
5. ✅ About capabilities - reordered with Machine Tool
6. ✅ Quality commitment - removed certifications
7. ✅ Prime materials - P/K/N compatibility
8. ✅ Coating names - ALTiSiN (Economy), ALTiXiN (Premium)

---

## Notes

- Image downloads (Tasks 10-12) require manual action to save images from external websites
- Optimize all downloaded images to WebP format before committing
- Test thoroughly on both desktop and mobile before marking complete
- If Button component lacks "outline" variant, adjust Task 7 Step 3 accordingly
