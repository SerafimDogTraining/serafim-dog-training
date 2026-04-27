import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Serafim Dog Training. We collect name, email, and phone from forms and Calendly to contact clients and schedule sessions. We do not sell your data.",
  alternates: {
    canonical: "https://www.serafimdogtraining.com/privacy",
  },
};

const sections = [
  {
    title: "1. Overview",
    content:
      "Serafim Dog Training is a small business based in Austin, Texas. We take your privacy seriously and try to be straightforward about what we collect and why. This Privacy Policy explains the information we collect when you use our website or contact us about training, how we use it, and the choices you have.",
  },
  {
    title: "2. Information We Collect",
    content:
      "We collect only what we need to respond to your inquiry and provide training services. This typically includes your name, email address, and phone number, which you provide when you submit a contact form on our site or schedule a consultation through Calendly. We also collect information you choose to share about your dog and your training goals. If you make a payment, that transaction is handled by Stripe — we do not store payment card information ourselves.",
  },
  {
    title: "3. How We Use Your Information",
    content:
      "We use your information to contact you, respond to your inquiry, schedule and manage training sessions, deliver the services you have engaged us to provide, send appointment reminders or follow-ups, and keep basic business records. That's it.",
  },
  {
    title: "4. We Do Not Sell Your Data",
    content:
      "We do not sell, rent, or trade your personal information to third parties. We don't run advertising on your data, and we don't share your information for anyone else's marketing purposes.",
  },
  {
    title: "5. Service Providers We Use",
    content:
      "To run the business, we rely on a small set of trusted third-party tools that may process your information on our behalf — for example, Calendly for scheduling, Stripe for payment processing, and an email service to send messages. These providers have their own privacy policies and are only authorized to use your information to provide services to us.",
  },
  {
    title: "6. Cookies and Analytics",
    content:
      "Our website may use basic cookies and analytics to understand how visitors use the site (for example, which pages are most visited). This information is aggregated and is not used for cross-site advertising or behavioral tracking. You can configure your browser to refuse cookies if you prefer.",
  },
  {
    title: "7. Data Security",
    content:
      "We take reasonable steps to protect the information you share with us. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "8. Your Rights",
    content:
      "You can ask us at any time what information we have about you, request that we correct it, or ask us to delete it. Just send an email to arthur@serafimdogtraining.com and we'll take care of it.",
  },
  {
    title: "9. Changes to This Policy",
    content:
      'If we update this Privacy Policy, we will revise the "Last Updated" date at the top of this page. Continued use of the website after an update constitutes acceptance of the revised policy.',
  },
  {
    title: "10. Contact",
    content:
      "If you have any questions about this Privacy Policy or how we handle your information, please email arthur@serafimdogtraining.com.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-offwhite min-h-screen pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.22em] text-gold mb-4">
          Legal
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-forest font-medium mb-3">
          Privacy Policy
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
