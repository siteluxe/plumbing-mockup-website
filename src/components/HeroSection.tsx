import { Phone } from 'lucide-react'

export default function HeroSection() {
  const handleBookNow = () => {
    const el = document.querySelector('#contact')
    if (el) {
      const header = document.getElementById('site-header')
      const offset = header ? header.offsetHeight : 88
      const top = el.getBoundingClientRect().top + window.scrollY - offset - 8
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="w-full bg-[#f5f7fa] overflow-x-hidden"
      aria-label="Hero section"
    >
      <div className="flex flex-col lg:flex-row lg:min-h-[90vh]">
        {/* Text Column */}
        <div className="flex-1 flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 xl:px-20 order-1 lg:order-1 max-w-full lg:max-w-[55%]">
          <p className="text-[#E67527] font-bold text-sm tracking-[0.2em] uppercase mb-3">
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
            &mdash; we&apos;re here 24/7 to get things back to normal, fast.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={handleBookNow}
              className="bg-[#E67527] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-sm
                shadow-[0_0_14px_rgba(230,117,39,0.45)] hover:bg-[#7a3010]
                hover:shadow-[0_0_26px_rgba(230,117,39,0.7)] hover:-translate-y-0.5
                active:translate-y-0 transition-all duration-200 w-full sm:w-auto text-center"
              aria-label="Book a plumbing appointment with Vanguard Plumbing"
            >
              Book Now
            </button>
            <a
              href="tel:5554082930"
              className="flex items-center gap-2 text-[#0f2044] font-bold text-base hover:text-[#E67527] transition-colors"
              aria-label="Call Vanguard Plumbing at (555) 408-2930"
            >
              <Phone className="w-5 h-5 text-[#E67527]" aria-hidden="true" />
              (555) 408-2930
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative w-full lg:flex-1 order-2 lg:order-2">
          <div className="relative w-full h-72 sm:h-96 lg:h-full lg:min-h-[90vh]">
            <img
              src="/images/plumber-work.png"
              alt="Vanguard Plumbing technician repairing pipes on a job in Plano, TX"
              className="w-full h-full object-cover object-top"
            />
            {/* 24/7 badge with blue glow */}
            <div
              className="absolute bottom-6 left-6 bg-[#0f2044] text-white px-4 py-3 rounded-sm shadow-lg"
              style={{ boxShadow: '0 4px 24px rgba(15,32,68,0.55), 0 0 28px rgba(26,90,200,0.32)' }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[#E67527]">Available</p>
              <p className="text-lg font-black uppercase">24 / 7 Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
