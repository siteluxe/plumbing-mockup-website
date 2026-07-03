'use client'

import Image from 'next/image'
import { ShieldCheck, Clock, Star, Wrench, BadgeCheck, Users } from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Licensed, Bonded & Insured',
    desc: 'Every technician is fully licensed and insured, so you can have complete peace of mind on every job.',
  },
  {
    icon: Clock,
    title: 'Same-Day Emergency Response',
    desc: "Plumbing emergencies don't wait — neither do we. We dispatch fast, day or night, 365 days a year.",
  },
  {
    icon: Star,
    title: 'Transparent, Upfront Pricing',
    desc: "You'll always know the cost before any work begins. No surprise charges, no hidden fees — ever.",
  },
  {
    icon: Wrench,
    title: 'Free Estimates on Every Job',
    desc: 'We offer complimentary estimates so you can make informed decisions without any financial pressure.',
  },
  {
    icon: BadgeCheck,
    title: 'Workmanship Guaranteed',
    desc: 'We stand behind every repair and installation with a satisfaction guarantee you can count on.',
  },
  {
    icon: Users,
    title: 'Locally Rooted, Community Driven',
    desc: "We're proud North Texans serving our neighbors. Your home is treated with the same care as our own.",
  },
]

/*
 * Orange diagonal gradient icon container.
 * Gradient: top-right darker (#8c3d17) → mid (#eb7b46) → bottom-left lighter (#f0a57a).
 * All icons share the exact same gradient — white icon on top for contrast.
 */
function OrangeGradientIcon({ Icon }: { Icon: React.ElementType }) {
  return (
    <div
      className="flex-shrink-0 w-10 h-10 rounded-sm flex items-center justify-center"
      style={{
        background: 'linear-gradient(225deg, #8c3d17 0%, #eb7b46 50%, #f0a57a 100%)',
      }}
      aria-hidden="true"
    >
      <Icon className="w-5 h-5 text-white" aria-hidden="true" />
    </div>
  )
}

export default function WhyUsSection() {
  return (
    <section className="w-full bg-white py-20 px-4 overflow-x-hidden" aria-label="Why choose Vanguard Plumbing">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <div className="w-full lg:w-5/12 flex-shrink-0">
            <div className="relative rounded-sm overflow-hidden h-80 sm:h-96 lg:h-[520px] w-full">
              <Image
                src="/images/hero-plumber.png"
                alt="Vanguard Plumbing professional plumber ready to serve customers in Plano, TX"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            <p className="text-[#eb7b46] font-bold text-sm tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
              <span className="inline-block w-5 h-0.5 bg-[#eb7b46]" aria-hidden="true" />
              Why Choose Us
            </p>
            <h2 className="text-[#0f2044] font-black text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight mb-4 text-balance">
              Why Homeowners &amp; Businesses Trust Vanguard
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We proudly serve Plano, TX, and all surrounding counties. Our team delivers
              professional-grade plumbing with a commitment to quality, transparency, and speed.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((r) => (
                <div key={r.title} className="flex items-start gap-4">
                  <OrangeGradientIcon Icon={r.icon} />
                  <div>
                    <h3 className="text-[#0f2044] font-bold text-base mb-1">{r.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
