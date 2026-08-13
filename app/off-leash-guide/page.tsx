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
  "The 3 pillars every reliable off-leash dog is built on",
  "Why most training plateaus (and how to fix it)",
  "The 30-minute test that proves your dog is trained",
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
          {/* Hero image */}
          <div className="mx-auto mb-7 w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#B0883B]/40 shadow-[0_10px_30px_-12px_rgba(22,53,43,0.45)]">
            <Image
              src="/images/korra-travel.jpg"
              alt="Korra, service dog"
              width={256}
              height={256}
              priority
              className="w-full h-full object-cover"
            />
          </div>

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
