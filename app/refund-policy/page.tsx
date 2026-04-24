import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Serafim Dog Training refund policy. Full refund within 7 calendar days of first session. Non-refundable thereafter.",
  alternates: {
    canonical: "https://www.serafimdogtraining.com/refund-policy",
  },
  robots: { index: false },
};

export default function RefundPolicyPage() {
  return (
    <section className="bg-offwhite min-h-screen pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.22em] text-gold mb-4">
          Legal
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-forest font-medium mb-3">
          Refund Policy
        </h1>
        <p className="text-sm text-charcoal-muted mb-12">
          Effective Date: January 1, 2025. Last Updated: January 1, 2025.
        </p>

        {/* Summary */}
        <div className="bg-white border border-offwhite-soft rounded-sm p-7 mb-12">
          <p className="text-xs uppercase tracking-[0.18em] text-gold mb-4 font-medium">
            Summary
          </p>
          <div className="space-y-3 text-sm font-light text-charcoal-light leading-relaxed">
            {[
              "Full refund available within 7 calendar days after the first completed session.",
              "After day 7, all fees are non-refundable.",
              "Installment payment obligations remain legally enforceable regardless of continued participation.",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <span className="text-gold shrink-0">—</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10 text-sm font-light leading-relaxed text-charcoal-light">
          {[
            {
              title: "1. Refund Eligibility Window",
              content:
                "You are eligible for a full refund of all fees paid if you request a refund within 7 calendar days of the date on which your first session with Serafim Dog Training is completed. To request a refund, contact us at arthur@serafimdogtraining.com with your full name, the date of your first session, and a refund request. Refunds will be processed within 10 business days to the original payment method.",
            },
            {
              title: "2. Non-Refundable Period",
              content:
                "After the 7-calendar-day window has passed following your first completed session, all fees paid are non-refundable, regardless of whether you attended subsequent sessions, implemented the training plan, or are satisfied with training outcomes.",
            },
            {
              title: "3. Installment Payment Obligations",
              content:
                "Where a client has entered into an installment payment arrangement, all scheduled payments remain due and enforceable regardless of the client's decision to discontinue participation, session attendance, or any change in the client's circumstances after the agreement is executed.",
            },
            {
              title: "4. No Guarantee of Results",
              content:
                "Dissatisfaction with training outcomes is not grounds for a refund outside of the 7-day window. Dog training results depend substantially on individual factors — including the dog's history and temperament — and on the client's consistency between sessions.",
            },
            {
              title: "5. Contact for Refund Requests",
              content:
                "All refund requests must be submitted in writing to arthur@serafimdogtraining.com. Include your full name, the date of your first session, and your reason for requesting a refund.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl text-charcoal font-semibold mb-3">
                {section.title}
              </h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
