"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted((v) => !v);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background — drop /public/videos/hero.mp4 to enable */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Fallback gradient (visible when no video loads) */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-muted" />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Subtle grain/texture layer */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Unmute / mute button */}
      <button
        onClick={toggleMute}
        className="absolute top-28 right-6 z-20 bg-white/15 backdrop-blur-sm text-white p-2.5 rounded-full hover:bg-white/25 transition-all duration-200 border border-white/20"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
            />
          </svg>
        ) : (
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.536 8.464a5 5 0 010 7.072M12 6.253v13.494m0 0l-3-3m3 3l3-3M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5"
            />
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-44 w-full">
        <div className="max-w-2xl">
          <p className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-7">
            Austin, Texas · Dog Training
          </p>
          <h1 className="font-display text-5xl md:text-[3.75rem] lg:text-7xl text-white font-medium leading-[1.05] mb-6 tracking-tight">
            Your Dog Has Potential.{" "}
            <em className="italic font-light">Let&apos;s Unlock It.</em>
          </h1>
          <p className="text-lg md:text-xl text-white/75 font-light leading-relaxed max-w-lg mb-10">
            Austin&apos;s most trusted dog trainer — working dogs, service dogs,
            and behavioral rehabilitation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#programs"
              className="inline-block text-sm tracking-wide px-7 py-3.5 border border-white/70 text-white hover:bg-white/10 hover:border-white transition-all duration-200 text-center font-medium"
            >
              View Programs
            </Link>
            <Link
              href="/book-a-consult"
              className="inline-block text-sm tracking-wide px-7 py-3.5 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 text-center font-semibold"
            >
              Book a Free Consult
            </Link>
          </div>
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
