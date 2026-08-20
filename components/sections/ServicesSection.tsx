"use client";

import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { useQuoteModal } from "@/components/quote/QuoteModalContext";

export function ServicesSection() {
  const { open } = useQuoteModal();

  return (
    <section id="services" className="section-padding bg-blush-pink/60">
      <div className="container-content">
        <SectionHeading
          eyebrow="SERVICES"
          title="공간과 상황에 맞는 청소서비스"
          description="입주부터 거주, 부분 청소까지 필요한 만큼만 선택할 수 있습니다."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.1} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-soft">
                <div className="aspect-[4/3] overflow-hidden">
                  <PlaceholderImage
                    alt={service.imageAlt}
                    variant="blush"
                    className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div>
                    <span className="font-manrope text-[11px] font-semibold uppercase tracking-[0.18em] text-coral-pink">
                      {service.englishLabel}
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-text-charcoal">{service.name}</h3>
                  </div>
                  <p className="text-sm leading-[1.7] text-text-body">{service.summary}</p>
                  <ul className="mt-1 flex flex-col gap-1.5">
                    {service.scope.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sage-green" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={open}
                    aria-label={`${service.name} 견적 문의하기`}
                    className="mt-auto flex items-center gap-1.5 pt-3 text-sm font-semibold text-deep-green transition-colors hover:text-coral-pink focus-visible:outline-deep-green"
                  >
                    자세히 보기
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
