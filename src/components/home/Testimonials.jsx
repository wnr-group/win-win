import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Production Manager',
    company: 'Precision Auto Components Pvt. Ltd.',
    image: null,
    rating: 5,
    text: "Win Win Tooling Solutions has transformed our machining operations. Their PCD tools have increased our productivity by 40% while reducing tool changeover time significantly. The technical support team is always responsive and knowledgeable.",
  },
  {
    id: 2,
    name: 'Suresh Patel',
    role: 'Head of Operations',
    company: 'Advanced Manufacturing Systems',
    image: null,
    rating: 5,
    text: "We've been working with Win Win for over 5 years now. Their commitment to quality and on-time delivery is unmatched. The Palbit carbide tools they supply consistently outperform our expectations.",
  },
  {
    id: 3,
    name: 'Anil Sharma',
    role: 'Technical Director',
    company: 'Aerospace Components India',
    image: null,
    rating: 5,
    text: "The precision and quality of tools from Win Win have helped us meet the stringent requirements of aerospace manufacturing. Their custom tooling solutions are exactly what we needed for our specialized applications.",
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'Procurement Head',
    company: 'Premier Die & Mould Works',
    image: null,
    rating: 5,
    text: "Exceptional service and product quality. The HANS micro end mills have been game-changers for our precision mould making. Win Win truly understands the needs of the die and mould industry.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
             Our <span className="text-green-500">Customers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from manufacturing leaders who
            trust us with their tooling needs.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-card"
            >
              {/* Quote icon */}
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-8">
                <Quote className="w-8 h-8 text-green-500" />
              </div>

              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-14 h-14 bg-navy-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-green-500 text-sm font-medium">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center text-gray-600 hover:text-navy-500 hover:shadow-card-hover transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-green-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center text-gray-600 hover:text-navy-500 hover:shadow-card-hover transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
