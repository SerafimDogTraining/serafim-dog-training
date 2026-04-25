import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're on the List | Serafim Dog Training",
  description: "You've reserved your founding spot in the Serafim Dog Training community.",
};

export default function CommunityThankYouPage() {
  return (
    <main className="min-h-screen bg-forest flex items-center justify-center px-6 py-24">
      <div className="max-w-lg w-full text-center">
        <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
          You&apos;re In
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-white font-medium leading-tight mb-6">
          Spot reserved.
        </h1>
        <p className="text-white/70 font-light text-lg leading-relaxed mb-4">
          You&apos;re on the founding member waitlist. When we open, you&apos;ll
          be first to know — and you&apos;ll lock in $20/month for life.
        </p>
        <p className="text-white/50 font-light text-sm mb-12">
          Keep an eye on your inbox. We&apos;ll be in touch soon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="text-sm tracking-wide px-7 py-3.5 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 font-semibold"
          >
            Back to Homepage
          </Link>
          <Link
            href="/book"
            className="text-sm tracking-wide px-7 py-3.5 border border-white/30 text-white hover:border-white/60 transition-colors duration-200 font-light"
          >
            Book a Free Consult
          </Link>
        </div>
      </div>
    </main>
  );
}
