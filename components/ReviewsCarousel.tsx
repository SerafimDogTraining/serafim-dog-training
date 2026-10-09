"use client";

import { useRef } from "react";

type Review = { name: string; initials: string; quote: string };

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 24; // gap-6 (1.5rem)
    const amount = card ? card.offsetWidth + gap : el.clientWidth;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            data-card
            className="snap-start shrink-0 basis-full md:basis-[calc(33.333%_-_1rem)]"
          >
            <div className="flex flex-col p-8 bg-offwhite border border-offwhite-soft rounded-sm h-full">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-gold fill-gold" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-charcoal-light font-light leading-relaxed text-[0.9375rem] italic flex-1 mb-7">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 pt-5 border-t border-offwhite-soft">
                <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-semibold">{r.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">{r.name}</p>
                  <p className="text-xs text-charcoal-muted font-light">Google Review</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-5 mt-10">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous reviews"
          className="w-11 h-11 rounded-full border border-forest/30 text-forest hover:bg-forest hover:text-white transition-colors flex items-center justify-center text-xl leading-none"
        >
          &#8249;
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="More reviews"
          className="w-11 h-11 rounded-full border border-forest/30 text-forest hover:bg-forest hover:text-white transition-colors flex items-center justify-center text-xl leading-none"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
