"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useQuoteModal } from "@/sample/gridaclean/components/quote/QuoteModalContext";
import { siteConfigGridaclean as siteConfig } from "@/sample/gridaclean/lib/siteConfig";
import { guardSampleLink } from "@/sample/gridaclean/lib/sampleGuard";

// 모바일 하단 고정 바: 전화 / 카카오톡(있을 때만) / 견적 문의(가장 넓게 강조)
export function MobileBar() {
  const { open } = useQuoteModal();
  const hasKakao = Boolean(siteConfig.kakaoUrl) && siteConfig.kakaoUrl !== "#";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-2 border-t border-divider bg-white px-3 py-3 shadow-[0_-4px_20px_rgba(32,40,36,0.08)] lg:hidden">
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        onClick={guardSampleLink}
        aria-label="전화로 상담하기"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-divider text-grida-blue transition-colors hover:bg-grida-blue/5 active:scale-95 focus-visible:outline-grida-blue"
      >
        <Phone size={20} />
      </a>
      {hasKakao && (
        <a
          href={siteConfig.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={guardSampleLink}
          aria-label="카카오톡 오픈채팅으로 문의하기"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-divider bg-[#FEE500] text-[#3C1E1E] transition-colors hover:brightness-95 active:scale-95 focus-visible:outline-grida-blue"
        >
          <MessageCircle size={20} />
        </a>
      )}
      <button
        type="button"
        onClick={open}
        className="flex flex-1 items-center justify-center rounded-full bg-grida-accent text-sm font-bold text-white shadow-soft transition-colors hover:bg-[#e05c7c] active:scale-[0.98] focus-visible:outline-grida-accent"
      >
        청소 견적 문의하기
      </button>
    </div>
  );
}
