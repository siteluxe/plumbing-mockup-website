'use client'

import { useState } from 'react'
import { Phone, Clock, MapPin, CheckCircle } from 'lucide-react'

const problemOptions = [
  'Leaking Pipe or Fixture',
  'Clogged Drain or Sewer',
  'Water Heater Issue',
  'Low Water Pressure',
  'Running Toilet',
  'Burst Pipe Emergency',
  'Fixture Installation',
  'Repiping',
  'Other / Not Listed',
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    problem: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="w-full bg-white py-20 px-4 overflow-x-hidden"
      aria-label="Contact Vanguard Plumbing"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#c8102e] font-bold text-sm tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-5 h-0.5 bg-[#c8102e]" aria-hidden="true" />
            Contact Us
            <span className="inline-block w-5 h-0.5 bg-[#c8102e]" aria-hidden="true" />
          </p>
          <h2 className="text-[#0f2044] font-black text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight mb-4 text-balance">
            Need a Plumber You Can Count On?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-pretty">
            We&apos;re just one message away. Whether you have a plumbing emergency, need a quote,
            or just have questions — fill out the form or give us a call. We&apos;re available 24/7.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Left: Info */}
          <div className="w-full lg:w-5/12 flex-shrink-0">
            <div className="bg-[#0f2044] rounded-sm p-8 h-full">
              <h3 className="text-white font-black text-2xl uppercase mb-2">Vanguard Plumbing</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Serving Plano, TX and all surrounding counties with fast, reliable plumbing services.
                Reach out directly or fill out the form and we&apos;ll be in touch promptly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c8102e] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Phone</p>
                    <a
                      href="tel:5554082930"
                      className="text-white font-bold text-lg hover:text-[#c8102e] transition-colors"
                    >
                      (555) 408-2930
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c8102e] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Service Hours</p>
                    <p className="text-white font-bold text-lg">24 Hours a Day, 7 Days a Week</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c8102e] rounded-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Service Area</p>
                    <p className="text-white font-bold text-lg leading-snug">
                      Plano, TX &amp; Surrounding Counties
                    </p>
                    <p className="text-gray-300 text-sm">Collin, Denton, Dallas Counties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex-1">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6">
                <CheckCircle className="w-16 h-16 text-green-500" aria-hidden="true" />
                <h3 className="text-[#0f2044] font-black text-2xl uppercase">Form Submitted!</h3>
                <p className="text-gray-600 max-w-sm leading-relaxed">
                  Thank you for reaching out! A member of our team will contact you shortly. For
                  urgent matters, please call us directly at{' '}
                  <a href="tel:5554082930" className="text-[#c8102e] font-bold">
                    (555) 408-2930
                  </a>
                  .
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', address: '', problem: '', message: '' }) }}
                  className="bg-[#c8102e] text-white font-bold uppercase tracking-widest text-sm px-6 py-3 rounded-sm hover:bg-[#a00e25] transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[#0f2044] font-bold text-sm uppercase tracking-wide">
                      Full Name <span className="text-[#c8102e]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:border-transparent"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[#0f2044] font-bold text-sm uppercase tracking-wide">
                      Phone Number <span className="text-[#c8102e]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="address" className="text-[#0f2044] font-bold text-sm uppercase tracking-wide">
                    Service Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="123 Main St, Plano, TX 75075"
                    className="border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:border-transparent"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="problem" className="text-[#0f2044] font-bold text-sm uppercase tracking-wide">
                    What Is Your Problem? <span className="text-[#c8102e]">*</span>
                  </label>
                  <select
                    id="problem"
                    name="problem"
                    required
                    value={form.problem}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:border-transparent bg-white text-gray-700"
                  >
                    <option value="">Select a plumbing issue...</option>
                    {problemOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[#0f2044] font-bold text-sm uppercase tracking-wide">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Please describe your plumbing issue in as much detail as possible..."
                    className="border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#c8102e] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-sm hover:bg-[#a00e25] transition-colors w-full sm:w-auto"
                  aria-label="Submit contact form"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Ready to Get Started */}
        <div className="mt-20 bg-[#0f2044] rounded-sm p-10 text-center">
          <h3 className="text-white font-black text-2xl sm:text-3xl uppercase mb-3 text-balance">
            Ready to Get Started?
          </h3>
          <p className="text-gray-300 mb-7 max-w-xl mx-auto leading-relaxed text-pretty">
            Contact Vanguard Plumbing today and let our expert team handle your plumbing problems
            so you don&apos;t have to.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact form')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-[#c8102e] text-white font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-sm hover:bg-[#a00e25] transition-colors"
            aria-label="Book a plumbing appointment"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  )
}
