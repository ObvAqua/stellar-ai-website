'use client'

import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  Clock, 
  Users,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Star,
  Award,
  CheckCircle
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'ROI Calculator', href: '#roi-calculator' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Demo', href: '#contact' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Partners', href: '/partners' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Contact Support', href: '#contact' },
      { name: 'Status', href: '/status' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'HIPAA Compliance', href: '/hipaa' },
      { name: 'Security', href: '/security' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/' },
  ]

  const trustIndicators = [
    { icon: Shield, text: 'HIPAA Compliant', color: 'text-green-400' },
    { icon: Clock, text: '24/7 Available', color: 'text-blue-400' },
    { icon: Users, text: '500+ Practices Trust Us', color: 'text-purple-400' },
    { icon: Star, text: '4.9/5 Rating', color: 'text-amber-400' },
    { icon: Award, text: 'SOC 2 Type II', color: 'text-indigo-400' },
    { icon: CheckCircle, text: '99.9% Uptime', color: 'text-emerald-400' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto container-padding py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">Stellar AI</span>
                  <span className="text-sm text-gray-400 font-medium">Healthcare Solutions</span>
                </div>
              </div>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
                AI-powered voice agents that transform medical practices by handling 
                appointment booking, patient communication, and administrative tasks 24/7.
              </p>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4">
                {trustIndicators.map((indicator, index) => (
                  <motion.div
                    key={indicator.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-sm text-gray-300"
                  >
                    <indicator.icon className={`w-4 h-4 ${indicator.color}`} />
                    <span className="font-medium">{indicator.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-white text-lg mb-6">Product</h3>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-white text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-white text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-white text-lg mb-6">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-bold text-white text-xl mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-200">
                  <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-gray-300">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-200">
                  <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-300">hello@stellar-ai.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-200">
                  <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Address</div>
                    <div className="text-gray-300">123 AI Street, Tech City, TC 12345</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white text-xl mb-8">Follow Us</h3>
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-14 h-14 bg-gray-800 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-gray-800/50 rounded-2xl p-6">
                <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
                <p className="text-gray-300 mb-4 text-sm">
                  Get the latest updates on AI healthcare solutions.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Stellar AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-2">
                <span className="text-red-400">❤️</span>
                <span>Made for healthcare</span>
              </span>
              <span>•</span>
              <span>HIPAA Compliant</span>
              <span>•</span>
              <span>SOC 2 Type II Certified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}