'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Shield, Clock, Award, Star, Mic } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'ROI Calculator', href: '#roi-calculator' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Book Demo', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200/60 shadow-sm"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center h-20 lg:flex sm:hidden">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="flex flex-col ml-3">
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 ml-auto mr-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-auto">
            <motion.button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-xl"
          >
            <div className="container-padding py-6 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 5 }}
                  className="block text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-50"
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile Trust Indicators */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-600 bg-green-50 px-4 py-2 rounded-lg">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600 bg-blue-50 px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">24/7 Available</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600 bg-amber-50 px-4 py-2 rounded-lg">
                  <Star className="w-4 h-4 text-amber-600" />
                  <span className="font-medium">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
