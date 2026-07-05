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

function OrangeGradientIcon({ icon: Icon }: { icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div
      className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
      style={{ background: 'linear-gradient(225deg, #8c3d17 0%, #eb7b46 50%, #f0a57a 100%)' }}
      aria-hidden="true"
    >
      <Icon className="w-5 h-5 text-white" aria-hidden="true" />
    </div>
  )
}

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

  const scrollToForm = () => {
    const el = document.querySelector('#contact-form')
    if (el) {
      const header = document.getElementById('site-header')
      const offset = header ? header.offsetHeight : 88
      const top = el.getBoundingClientRect().top + window.scrollY - offset - 8
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="contact"
      className="w-full bg-white py-20 px-4 overflow-x-hidden scroll-mt-4"
      aria-label="Contact Vanguard Plumbing"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#eb7b46] font-bold text-sm tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-5 h-0.5 bg-[#eb7b46]" aria-hidden="true" />
            Contact Us
            <span className="inline-block w-5 h-0.5 bg-[#eb7b46]" aria-hidden="true" />
          </p>
          <h2 className="text-[#0f2044] font-black text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight mb-4 text-balance">
            Need a Plumber You Can Count On?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-pretty">
            We&apos;re just one message away. Whether you have a plumbing emergency, need a quote,
            or just have questions &mdash; fill out the form or give us a call. We&apos;re available 24/7.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Left: Info card with blue glow */}
          <div className="w-full lg:w-5/12 flex-shrink-0">
            <div
              className="bg-[#0f2044] rounded-sm p-8 h-full"
              style={{
                boxShadow: '0 4px 32px rgba(15,32,68,0.35), 0 0 40px rgba(26,90,200,0.18)',
              }}
            >
              <h3 className="text-white font-black text-2xl uppercase mb-2">Vanguard Plumbing</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Serving Plano, TX and all surrounding counties with fast, reliable plumbing services.
                Reach out directly or fill out the form and we&apos;ll be in touch promptly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <OrangeGradientIcon icon={Phone} />
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Phone</p>
                    <a
                      href="tel:5554082930"
                      className="text-white font-bold text-lg hover:text-[#f0a57a] transition-colors"
                      aria-label="Call Vanguard Plumbing at (555) 408-2930"
                    >
                      (555) 408-2930
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <OrangeGradientIcon icon={Clock} />
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Service Hours</p>
                    <p className="text-white font-bold text-lg">24 Hours a Day, 7 Days a Week</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <OrangeGradientIcon icon={MapPin} />
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
          <div className="flex-1" id="contact-form">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6">
                <CheckCircle className="w-16 h-16 text-[#eb7b46]" aria-hidden="true" />
                <h3 className="text-[#0f2044] font-black text-2xl uppercase">Form Submitted!</h3>
                <p className="text-gray-600 max-w-sm leading-relaxed">
                  Thank you for reaching out! A member of our team will contact you shortly. For
                  urgent matters, please call us directly at{' '}
                  <a href="tel:5554082930" className="text-[#eb7b46] font-bold" aria-label="Call (555) 408-2930">
                    (555) 408-2930
                  </a>
                  .
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', phone: '', address: '', problem: '', message: '' })
                  }}
                  className="bg-[#eb7b46] text-white font-bold uppercase tracking-widest text-sm px-6 py-3 rounded-sm
                    shadow-[0_0_14px_rgba(235,123,70,0.4)] hover:bg-[#8c3d17]
                    hover:shadow-[0_0_24px_rgba(235,123,70,0.65)] hover:-translate-y-0.5
                    active:translate-y-0 transition-all duration-200"
                  aria-label="Submit another service request"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[#0f2044] font-bold text-sm uppercase tracking-wide">
                      Full Name <span className="text-[#eb7b46]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#eb7b46] focus:border-transparent"
                      aria-required="true"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[#0f2044] font-bold text-sm uppercase tracking-wide">
                      Phone Number <span className="text-[#eb7b46]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#eb7b46] focus:border-transparent"
                      aria-required="true"
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
                    className="border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#eb7b46] focus:border-transparent"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="problem" className="text-[#0f2044] font-bold text-sm uppercase tracking-wide">
                    What Is Your Problem? <span className="text-[#eb7b46]" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="problem"
                    name="problem"
                    required
                    value={form.problem}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#eb7b46] focus:border-transparent bg-white text-gray-700"
                    aria-required="true"
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
                    className="border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#eb7b46] focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#eb7b46] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-sm
                    shadow-[0_0_14px_rgba(235,123,70,0.4)] hover:bg-[#8c3d17]
                    hover:shadow-[0_0_24px_rgba(235,123,70,0.65)] hover:-translate-y-0.5
                    active:translate-y-0 transition-all duration-200 w-full sm:w-auto"
                  aria-label="Submit plumbing service request"
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
            onClick={scrollToForm}
            className="bg-[#eb7b46] text-white font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-sm
              shadow-[0_0_16px_rgba(235,123,70,0.5)] hover:bg-[#8c3d17]
              hover:shadow-[0_0_28px_rgba(235,123,70,0.75)] hover:-translate-y-0.5
              active:translate-y-0 transition-all duration-200"
            aria-label="Book a plumbing appointment with Vanguard Plumbing"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  )
}
