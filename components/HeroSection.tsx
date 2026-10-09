import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-forest overflow-hidden">
      {/* Subtle grain/texture layer */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Copy */}
          <div className="order-2 md:order-1">
            <p className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-7">
              In-Person in Austin · Online Everywhere
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-[1.05] mb-6 tracking-tight">
              Real-World Reliability{" "}
              <em className="italic font-light">for All Dogs.</em>
            </h1>
            <p className="text-lg text-white/75 font-light leading-relaxed max-w-lg mb-9">
              Expert dog training — in person in Austin, online everywhere.
              Working dogs, service dogs, and behavioral rehabilitation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <a
                href="/book"
                className="block w-full sm:w-auto text-sm tracking-wide px-8 py-4 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 text-center font-semibold rounded-sm"
              >
                Book a Free Consult
              </a>
            </div>
            <p className="text-white/85 text-sm font-light">
              Or start free —{" "}
              <Link
                href="/community"
                className="text-white hover:text-gold underline underline-offset-4 decoration-white/50 hover:decoration-gold transition-colors duration-200"
              >
                join the community →
              </Link>
            </p>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative overflow-hidden rounded-sm aspect-[4/5] shadow-2xl">
              <Image
                src="/images/community-hero.jpg"
                alt="Arthur Serafim and Korra on a mountain summit"
                fill
                className="object-cover object-[center_55%]"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="hidden md:block absolute -bottom-4 -right-4 w-16 h-16 border-r-4 border-b-4 border-gold" />
          </div>
        </div>

        {/* Social Proof Ticker */}
        <div className="border-t border-b border-white/20 py-5 mt-12 md:mt-16">
          <div className="flex flex-wrap justify-center md:justify-around gap-8 md:gap-0 text-white/90">
            {[
              { stat: "150M+", label: "Views Across Platforms" },
              { stat: "100+", label: "Dogs Trained" },
              { stat: "600K+", label: "Followers Across Platforms" },
            ].map((item) => (
              <div key={item.stat} className="text-center">
                <div className="font-display text-2xl font-semibold">{item.stat}</div>
                <div className="text-xs uppercase tracking-[0.2em] font-light opacity-75">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
