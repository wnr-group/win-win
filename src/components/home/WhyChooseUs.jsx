import { motion } from 'framer-motion'
import {
  Shield,
  Truck,
  Award,
  HeadphonesIcon,
  Settings,
  TrendingUp,
  Zap,
  Users,
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    color: 'green',
  },
  {
    icon: Zap,
    title: 'Advanced Technology',
    color: 'navy',
  },
  {
    icon: Users,
    title: 'Expert Engineers',
    color: 'green',
  },
  {
    icon: HeadphonesIcon,
    title: 'Technical Support',
    color: 'navy',
  },
  {
    icon: Truck,
    title: 'On-Time Delivery',
    color: 'green',
  },
  {
    icon: Settings,
    title: 'Custom Solutions',
    color: 'navy',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Pricing',
    color: 'green',
  },
  {
    icon: Award,
    title: '25+ Years Experience',
    color: 'navy',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Your Trusted Partner in{' '}
            <span className="text-green-500">Total Tooling Solutions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left - Image with overlay stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/assets/hero/hero-img1.webp"
                alt="Win Win Tooling Solutions"
                className="w-full h-[400px] object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-600/90 via-navy-600/40 to-transparent" />

              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-white">100+</div>
                    <div className="text-xs text-gray-300">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-white">12+</div>
                    <div className="text-xs text-gray-300">Global Brands</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-white">25+</div>
                    <div className="text-xs text-gray-300">Years</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-2xl -z-10" />
          </motion.div>

          {/* Right - Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    feature.color === 'green'
                      ? 'bg-green-100 text-green-500 group-hover:bg-green-500 group-hover:text-white'
                      : 'bg-navy-100 text-navy-500 group-hover:bg-navy-500 group-hover:text-white'
                  }`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
