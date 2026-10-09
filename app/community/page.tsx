import type { Metadata } from "next";
import Image from "next/image";
import WinsCarousel from "@/components/WinsCarousel";

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

const ACADEMY_URL =
  "https://serafim-handler-academy.circle.so/checkout/community-member";

const GOLD_BTN =
  "inline-block text-sm tracking-wide px-8 py-4 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 font-semibold rounded-sm";

const wins = [
  {
    quote:
      "I was so proud of Lucky when he settled with another dog nearby. His threshold keeps improving and he checks in with me more. Reactivity is no easy thing, but we're moving step by step and getting better every day.",
    name: "Giona Young",
    detail: "Lucky, 6 years old",
  },
  {
    quote:
      "A couple weeks ago Kobe wouldn't even give me eye contact. Now I can hold him in a down with the neighbor's dog barking, and walk out of his sight before releasing him. Slowly but surely, we'll get there.",
    name: "Kris & Kobe",
    detail: "Kobe, Goldendoodle, 3 years old",
  },
  {
    quote:
      "Bruno and I working off-leash during our play session. For a dog who used to bark and lunge at every dog in sight, moments like these mean everything. Still a work in progress, but we're getting there.",
    name: "Chang Li",
    detail: "Bruno",
  },
  {
    quote:
      "I took Layla for a walk at the mall and she did really well. I almost cried.",
    name: "Angel",
    detail: "Layla",
  },
];

const reviews = [
  {
    initial: "E",
    name: "Ethan Bognar",
    color: "#E8894A",
    text: "He is very respectful and has helped me teach my dog a lot. She has learned four new commands in just a week. I was a little worried since it was virtual but it went great, he even demonstrated using his own dog so it was easy to see what to do.",
  },
  {
    initial: "M",
    name: "Milo Bonebrake",
    color: "#4A78C0",
    text: "I loved training with Serafim Dog Training. From our first evaluation phone call to going over everything, I felt constantly supported. He met me where I was, and he was truly great with my dog. I would recommend him to anyone.",
  },
  {
    initial: "R",
    name: "Rebecca Reese",
    color: "#8A7F72",
    text: "Arthur has trained a couple of my dogs! He is fantastic. Super good with the dogs and patient with me. I am so impressed with how well my dogs behave now, and how happy they are. You can not go wrong working with him.",
  },
  {
    initial: "B",
    name: "Brayden Nelson",
    color: "#6A5ACD",
    text: "Arthur helped me work with my Belgian Malinois, a very reactive and aggressive rescue. My dog wasn't properly socialized and desperately needed proper training before cementing bad habits. The progress has been incredible.",
  },
  {
    initial: "S",
    name: "Shelly Vincent",
    color: "#5A9B7A",
    text: "I used a couple of trainers for my puppy and was reluctant to do it virtually, but the guidance Serafim has given me has been great. My dog is developing quickly with the behaviors we want. I will continue to use him.",
  },
  {
    initial: "J",
    name: "Jaz Martinez",
    color: "#C0392B",
    text: "The transformation in my dog Bullet has been incredible, but what impressed me most was that the training wasn't just for my dog, it was for me as an owner too. He taught me how to communicate effectively with my dog, understand his behavior, and build a relationship based on trust. If you want a trainer who invests in both the dog and the owner, this is the person to call.",
  },
];

