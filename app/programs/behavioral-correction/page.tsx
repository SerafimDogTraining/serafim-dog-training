import type { Metadata } from "next";
import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";

export const metadata: Metadata = {
  title: "Behavioral Correction Program",
  description:
    "Understand and correct reactive, aggressive, or anxious dog behavior at the root. Expert dog training for real results — in Austin and online.",
  alternates: {
    canonical:
      "https://www.serafimdogtraining.com/programs/behavioral-correction",
  },
  openGraph: {
    title: "Behavioral Correction Program — Serafim Dog Training",
    description:
      "Correct reactive, aggressive, or anxious behavior — we go to the root cause, not just the surface.",
    url: "https://www.serafimdogtraining.com/programs/behavioral-correction",
  },
};

const whatIsIncluded = [
  "Behavioral assessment — root cause analysis, not symptom suppression",
  "Customized correction protocol for your dog's specific triggers",
  "Reactivity and leash aggression work",
  "Threshold management and desensitization",
  "Handler coaching — your energy and cues matter",
  "Confidence building for anxious or fearful dogs",
  "Follow-up sessions to reinforce progress",
  "Written training notes after each session",
];

const behaviors = [
  "Leash reactivity and lunging",
  "Dog-to-dog or dog-to-human aggression",
  "Extreme anxiety or fearfulness",
  "Resource guarding",
  "Excessive barking or destructive behavior",
  "Inability to settle in public or at home",
];

const faqs = [
  {
    q: "Is this program for dangerous dogs?",
    a: "Not exclusively. We work with dogs that are anxious, reactive, or simply misunderstood — not just dogs that have bitten. Aggression is a spectrum, and most dogs displaying concerning behavior can be rehabilitated with the right approach.",
  },
  {
    q: "Will you use punishment or aversive tools?",
    a: "We use what works for the individual dog. Some dogs respond well to balanced methods; others need a different approach. We'll tell you exactly what we're using and why during the assessment.",
  },
  {
    q: "How many sessions does this involve?",
    a: "Most dogs see meaningful improvement in 4–8 sessions. Severe cases may require more. We reassess frequently and don't string along clients with sessions they don't need.",
  },
  {
    q: "Do I need to be there?",
    a: "Yes. Behavioral correction that only works when the trainer is present is not correction — it's performance. You'll learn what your dog needs from you.",
  },
];

export default function BehavioralCorrectionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
            Program
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-medium leading-tight max-w-2xl mb-7">
            Behavioral Correction
          </h1>
          <p className="text-white/70 font-light text-lg max-w-xl leading-relaxed mb-10">
            We don&apos;t suppress behavior — we understand it. Every reactive,
            anxious, or aggressive dog is communicating something. We listen,
            then we correct.
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
            <CheckoutButton
              program="behavioral-correction"
              label="Enroll — $997"
              className="text-sm tracking-wide px-7 py-3.5 border border-white/60 text-white hover:bg-white/10 transition-all duration-200 font-medium cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* What we address */}
      <section className="bg-offwhite py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
                What&apos;s Included
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-forest font-medium leading-tight mb-8">
                A plan built around your dog&apos;s actual triggers.
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
              {/* Behaviors we address */}
              <div className="bg-white border border-offwhite-soft rounded-sm p-8">
                <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
                  Behaviors We Address
                </p>
                <ul className="space-y-3">
                  {behaviors.map((item) => (
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
                  Pricing
                </p>
                <p className="font-display text-4xl text-white font-medium mb-2">
                  $997
                </p>
                <p className="text-white/50 text-sm font-light mb-2">Payment plans available</p>
                <p className="text-white/60 font-light text-sm mb-8">
                  Includes initial assessment, customized protocol, and
                  follow-up sessions. No hidden fees.
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
                <a href="mailto:arthur@serafimdogtraining.com" className="text-forest hover:text-gold transition-colors underline underline-offset-2">
                  arthur@serafimdogtraining.com
                </a>{" "}
                and include your full name, the date of your first session, and your reason for requesting a refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote from Arthur */}
      <section className="bg-forest py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display text-3xl md:text-4xl text-white font-light italic leading-snug mb-6">
            &ldquo;Most reactive dogs aren&apos;t bad. They&apos;re overwhelmed.
            They need structure, not suppression.&rdquo;
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
            Your dog isn&apos;t broken.{" "}
            <em className="italic font-light">Let&apos;s prove it.</em>
          </h2>
          <p className="text-charcoal-light font-light text-lg mb-10 max-w-md mx-auto">
            Book a free consult. We&apos;ll talk through your dog and give
            you an honest picture of what&apos;s possible.
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
