import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Analytics from "./components/Analytics";
import BuyButton from "./components/BuyButton";
import FaqAccordion, { type Faq } from "./components/FaqAccordion";
import ModuleAccordion, {
  type CourseModule,
} from "./components/ModuleAccordion";
import Reveal from "./components/Reveal";
import ScrollDepthTracker from "./components/ScrollDepthTracker";
import {
  CheckIcon,
  CrossIcon,
  EngagementIcon,
  GuaranteeIcon,
  NeutralityIcon,
  ReinforcementIcon,
} from "./components/Icons";

/* ------------------------------------------------------------------
   CHECKOUT: swap these two before launch
   ------------------------------------------------------------------ */
const CHECKOUT_URL = "#"; // TODO: swap with real Circle URL when ready
const CHECKOUT_URL_PAYMENT_PLAN = "#"; // TODO: 3-payment plan URL

// Proof video shown after the "What It Is" section. Swap this one value.
const PROOF_VIDEO_ID = "dQw4w9WgXcQ"; // TODO: swap with real video ID

const PRICE = 197;
const PLAN_PAYMENT = 67;

export const metadata: Metadata = {
  title: "The Off-Leash Method | Serafim Dog Training",
  description:
    "The complete training system for voice-only off-leash reliability, built on the same method used to train Korra. 22 core videos, 3 pillars, 30-day guarantee.",
  alternates: {
    canonical: "https://www.serafimdogtraining.com/off-leash-method",
  },
  openGraph: {
    title: "The Off-Leash Method | Serafim Dog Training",
    description:
      "Finally. An off-leash dog you can trust. The complete system for voice-only off-leash reliability.",
    url: "https://www.serafimdogtraining.com/off-leash-method",
    images: ["/images/arthur-korra-summit-offleash.jpg"],
  },
};

const HERO_IMAGE = "/images/arthur-korra-summit-offleash.jpg";
// TODO: Arthur to provide a headshot at public/images/arthur-headshot.jpg.
// Until the file exists we render a placeholder instead of a broken image,
// drop the file in and it swaps itself on the next build.
const ARTHUR_HEADSHOT = "/images/arthur-headshot.jpg";
const hasHeadshot = existsSync(
  path.join(process.cwd(), "public", "images", "arthur-headshot.jpg")
);

const painPoints = [
  {
    title: "You call. She keeps running.",
    body: "You watch your dog lock onto a squirrel, a jogger, another dog, and your voice stops existing. Every recall you have ever practiced evaporates in the one moment it actually matters.",
  },
  {
    title: "The treats run out. The behavior goes with them.",
    body: "Food-only training builds a dog who works when the pouch is on your hip. Off-leash, in the real world, there is nothing in your hand, and the dog knows it.",
  },
  {
    title: "Commands break down under arousal.",
    body: "Most dogs are not disobedient. They are over threshold. Nobody ever taught them to hear you while their nervous system is running hot, so obedience collapses at exactly the moment arousal spikes.",
  },
];

const costsOfWaiting = [
  "Hikes, beaches, and open fields that stay off the list",
  "Walks spent scanning for triggers instead of enjoying your dog",
  "A 6-foot leash as the permanent ceiling on your dog's life",
  "The quiet fear that one open gate ends badly",
];

const pillars = [
  {
    id: "neutrality",
    number: "01",
    name: "Neutrality",
    Icon: NeutralityIcon,
    tagline: "Your dog's relationship with the environment.",
    intro:
      "Before a dog can listen off leash, the world has to stop being the most interesting thing in it. Neutrality is built deliberately, not by flooding your dog with distractions and hoping, but through structured exposure at distances and durations your dog can actually succeed at.",
    learn: [
      "What neutrality actually is, and how it differs from suppression or shutting a dog down",
      "How to build an exposure plan around your dog's real thresholds, not a generic checklist",
      "Reading arousal in real time so you know when to move closer and when to back off",
      "The common exposure mistakes that make reactivity worse instead of better",
    ],
  },
  {
    id: "engagement",
    number: "02",
    name: "Engagement",
    Icon: EngagementIcon,
    tagline: "Your dog's relationship with you.",
    intro:
      "Reliability off leash depends on your dog wanting to work with you, not just complying because they have to. Engagement is the willingness to check in, the desire to be part of the moment, and the recall that answers because your dog wants to be with you.",
    learn: [
      "Building a recall your dog answers under load, not just in the living room",
      "Creating genuine value in yourself so the environment stops winning by default",
      "Teaching your dog to voluntarily check in and re orient to you",
      "What handler presence actually looks like, and why most owners underdeliver it",
    ],
  },
  {
    id: "reinforcement",
    number: "03",
    name: "Reinforcement",
    Icon: ReinforcementIcon,
    tagline: "How your dog learns what works.",
    intro:
      "The mechanics of training. Marker systems, timing, clear communication, appropriate reward, and honest correction when needed. This is where behaviorism becomes practical, and where the safety net (long line, leave it) and the conditioned release live as tools inside a bigger system.",
    learn: [
      "Marker word conditioning and precise timing",
      "Long line handling, length, hardware, and mechanics that keep it a tool, not a tangle",
      "Leave it as an off switch for pursuit, the command that prevents the worst case outcome",
      "Conditioning a release word that carries real value to your dog",
      "How to fade the line honestly, only when the dog has earned it",
    ],
  },
];

