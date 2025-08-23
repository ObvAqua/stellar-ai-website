
'use client'

import React from 'react'
import DemoVideo from './DemoVideo'
import TrustIndicators from './TrustIndicators'

export default function DemoSection() {
  return (
    <section id="demo" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <DemoVideo />
        <TrustIndicators />
      </div>
    </section>
  )
}



