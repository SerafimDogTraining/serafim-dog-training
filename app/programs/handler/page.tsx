import type { Metadata } from "next";
import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";

export const metadata: Metadata = {
  title: "Advanced Dog Training Austin | The Handler Program | Serafim",
  description:
    "The most comprehensive dog training experience — 12 sessions of advanced handler education, real-world proofing, and complete transformation. Austin + online.",
  alternates: {
    canonical: "https://www.serafimdogtraining.com/programs/handler",
  },
  openGraph: {
    title: "The Handler Program — Serafim Dog Training",
    description:
      "Our most comprehensive experience — deep handler education, advanced training, and complete dog transformation.",
    url: "https://www.serafimdogtraining.com/programs/handler",
  },
};

const whatIsIncluded = [
  "Comprehensive behavioral assessment and written profile",
  "Customized multi-phase training roadmap",
  "Foundation obedience — precision level",
  "Advanced task, protection, or sport work (dog dependent)",
  "Handler education — you become a competent handler",
  "Leash mechanics, body language, and timing",
  "Real-world environment proofing (on and off leash)",
  "Distraction, drive, and threshold management",
  "Scent work or bite work track (for eligible dogs)",
  "Public access and advanced handler preparation",
  "Monthly progress reports with video documentation",
  "Priority support between sessions via direct message",
];

const idealFor = [
  "Owners who want to deeply understand their dog, not just manage it",
  "Those with working breed dogs who need mental and physical engagement",
  "Anyone pursuing service dog, personal protection, or sport dog goals",
  "People who have tried other programs and want something that actually sticks",
  "Handlers who want to be genuinely good at this — not just keep up",
];

const phases = [
  {
    number: "01",
    title: "Assessment & Foundation",
    description:
      "We start with a full behavioral and temperament assessment. Then we build the non-negotiable foundation — focus, impulse control, and clear communication.",
  },
  {
    number: "02",
    title: "Skill Development",
    description:
      "Advanced obedience, handler mechanics, and any specialized track (service, sport, protection, scent). This phase is where real transformation happens.",
  },
  {
    number: "03",
    title: "Real-World Proofing",
    description:
      "We take everything out of the controlled environment. Busy streets, markets, other dogs, strangers — your dog performs everywhere.",
  },
  {
    number: "04",
    title: "Handler Mastery",
    description:
      "The final phase focuses on you. By the end, you know how to read, communicate with, and lead your dog without me in the room.",
  },
];

export default function HandlerProgramPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
            Program · Most Comprehensive
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-medium leading-tight max-w-2xl mb-7">
            The Handler Program
          </h1>
          <p className="text-white/70 font-light text-lg max-w-xl leading-relaxed mb-10">
            This is the most thorough training experience we offer. It
            isn&apos;t just about your dog — it&apos;s about building a team.
            You and your dog leave as a unit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link
              href="/book"
              className="inline-block text-sm tracking-wide px-7 py-3.5 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 font-semibold"
            >
              Book a Free Consult
            </Link>
            <CheckoutButton
              program="handler"
              label="Enroll — $3,000 Paid in Full"
              className="text-sm tracking-wide px-7 py-3.5 border border-white/60 text-white hover:bg-white/10 transition-all duration-200 font-medium cursor-pointer"
            />
          </div>
          <p className="text-white/40 text-xs font-light">
            Payment plans available — discuss on your call.
          </p>
        </div>
      </section>

      {/* Program Phases */}
      <section className="bg-offwhite py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
              How It Works
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-medium leading-tight">
              Four phases. Complete transformation.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="bg-white border border-offwhite-soft rounded-sm p-8"
              >
                <span className="font-mono text-3xl text-gold/30 font-light block mb-4">
                  {phase.number}
                </span>
                <h3 className="font-display text-xl text-forest font-semibold mb-3">
                  {phase.title}
                </h3>
                <p className="text-charcoal-light font-light leading-relaxed text-sm">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included + Who It's For */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
                What&apos;s Included
              </p>
              <h2 className="font-display text-3xl text-forest font-medium leading-tight mb-8">
                Everything we have to offer.
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
              <div className="bg-offwhite border border-offwhite-soft rounded-sm p-8">
                <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
                  Who This Is For
                </p>
                <ul className="space-y-3">
                  {idealFor.map((item) => (
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
                <p className="font-display text-4xl text-white font-medium mb-1">
                  $3,000
                </p>
                <p className="text-white/50 text-sm mb-1 font-light">
                  Paid in full
                </p>
                <p className="font-display text-2xl text-white/70 font-light mb-1">
                  or $3,500
                </p>
                <p className="text-white/50 text-sm mb-8 font-light">
                  Payment plan (installments)
                </p>
                <div className="space-y-3">
                  <Link
                    href="/book"
                    className="block text-sm tracking-wide px-6 py-3 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 text-center font-semibold rounded-sm"
                  >
                    Book a Free Consult
                  </Link>
                  <CheckoutButton
                    program="handler-plan"
                    label="Payment Plan — $3,500"
                    className="w-full block text-sm tracking-wide px-6 py-3 border border-white/30 text-white/80 hover:border-white hover:text-white transition-all duration-200 text-center font-medium rounded-sm cursor-pointer"
                  />
                </div>
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

      {/* Quote */}
      <section className="bg-forest py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display text-3xl md:text-4xl text-white font-light italic leading-snug mb-6">
            &ldquo;The goal isn&apos;t a well-trained dog. It&apos;s a
            well-trained team.&rdquo;
          </p>
          <p className="text-gold text-xs uppercase tracking-widest font-medium">
            — Arthur Serafim
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-offwhite py-20 md:py-24 border-t border-offwhite-soft">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-forest font-medium leading-tight mb-6">
            This is the most serious thing we offer.
          </h2>
          <p className="text-charcoal-light font-light text-lg mb-10 max-w-lg mx-auto">
            If you&apos;re ready to commit — to yourself, to your dog, to the
            process — start with a free 15-min call.
          </p>
          <Link
            href="/book"
            className="inline-block text-sm tracking-wide px-9 py-4 bg-forest text-white hover:bg-forest-light transition-colors duration-200 font-semibold"
          >
            Book a Free Consult
          </Link>
        </div>
      </section>
    </>
  );
}
