import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";

export const metadata: Metadata = {
  title: "Austin Dog Trainer | Service Dog Training | Serafim Dog Training",
  description:
    "Expert dog training in Austin, TX. Specializing in service dogs, working dogs, and behavioral rehabilitation. Book a free 15-min consult today.",
  alternates: { canonical: "https://www.serafimdogtraining.com" },
  openGraph: {
    title: "Austin Dog Trainer | Service Dog Training | Serafim Dog Training",
    description:
      "Expert dog training in Austin, TX. Specializing in service dogs, working dogs, and behavioral rehabilitation. Book a free 15-min consult today.",
    url: "https://www.serafimdogtraining.com",
  },
};

const offers = [
  {
    href: "/programs/structured-dog",
    name: "Structured Dog Package",
    price: "$800",
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
    price: "$1,600",
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
    price: "$3,200",
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
    name: "Rebecca Reese",
    initials: "RR",
    quote:
      "Arthur has trained a couple of my dogs! He is fantastic. Super good with the dogs and patient with me. I am so impressed with how well my dogs behave now, and how happy they are. You can not go wrong working with him.",
  },
  {
    name: "Milo Bonebrake",
    initials: "MB",
    quote:
      "I loved training with Serafim Dog Training. From our first evaluation phone call to going over everything, I felt constantly supported. He met me where I was, and he was truly great with my dog. I would recommend him to anyone.",
  },
  {
    name: "Jaz Martinez",
    initials: "JM",
    quote:
      "The transformation in my dog Bullet has been incredible, but what impressed me most was that the training wasn't just for my dog, it was for me as an owner too. He taught me how to communicate effectively and build a relationship based on trust. If you want a trainer who invests in both the dog and the owner, this is the person to call.",
  },
  {
    name: "Brayden Nelson",
    initials: "BN",
    quote:
      "Arthur helped me work with my Belgian Malinois, a very reactive and aggressive rescue. My dog wasn't properly socialized and desperately needed proper training before cementing bad habits. The progress has been incredible.",
  },
  {
    name: "Ethan Bognar",
    initials: "EB",
    quote:
      "He is very respectful and has helped me teach my dog a lot. She has learned four new commands in just a week. I was a little worried since it was virtual but it went great, he even demonstrated using his own dog so it was easy to see what to do.",
  },
  {
    name: "Shelly Vincent",
    initials: "SV",
    quote:
      "I used a couple of trainers for my puppy and was reluctant to do it virtually, but the guidance Serafim has given me has been great. My dog is developing quickly with the behaviors we want. I will continue to use him.",
  },
];

const trustBadges = [
  { stat: "Hundreds", label: "of Dogs Trained" },
  { stat: "Expert", label: "Service Dog Training" },
  { stat: "In-Person + Online", label: "Austin & Worldwide" },
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
      <section className="bg-offwhite py-16 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 md:items-center">

            {/* Bio — first on mobile, second on desktop */}
            <div className="order-1 md:order-2 mb-8 md:mb-0">
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
                About Me
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-forest font-medium leading-tight mb-7">
                Consistent Handlers ={" "}
                <em className="italic font-light">Reliable Dogs.</em>
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

            {/* Photo — second on mobile, first on desktop */}
            <div className="order-2 md:order-1 relative">
              <div className="overflow-hidden rounded-sm h-[300px] md:h-auto md:aspect-[4/5]">
                <Image
                  src="/images/arthur-about.jpg"
                  alt="Arthur Serafim and Korra"
                  width={600}
                  height={800}
                  unoptimized
                  className="w-full h-full object-cover object-[center_30%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="hidden md:block absolute -bottom-4 -right-4 w-16 h-16 border-r-4 border-b-4 border-gold" />
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

          <ReviewsCarousel reviews={testimonials} />
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
                Serafim Handler Academy
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-forest font-medium leading-tight mb-5">
                Train your dog alongside me.
              </h2>
              <p className="text-charcoal-light font-light text-lg leading-relaxed mb-3">
                Structured training tracks, weekly live Q&amp;As, and a
                real-world training library. Direct access to me and a
                community of serious handlers.
              </p>
              <p className="text-charcoal-muted font-light text-sm">
                $20 / month · Cancel anytime.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/community"
                className="inline-block text-sm tracking-wide px-8 py-4 bg-forest text-white hover:bg-forest-light transition-colors duration-200 font-semibold"
              >
                Join the Academy
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
            href="/book"
            className="inline-block text-sm tracking-wide px-9 py-4 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 font-semibold"
          >
            Book a Free Consult
          </Link>
        </div>
      </section>
    </>
  );
}
