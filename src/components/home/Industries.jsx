import { motion } from 'framer-motion'
import {
  Car,
  Plane,
  Cpu,
  Cog,
  Wrench,
  Factory,
  Zap,
  Ship,
} from 'lucide-react'

const industries = [
  {
    icon: Car,
    name: 'Automotive',
    description: 'Engine components, chassis parts, transmission systems',
  },
  {
    icon: Plane,
    name: 'Aerospace',
    description: 'Turbine blades, structural components, precision parts',
  },
  {
    icon: Cpu,
    name: 'Electronics',
    description: 'Connectors, heat sinks, enclosures, micro components',
  },
  {
    icon: Cog,
    name: 'General Engineering',
    description: 'Shafts, gears, housings, custom machined parts',
  },
  {
    icon: Factory,
    name: 'Die & Mould',
    description: 'Injection moulds, stamping dies, precision tools',
  },
  {
    icon: Zap,
    name: 'Energy',
    description: 'Turbine components, valve parts, pumps and fittings',
  },
  {
    icon: Ship,
    name: 'Marine',
    description: 'Propellers, shaft components, valve systems',
  },
  {
    icon: Wrench,
    name: 'Tool & Die',
    description: 'Precision tools, jigs, fixtures, gauges',
  },
]

export default function Industries() {
  return (
    <section className="section-padding bg-navy-500 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Powering <span className="text-green-400">Every Industry</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From automotive to aerospace, our tooling solutions drive precision
            and efficiency across diverse manufacturing sectors.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                  <industry.icon className="w-7 h-7 text-green-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
