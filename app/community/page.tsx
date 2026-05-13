import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Serafim Handler Academy — Train Your Dog Alongside Me",
  description:
    "Real-world obedience. Structured training. Direct access to me and a community of serious handlers. $20/month, cancel anytime.",
  alternates: { canonical: "https://www.serafimdogtraining.com/community" },
  openGraph: {
    title: "Serafim Handler Academy — Train Your Dog Alongside Me",
    description:
      "Real-world obedience. Structured training. Direct access to me and a community of serious handlers.",
    url: "https://www.serafimdogtraining.com/community",
  },
};

const ACADEMY_URL = "https://serafim-handler-academy.circle.so/checkout/community-member";

const whoBullets = [
  "You want to train your dog at your own pace — not lock into someone else's calendar.",
  "You want to learn dog training the real way — not the watered-down version social media sells.",
  "You're ready to take ownership of your dog and your handling instead of outsourcing the whole thing.",
];

const whatYouGet = [
  {
    title: "Foundation to Advanced Training Tracks",
    body: "A full curriculum that walks you from day-one foundation work all the way through advanced obedience and real-world reliability. New material added as we go.",
  },
  {
    title: "Weekly Live Q&As",
    body: "Show up live every week. Bring your dog, your video, your questions. You're getting answers from me directly — not a moderator, not a chatbot.",
  },
  {
    title: "Real-World Training Library",
    body: "A growing library of actual training sessions — public access, distractions, neutrality, leash work, off-leash. Watch how it's done in the real world, not a sterile training room.",
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* ── 1. Hero ────────────────────────────────────────────────── */}
      <section className="relative bg-forest pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        {/* Subtle grain */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Copy */}
            <div className="order-2 md:order-1">
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
                Serafim Handler Academy
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-[1.05] tracking-tight mb-6">
                Train Your Dog{" "}
                <em className="italic font-light">Alongside Me.</em>
              </h1>
              <p className="text-white/75 font-light text-lg leading-relaxed max-w-lg mb-9">
                Real-world obedience. Structured training. Direct access to me
                and a community of serious handlers.
              </p>
              <a
                href={ACADEMY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm tracking-wide px-8 py-4 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 font-semibold rounded-sm"
              >
                Join the Academy
              </a>
              <p className="text-white/50 text-xs font-light mt-4 tracking-wide">
                $20 / month · Cancel anytime
              </p>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 relative">
              <div className="relative overflow-hidden rounded-sm aspect-[4/5] md:aspect-[4/5] shadow-2xl">
                <Image
                  src="/images/community-hero.jpg"
                  alt="Arthur Serafim training a dog"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="hidden md:block absolute -bottom-4 -right-4 w-16 h-16 border-r-4 border-b-4 border-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Who This Is For ────────────────────────────────────── */}
      <section className="bg-forest-dark py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
            Inside the Academy
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-medium leading-tight mb-10">
            Who This Is For
          </h2>

          <p className="text-white/75 font-light text-lg leading-relaxed mb-10">
            The Academy is for handlers who want to actually do the work — not
            just watch someone else do it. Whether you&apos;re starting with a
            puppy, fixing real problems in an adult dog, or building toward
            service or working-level reliability, this is the room for you.
          </p>

          <ul className="space-y-5 mb-12">
            {whoBullets.map((line) => (
              <li key={line} className="flex gap-4 items-start">
                <span className="text-gold font-display text-2xl leading-none mt-0.5 shrink-0">
                  →
                </span>
                <span className="text-white/85 font-light leading-relaxed text-lg">
                  {line}
                </span>
              </li>
            ))}
          </ul>

          <div className="border-l-4 border-gold pl-7">
            <p className="font-display text-2xl md:text-3xl text-white font-light italic leading-snug">
              If you&apos;re looking for a quick fix, this isn&apos;t it. If
              you&apos;re ready to put in the work, this is where it happens.
            </p>
          </div>

          <div className="mt-12">
            <a
              href={ACADEMY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm tracking-wide px-8 py-4 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 font-semibold rounded-sm"
            >
              Join the Academy
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. What You Get ───────────────────────────────────────── */}
      <section className="bg-offwhite py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
              What You Get
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-forest font-medium leading-tight max-w-xl">
              Everything you need to train a reliable dog.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {whatYouGet.map((card) => (
              <div
                key={card.title}
                className="flex flex-col p-8 bg-white border border-offwhite-soft rounded-sm"
              >
                <div className="w-10 h-10 mb-6 rounded-sm bg-forest flex items-center justify-center">
                  <span className="text-gold font-display text-xl font-semibold">
                    ✓
                  </span>
                </div>
                <h3 className="font-display text-2xl text-forest font-semibold mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-charcoal-light font-light leading-relaxed text-[0.9375rem]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <a
              href={ACADEMY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm tracking-wide px-8 py-4 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 font-semibold rounded-sm"
            >
              Join the Academy
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. Course Library ─────────────────────────────────────── */}
      <section className="bg-forest py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
              Course Library
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-medium leading-tight mb-4">
              Here&apos;s what&apos;s waiting for you inside.
            </h2>
            <p className="text-white/70 font-light text-lg leading-relaxed">
              Structured tracks built to take you from foundation work all the
              way to advanced reliability — puppy to working dog, basics to
              service dog standards.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-sm border border-white/10 shadow-2xl bg-white/5">
              <Image
                src="/images/community-courses-preview.png"
                alt="Screenshot of the Serafim Handler Academy course library showing courses for Training Basics, Foundations, Puppy Training, Socialization, Behavioral Challenges, Tools & Leashes, Corrections, Real World Application, Advanced Obedience, Luring/Shaping/Targeting, High Drive & Working Dog, and Service Dog"
                width={1204}
                height={907}
                unoptimized
                className="w-full h-auto block"
                sizes="(max-width: 1200px) 100vw, 1152px"
              />
            </div>
            <div className="hidden md:block absolute -bottom-4 -right-4 w-16 h-16 border-r-4 border-b-4 border-gold" />
          </div>

          <div className="mt-14">
            <a
              href={ACADEMY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm tracking-wide px-8 py-4 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 font-semibold rounded-sm"
            >
              Join the Academy
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. Pricing ────────────────────────────────────────────── */}
      <section className="bg-offwhite py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-offwhite-soft rounded-sm p-10 md:p-14 text-center">
            <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
              Membership
            </p>

            <div className="mb-3">
              <span className="font-display text-6xl md:text-7xl text-forest font-medium leading-none">
                $20
              </span>
              <span className="font-display text-2xl text-charcoal-muted font-light ml-2">
                / month
              </span>
            </div>

            <p className="text-charcoal-muted font-light text-sm mb-10">
              Cancel anytime.
            </p>

            <a
              href={ACADEMY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-sm md:text-base tracking-wide px-8 py-5 bg-forest text-white hover:bg-forest-light transition-colors duration-200 font-semibold rounded-sm"
            >
              Join Serafim Handler Academy
            </a>

            <p className="text-charcoal-muted text-xs font-light mt-5 leading-relaxed">
              Hosted on Circle. You&apos;ll get instant access to the
              curriculum, library, and the next live Q&amp;A.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
