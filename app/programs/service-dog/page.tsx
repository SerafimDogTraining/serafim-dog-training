import type { Metadata } from "next";
import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";

export const metadata: Metadata = {
  title: "Service Dog Program",
  description:
    "Transform your dog into a certified service or therapy animal. Custom training plan for public access, task work, and real-world scenarios. Austin, TX.",
  alternates: {
    canonical: "https://www.serafimdogtraining.com/programs/service-dog",
  },
  openGraph: {
    title: "Service Dog Program — Serafim Dog Training",
    description:
      "Certified service and therapy dog training in Austin, TX. Public access, task work, hospital visits.",
    url: "https://www.serafimdogtraining.com/programs/service-dog",
  },
};

const whatIsIncluded = [
  "Foundation obedience and impulse control",
  "Task training specific to your disability or need",
  "Public access training (stores, hospitals, transit, restaurants)",
  "Distraction proofing in real-world environments",
  "Handler education — you learn alongside your dog",
  "Therapy dog certification preparation (if applicable)",
  "Hospital and facility visit preparation",
  "Ongoing support during certification process",
];

const whoItsFor = [
  "Individuals with physical, psychiatric, or medical disabilities",
  "Caregivers seeking a certified therapy dog for a loved one",
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
    a: "Typically 3–6 months depending on the dog's starting point, the tasks required, and how consistently the handler trains between sessions.",
  },
  {
    q: "Will my dog be fully certified at the end?",
    a: "We prepare your dog for certification. The certification body (AKC, APDT, ATTS, or your employer/facility's preferred standard) is a separate step we guide you through.",
  },
  {
    q: "Do I need to be present for training sessions?",
    a: "Yes — handler education is non-negotiable. You are part of the program. A service dog that only works for Arthur is not a service dog for you.",
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
            Transform your dog into a certified service or therapy animal with a
            structured, real-world training plan built around your specific
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book-a-consult"
              className="inline-block text-sm tracking-wide px-7 py-3.5 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 font-semibold"
            >
              Book a Free Consult
            </Link>
            <CheckoutButton
              program="service-dog"
              label="Enroll — Starting at $1,499"
              className="text-sm tracking-wide px-7 py-3.5 border border-white/60 text-white hover:bg-white/10 transition-all duration-200 font-medium cursor-pointer"
            />
          </div>
          <p className="text-white/40 text-xs mt-5 font-light">
            Not sure yet? Start with a free consultation — no obligation.
          </p>
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
                Everything your dog needs to become certified.
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
                  Investment
                </p>
                <p className="font-display text-4xl text-white font-medium mb-2">
                  Starting at $1,499
                </p>
                <p className="text-white/60 font-light text-sm mb-8">
                  Final pricing depends on your dog&apos;s starting point and
                  training goals. Discussed at consultation.
                </p>
                <Link
                  href="/book-a-consult"
                  className="block text-sm tracking-wide px-6 py-3 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 text-center font-semibold rounded-sm"
                >
                  Book a Free Consult
                </Link>
              </div>
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
            Book a free consultation and we&apos;ll figure out if this program
            is the right fit for your dog.
          </p>
          <Link
            href="/book-a-consult"
            className="inline-block text-sm tracking-wide px-9 py-4 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 font-semibold"
          >
            Book a Free Consult
          </Link>
        </div>
      </section>
    </>
  );
}
