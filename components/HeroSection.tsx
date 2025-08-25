'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Play, Users, TrendingUp, CheckCircle, Clock, Shield, Star } from 'lucide-react'

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Users, value: 2300, suffix: '+', label: 'Calls Handled Daily', color: 'text-blue-600' },
    { icon: TrendingUp, value: 50, suffix: '%', label: 'Reduction in No-Shows', color: 'text-green-600' },
    { icon: CheckCircle, value: 60, suffix: '%', label: 'Less Staff Turnover', color: 'text-purple-600' },
    { icon: Clock, value: 24, suffix: '/7', label: 'Availability', color: 'text-amber-600' },
  ]

  return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -top-32 -right-32 w-72 h-72 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full opacity-10 blur-2xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-32 -left-32 w-[380px] h-[380px] bg-gradient-to-br from-primary-300 to-primary-400 rounded-full opacity-8 blur-2xl"
        />
        <motion.div
          animate={{ 
            rotate: 180,
            scale: [1, 1.15, 1],
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-gradient-to-br from-primary-100 to-primary-200 rounded-full opacity-5 blur-2xl"
        />
      </div>

    <div className="relative z-10 max-w-7xl mx-auto pt-32 sm:pt-20 md:pt-[26px] pb-16 sm:pb-8 container-padding flex flex-col">
  <div className="text-center max-w-full mx-auto flex flex-col">
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-3 mb-8"
          >
           
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-center sm:text-left"
          >
            Say hello to <span className="text-gradient">Stellar</span>
            <br />
            Your new receptionist copilot
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-10 max-w-[770px] leading-relaxed text-balance w-auto self-center sm:self-start text-center sm:text-left"
          >
            Stellar handles 60% of your admin workload and improves your clinic’s functionality - save time to focus on what matters most
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start mb-9"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-base sm:text-base px-6 sm:px-7 py-3 sm:py-4 shadow-lg rounded-lg w-3/4 sm:w-auto"
            >
              Book a Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-base sm:text-base flex items-center justify-center shadow-md rounded-lg px-5 sm:px-6 py-3 sm:py-4 w-3/4 sm:w-auto"
            >
              <Play className="w-5 h-5 flex flex-col justify-center items-center" />
              <span className="ml-2.5">Watch Now</span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <div className="flex flex-row flex-wrap gap-2 sm:gap-3 relative h-auto pb-[30px] mt-5 mx-auto justify-center sm:justify-start">
            <div className="flex items-center bg-green-50 rounded-full text-gray-600 text-xs font-medium leading-4 px-2 sm:px-3 py-1 sm:py-1.5">
              <Shield className="w-3 h-3 text-green-600 mr-2" />
              <span className="font-medium">HIPAA Compliant</span>
            </div>
            <div className="flex items-center bg-blue-50 rounded-full text-gray-600 text-xs font-medium leading-4 gap-2 px-2 sm:px-3 py-1 sm:py-1.5">
              <Clock className="w-3 h-3 text-blue-600" />
              <span className="font-medium">24/7 Available</span>
            </div>
            <div className="flex items-center bg-amber-50 rounded-full text-gray-600 text-xs font-medium leading-4 gap-1 px-2 sm:px-3 py-1 sm:py-1.5">
              <Star className="w-3 h-3 text-amber-600" />
              <span className="font-medium">4.9/5 Rating</span>
            </div>
          </div>

          {/* Statistics */}
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mb-14 mx-auto px-4 sm:px-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
        className="text-center group"
              >
        <div className="flex justify-center mb-3">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 ${stat.color} bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                  </div>
                </div>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1.5">
                  {inView && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      delay={index * 0.2}
                    />
                  )}
                  {stat.suffix}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium text-center">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
        
        </div>
      </div>
    </section>
  )
}
