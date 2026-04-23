import Link from "next/link";

const programs = [
  { href: "/programs/service-dog", label: "Service Dog Program" },
  { href: "/programs/behavioral-correction", label: "Behavioral Correction" },
  { href: "/programs/handler", label: "The Handler Program" },
];

const companyLinks = [
  { href: "/about", label: "About Arthur" },
  { href: "/blog", label: "Blog" },
  { href: "/community", label: "Community" },
  { href: "/book-a-consult", label: "Book a Consult" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-display text-xl font-semibold text-white mb-1">
              Serafim Dog Training
            </div>
            <div className="text-[9px] font-light tracking-[0.22em] uppercase text-white/50 mb-5">
              Austin, Texas
            </div>
            <p className="text-sm text-white/60 font-light leading-relaxed max-w-xs">
              Premium dog training for working dogs, service animals, and
              behavioral rehabilitation.
            </p>
            <div className="mt-6">
              <Link
                href="/book-a-consult"
                className="inline-block text-xs tracking-wide px-5 py-2.5 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 font-medium rounded-sm"
              >
                Book a Free Consult
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-5 font-medium">
              Programs
            </p>
            <ul className="space-y-3.5">
              {programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-5 font-medium">
              Company
            </p>
            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-5 font-medium">
              Legal
            </p>
            <ul className="space-y-3.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs text-white/40 font-light">
            © {year} Serafim Dog Training. All rights reserved. Austin, TX.
          </p>
          <p className="text-xs text-white/30 font-light">
            serafimdogtraining.com
          </p>
        </div>
      </div>
    </footer>
  );
}
