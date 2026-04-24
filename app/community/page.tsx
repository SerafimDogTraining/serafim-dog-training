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

const benefits = [
  "Weekly training tips and technique breakdowns",
  "Direct Q&A access with me",
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
          <p className="text-white/70 font-light text-lg max-w-xl leading-relaxed">
            A private community for dog owners who are serious about doing this
            right. Training tips, Q&amp;A, and support — join the waitlist to
            get notified when we open.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <video
            className="w-full rounded-sm"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/videos/community.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* What's Inside + Waitlist Form */}
      <section className="bg-offwhite py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
                What&apos;s Inside
              </p>
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

            {/* Waitlist Form */}
            <div className="bg-white border border-offwhite-soft rounded-sm p-10">
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-4">
                Join the Waitlist
              </p>
              <h3 className="font-display text-2xl text-forest font-semibold mb-2">
                Be first to know when we open.
              </h3>
              <p className="text-charcoal-muted font-light text-sm leading-relaxed mb-8">
                Drop your info below and we&apos;ll reach out when spots
                become available.
              </p>
              <form action="#" method="POST" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-xs font-medium text-charcoal uppercase tracking-[0.12em] mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first_name"
                      required
                      className="w-full px-4 py-3 border border-offwhite-soft rounded-sm text-sm text-charcoal placeholder:text-charcoal-muted focus:outline-none focus:border-forest transition-colors duration-200"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-xs font-medium text-charcoal uppercase tracking-[0.12em] mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last_name"
                      required
                      className="w-full px-4 py-3 border border-offwhite-soft rounded-sm text-sm text-charcoal placeholder:text-charcoal-muted focus:outline-none focus:border-forest transition-colors duration-200"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-charcoal uppercase tracking-[0.12em] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-offwhite-soft rounded-sm text-sm text-charcoal placeholder:text-charcoal-muted focus:outline-none focus:border-forest transition-colors duration-200"
                    placeholder="jane@example.com"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-sm tracking-wide px-6 py-3.5 bg-forest text-white hover:bg-forest-light transition-colors duration-200 font-semibold rounded-sm mt-2"
                >
                  Join the Waitlist
                </button>
              </form>
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
              href="/book"
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
