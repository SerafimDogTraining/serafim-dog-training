"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export type CourseModule = {
  number: number;
  title: string;
  lessons: string[];
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 text-[#B0883B] transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function ModuleAccordion({
  modules,
}: {
  modules: CourseModule[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#16352B]/10 border-y border-[#16352B]/10">
      {modules.map((mod, i) => {
        const open = openIndex === i;
        const panelId = `module-panel-${mod.number}`;
        const buttonId = `module-button-${mod.number}`;

        return (
          <Reveal key={mod.number} delay={Math.min(i, 6) * 50}>
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center gap-4 px-1 py-5 text-left transition-colors duration-200 hover:bg-[#16352B]/[0.03] sm:px-3"
              >
                <span className="w-11 shrink-0 font-display text-lg font-medium text-[#B0883B] sm:w-14 sm:text-xl">
                  {String(mod.number).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-lg font-medium leading-snug text-[#16352B] sm:text-xl">
                  {mod.title}
                </span>
                <span className="hidden shrink-0 text-xs font-light tracking-wide text-[#16352B]/50 sm:block">
                  {mod.lessons.length} video
                  {mod.lessons.length === 1 ? "" : "s"}
                </span>
                <Chevron open={open} />
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="pl-1 pr-1 sm:pl-3 sm:pr-3"
            >
              <ul className="mb-6 space-y-2.5 border-l border-[#B0883B]/40 pl-5 sm:ml-14">
                {mod.lessons.map((lesson, li) => (
                  <li
                    key={lesson}
                    className="flex gap-3 text-[15px] font-light leading-relaxed text-[#16352B]/80"
                  >
                    <span className="shrink-0 text-xs font-medium tracking-wide text-[#16352B]/40">
                      {mod.number}.{li + 1}
                    </span>
                    <span>{lesson}</span>
                  </li>
                ))}
                <li className="pt-1 text-xs font-light tracking-wide text-[#16352B]/45 sm:hidden">
                  {mod.lessons.length} video
                  {mod.lessons.length === 1 ? "" : "s"}
                </li>
              </ul>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
