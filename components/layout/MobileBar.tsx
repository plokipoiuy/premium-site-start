"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useQuoteModal } from "@/components/quote/QuoteModalContext";

// 모바일 하단 고정 바: 전화 / 카카오톡 / 간편 견적(가장 넓게 강조)
export function MobileBar() {
  const { open } = useQuoteModal();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-2 border-t border-divider bg-white px-3 py-3 shadow-[0_-4px_20px_rgba(32,40,36,0.08)] lg:hidden">
      <a
        href="tel:0212345678"
        aria-label="전화로 상담하기"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-divider text-deep-green transition-colors hover:bg-deep-green/5 active:scale-95 focus-visible:outline-deep-green"
      >
        <Phone size={20} />
      </a>
      <a
        href="#"
        aria-label="카카오톡 상담하기 (연동 예정, 샘플 버튼)"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-divider bg-[#FEE500] text-[#3C1E1E] transition-colors hover:brightness-95 active:scale-95 focus-visible:outline-deep-green"
      >
        <MessageCircle size={20} />
      </a>
      <button
        type="button"
        onClick={open}
        className="flex flex-1 items-center justify-center rounded-full bg-coral-pink text-sm font-bold text-white shadow-soft transition-colors hover:bg-[#e05c7c] active:scale-[0.98] focus-visible:outline-coral-pink"
      >
        1분 간편 견적 받기
      </button>
    </div>
  );
}