const modules: CourseModule[] = [
  {
    number: 1,
    title: "Foundations",
    lessons: [
      "Welcome to The Off-Leash Method",
      "Prerequisites and Who This Is For",
      "Understanding the 3 Pillars",
    ],
  },
  {
    number: 2,
    title: "Prerequisites",
    lessons: ["Basic Obedience Assessment", "Equipment You Need"],
  },
  {
    number: 3,
    title: "Reading Your Dog",
    lessons: ["Arousal States and Thresholds", "Stress Signals and Recovery"],
  },
  {
    number: 4,
    title: "Neutrality Through Exposure",
    lessons: [
      "What Neutrality Actually Means",
      "Structured Exposure Fundamentals",
      "What NOT to Do",
    ],
  },
  {
    number: 5,
    title: "Foundation Obedience",
    lessons: [
      "Solid Recall Foundation",
      "Leave It and Impulse Control",
      "Place and Duration",
    ],
  },
  {
    number: 6,
    title: "Building Reliability",
    lessons: [
      "Introducing Distractions",
      "Leave It and Recall Reliability",
      "Progressive Distraction Training",
    ],
  },
  {
    number: 7,
    title: "The Long Line Phase",
    lessons: ["Conditioning the Release", "Work and Reward Cycles"],
  },
  {
    number: 8,
    title: "Real World Application",
    lessons: ["Moving to Real Environments", "The 30-Minute Test"],
  },
  {
    number: 9,
    title: "Long-term Success",
    lessons: ["Handling Setbacks", "Everyday Life Integration"],
  },
];

const bonusVideos = [
  "Learning Theory Explained",
  "Family and Household Considerations",
  "POV: Real-World Session with Korra",
];

const forYou = [
  "Dogs 6 months and older",
  "Basic obedience already established",
  "You can invest 15–30 minutes a day",
  "No serious aggression or bite history",
];

const notForYou = [
  "Aggression or bite cases",
  "Puppies under 6 months",
  "Dogs with chronic dysregulation",
  "Owners looking for a quick fix",
];

const testimonials = [1, 2, 3, 4, 5, 6];

const includedItems = [
  "22 core training videos",
  "3 bonus videos: Learning Theory Explained, Family and Household Considerations, POV Real World Session with Korra",
  "Emergency Recall Protocol PDF",
  "Reading Arousal State Guide PDF",
  "Complete Course Workbook",
  "30 days of community access",
  "1 group Q and A call within 90 days of purchase",
];

const faqs: Faq[] = [
  {
    q: "How long will this take?",
    a: "Most students see meaningful progress within 30-60 days. Full off-leash reliability typically takes 60-90 days of consistent work (15-30 min/day).",
  },
  {
    q: "What if my dog is difficult or reactive?",
    a: "This method is not designed for dogs with serious aggression or bite histories. If your dog has reactivity without aggression, the Neutrality pillar addresses this directly.",
  },
  {
    q: "What equipment do I need?",
    a: "A long line (15-30 ft), standard flat collar or slip lead, and high-value treats. Module 2 covers this in detail.",
  },
  {
    q: "What if I've tried other training methods before?",
    a: "Most people who find this course have already tried treats-only or recall training that broke down under distraction. This method builds reliability through structure, not just repetition.",
  },
  {
    q: "Is this balanced training?",
    a: "Yes. I use a combination of positive reinforcement and correction when appropriate. I believe in teaching dogs clearly and giving them real information.",
  },
  {
    q: "What's the refund policy?",
    a: "30-day money-back guarantee. See Guarantee section above.",
  },
];

