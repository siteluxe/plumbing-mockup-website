'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleBookNow = () => {
    setMobileOpen(false)
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`w-full bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="flex-shrink-0 flex items-center gap-2"
            aria-label="Vanguard Plumbing home"
          >
            <div className="relative w-14 h-14">
              <Image
                src="/images/vanguard-logo.png"
                alt="Vanguard Plumbing logo"
                fill
                className="object-contain"
                sizes="56px"
              />
            </div>
            <div className="leading-tight">
              <span className="block text-[#0f2044] font-black text-lg tracking-tight uppercase leading-none">
                VANGUARD
              </span>
              <span className="block text-[#c8102e] font-black text-lg tracking-tight uppercase leading-none">
                PLUMBING
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-[#0f2044] font-semibold text-sm tracking-wide uppercase hover:text-[#c8102e] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:5554082930"
              className="flex items-center gap-2 text-[#0f2044] font-bold text-sm hover:text-[#c8102e] transition-colors"
              aria-label="Call (555) 408-2930"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              (555) 408-2930
            </a>
            <button
              onClick={handleBookNow}
              className="bg-[#c8102e] text-white font-bold uppercase tracking-widest text-sm px-6 py-3 rounded-sm hover:bg-[#a00e25] hover:shadow-[0_0_20px_rgba(200,16,46,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-[0_0_12px_rgba(200,16,46,0.35)]"
              aria-label="Book a plumbing appointment"
            >
              Book Now
            </button>
          </div>

          {/* Mobile: Book Now + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleBookNow}
              className="bg-[#c8102e] text-white font-bold uppercase tracking-wider text-xs px-4 py-2.5 rounded-sm hover:bg-[#a00e25] hover:shadow-[0_0_18px_rgba(200,16,46,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-[0_0_10px_rgba(200,16,46,0.3)]"
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
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-[#0f2044] font-semibold text-base py-3 px-2 border-b border-gray-100 uppercase tracking-wide hover:text-[#c8102e] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:5554082930"
              className="flex items-center gap-2 text-[#0f2044] font-bold text-base py-3 px-2 hover:text-[#c8102e] transition-colors"
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
