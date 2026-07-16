import GoogleMapsEmbed from './GoogleMapsEmbed'

export default function MapSection() {
  return (
    <section
      id="map"
      className="w-full bg-white px-4 pb-20 overflow-x-hidden"
      aria-label="Vanguard Plumbing service area map"
    >
      <div className="max-w-7xl mx-auto">
        <div className="rounded-sm overflow-hidden shadow-md border border-gray-200 h-80 sm:h-96 lg:h-[480px] w-full">
          <GoogleMapsEmbed />
        </div>
      </div>
    </section>
  )
}
