import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Arthur Serafim",
  description:
    "Austin-based dog trainer specializing in working dogs, service dog certification, and behavioral rehabilitation. Built on word of mouth.",
  alternates: { canonical: "https://www.serafimdogtraining.com/about" },
  openGraph: {
    title: "About Arthur Serafim — Serafim Dog Training",
    description:
      "Austin-based dog trainer. Working dogs, service dogs, and behavioral rehabilitation.",
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
  {
    title: "Word of Mouth",
    body: "Every client has come through referral. That's by design. Results drive growth — not ads.",
  },
];

const timeline = [
  {
    year: "The Beginning",
    title: "Rescuing Korra",
    body: "Arthur rescued Korra — a dog that required real structure and real understanding to rehabilitate. That experience changed everything. Training moved from interest to purpose.",
  },
  {
    year: "Early Work",
    title: "Building Through Referrals",
    body: "First clients came through word of mouth — people who knew Arthur, or knew someone who did. Reputation built faster than expected.",
  },
  {
    year: "Specialization",
    title: "Service & Working Dogs",
    body: "Arthur deepened his knowledge in service dog certification, therapy animal work, and working dog disciplines including bite work and scent detection.",
  },
  {
    year: "Today",
    title: "Serafim Dog Training",
    body: "A full client roster in Austin, TX. Three programs. Hundreds of dogs trained. Every dog still gets a custom plan.",
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
            Arthur Serafim is an Austin-based dog trainer who built his entire
            practice through word of mouth — starting with one rescue dog named
            Korra.
          </p>
        </div>
      </section>

      {/* Story + Photo */}
      <section className="bg-offwhite py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Photo placeholder */}
            <div className="relative sticky top-32">
              <div className="aspect-[4/5] bg-forest/10 rounded-sm overflow-hidden flex items-center justify-center">
                {/* Replace with: <Image src="/images/arthur.jpg" alt="Arthur Serafim" fill className="object-cover" /> */}
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-forest/20 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-4xl text-forest font-medium">A</span>
                  </div>
                  <p className="text-charcoal-muted text-sm font-light">Photo coming soon</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-4 border-b-4 border-gold" />
            </div>

            {/* Story */}
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
                The Story
              </p>
              <div className="space-y-5 text-base font-light leading-relaxed text-charcoal-light mb-14">
                <p>
                  Arthur Serafim didn&apos;t plan to become a dog trainer. He
                  rescued Korra — a dog with behavioral issues that most people
                  would have returned — and decided to figure out what she
                  actually needed. What he found changed his life.
                </p>
                <p>
                  Dogs aren&apos;t difficult because they&apos;re broken.
                  They&apos;re difficult because no one has given them the
                  structure, communication, and purpose they need. Once Arthur
                  understood that, everything clicked — and he started helping
                  other dogs and owners find the same breakthrough.
                </p>
                <p>
                  His first clients came through personal referrals. Then those
                  clients referred their friends. He&apos;s never run an ad. The
                  entire practice has grown through results and relationships.
                </p>
                <p>
                  Today, Arthur specializes in service dog certification,
                  therapy dog training, behavioral rehabilitation, and working
                  dog development. He&apos;s based in Austin, TX and works with
                  a small, focused roster of clients at a time.
                </p>
              </div>

              {/* Values */}
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
                How Arthur Works
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
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
            The Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-forest font-medium leading-tight mb-16">
            How we got here.
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-offwhite-soft md:left-8" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex gap-10 md:gap-16">
                  <div className="relative shrink-0">
                    <div className="w-8 h-8 md:w-16 md:h-16 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-gold border-2 border-white shadow-sm" />
                    </div>
                  </div>
                  <div className="pb-6">
                    <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-medium mb-2">
                      {item.year}
                    </p>
                    <h3 className="font-display text-xl text-charcoal font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-light font-light leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
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
                Want to work with Arthur?
              </h2>
              <p className="text-white/60 font-light max-w-lg">
                Start with a free consultation. 20 minutes, no pressure — just
                an honest conversation about your dog.
              </p>
            </div>
            <Link
              href="/book-a-consult"
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
