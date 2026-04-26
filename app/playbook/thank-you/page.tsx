import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Check Your Inbox — The Handler's Playbook",
  description:
    "Your Handler's Playbook is on its way. Check your inbox in the next 2 minutes.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-forest text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-xl w-full text-center">
        <div className="w-12 h-px bg-gold mx-auto mb-10" />
        <p className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold mb-6">
          You&apos;re In
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight text-white mb-6">
          Check your inbox.
        </h1>
        <p className="text-base sm:text-lg font-light leading-relaxed text-white/80 mb-10">
          Your Handler&apos;s Playbook is on its way. If you don&apos;t see it
          in 2 minutes, check your spam folder.
        </p>

        <a
          href="/handlers-playbook.pdf"
          className="inline-block text-sm tracking-wide text-gold hover:text-gold-light underline underline-offset-4 mb-12"
        >
          Download directly instead →
        </a>

        <div className="border-t border-white/15 pt-10">
          <Link
            href="/"
            className="inline-block text-sm tracking-[0.14em] uppercase font-semibold px-7 py-3.5 bg-gold text-forest rounded-sm hover:bg-gold-light transition-colors duration-200"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
