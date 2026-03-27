import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ToolingSolutions() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            Complete Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Total Tooling <span className="text-green-500">Ecosystem</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From presetting technology to cutting tools and shrink fit solutions -
            we provide an integrated approach to optimize your manufacturing process.
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-white p-4 md:p-6">
            <img
              src="/assets/tooling_solutions_overview.png"
              alt="Win Win Tooling Solutions - Complete tooling ecosystem featuring Presetting Technology, Cutting Tools, Integrated Tool Management, and Shrink Fit Technology"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Floating accent elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-500/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-navy-500/20 rounded-full blur-2xl" />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy-500 text-white font-semibold rounded-xl hover:bg-navy-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore Our Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
