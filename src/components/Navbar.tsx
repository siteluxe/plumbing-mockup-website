import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
]

const standaloneNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact Us', href: '/#contact' },
]

export default function Navbar({ isStandalone = false }: { isStandalone?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (isStandalone) return
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.querySelector(href)
    if (el) {
      const header = document.getElementById('site-header')
      const offset = header ? header.offsetHeight : 88
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const handleBookNow = () => {
    setMobileOpen(false)
    if (isStandalone) {
      window.location.href = '/#contact'
      return
    }
    const el = document.querySelector('#contact')
    if (el) {
      const header = document.getElementById('site-header')
      const offset = header ? header.offsetHeight : 88
      const top = el.getBoundingClientRect().top + window.scrollY - offset - 8
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const links = isStandalone ? standaloneNavLinks : navLinks

  return (
    <header
      className={`w-full bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — scrolls to absolute top */}
          <a
            href={isStandalone ? '/' : '#home'}
            onClick={(e) => { if (!isStandalone) { e.preventDefault(); handleNavClick('#home') } }}
            className="flex-shrink-0 flex items-center gap-2"
            aria-label="Vanguard Plumbing home"
          >
            <img
              src="/images/vanguard-logo.png"
              alt="Vanguard Plumbing logo"
              className="w-14 h-14 object-contain"
            />
            <div className="leading-tight">
              <span className="block text-[#0f2044] font-black text-lg tracking-tight uppercase leading-none">
                VANGUARD
              </span>
              <span className="block text-[#E67527] font-black text-lg tracking-tight uppercase leading-none">
                PLUMBING
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { if (!isStandalone) { e.preventDefault(); handleNavClick(link.href) } }}
                className="text-[#0f2044] font-semibold text-sm tracking-wide uppercase hover:text-[#E67527] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:5554082930"
              className="flex items-center gap-2 text-[#0f2044] font-bold text-sm hover:text-[#E67527] transition-colors"
              aria-label="Call (555) 408-2930"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              (555) 408-2930
            </a>
            <button
              onClick={handleBookNow}
              className="bg-[#E67527] text-white font-bold uppercase tracking-widest text-sm px-6 py-3 rounded-sm
                shadow-[0_0_12px_rgba(230,117,39,0.4)] hover:bg-[#7a3010]
                hover:shadow-[0_0_22px_rgba(230,117,39,0.65)] hover:-translate-y-0.5
                active:translate-y-0 transition-all duration-200"
              aria-label="Book a plumbing appointment"
            >
              Book Now
            </button>
          </div>

          {/* Mobile: Book Now + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleBookNow}
              className="bg-[#E67527] text-white font-bold uppercase tracking-wider text-xs px-4 py-2.5 rounded-sm
                shadow-[0_0_10px_rgba(230,117,39,0.35)] hover:bg-[#7a3010]
                hover:shadow-[0_0_18px_rgba(230,117,39,0.6)] hover:-translate-y-0.5
                active:translate-y-0 transition-all duration-200"
              aria-label="Book now"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="border border-[#0f2044] rounded-sm p-2 text-[#0f2044] hover:bg-gray-100 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { if (!isStandalone) { e.preventDefault(); handleNavClick(link.href) } }}
                className="text-[#0f2044] font-semibold text-base py-3 px-2 border-b border-gray-100 uppercase tracking-wide hover:text-[#E67527] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:5554082930"
              className="flex items-center gap-2 text-[#0f2044] font-bold text-base py-3 px-2 hover:text-[#E67527] transition-colors"
              aria-label="Call (555) 408-2930"
              onClick={() => setMobileOpen(false)}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              (555) 408-2930
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
