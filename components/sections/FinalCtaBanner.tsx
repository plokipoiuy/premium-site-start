"use client";

import { Phone } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useQuoteModal } from "@/components/quote/QuoteModalContext";

export function FinalCtaBanner() {
  const { open } = useQuoteModal();

  return (
    <section id="quote" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <PlaceholderImage alt="깨끗하게 정돈된 아파트 거실 (샘플 이미지)" variant="sage" className="h-full w-full" />
        <div className="absolute inset-0 bg-deep-green/80" aria-hidden="true" />
      </div>

      <div className="container-content relative py-20 lg:py-28">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-[28px] font-extrabold leading-[1.35] tracking-tight text-white lg:text-[42px]">
            청소가 필요한 날짜가 정해졌다면
            <br />
            지금 먼저 일정을 확인해 보세요.
          </h2>
          <p className="max-w-lg text-sm leading-[1.7] text-white/85 lg:text-base">
            간단한 정보만 남겨주시면 확인 후 안내해 드립니다.
            <br />
            견적 신청만으로 예약이나 결제가 확정되지 않습니다.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Button onClick={open} size="lg">
              1분 간편 견적 받기
            </Button>
            <Button href="tel:0212345678" variant="ghost" size="lg">
              <Phone size={18} aria-hidden="true" />
              전화로 상담하기
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
