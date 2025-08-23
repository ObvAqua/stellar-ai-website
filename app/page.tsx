import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import DemoSection from '../components/DemoSection'
import HowItWorks from '../components/HowItWorks'
import FeaturesSection from '../components/FeaturesSection'
import ROICalculator from '../components/ROICalculator'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
  <HowItWorks />
  <DemoSection />
      <FeaturesSection />
      <ROICalculator />
      <ContactSection />
      <Footer />
    </main>
  )
} 