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
  { value: "100+", label: "Happy Clients", sublabel: "Across India" },
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
              <button
                onClick={openQuoteModal}
                className="px-6 py-3 border-2 border-navy-500 text-navy-500 rounded-lg font-medium hover:bg-navy-50 transition"
              >
                Request a Quote
              </button>
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
