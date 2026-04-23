import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Consult",
  description:
    "Schedule a free 15-minute call with Arthur Serafim. No obligation — just an honest conversation about your dog and what's possible.",
  alternates: {
    canonical: "https://www.serafimdogtraining.com/book-a-consult",
  },
  openGraph: {
    title: "Book a Free Consult — Serafim Dog Training",
    description:
      "Schedule a free 15-min call with Arthur Serafim — in person in Austin or online.",
    url: "https://www.serafimdogtraining.com/book-a-consult",
  },
};

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/arthur-serafimdogtraining/15min";

export default function BookAConsultPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-forest pt-40 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
            Free 15-Min Call
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-medium leading-tight max-w-2xl mb-6">
            Let&apos;s talk about your dog.
          </h1>
          <p className="text-white/70 font-light text-lg max-w-xl leading-relaxed">
            15 minutes. Free. No sales pitch. You tell us about your dog,
            we&apos;ll tell you honestly whether we&apos;re the right fit and
            what the path forward looks like.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-offwhite py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-16">
            {[
              {
                step: "01",
                title: "Tell us about your dog",
                body: "Breed, age, behavior, and what you're hoping to achieve. No judgment — we've heard it all.",
              },
              {
                step: "02",
                title: "Get an honest assessment",
                body: "I'll give you a straight answer on whether your dog is a fit for our programs, and which one makes the most sense.",
              },
              {
                step: "03",
                title: "Decide together",
                body: "If it's a good fit, we'll outline next steps. If it's not, we'll tell you that too — and point you in the right direction.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white border border-offwhite-soft rounded-sm p-7"
              >
                <span className="font-mono text-3xl text-gold/25 font-light block mb-4">
                  {item.step}
                </span>
                <h3 className="font-display text-xl text-forest font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-charcoal-light font-light text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="bg-white py-16 md:py-20 border-t border-offwhite-soft">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-4">
              Schedule
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-medium leading-tight">
              Pick a time that works for you.
            </h2>
          </div>

          {/* Calendly inline embed */}
          <div
            className="w-full rounded-sm overflow-hidden border border-offwhite-soft bg-offwhite"
            style={{ minHeight: "700px" }}
          >
            <iframe
              src={`${CALENDLY_URL}?embed_domain=serafimdogtraining.com&embed_type=Inline&hide_gdpr_banner=1`}
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a free 15-min call"
              className="w-full"
            />
          </div>

          <p className="text-center text-xs text-charcoal-muted font-light mt-6">
            Can&apos;t find a time? Email us at{" "}
            <a
              href="mailto:hello@serafimdogtraining.com"
              className="text-forest hover:text-gold transition-colors"
            >
              hello@serafimdogtraining.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
