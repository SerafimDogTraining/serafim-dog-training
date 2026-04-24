import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Serafim Dog Training",
  description:
    "Expert dog training — in person in Austin, online everywhere. Working dogs, service dogs, and behavioral rehabilitation. Every dog gets a custom plan.",
  alternates: { canonical: "https://www.serafimdogtraining.com" },
  openGraph: {
    title: "Serafim Dog Training",
    description:
      "Expert dog training — in person in Austin, online everywhere. Working dogs, service dogs, and behavioral rehabilitation.",
    url: "https://www.serafimdogtraining.com",
  },
};

const offers = [
  {
    href: "/programs/structured-dog",
    name: "Structured Dog Package",
    price: "$500",
    features: [
      "3 sessions 1-on-1 with me",
      "How to build structure from the start",
      "Best commands to focus on early",
      "How to set your dog up for a successful life",
    ],
    accent: null as string | null,
  },
  {
    href: "/programs/behavioral-correction",
    name: "Behavioral Correction",
    price: "$999",
    features: [
      "6 sessions 1-on-1 with me",
      "Video review between sessions",
      "1 year free community access (when it launches)",
    ],
    accent: "Most Popular" as string | null,
  },
  {
    href: "/programs/handler",
    name: "Handler Package",
    price: "$3,000",
    features: [
      "12 weekly sessions 1-on-1",
      "Everything in the other packages",
      "Lifetime community access",
    ],
    accent: null as string | null,
  },
];

const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    text: "Your dog is reactive, unpredictable, or hard to manage in public",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    text: "You've tried other trainers before — nothing stuck",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    text: "You need guidance on task training or public access work — not just basic commands",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    text: "You feel like you and your dog aren't on the same team",
  },
];

const testimonials = [
  {
    name: "Becky Reece",
    breed: "Golden Retriever",
    tag: "Therapy Dog · Deep Pressure Therapy",
    quote:
      "I needed my golden trained for Deep Pressure Therapy for my dad, as well as for hospital and home visits as a therapy dog. Arthur built a program around both. She now performs DPT on command and does regular visits to my dad's hospital and home. The training was thorough, the results are real.",
    initials: "BR",
  },
  {
    name: "Sophie Gillet",
    breed: "Miniature Goldendoodle",
    tag: "Service Dog · Public Access Training",
    quote:
      "Training a service dog felt overwhelming until I found Arthur. He broke everything down — foundation, public access, real-world scenarios. My goldendoodle is now fully task trained and handles every environment with complete confidence — including air travel. The public access work Arthur put in is real.",
    initials: "SG",
  },
  {
    name: "Brandon N.",
    breed: "Belgian Malinois",
    tag: "Behavioral Rehab · Bite Work · Scent Work",
    quote:
      "My Malinois was reactive and I didn't understand why. Arthur didn't try to suppress the behavior — he helped me see what my dog actually needed. He needed a job. Arthur channeled everything into bite work and scent work. He's a completely different dog. We both have a purpose now.",
    initials: "BN",
  },
];

