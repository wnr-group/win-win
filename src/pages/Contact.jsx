import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
} from 'lucide-react'
import Button from '../components/ui/Button'
import Input, { Textarea, Select } from '../components/ui/Input'
import { supabase } from '../utils/supabase'
import { siteConfig, getFullUrl } from '../utils/siteConfig'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ["F2, Gokulam's Balaji Manor,", 'Old no: 4, New no: 6, 2nd Cross Street,', 'Lenin Nagar, Ambattur,', 'Chennai, Tamil Nadu 600053'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 73387 17209', '+91 98401 54322'],
    link: 'tel:+917338717209',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['admin@win-wintoolingsolutions.com'],
    link: 'mailto:admin@win-wintoolingsolutions.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
  },
]

const inquiryTypes = [
  { value: 'quote', label: 'Request a Quote' },
  { value: 'technical', label: 'Technical Inquiry' },
  { value: 'product', label: 'Product Information' },
  { value: 'partnership', label: 'Business Partnership' },
  { value: 'other', label: 'Other' },
]

export default function Contact({ openQuoteModal }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    inquiryType: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const { error: invokeError } = await supabase.functions.invoke('send-email', {
        body: {
          type: 'contact',
          data: formData,
        },
      })

      if (invokeError) {
        throw invokeError
      }

      setIsSuccess(true)

      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          inquiryType: '',
          message: '',
        })
      }, 3000)
    } catch (submitError) {
      if (submitError?.context) {
        try {
          const errorBody = await submitError.context.json()
          setError(errorBody?.error || 'Failed to send message. Please try again.')
          return
        } catch {
          // fall through to generic message
        }
      }

      setError(submitError?.message || 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - {siteConfig.name}</title>
        <meta
          name="description"
          content={`Get in touch with ${siteConfig.name}. Contact us for product inquiries, quotes, technical support, and partnership opportunities.`}
        />
        <link rel="canonical" href={getFullUrl('/contact')} />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-500 to-navy-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in <span className="text-green-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions about our products or need a custom solution? Our
              team is here to help you find the perfect tooling solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white relative -mt-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">
                    {info.link && i === 0 ? (
                      <a
                        href={info.link}
                        className="hover:text-green-500 transition-colors"
                      >
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-card">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll respond shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <Input
                        label="Full Name *"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        label="Email Address *"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <Input
                        label="Phone Number *"
                        name="phone"
                        type="tel"
                        placeholder="+91 73387 17209"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        label="Company Name"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                      <Input
                        label="Location *"
                        name="location"
                        placeholder="City / State / Country"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Select
                      label="Inquiry Type *"
                      name="inquiryType"
                      options={inquiryTypes}
                      placeholder="Select inquiry type"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                    />

                    <Textarea
                      label="Message *"
                      name="message"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                    />

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      loading={isSubmitting}
                      icon={<Send className="w-5 h-5" />}
                    >
                      Send Message
                    </Button>

                    {error ? (
                      <p className="text-sm text-red-600">{error}</p>
                    ) : null}
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map & Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-card h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.562362018924!2d80.14398407604514!3d13.126887711452738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526308d9305555%3A0x1094e9e4bdba9e1c!2sWin%20Win%20Tooling%20Solutions!5e0!3m2!1sen!2sin!4v1771792028451!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Win Win Tooling Solutions Location"
                />
              </div>

              {/* Quick Contact */}
              <div className="bg-navy-500 rounded-3xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">
                  Need Immediate Help?
                </h3>
                <p className="text-gray-300 mb-6">
                  For urgent inquiries, reach out to us directly via phone or
                  WhatsApp.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+917338717209"
                    className="flex items-center text-white hover:text-green-400 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Call Us</p>
                      <p className="font-semibold">+91 73387 17209</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/917338717209"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-green-400 transition-colors"
                  >
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                      <MessageCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">WhatsApp</p>
                      <p className="font-semibold">Chat with us</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* RFQ Banner */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  Request for Quote
                </h3>
                <p className="text-green-100 mb-4">
                  Looking for bulk orders or custom tooling solutions? Submit an
                  RFQ and our team will prepare a detailed quotation.
                </p>
                <Button variant="outline-white" onClick={openQuoteModal}>
                  Submit RFQ
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
