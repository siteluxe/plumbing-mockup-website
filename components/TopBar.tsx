'use client'

import { Phone } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="w-full bg-[#0f2044] text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm font-medium tracking-wide">
        <span className="hidden sm:inline text-gray-300">Call Us Today to Get an Estimate!</span>
        <Phone className="w-4 h-4 text-[#1B4332]" aria-hidden="true" />
        <a
          href="tel:5554082930"
          className="font-bold text-white hover:text-[#2d6a4f] transition-colors"
          aria-label="Call Vanguard Plumbing at (555) 408-2930"
        >
          (555) 408-2930
        </a>
      </div>
    </div>
  )
}
