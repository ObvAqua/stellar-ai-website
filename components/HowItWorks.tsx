'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Link as LinkIcon,
  Settings,
  PhoneCall,
  MessageSquare,
  ClipboardList,
  TrendingUp
} from 'lucide-react'

type Step = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  whatHappens: string
  detailsLabel?: string
  details?: string
  capabilitiesLabel?: string
  capabilities?: string
  systemUpdatesLabel?: string
  systemUpdates?: string
  tweaksLabel?: string
  tweaks?: string
  visualHint: string
}

const steps: Step[] = [
  {
    icon: LinkIcon,
    title: 'Connect your systems',
    whatHappens:
      'We securely connect to your phone line, scheduling tool, and EHR/PM via APIs.',
    detailsLabel: 'Setup details',
    details:
      'Real-time import of providers, locations, appointment types, templates, and availability.',
    visualHint: 'EHR/PM logos with a “Connected” status and a simple link icon.'
  },
  {
    icon: Settings,
    title: 'Teach it your clinic rules',
    whatHappens:
      'We configure visit types, insurance policies, intake requirements, cancellations/no-shows, and escalation paths.',
    detailsLabel: 'Setup details',
    details:
      'Upload call scripts; we convert them into dynamic playbooks with decision logic.',
    visualHint:
      'A playbook builder UI with toggles (e.g., “New patient? Yes/No,” “Insurance on file? Yes/No”).'
  },
  {
    icon: PhoneCall,
    title: 'Go live on your number',
    whatHappens:
      'The agent answers inbound calls and places outbound follow-ups/reminders on your clinic’s line.',
    detailsLabel: 'Setup details',
    details:
      'Branded greeting, multilingual options, and consent prompts as needed.',
    visualHint:
      'A phone screen showing “Incoming call → AI Agent” with your clinic name.'
  },
  
  {
    icon: TrendingUp,
    title: 'Learn and improve',
    whatHappens:
      'Weekly insights on call reasons, peak times, handle time, completion, and staff deflection.',
    tweaksLabel: 'Setup tweaks',
    tweaks: 'Adjust rules or phrasing without code; publish changes instantly.',
    visualHint: 'Trend graphs and a “Publish changes” button.'
  }
]

export default function HowItWorks() {
  return (
    <>
      {steps.map((step, idx) => {
        const even = idx % 2 === 0
        const sectionId = idx === 0 ? 'how-it-works' : `how-it-works-${idx + 1}`
        return (
          <section
            key={step.title}
            id={sectionId}
            className={`section-padding ${even ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto container-padding">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
                className="grid md:grid-cols-12 gap-8 items-start"
              >
                {/* Text content */}
                <div
                  className={`md:col-span-7 order-2 ${even ? 'md:order-1' : 'md:order-2'}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shadow-inner">
                      <step.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="text-xs font-semibold text-gray-500">Step {idx + 1}</div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <span className="font-semibold text-gray-900">What happens: </span>
                    {step.whatHappens}
                  </p>

                  {step.details && (
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <span className="font-semibold text-gray-900">{step.detailsLabel ?? 'Details'}: </span>
                      {step.details}
                    </p>
                  )}

                  {step.capabilities && (
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <span className="font-semibold text-gray-900">{step.capabilitiesLabel ?? 'Capabilities'}: </span>
                      {step.capabilities}
                    </p>
                  )}

                  {step.systemUpdates && (
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <span className="font-semibold text-gray-900">{step.systemUpdatesLabel ?? 'System updates'}: </span>
                      {step.systemUpdates}
                    </p>
                  )}

                  {step.tweaks && (
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <span className="font-semibold text-gray-900">{step.tweaksLabel ?? 'Setup tweaks'}: </span>
                      {step.tweaks}
                    </p>
                  )}
                </div>

                {/* Visual hint */}
                <div
                  className={`md:col-span-5 order-1 ${even ? 'md:order-2' : 'md:order-1'}`}
                >
                  <div className="card p-5 md:p-6 border-0">
                    <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5 h-full flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 mb-1">Suggested visual</div>
                        <p className="text-sm text-gray-600">{step.visualHint}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )
      })}
    </>
  )
}
