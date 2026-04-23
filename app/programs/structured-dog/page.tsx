import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Structured Dog Package",
  description:
    "Build a well-structured dog from the ground up. 3 sessions 1-on-1 covering core commands, structure, and setting your dog up for a successful life — in Austin and online.",
  alternates: {
    canonical: "https://www.serafimdogtraining.com/programs/structured-dog",
  },
  openGraph: {
    title: "Structured Dog Package — Serafim Dog Training",
    description:
      "3 sessions to build structure, core commands, and a dog set up for a successful life.",
    url: "https://www.serafimdogtraining.com/programs/structured-dog",
  },
};

const whatIsIncluded = [
  "3 sessions 1-on-1 with me",
  "How to build structure and clear boundaries from day one",
  "The core commands every dog needs — and how to teach them correctly",
  "Impulse control foundations",
  "How to set your dog up for a successful life long-term",
  "Written training notes after each session",
];

const whoItsFor = [
  "New puppy owners who want to start right",
  "Dogs with little or no formal training",
  "Owners who've tried DIY training without consistent results",
  "Anyone who wants a structured, well-behaved dog without behavioral issues",
];

const faqs = [
  {
    q: "Is this for puppies only?",
    a: "No. This package works for any dog starting from scratch — puppies, adolescents, or adult dogs with no prior training. Age matters less than consistency.",
  },
  {
    q: "What if my dog already knows some commands?",
    a: "We'll assess where your dog is and build from there. If the foundation isn't solid, we reinforce it. If it is, we build on top of it.",
  },
  {
    q: "Do I need to be present?",
    a: "Yes. You're part of the training. A dog that only listens to me is not a trained dog for you — handler education is built into every session.",
  },
  {
    q: "What if I need more than 3 sessions?",
    a: "We reassess after the package and can continue with additional sessions or transition into a more comprehensive program if your goals call for it.",
  },
];

export default function StructuredDogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
            Program
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-medium leading-tight max-w-2xl mb-7">
            Structured Dog Package
          </h1>
          <p className="text-white/70 font-light text-lg max-w-xl leading-relaxed mb-10">
            Three focused sessions to build the foundation every dog needs —
            structure, core commands, and the habits that lead to a
            well-behaved dog for life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://calendly.com/arthur-serafimdogtraining/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm tracking-wide px-7 py-3.5 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 font-semibold"
            >
              Book a Free Consult
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-offwhite py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
                What&apos;s Included
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-forest font-medium leading-tight mb-8">
                The foundation your dog needs from day one.
              </h2>
              <ul className="space-y-4">
                {whatIsIncluded.map((item) => (
                  <li key={item} className="flex gap-4 items-start">
                    <svg
                      className="w-5 h-5 text-gold shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-charcoal-light font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              {/* Who it's for */}
              <div className="bg-white border border-offwhite-soft rounded-sm p-8">
                <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
                  Who This Is For
                </p>
                <ul className="space-y-3">
                  {whoItsFor.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 items-start text-charcoal-light font-light text-sm leading-relaxed"
                    >
                      <span className="text-forest shrink-0 mt-1">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="bg-forest text-white rounded-sm p-8">
                <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-4">
                  Investment
                </p>
                <p className="font-display text-4xl text-white font-medium mb-1">
                  $500
                </p>
                <p className="text-white/50 text-sm font-light mb-2">
                  Flexible payment plans available
                </p>
                <p className="text-white/60 font-light text-sm mb-8">
                  3 sessions. No hidden fees.
                </p>
                <Link
                  href="https://calendly.com/arthur-serafimdogtraining/15min"
              target="_blank"
              rel="noopener noreferrer"
                  className="block text-sm tracking-wide px-6 py-3 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 text-center font-semibold rounded-sm"
                >
                  Book a Free Consult
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-white py-14 md:py-16 border-t border-offwhite-soft">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex gap-5 items-start">
            <div className="shrink-0 mt-0.5">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-2">
                7-Day Money-Back Guarantee
              </p>
              <p className="text-charcoal-light font-light leading-relaxed text-sm">
                If you&apos;re not satisfied within 7 days of your first session, I&apos;ll refund you in full. Refund requests must be submitted in writing to{" "}
                <a href="mailto:hello@serafimdogtraining.com" className="text-forest hover:text-gold transition-colors underline underline-offset-2">
                  hello@serafimdogtraining.com
                </a>{" "}
                and include your full name, the date of your first session, and your reason for requesting a refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-forest py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display text-3xl md:text-4xl text-white font-light italic leading-snug mb-6">
            &ldquo;Structure isn&apos;t about control. It&apos;s about giving
            your dog the clarity to succeed.&rdquo;
          </p>
          <p className="text-gold text-xs uppercase tracking-widest font-medium">
            — Arthur Serafim
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
            FAQ
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-forest font-medium leading-tight mb-12">
            Common questions.
          </h2>
          <div className="space-y-0 divide-y divide-offwhite-soft">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-8">
                <h3 className="font-display text-xl text-charcoal font-medium mb-3">
                  {faq.q}
                </h3>
                <p className="text-charcoal-light font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-offwhite py-20 md:py-24 border-t border-offwhite-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-forest font-medium leading-tight mb-6">
            Start building the right habits{" "}
            <em className="italic font-light">from day one.</em>
          </h2>
          <p className="text-charcoal-light font-light text-lg mb-10 max-w-md mx-auto">
            Book a free consult and we&apos;ll figure out if this package is the right starting point for your dog.
          </p>
          <Link
            href="https://calendly.com/arthur-serafimdogtraining/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm tracking-wide px-9 py-4 bg-forest text-white hover:bg-forest-light transition-colors duration-200 font-semibold"
          >
            Book a Free Consult
          </Link>
        </div>
      </section>
    </>
  );
}
