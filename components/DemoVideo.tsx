'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

type DemoVideoProps = {
  title?: string
  subtitle?: string
  youtubeId?: string
}

export default function DemoVideo({
  title = 'See It In Action',
  subtitle = 'Watch how our AI handles a typical patient interaction, from greeting to appointment confirmation, in under 2 minutes.',
  youtubeId = 'SOHwpaceIDw',
}: DemoVideoProps) {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-primary-50 via-primary-100 to-primary-50 rounded-3xl p-12 lg:p-16 shadow-2xl"
    >
      <div className="text-center">
        <h3 className="text-4xl font-bold text-gray-900 mb-8 text-balance">{title}</h3>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">{subtitle}</p>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="aspect-video bg-white flex items-center justify-center relative">
            {!showVideo ? (
              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-black/30 hover:bg-black/50 transition group z-10"
                aria-label="Play demo video"
              >
                <span className="flex items-center justify-center rounded-full bg-white shadow-lg w-24 h-24 border-4 border-primary-200 group-hover:scale-110 transition">
                  <Play className="w-14 h-14 text-primary-600 drop-shadow" />
                </span>
                <span className="mt-6 text-primary-700 text-2xl font-bold drop-shadow-lg">Watch Demo</span>
                <span className="mt-2 text-primary-500 text-base font-medium">2 min AI call walkthrough</span>
              </button>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeId}?rel=0&autoplay=1&controls=1`}
                title="AI Voice Agent Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-2xl border-none min-h-[320px]"
              ></iframe>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
