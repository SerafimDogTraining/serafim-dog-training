"use client";

import { trackEvent } from "./tracking";

type BuyButtonProps = {
  href: string;
  /** Identifies which button was clicked, e.g. "hero" | "mid-page" | "pricing" | "final" */
  contentName: string;
  children: React.ReactNode;
  variant?: "gold" | "outline";
  /** Adds the one-time attention pulse (hero button only) */
  pulse?: boolean;
  className?: string;
  value?: number;
  /** Stay full-width at every breakpoint (pricing cards) */
  fullWidth?: boolean;
};

const base =
  "inline-flex w-full items-center justify-center rounded-sm px-8 py-4 text-center text-[15px] font-semibold tracking-wide transition-colors duration-200";

const variants = {
  gold: "bg-[#B0883B] text-[#16352B] hover:bg-[#c79b46]",
  outline:
    "border border-[#B0883B] bg-transparent text-[#B0883B] hover:bg-[#B0883B] hover:text-[#16352B]",
};

export default function BuyButton({
  href,
  contentName,
  children,
  variant = "gold",
  pulse = false,
  className = "",
  value,
  fullWidth = false,
}: BuyButtonProps) {
  const handleClick = () => {
    try {
      window.fbq?.("track", "InitiateCheckout", {
        content_name: contentName,
        content_category: "The Off-Leash Method",
        value: value ?? 197,
        currency: "USD",
      });
    } catch {
      /* pixel blocked — ignore */
    }
    // GA4 mirror so both platforms see the same click
    trackEvent("begin_checkout", {
      content_name: contentName,
      value: value ?? 197,
      currency: "USD",
    });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      data-content-name={contentName}
      className={`${base} ${fullWidth ? "" : "sm:w-auto"} ${variants[variant]} ${
        pulse ? "olm-pulse-once" : ""
      } ${className}`}
    >
      {children}
    </a>
  );
}
