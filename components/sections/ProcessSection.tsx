"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { processSteps } from "@/lib/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useQuoteModal } from "@/components/quote/QuoteModalContext";

const TOTAL_DURATION = 3.4;
const IDLE_COLOR = { backgroundColor: "#FFFFFF", borderColor: "#E5E9E6", color: "#202824", scale: 1 };

function StepNode({
  index,
  isLast,
  isInView,
  delay,
  reducedMotion,
  className,
}: {
  index: number;
  isLast: boolean;
  isInView: boolean;
  delay: number;
  reducedMotion: boolean | null;
  className: string;
}) {
  // 핑크(도착)로 반짝인 뒤 초록(완료)으로 안착 — 마지막 단계는 핑크로 유지
  const litColor = isLast ? "#EF6F8D" : "#285C4D";

  return (
    <motion.div
      initial={IDLE_COLOR}
      animate={
        isInView
          ? {
              backgroundColor: ["#FFFFFF", "#EF6F8D", litColor],
              borderColor: ["#FFFFFF", "#EF6F8D", litColor],
              color: ["#202824", "#FFFFFF", "#FFFFFF"],
              scale: [1, 1.15, 1],
            }
          : IDLE_COLOR
      }
      transition={
        isInView
          ? {
              duration: reducedMotion ? 0.01 : 0.6,
              delay: reducedMotion ? 0 : delay,
              times: [0, 0.4, 1],
              ease: "easeOut",
            }
          : { duration: reducedMotion ? 0.01 : 0.3 }
      }
      className={className}
    >
      {index + 1}
    </motion.div>
  );
}

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });
  const prefersReducedMotion = useReducedMotion();
  const { open } = useQuoteModal();
  const lastIndex = processSteps.length - 1;
  const stepDelay = TOTAL_DURATION / lastIndex;

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-content">
        <SectionHeading
          eyebrow="PROCESS"
          title="처음 상담부터 마지막 검수까지 한눈에 확인하세요"
        />

        <div ref={containerRef} className="mt-16 lg:mt-20">
          {/* PC: horizontal timeline */}
          <div className="relative hidden lg:grid lg:grid-cols-5">
            <div className="absolute left-0 right-0 top-6 h-[2px] bg-divider" aria-hidden="true">
              <motion.div
                className="h-full origin-left bg-deep-green"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : TOTAL_DURATION,
                  ease: "easeInOut",
                }}
              />
            </div>
            {processSteps.map((step, i) => (
              <div key={step.id} className="relative flex flex-col items-start pr-6">
                <StepNode
                  index={i}
                  isLast={i === lastIndex}
                  isInView={isInView}
                  delay={i * stepDelay}
                  reducedMotion={prefersReducedMotion}
                  className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-bold"
                />
                <h3 className="mt-5 text-base font-bold text-text-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-text-body">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: vertical timeline */}
          <div className="relative flex flex-col gap-10 lg:hidden">
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-divider" aria-hidden="true">
              <motion.div
                className="w-full origin-top bg-deep-green"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                style={{ height: "100%" }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : TOTAL_DURATION,
                  ease: "easeInOut",
                }}
              />
            </div>
            {processSteps.map((step, i) => (
              <div key={step.id} className="relative flex gap-5 pl-0">
                <StepNode
                  index={i}
                  isLast={i === lastIndex}
                  isInView={isInView}
                  delay={i * stepDelay}
                  reducedMotion={prefersReducedMotion}
                  className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold"
                />
                <div className="pt-1.5">
                  <h3 className="text-base font-bold text-text-charcoal">{step.title}</h3>
                  <p className="mt-2 text-sm leading-[1.7] text-text-body">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center lg:mt-16">
          <Button onClick={open} size="lg">
            내 집 청소 일정 확인하기
          </Button>
        </div>
      </div>
    </section>
  );
}
