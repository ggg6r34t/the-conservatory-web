"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import {
  EASE_ORGANIC,
  REVEAL_DELAY_BY_CLASS,
  REVEAL_DURATION,
  revealViewport,
} from "@/lib/motion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delayClass?: string;
  as?: "div" | "section" | "article";
};

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
} as const;

export function ScrollReveal({
  children,
  className = "",
  delayClass = "",
  as: Tag = "div",
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motionTags[Tag];
  const delay = REVEAL_DELAY_BY_CLASS[delayClass] ?? 0;

  const motionProps: HTMLMotionProps<"div"> = reduceMotion
    ? { initial: false }
    : {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: revealViewport,
      transition: { duration: REVEAL_DURATION, ease: EASE_ORGANIC, delay },
    };

  return (
    <MotionTag className={className} {...motionProps}>
      {children}
    </MotionTag>
  );
}
