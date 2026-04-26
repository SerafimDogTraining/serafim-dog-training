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
      className="w-4 h-4 text-gold shrink-0 mt-0.5"
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
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left: full photo, height follows image aspect ratio */}
      <section>
        <Image
          src="/images/playbook-hero.png"
          alt=""
          width={1023}
          height={1537}
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="w-full h-auto"
        />
      </section>

      {/* Right: form card */}
      <section className="flex items-center justify-center px-6 sm:px-10 lg:px-14 py-16 lg:py-20 bg-offwhite">
        <div className="w-full max-w-md">
          <div className="bg-white border border-offwhite-soft rounded-md shadow-[0_20px_60px_-20px_rgba(27,77,46,0.25)] p-8 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold mb-3">
              Free Instant Access
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-forest leading-[1.1] mb-4">
              Become the handler your dog deserves.
            </h1>
            <p className="text-sm sm:text-base font-light text-charcoal-light leading-relaxed mb-6">
              Get the free Handler&apos;s Playbook and discover 5 habits that
              separate reliable dogs from trained ones.
            </p>

            <ul className="space-y-2 mb-8">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-sm font-light text-charcoal-light"
                >
                  <CheckIcon />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

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
