"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { faqItems } from "@/archive/greenhouse/lib/data/faq";
import { SectionHeading } from "@/archive/greenhouse/components/ui/SectionHeading";
import { Reveal } from "@/archive/greenhouse/components/ui/Reveal";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-content">
        <SectionHeading eyebrow="FAQ" title="자주 묻는 질문" />

        <div className="mx-auto mt-12 max-w-3xl lg:mt-16">
          {faqItems.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <Reveal key={item.id} delay={i * 0.05}>
                <div className="border-b border-divider">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-panel`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-deep-green"
                  >
                    <span className="text-base font-semibold text-text-charcoal lg:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-deep-green" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`${item.id}-panel`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm leading-[1.7] text-text-body lg:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
