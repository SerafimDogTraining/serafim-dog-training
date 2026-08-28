"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Stagger in ms — used for cards/rows within a group */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Set the first time any observer actually delivers a callback. If it is still
 * false when the safety timer runs, IntersectionObserver is not working in this
 * environment and every Reveal shows itself rather than staying invisible.
 */
let observerDelivered = false;
const FAILSAFE_MS = 3000;

/**
 * Fades + slides content in on first scroll into view.
 * One observer per node, disconnected after it fires — no scroll listeners.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  // Set by the fail-safe: render plainly, no animation, guaranteed opaque.
  const [forced, setForced] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // Already on screen at mount — show it now, don't wait for a callback.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        observerDelivered = true;
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);

    // Fail-safe: never leave copy invisible if observers aren't firing.
    const failsafe = window.setTimeout(() => {
      if (!observerDelivered) setForced(true);
    }, FAILSAFE_MS);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={`olm-reveal ${visible ? "is-visible" : ""} ${
        forced ? "olm-shown" : ""
      } ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
