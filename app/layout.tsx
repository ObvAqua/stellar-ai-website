import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Stellar AI - AI-Powered Voice Agents for Medical Practices',
  description: 'Transform your medical practice with AI-powered voice agents that handle appointment booking, patient information, reminders, and inquiries 24/7. Reduce staff burnout and increase revenue.',
  keywords: 'AI voice agents, medical practice automation, appointment booking, patient communication, healthcare AI, HIPAA compliant',
  authors: [{ name: 'Stellar AI' }],
  openGraph: {
    title: 'Stellar AI - AI-Powered Voice Agents for Medical Practices',
    description: 'Transform your medical practice with AI-powered voice agents that handle appointment booking, patient information, reminders, and inquiries 24/7.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stellar AI - AI-Powered Voice Agents for Medical Practices',
    description: 'Transform your medical practice with AI-powered voice agents that handle appointment booking, patient information, reminders, and inquiries 24/7.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
