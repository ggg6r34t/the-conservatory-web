"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { DeviceFrame } from "@/components/marketing/device-frame";
import { AppScreen } from "@/components/marketing/app-screens";
import { MotionParallax } from "@/components/marketing/motion-parallax";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { ChapterShell } from "@/components/marketing/chapter-shell";
import {
  SHOWCASE_SCREENS,
  type ShowcaseScreenId,
} from "@/lib/narrative-content";
import { EASE_ORGANIC } from "@/lib/motion";

const screenTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.42, ease: EASE_ORGANIC },
};

export function ChapterShowcase() {
  const [active, setActive] = useState<ShowcaseScreenId>("plant");
  const reduceMotion = useReducedMotion();
  const current = SHOWCASE_SCREENS.find((s) => s.id === active)!;

  return (
    <ChapterShell
      id="showcase"
      ariaLabelledBy="showcase-heading"
      className="chapter-showcase linen-surface"
    >
      <ScrollReveal className="showcase-intro mx-auto max-w-[var(--measure-intro)] text-center">
        <p className="showcase-eyebrow m-0">
          <span className="showcase-eyebrow-dot" aria-hidden />
          <span>Inside the app</span>
        </p>
        <h2 id="showcase-heading" className="type-chapter-title showcase-title mt-6">
          Explore the conservatory
        </h2>
        <p className="type-body-lg showcase-body mx-auto mt-8 max-w-[38rem]">
          Product UI built from the mobile design system. Faithful frames until store
          screenshots replace them.
        </p>
      </ScrollReveal>

      <div className="showcase-stage mt-[var(--space-stack-lg)] flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        <ScrollReveal delayClass="reveal-delay-1" className="showcase-tabs-wrap">
          <div
            role="tablist"
            aria-label="App screens"
            className="showcase-tabs flex flex-wrap justify-center gap-2 lg:w-max lg:flex-col lg:justify-start lg:gap-1.5"
          >
            {SHOWCASE_SCREENS.map((screen) => {
              const selected = active === screen.id;
              return (
                <button
                  key={screen.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="showcase-panel"
                  id={`tab-${screen.id}`}
                  onClick={() => setActive(screen.id)}
                  className={`showcase-tab relative ${selected ? "showcase-tab--active" : ""}`}
                >
                  {selected && !reduceMotion ? (
                    <motion.span
                      layoutId="showcase-tab-highlight"
                      className="showcase-tab-highlight"
                      transition={{ duration: 0.45, ease: EASE_ORGANIC }}
                    />
                  ) : null}
                  <span className="showcase-tab-label">{screen.label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delayClass="reveal-delay-2" className="showcase-panel-wrap flex-1">
          <div
            id="showcase-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            className="showcase-panel flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-14"
          >
          <MotionParallax strength={0.04} className="showcase-device-wrap">
            <DeviceFrame className="showcase-device shrink-0" label={current.label}>
              {reduceMotion ? (
                <AppScreen id={active} />
              ) : (
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active}
                    className="h-full w-full overflow-hidden"
                    {...screenTransition}
                  >
                    <AppScreen id={active} />
                  </motion.div>
                </AnimatePresence>
              )}
            </DeviceFrame>
          </MotionParallax>

          <div className="showcase-copy max-w-xs text-center lg:max-w-[16rem] lg:text-left">
            <p className="showcase-copy-label m-0">On this screen</p>
            {reduceMotion ? (
              <p className="showcase-copy-body mt-3 m-0">{current.description}</p>
            ) : (
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={active}
                  className="showcase-copy-body mt-3 m-0"
                  {...screenTransition}
                >
                  {current.description}
                </motion.p>
              </AnimatePresence>
            )}
          </div>
          </div>
        </ScrollReveal>
      </div>
    </ChapterShell>
  );
}
