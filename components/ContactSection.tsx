'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  Shield,
  Star,
  Award
} from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceName: '',
    practiceSize: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', phone: '' };
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = 'Enter a valid email address.';
      valid = false;
    }
    if (formData.phone && !formData.phone.match(/^[\d\s\-()+]{7,}$/)) {
      newErrors.phone = 'Enter a valid phone number.';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const practiceSizes = [
    'Small (1-3 providers)',
    'Medium (4-8 providers)',
    'Large (9+ providers)',
  ]

  const benefits = [
    'Free 30-minute consultation',
    'Custom ROI analysis',
    'Live AI demonstration',
    'Implementation roadmap',
    'No commitment required'
  ]

  const trustIndicators = [
    { icon: Shield, text: 'HIPAA Compliant', color: 'text-green-600' },
    { icon: Star, text: '4.9/5 Rating', color: 'text-amber-600' },
    { icon: Award, text: 'SOC 2 Certified', color: 'text-purple-600' },
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 text-balance">
            Ready to{' '}
            <span className="text-gradient">Transform</span> Your Practice?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto text-balance leading-relaxed">
            Book a free consultation and see how our AI voice agents can reduce your 
            administrative burden while improving patient satisfaction.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-100"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Book Your Free Demo</h3>
                <p className="text-gray-600 mt-1">Get started in under 2 minutes</p>
              </div>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      First Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 text-lg"
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      aria-describedby="name-error"
                    />
                    {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 text-lg"
                      placeholder="your@email.com"
                      aria-invalid={!!errors.email}
                      aria-describedby="email-error"
                    />
                    {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 text-lg"
                      placeholder="(555) 123-4567"
                      aria-invalid={!!errors.phone}
                      aria-describedby="phone-error"
                    />
                    {errors.phone && <p id="phone-error" className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="practiceName" className="block text-sm font-semibold text-gray-700 mb-3">
                      Practice Name
                    </label>
                    <input
                      id="practiceName"
                      type="text"
                      value={formData.practiceName}
                      onChange={(e) => handleInputChange('practiceName', e.target.value)}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 text-lg"
                      placeholder="Your Practice Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="practiceSize" className="block text-sm font-semibold text-gray-700 mb-3">
                    Practice Size
                  </label>
                  <select
                    id="practiceSize"
                    value={formData.practiceSize}
                    onChange={(e) => handleInputChange('practiceSize', e.target.value)}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 text-lg"
                  >
                    <option value="">Select practice size</option>
                    {practiceSizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 text-lg resize-none"
                    placeholder="Tell us about your current challenges and goals..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary text-lg py-5 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Booking Demo...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-3">
                      <span>Book Free Demo</span>
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </motion.button>

                {/* Trust Indicators */}
                <div className="flex justify-center items-center space-x-6 pt-4">
                  {trustIndicators.map((indicator, index) => (
                    <motion.div
                      key={indicator.text}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2 text-sm text-gray-600"
                    >
                      <indicator.icon className={`w-4 h-4 ${indicator.color}`} />
                      <span className="font-medium">{indicator.text}</span>
                    </motion.div>
                  ))}
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-success-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="w-10 h-10 text-success-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Demo Booked Successfully!
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  We've received your request and will contact you within 24 hours 
                  to schedule your personalized demo.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-secondary"
                >
                  Book Another Demo
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Benefits */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                What You'll Get
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-8 h-8 bg-success-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-success-600" />
                    </div>
                    <span className="text-gray-700 text-lg font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">Phone</div>
                    <div className="text-gray-600">(555) 123-4567</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">Email</div>
                    <div className="text-gray-600">hello@stellar-ai.com</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">Business Hours</div>
                    <div className="text-gray-600">Mon-Fri: 9AM-6PM EST</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200"
            >
              <h4 className="font-bold text-gray-900 text-xl mb-6">Why Choose Stellar AI?</h4>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0" />
                  <span className="font-medium">HIPAA compliant and secure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0" />
                  <span className="font-medium">Proven track record with 500+ practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0" />
                  <span className="font-medium">24/7 customer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0" />
                  <span className="font-medium">30-day money-back guarantee</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
