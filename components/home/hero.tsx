"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HeroSlideshow } from "@/components/home/hero-slideshow";

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-accent-strong">
      <HeroSlideshow />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%)]" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[13px] font-semibold tracking-[0.25em] text-sky-200"
        >
          HANBIT UNIVERSITY HOSPITAL
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-5 max-w-3xl font-display text-[40px] font-medium leading-[1.25] tracking-tight text-white sm:text-[56px]"
        >
          생명을 향한 진심,
          <br />
          내일을 여는 의술
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/80 sm:text-[17px]"
        >
          최고의 의료진과 첨단 시설, 환자 중심의 진료로 대한민국을 대표하는
          대학병원이 되겠습니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="mt-10"
        >
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-accent-strong transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            진료예약 바로가기
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
