'use client'

import React from 'react'
import { Zap, Shield, Users, Star } from 'lucide-react'

export default function TrustIndicators() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
      <div className="flex items-center space-x-3 text-lg text-gray-700 bg-white/80 px-6 py-3 rounded-full shadow-lg">
        <Shield className="w-5 h-5 text-green-600" />
        <span className="font-semibold">HIPAA Compliant</span>
      </div>
      <div className="flex items-center space-x-3 text-lg text-gray-700 bg-white/80 px-6 py-3 rounded-full shadow-lg">
        <Zap className="w-5 h-5 text-blue-600" />
        <span className="font-semibold">Real-time Processing</span>
      </div>
      <div className="flex items-center space-x-3 text-lg text-gray-700 bg-white/80 px-6 py-3 rounded-full shadow-lg">
        <Users className="w-5 h-5 text-purple-600" />
        <span className="font-semibold">Medical Partnerships</span>
      </div>
      <div className="flex items-center space-x-3 text-lg text-gray-700 bg-white/80 px-6 py-3 rounded-full shadow-lg">
        <Star className="w-5 h-5 text-amber-600" />
        <span className="font-semibold">4.9/5 Rating</span>
      </div>
    </div>
  )
}
