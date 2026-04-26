import type { Metadata } from "next";
import Image from "next/image";
import PlaybookForm from "./PlaybookForm";

export const metadata: Metadata = {
  title: "The Handler's Playbook — Free Guide",
  description:
    "Get the free Handler's Playbook and discover 5 habits that separate reliable dogs from trained ones.",
  alternates: {
    canonical: "https://www.serafimdogtraining.com/playbook",
  },
  openGraph: {
    title: "The Handler's Playbook — Free Guide",
    description:
      "5 habits that separate reliable dogs from trained ones. Free PDF, instant delivery.",
    url: "https://www.serafimdogtraining.com/playbook",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const bullets = [
  "Build reliability",
  "Strengthen your bond",
  "Get real-world results",
  "Lead with confidence",
  "Make training stick",
];

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-gold shrink-0 mt-1"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="4 11 8 15 16 6" />
    </svg>
  );
}

export default function PlaybookPage() {
  return (
    <div className="min-h-screen bg-forest-dark grid grid-cols-1 lg:grid-cols-2">
      {/* Hero side */}
      <section className="relative min-h-[70vh] lg:min-h-screen overflow-hidden">
        <Image
          src="/images/playbook-hero.png"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
        {/* Heavy dark overlay so the photo carries the mood while overlay text reads cleanly */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/85 via-forest-dark/80 to-charcoal/90" />

        <div className="relative z-10 flex flex-col justify-center min-h-[70vh] lg:min-h-screen px-6 sm:px-10 lg:px-14 py-16 lg:py-20">
          <div className="max-w-xl">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-gold font-medium mb-6">
              Consistent Handlers = Reliable Dogs.
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-white mb-6">
              Become the handler your dog deserves.
            </h1>
            <p className="text-base sm:text-lg font-light leading-relaxed text-offwhite-soft mb-10 max-w-md">
              Get the free Handler&apos;s Playbook and discover 5 habits that
              separate reliable dogs from trained ones.
            </p>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-base font-light text-offwhite-soft"
                >
                  <CheckIcon />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Form side */}
      <section className="flex items-center justify-center px-6 sm:px-10 lg:px-14 py-16 lg:py-20 bg-offwhite">
        <div className="w-full max-w-md">
          <div className="bg-white border border-offwhite-soft rounded-md shadow-[0_20px_60px_-20px_rgba(27,77,46,0.25)] p-8 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold mb-3">
              Free Instant Access
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-forest leading-tight mb-3">
              Get the Handler&apos;s Playbook.
            </h2>
            <p className="text-sm font-light text-charcoal-light leading-relaxed mb-7">
              Enter your email to get the Handler&apos;s Playbook delivered to
              your inbox.
            </p>

            <PlaybookForm />
          </div>

          <div className="mt-8 text-center">
            <p className="text-[11px] uppercase tracking-[0.18em] text-charcoal-muted font-medium leading-relaxed">
              10+ Years Experience
              <span className="mx-2 text-gold">·</span>
              Hundreds of Dogs Trained
              <span className="mx-2 text-gold">·</span>
              Trusted by Dog Owners
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
