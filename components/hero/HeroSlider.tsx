"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { heroSlides } from "@/lib/data/hero";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";
import { useQuoteModal } from "@/components/quote/QuoteModalContext";

const SLIDE_DURATION = 5000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { open } = useQuoteModal();

  const goTo = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, index]);

  const slide = heroSlides[index];

  return (
    <section
      id="top"
      aria-roledescription="carousel"
      aria-label="그린하우스 소개 슬라이드"
      className="relative h-[90vh] min-h-[560px] w-full overflow-hidden bg-deep-green"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: prefersReducedMotion ? 1 : 1.08 }}
            transition={{ duration: SLIDE_DURATION / 1000 + 1, ease: "linear" }}
            className="absolute inset-0"
          >
            <PlaceholderImage alt={slide.imageAlt} variant="sage" className="h-full w-full" />
          </motion.div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(40,92,77,0.85) 0%, rgba(40,92,77,0.55) 42%, rgba(40,92,77,0.15) 75%, rgba(40,92,77,0) 100%)",
            }}
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full items-center">
        <div className="container-content w-full">
          <div className="max-w-[650px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-sage-green">
                  {slide.eyebrow}
                </span>
                <h1 className="mt-4 whitespace-pre-line text-[38px] font-extrabold leading-[1.2] tracking-tight text-white lg:text-[64px]">
                  {slide.title}
                </h1>
                <p className="mt-5 max-w-[520px] text-base leading-[1.7] text-white/85 lg:text-lg">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button onClick={open} size="lg">
                1분 간편 견적 받기
              </Button>
              <Button href="#portfolio" variant="ghost" size="lg">
                실제 작업 사례 보기
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex items-center justify-center gap-6 pr-16 lg:bottom-10 lg:pr-0">
        <button
          type="button"
          aria-label="이전 슬라이드"
          onClick={() => goTo(index - 1)}
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/15 focus-visible:outline-white lg:flex"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="슬라이드 선택">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`${i + 1}번째 슬라이드로 이동`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all focus-visible:outline-white ${
                i === index ? "w-7 bg-white" : "w-2 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="이전 슬라이드"
          onClick={() => goTo(index - 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/15 focus-visible:outline-white lg:hidden"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          aria-label="다음 슬라이드"
          onClick={() => goTo(index + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/15 focus-visible:outline-white lg:hidden"
        >
          <ChevronRight size={16} />
        </button>

        <button
          type="button"
          aria-label="다음 슬라이드"
          onClick={() => goTo(index + 1)}
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/15 focus-visible:outline-white lg:flex"
        >
          <ChevronRight size={20} />
        </button>

        <button
          type="button"
          aria-label={isPlaying ? "슬라이드 자동 재생 정지" : "슬라이드 자동 재생 시작"}
          onClick={() => setIsPlaying((v) => !v)}
          className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/15 focus-visible:outline-white"
        >
          {isPlaying ? <Pause size={15} /> : <Play size={15} />}
        </button>
      </div>
    </section>
  );
}
