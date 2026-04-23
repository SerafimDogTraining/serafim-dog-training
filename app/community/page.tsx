import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the Serafim Dog Training community on Skool. Training tips, Q&A, exclusive resources for clients and dog handlers.",
  alternates: { canonical: "https://www.serafimdogtraining.com/community" },
  openGraph: {
    title: "Community — Serafim Dog Training",
    description:
      "Join our training community. Tips, Q&A, and exclusive resources.",
    url: "https://www.serafimdogtraining.com/community",
  },
};

const SKOOL_URL =
  process.env.NEXT_PUBLIC_SKOOL_URL ?? "https://www.skool.com/serafim-dog-training";

const benefits = [
  "Weekly training tips and technique breakdowns",
  "Direct Q&A access with Arthur",
  "Case study walkthroughs from real training sessions",
  "Early access to new programs and pricing",
  "Community of owners who are serious about their dogs",
  "Resources for service dog handlers and working dog owners",
];

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
            Community
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-medium leading-tight max-w-2xl mb-7">
            The Serafim Dog Training Community
          </h1>
          <p className="text-white/70 font-light text-lg max-w-xl leading-relaxed mb-10">
            A private community for dog owners who are serious about doing this
            right. Training tips, Q&amp;A, and support — on Skool.
          </p>
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm tracking-wide px-7 py-3.5 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 font-semibold"
          >
            Join the Community →
          </a>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-offwhite py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
                What&apos;s Inside
              </p>
              <h2 className="font-display text-4xl text-forest font-medium leading-tight mb-8">
                More than a group chat.
              </h2>
              <ul className="space-y-4">
                {benefits.map((item) => (
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

            <div className="bg-white border border-offwhite-soft rounded-sm p-10 text-center">
              <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-9 h-9 text-forest"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-forest font-semibold mb-3">
                Join on Skool
              </h3>
              <p className="text-charcoal-muted font-light text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                We host the community on Skool — a clean, focused platform
                built for learning communities, not social media noise.
              </p>
              <a
                href={SKOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm tracking-wide px-6 py-3 bg-forest text-white hover:bg-forest-light transition-colors duration-200 font-medium rounded-sm"
              >
                Join the Community →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to consult */}
      <section className="bg-forest py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-white font-medium mb-3">
                Want personalized training?
              </h2>
              <p className="text-white/60 font-light max-w-md">
                The community is free. One-on-one training is where the real
                transformation happens.
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
