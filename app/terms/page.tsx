import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Serafim Dog Training LLC. Governing law: Texas.",
  alternates: {
    canonical: "https://www.serafimdogtraining.com/terms",
  },
};

const sections = [
  {
    title: "1. Agreement to Terms",
    content:
      'By accessing this website or engaging the services of Serafim Dog Training LLC ("Company," "we," "us," or "our"), you ("Client," "you," or "your") agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website or our services.',
  },
  {
    title: "2. Services",
    content:
      "Serafim Dog Training LLC provides professional dog training services, including private lessons, board-and-train programs, behavioral consultations, service dog preparation, and handler education. Services are delivered in person in Austin, Texas, and online worldwide. The specific scope, format, and duration of any engagement will be defined in the program description, intake materials, or written agreement provided to the Client prior to the start of services.",
  },
  {
    title: "3. Client Obligations",
    content:
      "You agree to provide accurate and complete information about your dog's history, health, and behavior; to attend scheduled sessions on time or provide reasonable advance notice of cancellation; to follow through on training recommendations between sessions; to disclose any known behavioral issues, prior bite history, or pending legal matters involving your dog before training begins; and to maintain control of your dog at all times outside of supervised training exercises.",
  },
  {
    title: "4. Payment Terms",
    content:
      "Fees for all services are agreed upon in writing prior to the start of any engagement. Payment is due in full before services begin unless an installment arrangement has been agreed to in writing. Where installment payment arrangements are offered, all scheduled payments remain obligatory regardless of whether the Client continues participation. Installment obligations are legally enforceable. Payment is processed through Stripe. Returned payments, chargebacks, or failed installments may result in suspension of services and additional fees.",
  },
  {
    title: "5. Cancellation Policy",
    content:
      "Sessions cancelled with at least 24 hours' notice may be rescheduled at no charge, subject to availability. Sessions cancelled with less than 24 hours' notice, or missed without notice, may be charged in full at the Company's discretion. For multi-session programs and board-and-train engagements, cancellation must be requested in writing to arthur@serafimdogtraining.com. Refund eligibility is governed by the Refund Policy, which is incorporated into these Terms by reference.",
  },
  {
    title: "6. Liability Release",
    content:
      "Dog training inherently involves working with animals whose behavior cannot be guaranteed. By engaging our services, you acknowledge and accept the risks associated with handling, training, and being in proximity to dogs — including but not limited to bites, scratches, falls, and property damage. To the fullest extent permitted by law, you release Serafim Dog Training LLC, its members, employees, contractors, and agents from any and all claims, liabilities, damages, or expenses arising from incidents involving your dog, except those directly and proximately caused by our gross negligence or willful misconduct during a supervised training session. You remain solely responsible for your dog's behavior, including any injury or damage your dog causes to any person, animal, or property at any time.",
  },
  {
    title: "7. Service Dog Training Disclaimer",
    content:
      "Service dog training is offered as preparation and skills development. We do not certify service dogs, and no legitimate U.S. registry or certification is required by the Americans with Disabilities Act for a dog to qualify as a service animal. We make no guarantee that any dog will successfully complete service dog training, pass a Public Access Test, or be suitable for public access work. Suitability depends on the individual dog's temperament, health, and trainability — factors that can only be assessed over time. If a dog is determined unsuitable for service work during training, we will discuss alternative goals with the handler; this determination is not grounds for a refund outside of the standard refund window.",
  },
  {
    title: "8. No Guarantee of Results",
    content:
      "While we apply professional methods and best practices, results in dog training depend substantially on factors outside our control — including the dog's individual temperament and history, the Client's consistency between sessions, the home environment, and the timeline of the engagement. We do not guarantee specific behavioral outcomes, certifications, competition results, or timelines.",
  },
  {
    title: "9. Photography and Media",
    content:
      "We may photograph or video your dog during sessions for our records, training documentation, and promotional purposes (website, social media, marketing materials). If you do not wish for your dog or yourself to appear in publicly shared media, please notify us in writing before your first session and we will honor that request.",
  },
  {
    title: "10. Limitation of Liability",
    content:
      "To the fullest extent permitted by applicable law, Serafim Dog Training LLC, its members, employees, contractors, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any financial losses, property damage, or personal injury not directly caused by our gross negligence during a supervised training session. Our total aggregate liability for any claim arising out of or related to these Terms or the services shall not exceed the total amount paid by the Client to the Company for the specific service giving rise to the claim.",
  },
  {
    title: "11. Intellectual Property",
    content:
      "All written materials, training plans, videos, handouts, and digital content provided by Serafim Dog Training LLC remain the intellectual property of the Company. Materials are licensed to the Client for personal use only and may not be reproduced, redistributed, or used for commercial purposes without written permission.",
  },
  {
    title: "12. Governing Law and Dispute Resolution",
    content:
      "These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of laws principles. Any dispute arising out of or related to these Terms or the services shall be brought exclusively in the state or federal courts located in Travis County, Texas, and you consent to the personal jurisdiction of those courts.",
  },
  {
    title: "13. Changes to Terms",
    content:
      "We reserve the right to modify these Terms at any time. Material changes will be posted to this page with an updated effective date. Continued use of our services after any modification constitutes acceptance of the revised Terms.",
  },
  {
    title: "14. Contact",
    content:
      "For questions regarding these Terms, contact us at arthur@serafimdogtraining.com.",
  },
];

export default function TermsPage() {
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
          Last Updated: April 2026
        </p>

        <div className="space-y-10 text-sm font-light leading-relaxed text-charcoal-light">
          {sections.map((section) => (
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
