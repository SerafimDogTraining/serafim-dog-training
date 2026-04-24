import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";

export const metadata: Metadata = {
  title: "Service Dog Program",
  description:
    "Build a task-trained service or therapy dog. Custom training plan for public access, task work, and real-world scenarios — in Austin and online.",
  alternates: {
    canonical: "https://www.serafimdogtraining.com/programs/service-dog",
  },
  openGraph: {
    title: "Service Dog Program — Serafim Dog Training",
    description:
      "Service and therapy dog training — in person in Austin, online everywhere. Real task training, public access, and handler education.",
    url: "https://www.serafimdogtraining.com/programs/service-dog",
  },
};

const whatIsIncluded = [
  "Foundation obedience and impulse control",
  "Task training specific to your disability or need",
  "Public access training (stores, hospitals, transit, restaurants)",
  "Distraction proofing in real-world environments",
  "Handler education — you learn alongside your dog",
  "Therapy dog evaluation prep (if applicable)",
  "Hospital and facility visit preparation",
  "Ongoing support throughout the training process",
];

const whoItsFor = [
  "Individuals with physical, psychiatric, or medical disabilities",
  "Caregivers seeking a therapy dog for a loved one",
  "Families needing a facility therapy dog for hospital visits",
  "Anyone who has been told their dog \"has potential\" but needs direction",
];

const faqs = [
  {
    q: "What breeds are accepted?",
    a: "Most breeds are considered — temperament, trainability, and the specific tasks required matter more than breed. We've worked with golden retrievers, doodles, labs, and many mixed breeds.",
  },
  {
    q: "How long does the program take?",
    a: "Every dog is different. Timeline depends on the dog's age, breed, starting point, the tasks being trained, and how consistently the handler works between sessions. There's no fixed answer — this is something we'll go over on your call.",
  },
  {
    q: "Will my dog have official 'certification' at the end?",
    a: "Under the ADA, service dogs don't require any certification or registration — what matters is that the dog is reliably task trained. We'll help you navigate any documentation your employer or specific facility requires, but there's no legal 'certification' for service dogs.",
  },
  {
    q: "Do I need to be present for training sessions?",
    a: "Yes — handler education is non-negotiable. You are part of the program. A service dog that only works for me is not a service dog for you.",
  },
];

export default function ServiceDogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
            Program
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-medium leading-tight max-w-2xl mb-7">
            Service Dog Program
          </h1>
          <p className="text-white/70 font-light text-lg max-w-xl leading-relaxed mb-10">
            Build a task-trained service or therapy dog with a structured,
            real-world training plan built around your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block text-sm tracking-wide px-7 py-3.5 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 font-semibold"
            >
              Book a Free Consult
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-0">
          <div className="relative w-full rounded-sm overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <Image
              src="/images/korra-travel.jpg"
              alt="Korra in public access training"
              fill
              className="object-cover object-[center_60%]"
              priority
              sizes="(max-width: 768px) 100vw, 1152px"
            />
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-offwhite py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
                What&apos;s Included
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-forest font-medium leading-tight mb-8">
                Everything your dog needs to be fully trained.
              </h2>
              <ul className="space-y-4">
                {whatIsIncluded.map((item) => (
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

            <div className="space-y-8">
              {/* Who it's for */}
              <div className="bg-white border border-offwhite-soft rounded-sm p-8">
                <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
                  Who This Is For
                </p>
                <ul className="space-y-3">
                  {whoItsFor.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 items-start text-charcoal-light font-light text-sm leading-relaxed"
                    >
                      <span className="text-forest shrink-0 mt-1">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="bg-forest text-white rounded-sm p-8">
                <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-4">
                  Pricing
                </p>
                <p className="font-display text-2xl text-white font-medium mb-3">
                  Pricing discussed on your call
                </p>
                <p className="text-white/60 font-light text-sm mb-8">
                  Every dog is different. Pricing depends on your dog&apos;s
                  starting point, the tasks required, and your timeline.
                </p>
                <Link
                  href="/book"
                  className="block text-sm tracking-wide px-6 py-3 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 text-center font-semibold rounded-sm"
                >
                  Book a Free Consult
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-offwhite py-14 md:py-16 border-t border-offwhite-soft">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex gap-5 items-start">
            <div className="shrink-0 mt-0.5">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-2">
                7-Day Money-Back Guarantee
              </p>
              <p className="text-charcoal-light font-light leading-relaxed text-sm">
                If you&apos;re not satisfied within 7 days of your first session, I&apos;ll refund you in full. Refund requests must be submitted in writing to{" "}
                <a href="mailto:arthur@serafimdogtraining.com" className="text-forest hover:text-gold transition-colors underline underline-offset-2">
                  arthur@serafimdogtraining.com
                </a>{" "}
                and include your full name, the date of your first session, and your reason for requesting a refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
            FAQ
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-forest font-medium leading-tight mb-12">
            Common questions.
          </h2>
          <div className="space-y-0 divide-y divide-offwhite-soft">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-8">
                <h3 className="font-display text-xl text-charcoal font-medium mb-3">
                  {faq.q}
                </h3>
                <p className="text-charcoal-light font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white font-medium leading-tight mb-6">
            Ready to start the process?
          </h2>
          <p className="text-white/60 font-light text-lg mb-10 max-w-md mx-auto">
            Book a free consult and we&apos;ll figure out if this program
            is the right fit for your dog.
          </p>
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
