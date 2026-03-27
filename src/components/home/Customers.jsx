import { motion } from 'framer-motion'

const customers = [
  {
    name: 'Brakes India PVT Ltd',
    logo: '/assets/customers/brakes-india.jpg',
  },
  {
    name: 'Microtech Engineers',
    logo: '/assets/customers/microtech-engineers.jpg',
  },
  {
    name: 'Sri Sivananda Plast Technology',
    logo: '/assets/customers/sri-sivananda-plast.jpg',
  },
  {
    name: 'Radiant Design',
    logo: '/assets/customers/radiant-design.jpg',
  },
  {
    name: 'TTK Healthcare',
    logo: '/assets/customers/ttk-healthcare.jpg',
  },
  {
    name: 'Gesco Healthcare Pvt Ltd',
    logo: '/assets/customers/gesco-healthcare.jpg',
  },
  {
    name: 'RBC Engineering',
    logo: '/assets/customers/rbc-engineering.jpg',
  },
  {
    name: 'Kun Aerospace',
    logo: '/assets/customers/kun-aerospace.jpg',
  },
  {
    name: 'CKB Preciway Engineering Pvt Ltd',
    logo: '/assets/customers/ckb-preciway.jpg',
  },
  {
    name: 'HP Valves & Fittings India Pvt Ltd',
    logo: '/assets/customers/hp-valves.jpg',
  },
  {
    name: 'Chennai Forge Products Private Limited',
    logo: '/assets/customers/chennai-forge.jpg',
  },
  {
    name: 'Reammac Precision Tools',
    logo: '/assets/customers/reammac.jpg',
  },
  {
    name: 'Microne Industries',
    logo: '/assets/customers/microne-industries.jpg',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Customers() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-500">Customers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proud to partner with leading manufacturers across India who trust us
            with their precision tooling needs.
          </p>
        </motion.div>

        {/* Customer Logos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {customers.map((customer) => (
            <motion.div
              key={customer.name}
              variants={itemVariants}
              className="group bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col items-center justify-center aspect-square"
            >
              <div className="w-full h-28 flex items-center justify-center mb-3">
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-center text-gray-500 group-hover:text-gray-700 transition-colors font-medium line-clamp-2">
                {customer.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-navy-500 to-navy-600 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-300 text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">12+</div>
              <div className="text-gray-300 text-sm">Global Brands</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-gray-300 text-sm">Products Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
