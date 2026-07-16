const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429395.05539009644!2d-97.07649994999999!3d33.01984385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21ed60421251%3A0x48fe1c2ef74e8571!2sPlano%2C%20TX!5e0!3m2!1sen!2sus!4v1719878400000!5m2!1sen!2sus'

export const mapEmbedSrc = MAP_EMBED_SRC

export default function GoogleMapsEmbed({ className }: { className?: string }) {
  return (
    <iframe
      title="Vanguard Plumbing service area map — Plano, TX and surrounding counties"
      src={MAP_EMBED_SRC}
      width="100%"
      height="100%"
      className={className}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
