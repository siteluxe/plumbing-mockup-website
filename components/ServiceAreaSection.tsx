'use client'

import { MapPin } from 'lucide-react'

const counties = [
  {
    name: 'Collin County',
    cities: ['Plano, TX', 'Allen, TX', 'McKinney, TX', 'Frisco, TX'],
  },
  {
    name: 'Denton County',
    cities: ['Denton, TX', 'Lewisville, TX', 'Flower Mound, TX', 'The Colony, TX'],
  },
  {
    name: 'Dallas County',
    cities: ['Dallas, TX', 'Garland, TX', 'Richardson, TX', 'Mesquite, TX'],
  },
]

export default function ServiceAreaSection() {
  const handleContactScroll = () => {
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
      className="w-full bg-white py-20 px-4 overflow-x-hidden"
      aria-label="Service areas in Northern Texas"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* Left: Map */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="rounded-sm overflow-hidden shadow-md border border-gray-200 h-80 sm:h-96 lg:h-[480px] w-full">
              <iframe
                title="Vanguard Plumbing service area map — Plano, TX and surrounding counties"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429395.05539009644!2d-97.07649994999999!3d33.01984385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21ed60421251%3A0x48fe1c2ef74e8571!2sPlano%2C%20TX!5e0!3m2!1sen!2sus!4v1719878400000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            <p className="text-[#eb7b46] font-bold text-sm tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
              <span className="inline-block w-5 h-0.5 bg-[#eb7b46]" aria-hidden="true" />
              Our Service Area
            </p>
            <h2 className="text-[#0f2044] font-black text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight mb-4 text-balance">
              Areas We Serve In Northern Texas
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-pretty">
              From Plano to the greater Dallas&ndash;Fort Worth metroplex, Vanguard Plumbing is proud to
              be the go-to plumbing team for homeowners and businesses across North Texas. Our local
              technicians know the neighborhoods, the infrastructure, and the unique plumbing needs
              of each community we serve. No job is too large or too far &mdash; we are always ready to
              respond when you need us most.
            </p>

            {/* Counties grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {counties.map((county) => (
                <div key={county.name}>
                  <h3 className="text-[#0f2044] font-black text-lg mb-3 border-b-2 border-[#eb7b46] pb-1">
                    {county.name}
                  </h3>
                  <ul className="space-y-2">
                    {county.cities.map((city) => (
                      <li key={city} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                        <MapPin className="w-4 h-4 text-[#eb7b46] flex-shrink-0" aria-hidden="true" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button
              onClick={handleContactScroll}
              className="bg-[#eb7b46] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-sm
                shadow-[0_0_12px_rgba(235,123,70,0.35)] hover:bg-[#8c3d17]
                hover:shadow-[0_0_22px_rgba(235,123,70,0.6)] hover:-translate-y-0.5
                active:translate-y-0 transition-all duration-200 inline-flex items-center gap-2"
              aria-label="View all service areas and contact us"
            >
              View All Service Areas &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
