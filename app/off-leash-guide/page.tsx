import type { Metadata } from "next";
import Image from "next/image";
import Analytics from "./Analytics";
import OffLeashForm from "./OffLeashForm";

export const metadata: Metadata = {
  title: "The Off-Leash Reliability Playbook | Serafim Dog Training",
  description:
    "Free guide: The 3 pillars I use to train reliable off-leash dogs, including my service dog Korra.",
  robots: {
    index: false,
    follow: false,
  },
};

const bullets = [
  "The 3-pillar framework I use with every dog, from recall to full off-leash freedom",
  "Why most dogs plateau — and the one shift that breaks through it",
  "A simple 30-minute test to know if your dog is truly ready for off-leash freedom",
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#B0883B] shrink-0 mt-0.5"
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

export default function OffLeashGuidePage() {
  return (
    <>
      <Analytics />

      <div className="min-h-screen bg-[#F5F1E8] px-5 py-10 sm:py-14">
        <div className="w-full max-w-[600px] mx-auto text-center">
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid #B0883B",
              margin: "0 auto 24px",
            }}
          >
            <Image
              src="/images/arthur-korra-summit-offleash.jpg"
              alt="Arthur Serafim and Korra off-leash on a mountain"
              width={120}
              height={120}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>

          {/* Wordmark — plain text, not a link (page has no outbound nav) */}
          <p className="text-sm sm:text-base uppercase tracking-[0.22em] font-semibold text-[#16352B] mb-8">
            Serafim Dog Training
          </p>

          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#16352B] leading-[1.15] mb-4">
            The Off-Leash Reliability Playbook
          </h1>

          <p className="text-base sm:text-lg font-light text-[#16352B]/80 leading-relaxed mb-8">
            The 3 pillars I use to train reliable off-leash dogs — including my
            service dog Korra.
          </p>

          <ul className="space-y-3 mb-8 text-left inline-block">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-[15px] sm:text-base font-light text-[#16352B]"
              >
                <CheckIcon />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <OffLeashForm />

          <p className="mt-10 text-[11px] uppercase tracking-[0.18em] text-[#16352B]/50 font-medium">
            By Arthur Serafim — Serafim Dog Training
          </p>
        </div>
      </div>
    </>
  );
}
