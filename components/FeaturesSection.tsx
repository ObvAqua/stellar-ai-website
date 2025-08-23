'use client'

import React, { useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { 
  Calendar, 
  Phone, 
  Bell, 
  Globe, 
  RefreshCw, 
  Clock,
  CheckCircle
} from 'lucide-react'

export default function FeaturesSection() {
  const [refCallback, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  // moved demo video to DemoSection component

  const features = [
    {
      icon: Calendar,
      title: '24/7 Smart Appointment Booking',
      description: 'AI handles appointment scheduling with calendar integration, available round the clock.',
      benefits: ['Calendar sync', 'Smart scheduling', 'Conflict detection', 'Instant confirmation'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Phone,
      title: 'Intelligent Patient Information Retrieval',
      description: 'Quick access to patient records, medical history, and appointment details.',
      benefits: ['HIPAA compliant', 'Instant access', 'Secure data', 'Multi-language support'],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Bell,
      title: 'Automated Appointment Reminders',
      description: 'Reduce no-shows by 30% with intelligent reminder systems.',
      benefits: ['Multi-channel', 'Smart timing', 'Confirmation tracking', 'Follow-up calls'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Serve diverse patient populations with natural language processing.',
      benefits: ['20+ languages', 'Cultural adaptation', 'Accent recognition', 'Local dialects'],
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      icon: RefreshCw,
      title: 'Automatic Follow-up Booking',
      description: 'Re-engage patients with intelligent follow-up scheduling.',
      benefits: ['Lead reactivation', 'Smart timing', 'Personalized outreach', 'Conversion tracking'],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Clock,
      title: 'After-Hours Availability',
      description: 'Never miss a patient call, even outside business hours.',
      benefits: ['24/7 coverage', 'Emergency handling', 'Message routing', 'Priority escalation'],
      color: 'text-rose-600',
      bgColor: 'bg-rose-50'
    }
  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  // Create a combined ref callback
  const combinedRef = useCallback((el: HTMLDivElement | null) => {
    if (scrollRef.current !== el) {
      (scrollRef as any).current = el;
    }
    refCallback(el);
  }, [refCallback]);

const scrollLeft = () => {
  if (scrollRef.current) {
    scrollRef.current.scrollBy({ left: -280, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (scrollRef.current) {
    scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' })
  }
}

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 text-balance">
            Trusted by{' '}
            <span className="relative inline-block">
              <span className="text-gradient">Forward-Thinking</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute left-0 -bottom-1 h-[2px] md:h-[3px] w-full origin-left rounded-full underline-gradient glow-blue"
              />
            </span>{' '}
            Practices
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto text-balance leading-relaxed">
            Our AI voice agents handle every aspect of patient communication, 
            from initial booking to follow-up care, ensuring nothing falls through the cracks.
          </p>
        </motion.div>


        {/* Features Grid */}
           <div className="relative w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] lg:w-[calc(100vw-6rem)] left-1/2 -translate-x-1/2">
           
           {/*Edge fade overlays */}
           {/* Left edge overlay */}
           <div 
           aria-hidden="true"
           className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 lg:w-40 z-20 bg-gradient-to-r from-white via-white/60 via-white/30 to-transparent edge-overlay-left"
           />
           {/* Right edge overlay */}
           <div
             aria-hidden="true"
             className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-32 lg:w-40 z-20 bg-gradient-to-l from-white via-white/60 via-white/30 to-transparent edge-overlay-right"
           />

          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Scrollable Container */}
          <motion.div
            ref={combinedRef}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 px-12 scroll-smooth"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="card p-6 group hover:shadow-2xl transition-all duration-500 border-0 flex-shrink-0 w-80"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.05 + benefitIndex * 0.03 }}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        
      </div>
    </section>
  )
}