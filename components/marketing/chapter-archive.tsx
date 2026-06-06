"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DeviceFrame } from "@/components/marketing/device-frame";
import { AppScreen } from "@/components/marketing/app-screens";
import { MotionParallax } from "@/components/marketing/motion-parallax";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { StaggerReveal } from "@/components/marketing/stagger-reveal";
import { ChapterShell } from "@/components/marketing/chapter-shell";
import { CHAPTERS, BOTANICAL_IMAGES } from "@/lib/narrative-content";
import { staggerItem } from "@/lib/motion";

const galleryImages = [
  { src: BOTANICAL_IMAGES.monstera, caption: "Monstera", years: "Since 2024" },
  { src: BOTANICAL_IMAGES.pothos, caption: "Pothos", years: "Window shelf" },
  { src: BOTANICAL_IMAGES.pilea, caption: "Pilea", years: "First pot" },
] as const;

export function ChapterArchive() {
  const { archive } = CHAPTERS;

  return (
    <ChapterShell
      id={archive.id}
      ariaLabelledBy="archive-heading"
      className="chapter-archive bg-primary"
    >
      <ScrollReveal className="archive-intro mx-auto max-w-[var(--measure-intro)] text-center">
        <p className="archive-eyebrow m-0">
          <span className="archive-eyebrow-dot" aria-hidden />
          <span>{archive.eyebrow}</span>
        </p>
        <h2 id="archive-heading" className="archive-title type-chapter-title mt-6">
          {archive.headline}
        </h2>
        <p className="type-body-lg archive-body mx-auto mt-8 max-w-[38rem]">{archive.body}</p>
        <div className="archive-intro-rule mx-auto mt-10" aria-hidden />
      </ScrollReveal>

      <MotionParallax
        strength={0.06}
        className="archive-gallery mt-[var(--space-stack-lg)] grid gap-8 md:grid-cols-3 md:gap-10"
      >
        {galleryImages.map((item, i) => (
          <ScrollReveal
            key={item.src}
            delayClass={`reveal-delay-${Math.min(i + 1, 3)}`}
            className={i === 1 ? "md:mt-16" : ""}
          >
            <figure className="archive-gallery-figure m-0">
              <div className="archive-gallery-frame museum-vignette">
                <Image
                  src={item.src}
                  alt=""
                  fill
                  sizes="(max-width:768px) 90vw, 33vw"
                  className="object-cover"
                />
                <div className="archive-gallery-scrim" aria-hidden />
                <div className="archive-gallery-mat" aria-hidden />
              </div>
              <figcaption className="archive-gallery-caption">
                <span className="archive-gallery-name">{item.caption}</span>
                <span className="archive-gallery-years">{item.years}</span>
              </figcaption>
            </figure>
          </ScrollReveal>
        ))}
      </MotionParallax>

      <div className="archive-lower mt-[var(--space-stack-lg)] grid items-center gap-[var(--space-stack-lg)] lg:grid-cols-2 lg:gap-20">
        <StaggerReveal className="archive-facets m-0 flex list-none flex-col gap-0 p-0">
          {archive.facets.map((facet) => (
            <motion.p key={facet} variants={staggerItem} className="archive-facet m-0">
              {facet}
            </motion.p>
          ))}
        </StaggerReveal>

        <ScrollReveal delayClass="reveal-delay-2" className="archive-devices">
          <DeviceFrame className="archive-device shrink-0">
            <AppScreen id="archive" />
          </DeviceFrame>
        </ScrollReveal>
      </div>
    </ChapterShell>
  );
}
