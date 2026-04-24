import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Free Consult | Serafim Dog Training',
  description: 'Schedule your free 15-minute consultation with Arthur Serafim.',
}

export default function BookPage() {
  return (
    <main className="min-h-screen bg-offwhite pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-3">Get Started</p>
          <h1 className="font-display text-4xl md:text-5xl text-forest font-medium leading-tight mb-4">
            Book a Free Consult
          </h1>
          <p className="text-charcoal-light font-light text-lg max-w-xl mx-auto">
            Pick a time that works for you. We&apos;ll talk through your dog&apos;s needs and find the right path forward.
          </p>
        </div>

        {/* Calendly inline widget */}
        <div
          className="calendly-inline-widget rounded-sm overflow-hidden"
          data-url="https://calendly.com/arthur-serafimdogtraining/15min?hide_gdpr_banner=1"
          style={{ minWidth: '320px', height: '700px' }}
        />
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </div>
    </main>
  )
}
