"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { JOURNEY_SECTIONS } from "@/lib/journey-sections";

export function JourneyRail() {
  const [activeId, setActiveId] = useState<string>(JOURNEY_SECTIONS[0].id);

  useEffect(() => {
    const sections = JOURNEY_SECTIONS.map(({ id }) =>
      document.getElementById(id),
    ).filter((node): node is HTMLElement => node !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const top = visible[0]?.target.id;
        if (top) setActiveId(top);
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="journey-rail hidden bg-surface-container-low py-4 lg:block"
      aria-label="Story journey"
    >
      <ol className="container-site flex list-none items-center justify-center gap-12 p-0">
        {JOURNEY_SECTIONS.map(({ label, id }, i) => {
          const isActive = activeId === id;
          return (
            <li
              key={id}
              className="flex items-center gap-12 text-[var(--text-eyebrow)] font-bold uppercase tracking-[0.22em]"
            >
              <Link
                href={`/#${id}`}
                className={`journey-rail-step no-underline transition-colors ${isActive ? "is-active" : ""}`}
                aria-current={isActive ? "step" : undefined}
              >
                {label}
              </Link>
              {i < JOURNEY_SECTIONS.length - 1 && (
                <span className="font-normal text-outline-variant" aria-hidden>
                  ·
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
