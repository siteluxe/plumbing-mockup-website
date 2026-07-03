'use client'

import Image from 'next/image'
import { Phone, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
]

const legalLinks = [
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
]

export default function Footer() {
  const handleScrollTo = (href: string) => {
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) {
        const header = document.getElementById('site-header')
        const offset = header ? header.offsetHeight : 88
        const top = el.getBoundingClientRect().top + window.scrollY - offset - 8
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="w-full bg-[#0a1830] text-white overflow-x-hidden" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/vanguard-logo.png"
                  alt="Vanguard Plumbing logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-black text-base tracking-tight uppercase leading-none">VANGUARD</span>
                <span className="block text-[#eb7b46] font-black text-base tracking-tight uppercase leading-none">PLUMBING</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              At Vanguard Plumbing, we specialize in solving plumbing problems for homes and
              businesses across Plano, TX and all surrounding counties. Available 24/7.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-black uppercase tracking-wider text-sm mb-5">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleScrollTo(link.href) }}
                    className="text-gray-400 hover:text-[#f0a57a] transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#f0a57a] transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-black uppercase tracking-wider text-sm mb-5">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#eb7b46] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:5554082930"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  aria-label="Call Vanguard Plumbing at (555) 408-2930"
                >
                  (555) 408-2930
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#eb7b46] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-400 text-sm">24 Hours a Day, 7 Days a Week</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#eb7b46] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <address className="not-italic text-gray-400 text-sm leading-relaxed">
                  4821 Haverford Drive, Suite 110<br />
                  Plano, TX 75024
                </address>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-white font-black uppercase tracking-wider text-sm mb-5">Service Area</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              We proudly serve Plano, TX, and all surrounding counties.
            </p>
            <ul className="flex flex-col gap-1.5">
              {['Collin County', 'Denton County', 'Dallas County'].map((c) => (
                <li key={c} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#eb7b46] flex-shrink-0" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Vanguard Plumbing. All Rights Reserved.</p>
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {/* SiteLuxe attribution — rel="nofollow" for SEO, same color as surrounding text */}
            <p>
              <a
                href="https://siteluxe.netlify.app"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-gray-500 hover:text-gray-300 transition-colors"
                aria-label="Website built by SiteLuxe"
              >
                Built by SiteLuxe
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
