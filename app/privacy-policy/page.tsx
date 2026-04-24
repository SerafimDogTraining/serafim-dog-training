import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Serafim Dog Training privacy policy. We collect name, email, and inquiry information. We do not sell your data.",
  alternates: {
    canonical: "https://www.serafimdogtraining.com/privacy-policy",
  },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
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
          Effective Date: January 1, 2025. Last Updated: January 1, 2025.
        </p>

        <div className="space-y-10 text-sm font-light leading-relaxed text-charcoal-light">
          {[
            {
              title: "1. Overview",
              content:
                "Serafim Dog Training (\"we,\" \"us,\" or \"our\") is committed to handling your personal information with care and transparency. This Privacy Policy describes what information we collect, how we use it, and your rights with respect to that information. By visiting this website or submitting a consultation request, you acknowledge and agree to the practices described in this policy.",
            },
            {
              title: "2. Information We Collect",
              content:
                "We collect only the information necessary to respond to your inquiry and provide our services. This includes your name, email address, information you voluntarily share about your dog and training goals, and general website usage data (pages visited, session duration, device type) that does not identify you personally. We do not collect payment card information directly — payment processing is handled by Stripe.",
            },
            {
              title: "3. How We Use Your Information",
              content:
                "We use the information we collect to respond to your consultation requests and inquiries, communicate with you about scheduling and training, deliver the training services you have engaged us to provide, maintain records required for our business operations, and comply with applicable legal obligations.",
            },
            {
              title: "4. We Do Not Sell Your Data",
              content:
                "We do not sell, rent, trade, or otherwise transfer your personal information to any third party for marketing or commercial purposes.",
            },
            {
              title: "5. Third-Party Service Providers",
              content:
                "We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services — such as our email provider, scheduling platform (Calendly), or payment processor (Stripe). These providers are bound by their own privacy policies and are not authorized to use your information for any purpose other than providing services to us.",
            },
            {
              title: "6. Data Security",
              content:
                "We take reasonable technical and organizational measures to protect your information. However, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security.",
            },
            {
              title: "7. Your Rights",
              content:
                "Depending on your location, you may have the right to access, correct, or request deletion of your personal information. To exercise any of these rights, contact us at arthur@serafimdogtraining.com.",
            },
            {
              title: "8. Cookies",
              content:
                "This website may use cookies for basic analytics and site functionality. These are not used for advertising tracking or cross-site behavioral profiling. You may configure your browser to refuse cookies, though some site functionality may be affected.",
            },
            {
              title: "9. Changes to This Policy",
              content:
                'We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page. Continued use of the website after any update constitutes acceptance of the revised policy.',
            },
            {
              title: "10. Contact",
              content:
                "If you have questions about this Privacy Policy, contact us at arthur@serafimdogtraining.com.",
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
