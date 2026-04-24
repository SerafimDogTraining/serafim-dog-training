'use client'

export default function CalendlyEmbed({ url }: { url: string }) {
  return (
    <div className="w-full rounded-sm overflow-hidden" style={{ height: '700px' }}>
      <iframe
        src={`${url}?embed_domain=serafimdogtraining.com&embed_type=Inline&hide_gdpr_banner=1`}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Book a Free Consult"
      />
    </div>
  )
}
