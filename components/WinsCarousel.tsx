"use client";

import { useRef } from "react";

type Win = { quote: string; name: string; detail?: string };

export default function WinsCarousel({ wins }: { wins: Win[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 24; // matches gap-6 (1.5rem)
    const amount = card ? card.offsetWidth + gap : el.clientWidth;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {wins.map((w, i) => (
          <div
            key={i}
            data-card
            className="snap-start shrink-0 basis-full md:basis-[calc((100%_-_3rem)/3)]"
          >
            <div className="bg-white border border-offwhite-soft rounded-sm p-8 h-full flex flex-col justify-center text-center min-h-[20rem]">
              <p className="font-display text-xl md:text-2xl text-forest font-light italic leading-snug">
                &ldquo;{w.quote}&rdquo;
              </p>
              <p className="text-gold font-semibold tracking-wide text-sm mt-6">
                {w.name}
              </p>
              {w.detail ? (
                <p className="text-charcoal-muted text-sm mt-1">{w.detail}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-5 mt-10">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous wins"
          className="w-11 h-11 rounded-full border border-gold text-gold hover:bg-gold hover:text-forest transition-colors flex items-center justify-center text-xl leading-none"
        >
          &#8249;
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="More wins"
          className="w-11 h-11 rounded-full border border-gold text-gold hover:bg-gold hover:text-forest transition-colors flex items-center justify-center text-xl leading-none"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
