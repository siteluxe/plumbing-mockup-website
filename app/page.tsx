import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import WhyUsSection from '@/components/WhyUsSection'
import ServicesSection from '@/components/ServicesSection'
import ServiceAreaSection from '@/components/ServiceAreaSection'
import ReviewsSection from '@/components/ReviewsSection'
import ContactSection from '@/components/ContactSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="w-full max-w-[100vw] min-h-screen overflow-x-hidden relative flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1">
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
