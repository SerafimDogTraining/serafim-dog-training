import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Arthur Serafim",
  description:
    "Dog trainer specializing in working dogs, service dog training, and behavioral rehabilitation — in Austin and online worldwide.",
  alternates: { canonical: "https://www.serafimdogtraining.com/about" },
  openGraph: {
    title: "About Arthur Serafim — Serafim Dog Training",
    description:
      "Dog trainer specializing in working dogs, service dogs, and behavioral rehabilitation — in Austin and online.",
    url: "https://www.serafimdogtraining.com/about",
  },
};

const values = [
  {
    title: "Honesty",
    body: "If your dog isn't a good fit for a service dog role, I'll tell you. If the problem is you, I'll tell you that too.",
  },
  {
    title: "Handler Education",
    body: "Every program includes handler work. A dog that only performs for the trainer is useless to you.",
  },
  {
    title: "Custom Plans",
    body: "No template programs. Your dog's history, temperament, and your goals determine the training roadmap.",
  },
];


export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
            About
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-medium leading-tight max-w-2xl mb-7">
            Not Just a Trainer.{" "}
            <em className="italic font-light">A Dog Handler.</em>
          </h1>
          <p className="text-white/70 font-light text-lg max-w-xl leading-relaxed">
            I started training dogs in 2020 and built my practice through
            results. Based in Austin, TX. Working with clients worldwide.
          </p>
        </div>
      </section>

      {/* Story + Photo */}
      <section className="bg-offwhite py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 md:items-start">
            {/* Story — first on mobile, second on desktop */}
            <div className="order-1 md:order-2 mb-8 md:mb-0">
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
                The Story
              </p>
              <div className="space-y-5 text-base font-light leading-relaxed text-charcoal-light mb-14">
                <p>
                  I started training dogs in 2020 and built my practice through
                  results. Based in Austin, TX — I trained Korra as a service
                  dog from a puppy, and that experience is what made me fall in
                  love with dog training.
                </p>
                <p>
                  I specialize in working dogs, service dog training, and
                  behavioral rehabilitation. Every client gets a custom plan
                  built around their specific dog, their specific life, and
                  their specific goals.
                </p>
                <p>
                  I don&apos;t just train dogs — I train handlers. The
                  relationship you build with your dog during this process is as
                  important as any command your dog learns.
                </p>
              </div>

              {/* Values */}
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
                How I Work
              </p>
              <div className="grid grid-cols-1 gap-4">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="p-6 bg-white border border-offwhite-soft rounded-sm"
                  >
                    <h3 className="font-display text-lg text-forest font-semibold mb-2">
                      {v.title}
                    </h3>
                    <p className="text-charcoal-muted font-light text-sm leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo — second on mobile, first on desktop */}
            <div className="order-2 md:order-1 relative md:sticky md:top-32">
              <div className="overflow-hidden rounded-sm h-[300px] md:h-auto md:aspect-[4/5]">
                <Image
                  src="/images/arthur-korra-mountain.jpg"
                  alt="Arthur Serafim and Korra"
                  width={600}
                  height={800}
                  unoptimized
                  className="w-full h-full object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="hidden md:block absolute -bottom-4 -right-4 w-16 h-16 border-r-4 border-b-4 border-gold" />
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-white font-medium mb-3 leading-tight">
                Ready to work together?
              </h2>
              <p className="text-white/60 font-light max-w-lg">
                Book a free consult — no pressure, just an honest
                conversation about your dog.
              </p>
            </div>
            <Link
              href="https://calendly.com/arthur-serafimdogtraining/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm tracking-wide px-8 py-4 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 font-semibold shrink-0"
            >
              Book a Free Consult
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
