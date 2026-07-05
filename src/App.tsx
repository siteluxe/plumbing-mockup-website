import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WhyUsSection from './components/WhyUsSection'
import ServicesSection from './components/ServicesSection'
import ServiceAreaSection from './components/ServiceAreaSection'
import ReviewsSection from './components/ReviewsSection'
import ContactSection from './components/ContactSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

export default function App() {
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const measure = () => {
      const el = document.getElementById('site-header')
      if (el) setHeaderHeight(el.offsetHeight)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <div className="w-full max-w-[100vw] min-h-screen overflow-x-hidden relative flex flex-col">
      {/* Fixed header: TopBar + Navbar stacked */}
      <div id="site-header" className="fixed top-0 left-0 right-0 z-50 w-full">
        <TopBar />
        <Navbar />
      </div>

      {/* Offset main content by header height so nothing hides behind it */}
      <main
        className="flex-1"
        style={{ paddingTop: headerHeight > 0 ? headerHeight : 88 }}
      >
        <HeroSection />
        <WhyUsSection />
        <ServicesSection />
        <ServiceAreaSection />
        <ReviewsSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
