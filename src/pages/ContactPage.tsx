import { useEffect, useState } from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import ContactSection from '../components/ContactSection'
import MapSection from '../components/MapSection'
import Footer from '../components/Footer'

export default function ContactPage() {
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
      <div id="site-header" className="fixed top-0 left-0 right-0 z-50 w-full">
        <TopBar />
        <Navbar isStandalone />
      </div>

      <main
        className="flex-1"
        style={{ paddingTop: headerHeight > 0 ? headerHeight : 88 }}
      >
        <ContactSection />
        <MapSection />
      </main>
      <Footer isStandalone />
    </div>
  )
}
