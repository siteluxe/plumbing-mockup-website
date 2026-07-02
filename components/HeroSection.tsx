'use client'

import Image from 'next/image'
import { Phone } from 'lucide-react'

export default function HeroSection() {
  const handleBookNow = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="w-full bg-[#f5f7fa] overflow-x-hidden"
      aria-label="Hero section"
    >
      {/* Mobile: stacked layout */}
      <div className="flex flex-col lg:flex-row lg:min-h-[90vh]">
        {/* Text Column */}
        <div className="flex-1 flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 xl:px-20 order-1 lg:order-1 max-w-full lg:max-w-[55%]">
          <p className="text-[#c8102e] font-bold text-sm tracking-[0.2em] uppercase mb-3">
            Welcome to Vanguard Plumbing
          </p>
          <h1 className="text-[#0f2044] font-black text-4xl sm:text-5xl lg:text-6xl leading-none uppercase mb-5 text-balance">
            Trusted Local Plumbers In Plano, TX
          </h1>
          <h2 className="text-[#0f2044] font-bold text-lg sm:text-xl mb-4 text-pretty uppercase">
            Looking for Fast, Reliable &amp; Affordable Plumbing in Plano?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-xl">
            You&apos;ve come to the right place. At Vanguard Plumbing, we specialize in solving
            plumbing problems for homes and businesses across Plano and the surrounding counties.
            Whether you&apos;re dealing with a burst pipe, clogged drain, or a failing water heater
            — we&apos;re here 24/7 to get things back to normal, fast.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={handleBookNow}
              className="bg-[#c8102e] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-sm hover:bg-[#a00e25] transition-colors w-full sm:w-auto text-center"
              aria-label="Book a plumbing appointment"
            >
              Book Now
            </button>
            <a
              href="tel:5554082930"
              className="flex items-center gap-2 text-[#0f2044] font-bold text-base hover:text-[#c8102e] transition-colors"
              aria-label="Call Vanguard Plumbing at (555) 408-2930"
            >
              <Phone className="w-5 h-5 text-[#c8102e]" aria-hidden="true" />
              (555) 408-2930
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative w-full lg:flex-1 order-2 lg:order-2">
          {/* Mobile: fixed height image */}
          <div className="relative w-full h-72 sm:h-96 lg:h-full lg:min-h-[90vh]">
            <Image
              src="/images/hero-plumber.png"
              alt="Professional Vanguard Plumbing technician ready to serve Plano, TX"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 bg-[#0f2044] text-white px-4 py-3 rounded-sm shadow-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-[#c8102e]">Available</p>
              <p className="text-lg font-black uppercase">24 / 7 Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