const stats = [
  { platform: "YouTube", number: "187K", label: "subscribers" },
  { platform: "Facebook", number: "186K", label: "followers" },
  { platform: "Instagram", number: "126K", label: "followers" },
  { platform: "TikTok", number: "112.7K", label: "followers" },
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

const whoBullets = [
  "You want to train your dog at your own pace — not lock into someone else's calendar.",
  "You want to learn dog training the real way — not the watered-down version social media sells.",
  "You're ready to take ownership of your dog and your handling instead of outsourcing the whole thing.",
];

const faqs = [
  {
    q: "What if I'm a complete beginner?",
    a: "That is exactly who the foundation tracks are built for. You start at day one and move at your own pace, with me available every week to answer your questions directly.",
  },
  {
    q: "How is this different from your 1-on-1 programs?",
    a: "My 1-on-1 programs are hands-on and done with you directly. The Academy gives you the same method and structure at your own pace, plus weekly live access to me, for a fraction of the cost.",
  },
  {
    q: "How much time does it take each week?",
    a: "As much or as little as you want. Short daily reps beat long occasional sessions. The curriculum is built so you can train in the pockets of time you already have.",
  },
  {
    q: "Can I really cancel anytime?",
    a: "Yes. No contracts and no hoops. You can cancel in a couple of clicks whenever you want.",
  },
  {
    q: "Will this work for my breed or my dog's problem?",
    a: "The method is built on how dogs actually learn, so it applies across breeds and across problems, from reactivity to neutrality to off-leash reliability.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-gold">
          <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" />
        </svg>
      ))}
    </div>
  );
}

