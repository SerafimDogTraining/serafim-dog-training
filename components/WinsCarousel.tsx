"use client";

import { useState } from "react";

type Win = { quote: string; name: string; detail?: string };

export default function WinsCarousel({ wins }: { wins: Win[] }) {
  const [index, setIndex] = useState(0);
  const count = wins.length;
  const prev = () => setIndex((index - 1 + count) % count);
  const next = () => setIndex((index + 1) % count);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {wins.map((w, i) => (
            <div key={i} className="w-full shrink-0 px-1 md:px-2">
              <div className="bg-white border border-offwhite-soft rounded-sm p-8 md:p-12 text-center min-h-[18rem] flex flex-col justify-center">
                <p className="font-display text-2xl md:text-3xl text-forest font-light italic leading-snug">
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
      </div>

      <div className="flex items-center justify-center gap-5 mt-8">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous win"
          className="w-10 h-10 rounded-full border border-gold text-gold hover:bg-gold hover:text-forest transition-colors flex items-center justify-center text-xl leading-none"
        >
          &#8249;
        </button>
        <div className="flex gap-2">
          {wins.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to win ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === index ? "bg-gold" : "bg-forest/20 hover:bg-forest/40"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next win"
          className="w-10 h-10 rounded-full border border-gold text-gold hover:bg-gold hover:text-forest transition-colors flex items-center justify-center text-xl leading-none"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
