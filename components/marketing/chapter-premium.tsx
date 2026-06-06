"use client";

import { motion } from "framer-motion";
import { ChapterShell } from "@/components/marketing/chapter-shell";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { StaggerReveal } from "@/components/marketing/stagger-reveal";
import { CHAPTERS, MEMBERSHIP_TIERS } from "@/lib/narrative-content";
import { staggerItem } from "@/lib/motion";

export function ChapterPremium() {
  const { premium } = CHAPTERS;

  return (
    <ChapterShell
      id={premium.id}
      ariaLabelledBy="premium-heading"
      className="chapter-premium bg-surface-container"
    >
      <ScrollReveal>
        <article className="invitation-card">
          <header className="invitation-card__header text-center">
            <p className="invitation-eyebrow m-0">
              <span className="invitation-eyebrow-dot" aria-hidden />
              <span>{premium.eyebrow}</span>
            </p>
            <h2 id="premium-heading" className="type-chapter-title invitation-title mt-6">
              {premium.headline}
            </h2>
            <p className="type-body-lg invitation-body mx-auto mt-8 max-w-[34rem]">
              {premium.body}
            </p>
          </header>

          <div className="invitation-card__divider" aria-hidden />

          <StaggerReveal className="invitation-card__inclusions">
            <p className="invitation-inclusions-label m-0 text-center">
              Included when you accept
            </p>
            <ul className="invitation-inclusions-list m-0 mt-4 list-none p-0">
              {premium.benefits.map((benefit) => (
                <motion.li key={benefit} variants={staggerItem} className="invitation-inclusion">
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </StaggerReveal>

          <div className="invitation-card__divider" aria-hidden />

          <div className="invitation-card__tiers">
            <p className="invitation-tiers-label m-0 text-center">Choose your pace</p>
            <div className="invitation-tiers-grid mt-8 grid gap-5 md:grid-cols-3 md:gap-6">
              {MEMBERSHIP_TIERS.map((tier, i) => (
                <article
                  key={tier.name}
                  className={`invitation-tier text-center ${i === 1 ? "invitation-tier--featured" : ""}`}
                >
                  <p className="invitation-tier-role m-0">{tier.role}</p>
                  <h3 className="invitation-tier-name mt-3 m-0">{tier.name}</h3>
                  <p className="invitation-tier-body mt-4 m-0">{tier.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="invitation-card__divider" aria-hidden />

          <p className="invitation-postscript m-0 text-center">
            Pricing appears in the app before you subscribe. No pressure, only depth when
            you are ready.
          </p>
        </article>
      </ScrollReveal>
    </ChapterShell>
  );
}
