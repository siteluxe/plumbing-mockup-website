'use client'

import { Droplets, Wrench, Thermometer, FlaskConical, AlertTriangle, ShowerHead } from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: 'Leak Detection & Repair',
    desc: 'We use advanced equipment to locate hidden water leaks behind walls, under slabs, and in crawl spaces — stopping damage before it spreads.',
  },
  {
    icon: Wrench,
    title: 'Fixture Installation & Repair',
    desc: 'From faucets and sinks to toilets and showers, we install and repair all major plumbing fixtures with precision and care.',
  },
  {
    icon: FlaskConical,
    title: 'Drain & Sewer Services',
    desc: 'Clogged drains and slow sewers are no match for our team. We clear blockages and inspect sewer lines to restore proper flow.',
  },
  {
    icon: Thermometer,
    title: 'Water Heater Services',
    desc: 'No hot water? We install, replace, and repair both tank and tankless water heaters, getting your hot water back on the same day.',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Plumbing',
    desc: 'When disaster strikes at 2 AM, we answer. Our emergency team is available 24/7 for burst pipes, flooding, and critical failures.',
  },
  {
    icon: ShowerHead,
    title: 'Repiping & Pipe Replacement',
    desc: 'Aging or corroded pipes can silently cause major damage. We handle full and partial repiping to modernize your plumbing system safely.',
  },
]

/*
 * Blue diagonal gradient icon container.
 * Gradient direction: top-right corner is darker navy (#0a1830),
 * bottom-left corner is lighter blue (#1e4fa0).
 * All icons share the exact same gradient — white icon on top for contrast.
 */
function BlueGradientIcon({ Icon }: { Icon: React.ElementType }) {
  return (
    <div
      className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
      style={{
        background: 'linear-gradient(225deg, #0a1830 0%, #0f2044 50%, #1e4fa0 100%)',
      }}
      aria-hidden="true"
    >
      <Icon className="w-6 h-6 text-white" aria-hidden="true" />
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-[#f5f7fa] py-20 px-4 overflow-x-hidden"
      aria-label="Our plumbing services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#c8102e] font-bold text-sm tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-5 h-0.5 bg-[#c8102e]" aria-hidden="true" />
            What We Offer
            <span className="inline-block w-5 h-0.5 bg-[#c8102e]" aria-hidden="true" />
          </p>
          <h2 className="text-[#0f2044] font-black text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-pretty">
            We offer a full range of residential and commercial plumbing services across Plano, TX
            and all surrounding counties. Every job is backed by our quality guarantee.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-sm border border-gray-100 p-7 flex flex-col gap-4 cursor-default
                shadow-[0_2px_12px_rgba(15,32,68,0.08)] hover:shadow-[0_8px_28px_rgba(15,32,68,0.16)]
                hover:-translate-y-1.5 transition-all duration-300 ease-out"
              aria-label={service.title}
            >
              <BlueGradientIcon Icon={service.icon} />
              <div>
                <h3 className="text-[#0f2044] font-black text-lg uppercase mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
