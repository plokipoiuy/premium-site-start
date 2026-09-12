"use client";

import { MessageCircle, MessageSquareText, Phone } from "lucide-react";
import { Modal } from "@/archive/greenhouse/components/ui/Modal";
import { useQuoteModal } from "@/archive/greenhouse/components/quote/QuoteModalContext";
import { siteConfig } from "@/archive/greenhouse/lib/siteConfig";
import { guardSampleLink } from "@/archive/greenhouse/lib/sampleGuard";

const optionClass =
  "flex items-center gap-4 rounded-2xl border border-divider px-5 py-4 text-left transition-colors hover:border-deep-green hover:bg-deep-green/5 focus-visible:outline-deep-green";
const iconWrapClass = "flex h-11 w-11 shrink-0 items-center justify-center rounded-full";

export function ContactModal() {
  const { isOpen, close } = useQuoteModal();
  const smsHref = `sms:${siteConfig.phoneRaw}?body=${encodeURIComponent(siteConfig.smsBody)}`;
  const hasKakao = Boolean(siteConfig.kakaoUrl) && siteConfig.kakaoUrl !== "#";

  return (
    <Modal isOpen={isOpen} onClose={close} title="1분 만에 문의하기">
      <p className="text-sm leading-[1.7] text-text-body">
        번거로운 양식 작성 없이, 편하신 방법으로 바로 문의해 주세요. 개인정보는 입력받지 않으며,
        연결되는 채널에서 직접 대화가 이루어집니다.
      </p>

      <div className="mt-6 flex flex-col gap-3">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          onClick={(e) => {
            guardSampleLink(e);
            close();
          }}
          className={optionClass}
        >
          <span className={`${iconWrapClass} bg-deep-green/10 text-deep-green`}>
            <Phone size={20} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-bold text-text-charcoal">전화로 상담하기</span>
            <span className="block text-xs text-text-muted">{siteConfig.phoneDisplay}</span>
          </span>
        </a>

        <a
          href={smsHref}
          onClick={(e) => {
            guardSampleLink(e);
            close();
          }}
          className={optionClass}
        >
          <span className={`${iconWrapClass} bg-coral-pink/10 text-coral-pink`}>
            <MessageSquareText size={20} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-bold text-text-charcoal">문자로 문의하기</span>
            <span className="block text-xs text-text-muted">내용이 미리 채워진 문자를 보내드려요</span>
          </span>
        </a>

        {hasKakao && (
          <a
            href={siteConfig.kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              guardSampleLink(e);
              close();
            }}
            className={optionClass}
          >
            <span className={`${iconWrapClass} bg-[#FEE500] text-[#3C1E1E]`}>
              <MessageCircle size={20} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-bold text-text-charcoal">카카오톡 오픈채팅</span>
              <span className="block text-xs text-text-muted">채팅창에서 바로 문의해 보세요</span>
            </span>
          </a>
        )}
      </div>
    </Modal>
  );
}
