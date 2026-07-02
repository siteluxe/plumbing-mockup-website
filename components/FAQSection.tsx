'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Do you offer emergency plumbing services?',
    a: 'Yes. Vanguard Plumbing provides 24/7 emergency plumbing service throughout Plano, TX and all surrounding counties. Whether it\'s 2 AM or a holiday weekend, our on-call technicians are ready to respond quickly to burst pipes, major leaks, sewage backups, and other urgent situations.',
  },
  {
    q: 'How quickly can you get to my home?',
    a: 'For emergency calls, we typically arrive within 45–90 minutes depending on your location. For standard service appointments, we offer same-day and next-day scheduling in most areas of Collin, Denton, and Dallas Counties.',
  },
  {
    q: 'Do you provide free estimates?',
    a: 'Absolutely. We offer complimentary estimates on all plumbing jobs before any work begins. You will receive a clear, upfront price with no hidden fees or surprise charges. We believe in full transparency so you can make an informed decision.',
  },
  {
    q: 'Are your plumbers licensed and insured?',
    a: 'Yes. All Vanguard Plumbing technicians are fully licensed with the State of Texas, bonded, and carry liability insurance. You can have complete confidence that your home and plumbing system are in professional, accountable hands.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We proudly serve Plano, TX and all surrounding counties, including Collin County (Plano, Allen, McKinney, Frisco), Denton County (Denton, Lewisville, Flower Mound, The Colony), and Dallas County (Dallas, Garland, Richardson, Mesquite).',
  },
  {
    q: 'Can you handle both residential and commercial plumbing?',
    a: 'Yes. Our team is experienced in both residential and commercial plumbing systems. From single-family homes to multi-unit complexes and office buildings, Vanguard Plumbing has the equipment and expertise to handle any scale of project.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards, debit cards, checks, and cash. Payment is due upon completion of the work. For larger projects, we can discuss flexible payment arrangements during your estimate.',
  },
  {
    q: 'Do you guarantee your work?',
    a: 'Yes. All of our repairs and installations are backed by a workmanship guarantee. If something we repaired or installed fails due to our workmanship within the warranty period, we will return and make it right at no additional cost to you.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="w-full bg-[#f5f7fa] py-20 px-4 overflow-x-hidden" aria-label="Frequently asked questions">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#c8102e] font-bold text-sm tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-5 h-0.5 bg-[#c8102e]" aria-hidden="true" />
            FAQ
            <span className="inline-block w-5 h-0.5 bg-[#c8102e]" aria-hidden="true" />
          </p>
          <h2 className="text-[#0f2044] font-black text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-pretty">
            Have questions about our services or process? Find answers to the most common plumbing
            questions below. Still have a question? Give us a call anytime.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-sm border border-gray-200 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-[#0f2044] font-bold text-base">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#c8102e] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {openIndex === i && (
                <div
                  id={`faq-answer-${i}`}
                  className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4"
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