const trustBadges = [
  { stat: "100+", label: "Dogs Trained" },
  { stat: "Expert", label: "Service Dog Training" },
  { stat: "In-Person", label: "Austin + Online" },
  { stat: "Custom", label: "Training Plans" },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Serafim Dog Training",
  description:
    "Expert dog training — in person in Austin, online everywhere. Working dogs, service dogs, and behavioral rehabilitation.",
  url: "https://www.serafimdogtraining.com",
  areaServed: [
    { "@type": "City", name: "Austin", containedInPlace: "Texas, US" },
    { "@type": "Country", name: "United States" },
    "Worldwide",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Austin",
    addressRegion: "TX",
    addressCountry: "US",
  },
  priceRange: "$$",
  sameAs: [],
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── 1. Hero ────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── 2. Offers ─────────────────────────────────────────────── */}
      <section id="programs" className="bg-offwhite py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
              Programs
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-forest font-medium leading-tight">
              Find the right fit for your dog.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {offers.map((offer) => {
              const highlighted = offer.accent === "Most Popular";
              return (
                <div
                  key={offer.href}
                  className={`flex flex-col rounded-sm overflow-hidden border ${
                    highlighted
                      ? "bg-forest border-forest"
                      : "bg-white border-offwhite-soft"
                  }`}
                >
                  {offer.accent && (
                    <div className="px-8 py-2 bg-gold">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-forest">
                        {offer.accent}
                      </p>
                    </div>
                  )}
                  <div className="flex flex-col flex-1 p-8">
                    <h3
                      className={`font-display text-2xl font-semibold mb-3 ${
                        highlighted ? "text-white" : "text-forest"
                      }`}
                    >
                      {offer.name}
                    </h3>
                    <div className="mb-6">
                      <p
                        className={`font-display text-3xl font-medium ${
                          highlighted ? "text-white" : "text-charcoal"
                        }`}
                      >
                        {offer.price}
                      </p>
                      <p
                        className={`text-xs font-light mt-1 ${
                          highlighted ? "text-white/50" : "text-charcoal-muted"
                        }`}
                      >
                        Flexible payment plans available
                      </p>
                    </div>
                    <ul className="space-y-3 flex-1 mb-8">
                      {offer.features.map((f) => (
                        <li key={f} className="flex gap-3 items-start">
                          <svg
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              highlighted ? "text-gold" : "text-forest"
                            }`}
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
                          <span
                            className={`text-sm font-light leading-relaxed ${
                              highlighted ? "text-white/80" : "text-charcoal-light"
                            }`}
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={offer.href}
                      className={`block text-sm tracking-wide px-6 py-3 text-center font-semibold rounded-sm transition-colors duration-200 ${
                        highlighted
                          ? "bg-gold text-forest hover:bg-gold-light"
                          : "bg-forest text-white hover:bg-forest-light"
                      }`}
                    >
                      Get Started
                    </Link>
                    <p className={`text-[11px] text-center mt-3 font-light ${highlighted ? "text-white/40" : "text-charcoal-muted"}`}>
                      7-day money-back guarantee
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Pain Section ───────────────────────────────────────── */}
      <section className="bg-forest py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-display text-4xl md:text-5xl text-gold font-medium leading-tight max-w-xl">
              Common Frustrations We Hear
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 bg-white/5 border border-white/10 rounded-sm"
              >
                <div className="text-gold shrink-0 mt-0.5">{point.icon}</div>
                <p className="text-white/75 font-light leading-relaxed text-base">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl border-l-4 border-gold pl-7">
            <p className="font-display text-2xl md:text-3xl text-white font-light italic leading-snug">
              &ldquo;Any dog can be trained if they have consistent and
              educated owners.&rdquo;
            </p>
            <p className="text-gold text-xs uppercase tracking-widest mt-4 font-medium">
              — Arthur Serafim
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Credibility Bridge ─────────────────────────────────── */}
      <section className="bg-offwhite py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative h-[420px] md:h-auto md:aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="/images/arthur-about.jpg"
                  alt="Arthur Serafim and Korra"
                  fill
                  className="object-cover object-[center_30%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-4 border-b-4 border-gold" />
            </div>

            {/* Bio */}
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
                About Me
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-forest font-medium leading-tight mb-7">
                Not Just a Trainer.{" "}
                <em className="italic font-light">A Dog Handler.</em>
              </h2>
              <div className="space-y-4 text-base font-light leading-relaxed text-charcoal-light mb-10">
                <p>
                  I started training dogs in 2020 and built my practice through
                  results. Based in Austin, TX — I trained Korra as a service
                  dog from a puppy, and that experience is what made me fall in
                  love with dog training.
                </p>
                <p>
                  I specialize in working dogs, service dog training, and
                  behavioral rehabilitation. Every client gets a custom plan
                  built around their specific dog, their specific life, and
                  their specific goals.
                </p>
                <p>
                  I don&apos;t just train dogs — I train handlers. The
                  relationship you build with your dog during this process is as
                  important as any command your dog learns.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.stat}
                    className="p-4 bg-white border border-offwhite-soft rounded-sm"
                  >
                    <div className="font-display text-2xl text-forest font-semibold leading-none mb-1">
                      {badge.stat}
                    </div>
                    <div className="text-xs text-charcoal-muted font-light tracking-wide">
                      {badge.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Testimonials ───────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
              Client Stories
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-forest font-medium leading-tight">
              Results that speak for themselves.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col p-8 bg-offwhite border border-offwhite-soft rounded-sm"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold fill-gold" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-charcoal-light font-light leading-relaxed text-[0.9375rem] italic flex-1 mb-7">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-semibold">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">{t.name}</p>
                    <p className="text-xs text-charcoal-muted font-light">{t.breed}</p>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-offwhite-soft">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
                    {t.tag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Strip ──────────────────────────────────────────── */}
      <section className="bg-white pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/images/korra-lucas.jpg"
              alt="Korra and Lucas"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1200px) 100vw, 1152px"
            />
          </div>
        </div>
      </section>

      {/* ── 6. Community ──────────────────────────────────────────── */}
      <section className="bg-offwhite py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-xl">
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
                Community
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-forest font-medium leading-tight mb-5">
                The Serafim Dog Training Community
              </h2>
              <p className="text-charcoal-light font-light text-lg leading-relaxed mb-3">
                Monthly access to training resources, live Q&amp;As, case study
                breakdowns, and a community of serious dog owners and handlers
                working toward real results.
              </p>
              <p className="text-charcoal-muted font-light text-sm">
                $30 / month — join the waitlist below.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/community"
                className="inline-block text-sm tracking-wide px-8 py-4 bg-forest text-white hover:bg-forest-light transition-colors duration-200 font-semibold"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Final CTA Banner ───────────────────────────────────── */}
      <section className="bg-forest py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
            Get Started
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-medium leading-tight mb-6 max-w-2xl mx-auto">
            Ready to get started?{" "}
            <em className="italic font-light">
              Let&apos;s build a plan for your dog.
            </em>
          </h2>
          <Link
            href="https://calendly.com/arthur-serafimdogtraining/15min"
              target="_blank"
              rel="noopener noreferrer"
            className="inline-block text-sm tracking-wide px-9 py-4 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 font-semibold"
          >
            Book a Free Consult
          </Link>
        </div>
      </section>
    </>
  );
}
