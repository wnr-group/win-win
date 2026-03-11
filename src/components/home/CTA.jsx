import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import Button from '../ui/Button'

export default function CTA({ openQuoteModal }) {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-green-500/10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Optimize Your
              <span className="text-green-400"> Machining Operations?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Get in touch with our technical experts today. We'll help you find
              the perfect tooling solutions for your specific requirements.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                variant="primary"
                size="lg"
                onClick={openQuoteModal}
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Request a Quote
              </Button>
              <Link to="/contact">
                <Button
                  variant="outline-white"
                  size="lg"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap gap-8">
              <a
                href="tel:+917338717209"
                className="flex items-center text-white hover:text-green-400 transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-3">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="font-semibold">+91 73387 17209</p>
                </div>
              </a>
              <a
                href="mailto:admin@win-wintoolingsolutions.com"
                className="flex items-center text-white hover:text-green-400 transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-3">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="font-semibold">admin@win-wintoolingsolutions.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right - Image/Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <img
                src="/assets/cta-image.jpg"
                alt="Win Win Tooling Solutions"
                className="w-full rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
