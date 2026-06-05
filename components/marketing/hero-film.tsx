"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { StoreBadgeGroup } from "@/components/store-badge";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { HERO, HERO_FILM } from "@/lib/narrative-content";
import { EASE_ORGANIC, HERO_ENTER_DELAYS } from "@/lib/motion";
import { STORE_LINKS } from "@/lib/site";

function HeroPlayIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="currentColor"
      aria-hidden
    >
      <path d="M4.5 3.2v11.6c0 .7.8 1.1 1.4.7l8.6-5.8c.5-.4.5-1 0-1.4L5.9 2.5c-.6-.4-1.4 0-1.4.7z" />
    </svg>
  );
}

function HeroPauseIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="currentColor"
      aria-hidden
    >
      <path d="M5.25 3.75h2.25v10.5H5.25V3.75zm5.25 0h2.25v10.5h-2.25V3.75z" />
    </svg>
  );
}

type HeroPosterSrc =
  (typeof HERO_FILM)["poster"] | (typeof HERO_FILM)["posterWebp"];

export function HeroFilm() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [videoReady, setVideoReady] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasWebm, setHasWebm] = useState(false);
  const [posterSrc, setPosterSrc] = useState<HeroPosterSrc>(HERO_FILM.posterWebp);

  useEffect(() => {
    fetch(HERO_FILM.videoWebm, { method: "HEAD" })
      .then((res) => setHasWebm(res.ok))
      .catch(() => setHasWebm(false));
    fetch(HERO_FILM.posterWebp, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) setPosterSrc(HERO_FILM.poster);
      })
      .catch(() => setPosterSrc(HERO_FILM.poster));
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setShouldLoadVideo(true);
      },
      { threshold: 0.05 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!shouldLoadVideo || prefersReducedMotion) return;
    const video = videoRef.current;
    if (!video) return;

    const onReady = () => {
      setVideoReady(true);
      setIsPlaying(!video.paused);
    };
    const onError = () => setVideoReady(false);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);
    video.addEventListener("error", onError);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("error", onError);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, [shouldLoadVideo, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || !videoReady) return;
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          void video.play().catch(() => setIsPlaying(false));
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [videoReady, prefersReducedMotion]);

  const togglePlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, []);

  const showVideo = shouldLoadVideo && !prefersReducedMotion;
  const showDrift = !videoReady && !prefersReducedMotion;
  const reduceMotion = useReducedMotion();

  const heroEnter = (index: number) =>
    reduceMotion
      ? { initial: false as const }
      : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 1.05,
          ease: EASE_ORGANIC,
          delay: HERO_ENTER_DELAYS[index],
        },
      };

  return (
    <section
      ref={sectionRef}
      id="story"
      aria-labelledby="hero-headline"
      className="relative min-h-[100svh] w-full overflow-hidden bg-primary"
    >
      <div className="absolute inset-0" aria-hidden>
        <motion.div
          className="absolute inset-0"
          animate={
            showDrift
              ? { scale: [1.03, 1.06] }
              : { scale: 1 }
          }
          transition={
            showDrift
              ? {
                duration: 20,
                ease: EASE_ORGANIC,
                repeat: Infinity,
                repeatType: "reverse",
              }
              : { duration: 0 }
          }
        >
          <motion.div
            className="relative h-full w-full"
            animate={{ opacity: videoReady ? 0 : 1 }}
            transition={{ duration: 1.4, ease: EASE_ORGANIC }}
          >
            <Image
              src={posterSrc}
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero-media"
            />
          </motion.div>
        </motion.div>

        {showVideo && (
          <motion.video
            ref={videoRef}
            className="hero-media absolute inset-0 h-full w-full"
            animate={{ opacity: videoReady ? 1 : 0 }}
            transition={{ duration: 1.4, ease: EASE_ORGANIC }}
            muted
            playsInline
            loop
            preload="metadata"
            poster={posterSrc}
          >
            {hasWebm && (
              <source src={HERO_FILM.videoWebm} type="video/webm" />
            )}
            <source src={HERO_FILM.videoMp4} type="video/mp4" />
          </motion.video>
        )}

        <div className="hero-scrim absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_100%,transparent_0%,color-mix(in_srgb,var(--primary)_35%,transparent)_100%)]" />
      </div>

      {showVideo && videoReady && (
        <button
          type="button"
          className="hero-film-control"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause film" : "Play film"}
        >
          {isPlaying ? <HeroPauseIcon /> : <HeroPlayIcon />}
        </button>
      )}

      <div className="container-site relative z-10 flex min-h-svh flex-col justify-end pb-[clamp(10.5rem,21vh,12.5rem)] pt-[clamp(5.5rem,12vh,7rem)]">
        <motion.h1
          id="hero-headline"
          className="type-display hero-text max-w-[min(100%,40rem)]"
          {...heroEnter(1)}
        >
          {HERO.headline}
        </motion.h1>
        <motion.p
          className="type-body-lg hero-text-muted mt-8 max-w-xl font-medium leading-relaxed"
          {...heroEnter(2)}
        >
          {HERO.supporting}
        </motion.p>

        <motion.div className="mt-12" {...heroEnter(3)}>
          <StoreBadgeGroup
            onDark
            hrefApple={STORE_LINKS.apple}
            hrefGoogle={STORE_LINKS.google}
          />
        </motion.div>
      </div>

      <a
        href="#begin"
        className="hero-scroll-cue"
        aria-label="Continue to Care chapter"
      >
        <span aria-hidden>Continue</span>
        <span className="hero-scroll-line" aria-hidden />
      </a>
    </section>
  );
}
