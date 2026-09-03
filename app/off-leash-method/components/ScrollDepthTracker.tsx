"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "./tracking";

const DEPTHS = [25, 50, 75, 100] as const;

/**
 * Fires one scroll-depth event per threshold, to Meta Pixel and GA4.
 * Renders four zero-height markers positioned down the page and watches
 * them with a single IntersectionObserver — no scroll handlers.
 */
export default function ScrollDepthTracker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fired = useRef<Set<number>>(new Set());

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof IntersectionObserver === "undefined") return;

    const markers = Array.from(
      container.querySelectorAll<HTMLElement>("[data-depth]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const depth = Number(
            (entry.target as HTMLElement).dataset.depth ?? 0
          );
          if (fired.current.has(depth)) continue;
          fired.current.add(depth);

          trackEvent("scroll_depth", {
            percent_scrolled: depth,
            page: "off-leash-method",
          });

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0 }
    );

    markers.forEach((m) => observer.observe(m));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      {DEPTHS.map((d) => (
        <span
          key={d}
          data-depth={d}
          className="absolute left-0 block h-px w-px"
          style={{ top: `${d}%` }}
        />
      ))}
    </div>
  );
}
