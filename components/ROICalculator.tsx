'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Clock, 
  Calendar,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export default function ROICalculator() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    practiceSize: 'medium',
    dailyCalls: 150,
    appointmentValue: 200,
    staffSalary: 45000,
    noShowRate: 15,
  })

  const [results, setResults] = useState({
    annualSavings: 0,
    monthlySavings: 0,
    roi: 0,
    paybackPeriod: 0,
    additionalRevenue: 0,
  })

  const practiceSizes = [
    { value: 'small', label: 'Small Practice', calls: 50, staff: 2 },
    { value: 'medium', label: 'Medium Practice', calls: 150, staff: 4 },
    { value: 'large', label: 'Large Practice', calls: 300, staff: 8 },
  ]

  const timeline = [
    { week: 1, title: 'Setup & Integration', description: 'Initial configuration and calendar integration' },
    { week: 2, title: 'Training & Testing', description: 'AI training with your specific protocols' },
    { week: 3, title: 'Go Live', description: 'Full deployment and monitoring' },
    { week: 4, title: 'Optimization', description: 'Performance tuning and feedback integration' },
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: 299,
      calls: 'Up to 500/month',
      features: ['Basic appointment booking', 'Standard reminders', 'Email support'],
      bestFor: 'Small practices'
    },
    {
      name: 'Professional',
      price: 599,
      calls: 'Up to 2,000/month',
      features: ['Advanced booking', 'Multi-language support', 'Priority support', 'Analytics dashboard'],
      bestFor: 'Medium practices',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 999,
      calls: 'Unlimited calls',
      features: ['Custom integrations', 'Dedicated support', 'Advanced analytics', 'White-label options'],
      bestFor: 'Large practices'
    }
  ]

  useEffect(() => {
    calculateROI()
  }, [formData])

  const calculateROI = () => {
    const selectedSize = practiceSizes.find(size => size.value === formData.practiceSize)
    const dailyCalls = selectedSize ? selectedSize.calls : formData.dailyCalls
    const staffCount = selectedSize ? selectedSize.staff : 4

    // Calculate savings
    const annualStaffCost = staffCount * formData.staffSalary
    const staffSavings = annualStaffCost * 0.4 // 40% reduction in staff needs
    
    // Calculate additional revenue from reduced no-shows
    const currentNoShows = (dailyCalls * 365 * formData.noShowRate) / 100
    const reducedNoShows = currentNoShows * 0.3 // 30% reduction
    const additionalRevenue = reducedNoShows * formData.appointmentValue

    // Calculate total savings
    const totalAnnualSavings = staffSavings + additionalRevenue
    const monthlySavings = totalAnnualSavings / 12

    // Calculate ROI (assuming Professional tier cost)
    const annualCost = 599 * 12
    const roi = ((totalAnnualSavings - annualCost) / annualCost) * 100
    const paybackPeriod = annualCost / monthlySavings

    setResults({
      annualSavings: Math.round(totalAnnualSavings),
      monthlySavings: Math.round(monthlySavings),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      additionalRevenue: Math.round(additionalRevenue),
    })
  }

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <section id="roi-calculator" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 text-balance">
            Calculate Your{' '}
            <span className="text-gradient">ROI</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto text-balance leading-relaxed">
            See exactly how much you can save and earn with our AI voice agents. 
            Most practices see a 300%+ ROI within the first year.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">ROI Calculator</h3>
                <p className="text-gray-600 mt-1">Customize for your practice</p>
              </div>
            </div>

            {/* Practice Size */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Practice Size
              </label>
              <div className="grid grid-cols-3 gap-3">
                {practiceSizes.map((size) => (
                  <button
                    key={size.value}
                    onClick={() => handleInputChange('practiceSize', size.value)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      formData.practiceSize === size.value
                        ? 'border-primary-600 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="font-medium">{size.label}</div>
                    <div className="text-sm text-gray-500">{size.calls} calls/day</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Daily Call Volume
                </label>
                <input
                  type="number"
                  value={formData.dailyCalls}
                  onChange={(e) => handleInputChange('dailyCalls', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Appointment Value ($)
                </label>
                <input
                  type="number"
                  value={formData.appointmentValue}
                  onChange={(e) => handleInputChange('appointmentValue', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current No-Show Rate (%)
                </label>
                <input
                  type="number"
                  value={formData.noShowRate}
                  onChange={(e) => handleInputChange('noShowRate', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Annual Savings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Annual Savings</h3>
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold">${results.annualSavings.toLocaleString()}</div>
              <p className="text-primary-100 mt-2">Staff costs + Additional revenue</p>
            </motion.div>

            {/* Monthly Savings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Monthly Savings</h3>
                <DollarSign className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">${results.monthlySavings.toLocaleString()}</div>
            </motion.div>

            {/* ROI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">ROI</h3>
                <TrendingUp className="w-6 h-6 text-success-600" />
              </div>
              <div className="text-3xl font-bold text-success-600">{results.roi}%</div>
              <p className="text-gray-600 mt-2">Return on investment</p>
            </motion.div>

            {/* Payback Period */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Payback Period</h3>
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">{results.paybackPeriod} months</div>
              <p className="text-gray-600 mt-2">To break even</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Implementation Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Implementation Timeline
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.week}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{item.week}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200 transform translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Tiers */}
        <motion.div
          id="pricing"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Transparent Pricing
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-8 shadow-lg relative ${
                  tier.popular ? 'ring-2 ring-primary-600' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h4>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    ${tier.price}
                    <span className="text-lg text-gray-500 font-normal">/month</span>
                  </div>
                  <p className="text-gray-600">{tier.calls}</p>
                  <p className="text-sm text-gray-500 mt-1">Best for {tier.bestFor}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full btn-primary">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}