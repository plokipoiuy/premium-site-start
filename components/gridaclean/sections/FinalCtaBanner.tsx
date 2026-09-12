"use client";

import { Phone } from "lucide-react";
import { PlaceholderImage } from "@/components/gridaclean/ui/PlaceholderImage";
import { Button } from "@/components/gridaclean/ui/Button";
import { Reveal } from "@/components/gridaclean/ui/Reveal";
import { useQuoteModal } from "@/components/gridaclean/quote/QuoteModalContext";
import { siteConfigGridaclean as siteConfig } from "@/lib/siteConfig.gridaclean";
import { guardSampleLink } from "@/lib/sampleGuard.gridaclean";

export function FinalCtaBanner() {
  const { open } = useQuoteModal();
  const hasKakao = Boolean(siteConfig.kakaoUrl) && siteConfig.kakaoUrl !== "#";

  return (
    <section id="quote" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <PlaceholderImage alt="깨끗하게 정돈된 아파트 거실 (샘플 이미지)" variant="sage" className="h-full w-full" />
        <div className="absolute inset-0 bg-grida-blue/80" aria-hidden="true" />
      </div>

      <div className="container-content relative py-20 lg:py-28">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-[28px] font-extrabold leading-[1.35] tracking-tight text-white lg:text-[42px]">
            청소가 필요한 날짜가 정해졌다면
            <br />
            지금 편하신 방법으로 문의해 보세요.
          </h2>
          <p className="max-w-lg text-sm leading-[1.7] text-white/85 lg:text-base">
            양식 작성 없이 {hasKakao ? "전화, 문자, 카카오톡으로" : "전화나 문자로"} 바로 문의하실 수 있습니다.
            <br />
            문의만으로 예약이나 결제가 확정되지 않습니다.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Button onClick={open} size="lg">
              청소 견적 문의하기
            </Button>
            <Button href={`tel:${siteConfig.phoneRaw}`} onClick={guardSampleLink} variant="ghost" size="lg">
              <Phone size={18} aria-hidden="true" />
              전화로 상담하기
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
