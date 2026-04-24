import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Serafim Dog Training. Governing law: Texas.",
  alternates: {
    canonical: "https://www.serafimdogtraining.com/terms-of-service",
  },
  robots: { index: false },
};

export default function TermsOfServicePage() {
  return (
    <section className="bg-offwhite min-h-screen pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.22em] text-gold mb-4">
          Legal
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-forest font-medium mb-3">
          Terms of Service
        </h1>
        <p className="text-sm text-charcoal-muted mb-12">
          Effective Date: January 1, 2025. Last Updated: January 1, 2025.
        </p>

        <div className="space-y-10 text-sm font-light leading-relaxed text-charcoal-light">
          {[
            {
              title: "1. Agreement to Terms",
              content:
                'By accessing this website or engaging the services of Serafim Dog Training ("Company," "we," "us," or "our"), you ("Client," "you," or "your") agree to be bound by these Terms of Service. If you do not agree to these terms, do not use this website or our services.',
            },
            {
              title: "2. Nature of Services",
              content:
                "Serafim Dog Training provides professional dog training, handler education, service dog preparation, and behavioral rehabilitation services. We make no guarantee that training will result in certification from any specific organization. Results depend on the dog's individual temperament, the client's commitment to the process, consistency of practice between sessions, and other factors outside our control.",
            },
            {
              title: "3. Client Obligations",
              content:
                "You agree to: provide accurate information about your dog's history and behavior; attend scheduled sessions or provide reasonable advance notice of cancellation; follow through on training recommendations between sessions; disclose any known behavioral issues or prior incidents before training begins; not hold Serafim Dog Training liable for incidents involving your dog that occur outside of supervised training sessions.",
            },
            {
              title: "4. Payment Terms",
              content:
                "Fees for services are agreed upon prior to the commencement of any engagement. Where installment payment arrangements are offered, all scheduled payments remain obligatory regardless of whether the client continues participation. Installment obligations are legally enforceable.",
            },
            {
              title: "5. Refund Policy",
              content:
                'Our refund policy is incorporated into these Terms by reference. Please review the full Refund Policy before engaging our services.',
            },
            {
              title: "6. Limitation of Liability",
              content:
                "To the fullest extent permitted by applicable law, Serafim Dog Training, its members, employees, contractors, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any financial losses, property damage, or personal injury not directly caused by our negligence during a supervised training session.",
            },
            {
              title: "7. Governing Law",
              content:
                "These Terms shall be governed by and construed in accordance with the laws of the State of Texas. Any legal proceedings shall be brought in the state or federal courts located in Texas.",
            },
            {
              title: "8. Changes to Terms",
              content:
                "We reserve the right to modify these Terms at any time. Changes will be posted to this page with an updated effective date. Continued use of our services after any modification constitutes acceptance of the revised Terms.",
            },
            {
              title: "9. Contact",
              content:
                "For questions regarding these Terms, contact us at arthur@serafimdogtraining.com.",
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
