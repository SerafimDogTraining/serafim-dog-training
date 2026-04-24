import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden min-h-screen md:min-h-0 md:aspect-[4/3]">
      {/* Background image */}
      <Image
        src="/images/hero-mountain.jpg"
        alt=""
        fill
        className="object-cover object-[center_80%]"
        priority
        sizes="100vw"
        aria-hidden="true"
      />

      {/* Gradient overlay — keeps text legible while letting the photo breathe */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/25" />

      {/* Subtle grain/texture layer */}
      <divh
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 pt-32 md:py-32 md:pt-44 w-full">
        <div className="max-w-2xl">
          <p className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-7">
            In-Person in Austin · Online Everywhere
          </p>
          <h1 className="font-display text-4xl md:text-[3.75rem] lg:text-7xl text-white font-medium leading-[1.05] mb-6 tracking-tight">
            Let&apos;s Unlock{" "}
            <em className="italic font-light">Your Dog&apos;s Potential.</em>
          </h1>
          <p className="text-lg md:text-xl text-white/75 font-light leading-relaxed max-w-lg mb-10">
            Expert dog training — in person in Austin, online everywhere.
            Working dogs, service dogs, and behavioral rehabilitation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-5">
            <a
              href="https://calendly.com/arthur-serafimdogtraining/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full md:w-auto text-sm tracking-wide px-7 py-3.5 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 text-center font-semibold"
            >
              Book a Free Consult
            </a>
          </div>
          <p className="text-white/45 text-sm font-light">
            Or start free —{" "}
            <Link
              href="/community"
              className="text-white/65 hover:text-gold underline underline-offset-4 decoration-white/30 hover:decoration-gold transition-colors duration-200"
            >
              join the community →
            </Link>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <svg
          className="w-4 h-4 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
