import { motion } from 'framer-motion'

export default function PalbitBrandInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-8 shadow-card"
    >
      <div className="text-center mb-6">
        <img
          src="/assets/brands/palbit.svg"
          alt="Palbit Logo"
          className="h-16 mx-auto mb-4"
        />

        <p className="text-gray-600 max-w-2xl mx-auto">
          Palbit is a global manufacturer of high-performance cutting tools and
          wear parts. With a strong focus on innovation and precision
          engineering, Palbit delivers reliable machining solutions for
          industrial applications worldwide.
        </p>
      </div>

      {/* Brand Images */}
      <div className="flex justify-center mb-8">
        <img
          src="/assets/brands/Tool2.png"
          alt="Palbit Manufacturing"
          className="rounded-xl shadow-md"
        />
      </div>

      {/* Explore Button */}
      <div className="text-center">
        <a
          href="https://www.palbit.pt/en/products/cutting"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-navy-500 text-white font-semibold rounded-lg hover:bg-navy-600 transition"
        >
          Explore More Products
        </a>
      </div>
    </motion.div>
  );
}