export default function CommunityPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative bg-forest pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
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
            <div className="order-2 md:order-1">
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
                Serafim Handler Academy
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-[1.05] tracking-tight mb-6">
                Build a dog you can actually{" "}
                <em className="italic font-light">trust anywhere.</em>
              </h1>
              <p className="text-white/75 font-light text-lg leading-relaxed max-w-lg mb-9">
                Structured training, real-world reliability, and direct access
                to me every week. Train your dog alongside me and a community of
                serious handlers.
              </p>
              <a
                href={ACADEMY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={GOLD_BTN}
              >
                Join the Academy
              </a>
              <p className="text-white/50 text-xs font-light mt-4 tracking-wide">
                $20 / month · Cancel anytime
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative overflow-hidden rounded-sm aspect-[4/5] shadow-2xl">
                <Image
                  src="/images/arthur-korra-hero.jpg"
                  alt="Arthur Serafim with Korra, his black German Shepherd service dog"
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

      {/* 2. Real Wins */}
      <section className="bg-offwhite py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
              Real wins from real members
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-forest font-medium leading-tight mb-4">
              Progress happening every week.
            </h2>
            <p className="text-charcoal-light font-light text-lg leading-relaxed">
              These are the moments members share inside the Academy.
            </p>
          </div>
          <WinsCarousel wins={wins} />
          <div className="text-center mt-14">
            <a
              href={ACADEMY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={GOLD_BTN}
            >
              Join the Academy
            </a>
          </div>
        </div>
      </section>

      {/* 3. Reviews */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
              What handlers are saying
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-forest font-medium leading-tight mb-5">
              Rated 5 stars by dog owners.
            </h2>
            <div className="flex justify-center">
              <Stars />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-offwhite border border-offwhite-soft rounded-sm p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold shrink-0"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-[0.95rem]">
                      {r.name}
                    </p>
                    <Stars />
                  </div>
                </div>
                <p className="text-charcoal-light font-light leading-relaxed text-[0.9375rem]">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <a
              href={ACADEMY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={GOLD_BTN}
            >
              Join the Academy
            </a>
          </div>
        </div>
      </section>

      {/* 4. Authority / Reach */}
      <section className="bg-forest-dark py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
            Trusted at scale
          </p>
          <p className="font-display text-7xl md:text-8xl text-gold font-semibold leading-none">
            600K+
          </p>
          <p className="text-white/70 font-light tracking-wide mt-3 mb-14">
            dog owners following how I train, across every platform
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div
                key={s.platform}
                className="bg-white/[0.04] border border-gold/40 rounded-sm py-7 px-4"
              >
                <p className="text-gold text-xs uppercase tracking-[0.12em] font-semibold mb-3">
                  {s.platform}
                </p>
                <p className="font-display text-4xl text-white font-semibold leading-none">
                  {s.number}
                </p>
                <p className="text-white/55 text-sm mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What You Get */}
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
              className={GOLD_BTN}
            >
              Join the Academy
            </a>
          </div>
        </div>
      </section>

      {/* 6. Meet Your Trainer */}
      <section className="bg-forest py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
            Meet your trainer
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-medium leading-tight mb-8">
            Arthur Serafim
          </h2>
          <p className="text-white/75 font-light text-lg leading-relaxed mb-6">
            My approach starts with the relationship. Most of what owners
            struggle with does not come from missing commands. It comes from a
            dog who is overwhelmed, disconnected, or never taught how to be
            neutral in the world.
          </p>
          <p className="text-white/75 font-light text-lg leading-relaxed">
            I focus on the behavioral and ethological side of your dog, building
            real engagement and a bond you can actually rely on. I teach the
            handler, not just the dog, so the results hold long after the
            session ends.
          </p>
        </div>
      </section>

      {/* 7. Who This Is For */}
      <section className="bg-offwhite py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
            Inside the Academy
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-forest font-medium leading-tight mb-10">
            For handlers ready to do the work.
          </h2>
          <p className="text-charcoal-light font-light text-lg leading-relaxed mb-10">
            Whether you&apos;re starting with a puppy, fixing real problems in an
            adult dog, or building toward service or working-level reliability,
            this is the room for you.
          </p>
          <ul className="space-y-5 mb-12">
            {whoBullets.map((line) => (
              <li key={line} className="flex gap-4 items-start">
                <span className="text-gold font-display text-2xl leading-none mt-0.5 shrink-0">
                  →
                </span>
                <span className="text-charcoal-light font-light leading-relaxed text-lg">
                  {line}
                </span>
              </li>
            ))}
          </ul>
          <div className="border-l-4 border-gold pl-7">
            <p className="font-display text-2xl md:text-3xl text-forest font-light italic leading-snug">
              If you&apos;re looking for a quick fix, this isn&apos;t it. If
              you&apos;re ready to put in the work, this is where it happens.
            </p>
          </div>
          <div className="mt-12">
            <a
              href={ACADEMY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={GOLD_BTN}
            >
              Join the Academy
            </a>
          </div>
        </div>
      </section>

      {/* 8. Course Library */}
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
                alt="Serafim Handler Academy course library preview"
                width={1204}
                height={907}
                unoptimized
                className="w-full h-auto block"
                sizes="(max-width: 1200px) 100vw, 1152px"
              />
            </div>
            <div className="hidden md:block absolute -bottom-4 -right-4 w-16 h-16 border-r-4 border-b-4 border-gold" />
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
              Questions
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-forest font-medium leading-tight">
              Before you join.
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-offwhite border border-offwhite-soft rounded-sm px-6"
              >
                <summary className="flex justify-between items-center gap-6 cursor-pointer py-5 font-semibold text-charcoal list-none [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span className="text-gold text-2xl leading-none transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-charcoal-light font-light leading-relaxed text-[0.95rem] pb-5">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Pricing */}
      <section className="bg-offwhite py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-offwhite-soft rounded-sm p-10 md:p-14 text-center">
            <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
              Membership
            </p>
            <p className="font-display text-2xl text-charcoal-muted font-light line-through">
              $30 / month
            </p>
            <div className="mt-1 mb-4">
              <span className="font-display text-6xl md:text-7xl text-forest font-medium leading-none">
                $20
              </span>
              <span className="font-display text-2xl text-charcoal-muted font-light ml-2">
                / month
              </span>
            </div>
            <span className="inline-block bg-gold text-forest font-semibold text-xs uppercase tracking-wide px-4 py-1.5 rounded-full mb-5">
              Founding member price · lock it in
            </span>
            <p className="text-charcoal-light font-light text-[0.95rem] max-w-md mx-auto mb-10">
              New members move to $30 as more programs launch. Join now and keep
              $20 for life.
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

      {/* Sticky sign-up bar (always available) */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-forest/95 backdrop-blur border-t border-gold/40">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-center gap-5">
          <p className="text-white text-sm">
            <span className="hidden sm:inline text-white/60">
              Founding member price ·{" "}
            </span>
            <span className="text-white/50 line-through mr-1.5">$30</span>
            <span className="text-gold font-semibold">$20/month</span>
          </p>
          <a
            href={ACADEMY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-forest font-semibold text-sm px-6 py-2.5 rounded-sm hover:bg-gold-light transition-colors"
          >
            Join the Academy
          </a>
        </div>
      </div>
    </>
  );
}
