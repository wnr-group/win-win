import { motion } from 'framer-motion'
import {
  Shield,
  Truck,
  Award,
  HeadphonesIcon,
  Settings,
  TrendingUp,
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'Our products ensure world quality standards to meet customer requirements, ensuring consistency of performance in machining and delivering the best results.',
    color: 'green',
  },
  {
    icon: Truck,
    title: 'On-Time Delivery',
    description:
      'We understand production schedules. Count on us for reliable, punctual delivery every time.',
    color: 'navy',
  },
  {
    icon: Award,
    title: 'Premium Brands',
    description:
      'Access to world-leading tooling brands with proven track records in Total Tooling Solutions machining.',
    color: 'green',
  },
  {
    icon: HeadphonesIcon,
    title: 'Technical Support',
    description:
      'Expert guidance from our engineering team to help you select the right tools for your applications.',
    color: 'navy',
  },
  {
    icon: Settings,
    title: 'Custom Solutions',
    description:
      'Tailored tooling solutions designed to meet your specific machining requirements and challenges.',
    color: 'green',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Pricing',
    description:
      'Get the best value without compromising on quality. Volume discounts available for bulk orders.',
    color: 'navy',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted Partner in
              <span className="text-green-500"> Total Tooling Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 25 years of industry experience, we've built our
              reputation on quality, reliability, and exceptional customer
              service. Our commitment to excellence drives everything we do.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-navy-500 mb-1">100+</div>
                <div className="text-gray-600">Happy Clients</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-navy-500 mb-1">12+</div>
                <div className="text-gray-600">Global Brands</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-navy-500 mb-1">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-card-hover transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    feature.color === 'green'
                      ? 'bg-green-100 text-green-500 group-hover:bg-green-500 group-hover:text-white'
                      : 'bg-navy-100 text-navy-500 group-hover:bg-navy-500 group-hover:text-white'
                  }`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}