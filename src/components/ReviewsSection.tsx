import { Star } from 'lucide-react'

const reviews = [
  {
    initials: 'MR',
    name: 'Marcus R.',
    location: 'Plano, TX',
    rating: 5,
    text: 'Vanguard Plumbing saved us during a weekend pipe burst. They arrived within an hour, assessed the damage quickly, and had everything fixed before any major flooding occurred. Honest pricing and truly professional service — these guys are the real deal.',
  },
  {
    initials: 'ST',
    name: 'Sarah T.',
    location: 'McKinney, TX',
    rating: 5,
    text: "I called at 11 PM for a water heater emergency and they showed up within 45 minutes. The technician was polite, explained everything clearly, and had our hot water running again by midnight. I wouldn't call anyone else for plumbing in Collin County.",
  },
  {
    initials: 'DJ',
    name: 'David J.',
    location: 'Frisco, TX',
    rating: 5,
    text: 'Three different plumbers quoted me double the price. Vanguard came out the same day, gave me a fair upfront estimate, and completed the repiping job in record time. Clean, professional, and no hidden fees. Absolutely five stars.',
  },
  {
    initials: 'LM',
    name: 'Linda M.',
    location: 'Allen, TX',
    rating: 5,
    text: 'From the first phone call to the final cleanup, everything about Vanguard Plumbing was outstanding. They fixed our slab leak without tearing up half our floor. The technicians left our home cleaner than when they arrived. Highly recommend!',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section className="w-full bg-[#f5f7fa] py-20 px-4 overflow-x-hidden" aria-label="Customer reviews">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#eb7b46] font-bold text-sm tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-5 h-0.5 bg-[#eb7b46]" aria-hidden="true" />
            Customer Reviews
            <span className="inline-block w-5 h-0.5 bg-[#eb7b46]" aria-hidden="true" />
          </p>
          <h2 className="text-[#0f2044] font-black text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight mb-4 text-balance">
            What Our Customers Are Saying
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-pretty">
            Discover the genuine experiences shared by our valued customers across Plano and the
            surrounding counties. Their feedback is what drives us to deliver excellence every day.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="bg-white rounded-sm border border-gray-100 p-6 flex flex-col gap-4
                shadow-[0_2px_12px_rgba(15,32,68,0.08)] hover:shadow-[0_8px_28px_rgba(15,32,68,0.15)]
                hover:-translate-y-1.5 transition-all duration-300 ease-out"
            >
              <StarRating count={review.rating} />
              <blockquote>
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </blockquote>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(225deg, #8c3d17 0%, #eb7b46 50%, #f0a57a 100%)' }}
                >
                  <span className="text-white font-black text-xs">{review.initials}</span>
                </div>
                <div>
                  <p className="text-[#0f2044] font-bold text-sm">{review.name}</p>
                  <p className="text-gray-500 text-xs">{review.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
