"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export type Faq = { q: string; a: string };

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[#16352B]/10 border-y border-[#16352B]/10">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;

        return (
          <Reveal key={faq.q} delay={Math.min(i, 6) * 50}>
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-start gap-4 py-5 text-left transition-colors duration-200 hover:text-[#B0883B]"
              >
                <span className="flex-1 font-display text-lg font-medium leading-snug text-[#16352B] sm:text-xl">
                  {faq.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-1 shrink-0 text-xl leading-none text-[#B0883B] transition-transform duration-300 ${
                    open ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
            >
              <p className="pb-6 pr-8 text-[15px] font-light leading-relaxed text-[#16352B]/75">
                {faq.a}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