const totalVideos = modules.reduce((sum, m) => sum + m.lessons.length, 0);

function SectionLabel({
  children,
  tone = "gold",
}: {
  children: React.ReactNode;
  tone?: "gold" | "muted";
}) {
  return (
    <p
      className={`mb-5 text-[10px] font-medium uppercase tracking-[0.28em] ${
        tone === "gold" ? "text-[#B0883B]" : "text-[#16352B]/45"
      }`}
    >
      {children}
    </p>
  );
}

export default function OffLeashMethodPage() {
  return (
    <>
      <Analytics />

      <div className="relative bg-[#F5F1E8]">
        <ScrollDepthTracker />

        {/* ---------------------------------------------------- 1. HERO */}
        <section className="bg-[#16352B] px-5 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-40">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
            <div className="olm-hero-headline order-2 text-center md:order-1 md:text-left">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#B0883B]">
                The Off-Leash Method
              </p>
              <h1 className="font-display text-[2.5rem] font-medium leading-[1.08] text-white sm:text-5xl md:text-[3.5rem]">
                Finally. An Off-Leash Dog You Can Trust.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/75 sm:text-lg md:mx-0">
                The complete training system for achieving voice-only off-leash
                reliability, built on the same method I used to train Korra.
              </p>

              <div className="mt-9">
                <BuyButton
                  href={CHECKOUT_URL}
                  contentName="hero"
                  pulse
                  value={PRICE}
                >
                  Get The Off-Leash Method for ${PRICE}
                </BuyButton>
              </div>

              <p className="mt-6 flex items-center justify-center gap-2.5 text-xs font-light tracking-wide text-white/55 md:justify-start">
                <span className="inline-block h-1 w-1 rounded-full bg-[#B0883B]" />
                500K+ followers trained with this method
              </p>
            </div>

            <div className="order-1 flex justify-center md:order-2">
              <div className="relative h-[220px] w-[220px] shrink-0 overflow-hidden rounded-full border-[3px] border-[#B0883B] sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px]">
                <Image
                  src={HERO_IMAGE}
                  alt="Arthur Serafim and Korra off-leash on a mountain summit"
                  fill
                  priority
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, 320px"
                  className="object-cover object-[center_bottom]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------- 2. PROBLEM */}
        <section className="px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionLabel>The Problem</SectionLabel>
              <h2 className="font-display text-3xl font-medium leading-tight text-[#16352B] sm:text-4xl">
                You already know the feeling.
              </h2>
              <p className="mt-5 text-base font-light leading-relaxed text-[#16352B]/75 sm:text-lg">
                The leash comes off and you stop being the handler. You become
                a spectator. It is not that your dog does not love you. It is
                that nothing in your training ever prepared either of you for
                that moment.
              </p>
            </Reveal>

            <div className="mt-12 space-y-6">
              {painPoints.map((point, i) => (
                <Reveal key={point.title} delay={i * 90}>
                  <div className="border-l-2 border-[#B0883B]/50 pl-6">
                    <h3 className="font-display text-xl font-medium text-[#16352B] sm:text-2xl">
                      {point.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] font-light leading-relaxed text-[#16352B]/75 sm:text-base">
                      {point.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-12 rounded-sm bg-[#16352B]/[0.04] p-7 sm:p-9">
                <h3 className="font-display text-xl font-medium text-[#16352B] sm:text-2xl">
                  And the cost of leaving it unsolved
                </h3>
                <ul className="mt-5 space-y-3">
                  {costsOfWaiting.map((cost) => (
                    <li
                      key={cost}
                      className="flex items-start gap-3 text-[15px] font-light leading-relaxed text-[#16352B]/80"
                    >
                      <CrossIcon className="mt-1 h-4 w-4 shrink-0 text-[#B0883B]" />
                      <span>{cost}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* --------------------------------------- 3. WHAT IS THE METHOD */}
        <section className="bg-[#16352B] px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#B0883B]">
                What It Is
              </p>
              <h2 className="font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
                A structured system.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-white/70 sm:text-lg">
                My free videos show you what is possible. This shows you how
                to build it. The Off-Leash Method is a sequenced system. Every
                module
                depends on the one before it, so your dog is never asked for
                something they have not been set up to give. It rests on three
                pillars.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.id} delay={i * 110}>
                  <div className="h-full rounded-sm border border-white/10 bg-white/[0.04] p-7">
                    <pillar.Icon className="h-9 w-9 text-[#B0883B]" />
                    <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#B0883B]">
                      Pillar {pillar.number}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-medium text-white">
                      {pillar.name}
                    </h3>
                    <p className="mt-3 text-[15px] font-light leading-relaxed text-white/65">
                      {pillar.tagline}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------- 4. PROOF VIDEO */}
        <section className="px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div
                className="relative w-full overflow-hidden rounded-sm border border-[#B0883B]/40 bg-[#16352B]"
                style={{ aspectRatio: "16 / 9" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${PROOF_VIDEO_ID}`}
                  title="The Off-Leash Method"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* --------------------------------------- 5. ABOUT THE TRAINER */}
        <section className="border-y border-[#16352B]/10 px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-[auto_1fr] md:gap-12">
            <Reveal>
              <div className="relative mx-auto flex h-[200px] w-[200px] items-center justify-center overflow-hidden rounded-full border-[3px] border-[#B0883B] bg-[#16352B]/[0.06] sm:h-[220px] sm:w-[220px]">
                {hasHeadshot ? (
                  <Image
                    src={ARTHUR_HEADSHOT}
                    alt="Arthur Serafim, dog trainer in Austin, Texas"
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#16352B]/40">
                    Headshot
                  </span>
                )}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <SectionLabel>About the Trainer</SectionLabel>
              <h2 className="font-display text-3xl font-medium leading-tight text-[#16352B] sm:text-4xl">
                Arthur Serafim
              </h2>
              <p className="mt-4 text-[13px] font-light tracking-wide text-[#16352B]/60">
                Professional dog trainer. Austin, Texas.
              </p>
              <div className="mt-6 space-y-5 text-base font-light leading-relaxed text-[#16352B]/80">
                <p>
                  I didn&apos;t build this method from a textbook. I built it by
                  studying the field, applying what actually works, and testing
                  it on hundreds of dogs.
                </p>
                <p>
                  The Off Leash Method draws from decades of research on canine
                  behavior. The foundations of operant and classical
                  conditioning that shaped modern training. The ethology work
                  that taught us how dogs actually communicate and regulate
                  themselves. The nervous system frameworks that changed how we
                  understand what&apos;s really happening when a dog reacts or
                  shuts down. This isn&apos;t one trainer&apos;s opinion.
                  It&apos;s a synthesis of what the science shows and what real
                  world training confirms.
                </p>
                <p>
                  What I built on top of that is a system for handlers. Because
                  most owners don&apos;t need more theory. They need a clear
                  sequence, a way to read their own dog, and a framework for
                  communicating with the animal in front of them. That&apos;s
                  what this course is.
                </p>
                <p>
                  I&apos;ve trained hundreds of client dogs across breeds,
                  temperaments, and starting points, and 500,000 owners follow
                  my content across YouTube, Instagram, TikTok, and Facebook.
                  This course closes the gap between free content and what it
                  actually takes to build reliability.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* -------------------------------------- 6. PILLARS DEEP DIVE */}
        <section className="border-y border-[#16352B]/10 px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionLabel>The 3 Pillars</SectionLabel>
              <h2 className="font-display text-3xl font-medium leading-tight text-[#16352B] sm:text-4xl">
                What you actually build, in order.
              </h2>
            </Reveal>

            <div className="mt-14 space-y-16">
              {pillars.map((pillar) => (
                <Reveal key={pillar.id} as="article">
                  <div className="flex items-center gap-4">
                    <pillar.Icon className="h-10 w-10 shrink-0 text-[#B0883B]" />
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#B0883B]">
                        Pillar {pillar.number}
                      </p>
                      <h3 className="font-display text-2xl font-medium text-[#16352B] sm:text-3xl">
                        {pillar.name}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-5 font-display text-xl font-medium leading-snug text-[#16352B]/75 sm:text-2xl">
                    {pillar.tagline}
                  </p>

                  <p className="mt-4 text-[15px] font-light leading-relaxed text-[#16352B]/80 sm:text-base">
                    {pillar.intro}
                  </p>

                  <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.22em] text-[#16352B]/45">
                    In this pillar you learn
                  </p>
                  <ul className="mt-4 space-y-3">
                    {pillar.learn.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] font-light leading-relaxed text-[#16352B]/80"
                      >
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[#B0883B]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 h-px w-16 bg-[#B0883B]/50" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------- 7. MODULE LIST */}
        <section className="px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionLabel>Inside the Course</SectionLabel>
              <h2 className="font-display text-3xl font-medium leading-tight text-[#16352B] sm:text-4xl">
                9 modules. {totalVideos} core videos.
              </h2>
              <p className="mt-5 text-base font-light leading-relaxed text-[#16352B]/75">
                Tap any module to see what&apos;s inside.
              </p>
            </Reveal>

            <div className="mt-10">
              <ModuleAccordion modules={modules} />
            </div>

            <Reveal delay={80}>
              <div className="mt-10 rounded-sm border border-[#B0883B]/40 bg-[#B0883B]/[0.07] p-7">
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#B0883B]">
                  Plus 3 Bonus Videos
                </p>
                <ul className="mt-4 space-y-2.5">
                  {bonusVideos.map((video) => (
                    <li
                      key={video}
                      className="flex items-start gap-3 text-[15px] font-light text-[#16352B]/85"
                    >
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[#B0883B]" />
                      <span>{video}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-10 text-center">
                <BuyButton
                  href={CHECKOUT_URL}
                  contentName="mid-page"
                  value={PRICE}
                >
                  Get Instant Access for ${PRICE}
                </BuyButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ------------------------------------- 8. FOR / NOT FOR */}
        <section className="bg-[#16352B] px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#B0883B]">
                Honest Fit
              </p>
              <h2 className="font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
                This is not for every dog.
              </h2>
            </Reveal>

            <div className="mt-11 grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-sm border border-[#B0883B]/40 bg-white/[0.04] p-7">
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#B0883B]">
                    This is for you if
                  </p>
                  <ul className="mt-5 space-y-3.5">
                    {forYou.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] font-light leading-relaxed text-white/85"
                      >
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[#B0883B]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={110}>
                <div className="h-full rounded-sm border border-white/12 bg-white/[0.02] p-7">
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
                    This is not for you if
                  </p>
                  <ul className="mt-5 space-y-3.5">
                    {notForYou.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] font-light leading-relaxed text-white/60"
                      >
                        <CrossIcon className="mt-1 h-4 w-4 shrink-0 text-white/35" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ------------------------------------------ 9. TESTIMONIALS */}
        <section className="px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <SectionLabel>Results</SectionLabel>
              <h2 className="font-display text-3xl font-medium leading-tight text-[#16352B] sm:text-4xl">
                From owners who did the work.
              </h2>
            </Reveal>

            <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((n, i) => (
                <Reveal key={n} delay={(i % 3) * 90}>
                  <figure className="h-full rounded-sm border border-[#B0883B]/40 bg-white p-7">
                    <div className="flex items-center gap-4">
                      {/* TODO: replace with student photo via next/image */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#B0883B]/60 bg-[#F5F1E8] text-[9px] font-medium uppercase tracking-widest text-[#16352B]/40">
                        Photo
                      </div>
                      <figcaption>
                        <p className="font-display text-lg font-medium leading-tight text-[#16352B]">
                          [RESULT HEADLINE]
                        </p>
                        <p className="mt-1 text-xs font-light tracking-wide text-[#16352B]/55">
                          [NAME] · [DOG NAME]
                        </p>
                      </figcaption>
                    </div>
                    <blockquote className="mt-5 border-l-2 border-[#B0883B]/50 pl-4 text-[15px] font-light italic leading-relaxed text-[#16352B]/75">
                      [TESTIMONIAL PLACEHOLDER]
                    </blockquote>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------------------- 10. WHAT IS INCLUDED */}
        <section className="px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <SectionLabel>Everything Included</SectionLabel>
              <h2 className="font-display text-3xl font-medium leading-tight text-[#16352B] sm:text-4xl">
                What comes with the course.
              </h2>
            </Reveal>

            <ul className="mt-10 divide-y divide-[#16352B]/10 border-y border-[#16352B]/10">
              {includedItems.map((item, i) => (
                <Reveal key={item} as="li" delay={Math.min(i, 5) * 70}>
                  <div className="flex items-start gap-4 py-4">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#B0883B]" />
                    <span className="flex-1 text-[15px] font-light leading-relaxed text-[#16352B]">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={80}>
              <p className="mt-9 text-center font-display text-2xl font-medium text-[#16352B] sm:text-3xl">
                All included in the ${PRICE} price.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ------------------------------------------------ 11. PRICING */}
        <section id="pricing" className="bg-[#16352B] px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="text-center">
                <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#B0883B]">
                  Pricing
                </p>
                <h2 className="font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
                  Two ways to start.
                </h2>
              </div>
            </Reveal>

            <div className="mt-11 grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="relative flex h-full flex-col rounded-sm border-2 border-[#B0883B] bg-white/[0.05] p-8">
                  <span className="absolute -top-3 left-8 bg-[#B0883B] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#16352B]">
                    Recommended
                  </span>
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#B0883B]">
                    One-Time Payment
                  </p>
                  <p className="mt-4 font-display text-5xl font-medium text-white">
                    ${PRICE}
                  </p>
                  <p className="mt-3 text-[15px] font-light leading-relaxed text-white/65">
                    Full lifetime access to all {totalVideos} core videos, 3
                    bonus videos, and everything else included.
                  </p>
                  <div className="mt-8">
                    <BuyButton
                      href={CHECKOUT_URL}
                      contentName="pricing-one-time"
                      value={PRICE}
                      fullWidth
                    >
                      Buy Now for ${PRICE}
                    </BuyButton>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={110}>
                <div className="flex h-full flex-col rounded-sm border border-white/15 bg-white/[0.02] p-8">
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
                    Payment Plan
                  </p>
                  <p className="mt-4 font-display text-5xl font-medium text-white">
                    3 × ${PLAN_PAYMENT}
                  </p>
                  <p className="mt-3 text-[15px] font-light leading-relaxed text-white/60">
                    Same full access, split across three monthly payments. $
                    {PLAN_PAYMENT * 3} total.
                  </p>
                  <div className="mt-8">
                    <BuyButton
                      href={CHECKOUT_URL_PAYMENT_PLAN}
                      contentName="pricing-payment-plan"
                      variant="outline"
                      value={PLAN_PAYMENT * 3}
                      fullWidth
                    >
                      Start With ${PLAN_PAYMENT}
                    </BuyButton>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={60}>
              <p className="mt-8 text-center text-xs font-light tracking-wide text-white/45">
                Pricing may increase at launch.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------- 12. GUARANTEE */}
        <section className="px-5 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-sm border border-[#B0883B]/40 bg-white p-9 text-center sm:p-11">
              <GuaranteeIcon className="mx-auto h-12 w-12 text-[#B0883B]" />
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight text-[#16352B] sm:text-4xl">
                30-Day Money-Back Guarantee
              </h2>
              <p className="mt-5 text-base font-light leading-relaxed text-[#16352B]/80">
                If you go through the material and put in the work and
                don&apos;t see progress, email us and we&apos;ll refund you. No
                hoops.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ---------------------------------------------------- 13. FAQ */}
        <section className="border-t border-[#16352B]/10 px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionLabel>Questions</SectionLabel>
              <h2 className="font-display text-3xl font-medium leading-tight text-[#16352B] sm:text-4xl">
                Before you buy.
              </h2>
            </Reveal>
            <div className="mt-10">
              <FaqAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* --------------------------------------------- 14. FINAL CTA */}
        <section className="bg-[#16352B] px-5 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="font-display text-3xl font-medium leading-tight text-white sm:text-[2.75rem]">
                Your dog is capable of this. The question is whether you have a
                system.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-10">
                <BuyButton
                  href={CHECKOUT_URL}
                  contentName="final"
                  value={PRICE}
                  className="sm:px-12 sm:py-5 sm:text-base"
                >
                  Get The Off-Leash Method for ${PRICE}
                </BuyButton>
              </div>

              <div className="mt-7 inline-flex items-center gap-3 rounded-sm border border-white/15 px-5 py-3">
                <GuaranteeIcon className="h-5 w-5 shrink-0 text-[#B0883B]" />
                <span className="text-xs font-light tracking-wide text-white/65">
                  30-day money-back guarantee
                </span>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
