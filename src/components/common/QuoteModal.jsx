import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import Modal from '../ui/Modal'
import Button from '../ui/Button'
import Input, { Textarea } from '../ui/Input'
import { supabase } from '../../utils/supabase'

export default function QuoteModal({ isOpen, onClose, product = null }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: product?.productName || '',
    quantity: '',
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
          type: 'quote',
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
          product: '',
          quantity: '',
          message: '',
        })
        onClose()
      }, 2000)
    } catch (submitError) {
      if (submitError?.context) {
        try {
          const errorBody = await submitError.context.json()
          setError(errorBody?.error || 'Failed to send quotation request. Please try again.')
          return
        } catch {
          // fall through to generic message
        }
      }

      setError(submitError?.message || 'Failed to send quotation request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isSuccess ? null : 'Request a Quote'}
      size="lg"
    >
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Quote Request Sent!
          </h3>
          <p className="text-gray-600">
            Our team will contact you within 24 hours.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Product of Interest"
              name="product"
              placeholder="e.g., Carbide End Mill"
              value={formData.product}
              onChange={handleChange}
            />
            <Input
              label="Quantity Required"
              name="quantity"
              placeholder="e.g., 50 pcs"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>

          <Textarea
            label="Additional Requirements"
            name="message"
            placeholder="Tell us about your specific requirements, material type, dimensions, etc."
            value={formData.message}
            onChange={handleChange}
            rows={4}
          />

          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="ghost"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              loading={isSubmitting}
              icon={<Send className="w-4 h-4" />}
            >
              Submit Request
            </Button>
          </div>

          {error ? (
            <p className="text-sm text-red-600 text-right">{error}</p>
          ) : null}
        </form>
      )}
    </Modal>
  )
}
