"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const programs = [
  { href: "/programs/service-dog", label: "Service Dog Program" },
  { href: "/programs/behavioral-correction", label: "Behavioral Correction" },
  { href: "/programs/handler", label: "The Handler Program" },
];

const mainLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/community", label: "Community" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProgramsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setProgramsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const isHeroPage = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHeroPage
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-offwhite-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-0 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center leading-none group">
          {!logoError ? (
            <Image
              src={!scrolled && isHeroPage ? "/images/logo-white.png" : "/images/logo.png"}
              alt="Serafim Dog Training"
              width={320}
              height={128}
              className="object-contain h-[128px] w-auto -my-6"
              priority
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="flex flex-col">
              <span
                className={`font-display text-xl font-semibold tracking-wide transition-colors duration-200 group-hover:text-gold ${
                  scrolled || !isHeroPage ? "text-forest" : "text-white"
                }`}
              >
                Serafim Dog Training
              </span>
              <span
                className={`text-[9px] font-sans font-medium tracking-[0.22em] uppercase mt-0.5 transition-colors duration-200 ${
                  scrolled || !isHeroPage ? "text-charcoal-muted" : "text-white/60"
                }`}
              >
                In-Person & Online
              </span>
            </div>
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {/* Programs dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProgramsOpen((v) => !v)}
              className={`flex items-center gap-1 text-sm font-light tracking-wide transition-colors duration-200 ${
                scrolled || !isHeroPage
                  ? "text-charcoal hover:text-forest"
                  : "text-white/85 hover:text-white"
              }`}
            >
              Programs
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  programsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {programsOpen && (
              <div className="absolute top-full left-0 mt-2 w-60 bg-white shadow-lg border border-offwhite-soft rounded-sm py-1.5 z-10">
                {programs.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="block px-5 py-3 text-sm text-charcoal hover:bg-offwhite hover:text-forest transition-colors duration-150"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/programs/service-dog"
            className={`text-sm font-light tracking-wide transition-colors duration-200 ${
              scrolled || !isHeroPage
                ? "text-charcoal hover:text-forest"
                : "text-white/85 hover:text-white"
            }`}
          >
            Service Dog
          </Link>

          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-light tracking-wide transition-colors duration-200 ${
                scrolled || !isHeroPage
                  ? "text-charcoal hover:text-forest"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="/book"
            className="text-sm tracking-wide px-5 py-2.5 bg-forest text-white hover:bg-forest-light transition-colors duration-200 rounded-sm font-medium"
          >
            Book a Free Consult
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-px transition-all duration-200 ${
                scrolled || !isHeroPage ? "bg-charcoal" : "bg-white"
              } ${
                i === 0 && mobileOpen
                  ? "rotate-45 translate-y-[7px]"
                  : i === 1 && mobileOpen
                  ? "opacity-0"
                  : i === 2 && mobileOpen
                  ? "-rotate-45 -translate-y-[7px]"
                  : ""
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-offwhite-soft bg-white px-6 py-6 flex flex-col gap-5">
          <p className="text-[10px] uppercase tracking-widest text-charcoal-muted font-medium">
            Programs
          </p>
          {programs.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="text-sm text-charcoal hover:text-forest transition-colors pl-2"
            >
              {p.label}
            </Link>
          ))}
          <div className="border-t border-offwhite-soft pt-4 flex flex-col gap-5">
            <Link
              href="/programs/service-dog"
              className="text-sm text-charcoal hover:text-forest transition-colors font-medium"
            >
              Service Dog
            </Link>
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-charcoal hover:text-forest transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/book"
              className="text-sm tracking-wide px-5 py-3 bg-forest text-white hover:bg-forest-light transition-colors text-center rounded-sm font-medium mt-1"
            >
              Book a Free Consult
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
