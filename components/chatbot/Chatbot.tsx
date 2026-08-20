"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircleHeart, X, ArrowLeft } from "lucide-react";
import { chatbotOptions } from "@/lib/data/chatbot";
import { ChatbotOption } from "@/lib/types";

const TOOLTIP_STORAGE_KEY = "greenhouse-chatbot-tooltip-shown";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [selected, setSelected] = useState<ChatbotOption | null>(null);

  useEffect(() => {
    const alreadyShown = window.localStorage.getItem(TOOLTIP_STORAGE_KEY);
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
        window.localStorage.setItem(TOOLTIP_STORAGE_KEY, "1");
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const openChat = () => {
    setIsOpen(true);
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col items-end gap-3 lg:bottom-8 lg:right-8">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-label="그린하우스 챗봇"
            className="flex w-[300px] flex-col overflow-hidden rounded-card bg-white shadow-card sm:w-80"
          >
            <div className="flex items-center justify-between bg-deep-green px-5 py-4">
              <span className="text-sm font-bold text-white">그린하우스 안내 챗봇</span>
              <button
                type="button"
                aria-label="챗봇 닫기"
                onClick={() => setIsOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-white"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex max-h-96 flex-col gap-3 overflow-y-auto p-5">
              {!selected ? (
                <>
                  <p className="text-sm leading-[1.7] text-text-body">
                    안녕하세요! 무엇이 궁금하신가요? (FAQ 기반 데모 답변입니다)
                  </p>
                  <div className="flex flex-col gap-2">
                    {chatbotOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setSelected(option)}
                        className="rounded-xl border border-divider px-4 py-3 text-left text-sm font-medium text-text-charcoal transition-colors hover:border-deep-green hover:bg-deep-green/5 focus-visible:outline-deep-green"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="flex items-center gap-1.5 self-start text-xs font-semibold text-text-muted transition-colors hover:text-deep-green focus-visible:outline-deep-green"
                  >
                    <ArrowLeft size={14} aria-hidden="true" />
                    다른 질문 보기
                  </button>
                  <div className="rounded-xl bg-ivory px-4 py-3 text-sm font-semibold text-text-charcoal">
                    {selected.label}
                  </div>
                  <p className="rounded-xl bg-deep-green/5 px-4 py-3 text-sm leading-[1.7] text-text-body">
                    {selected.reply}
                  </p>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            onClick={openChat}
            className="rounded-2xl rounded-br-sm bg-white px-4 py-2.5 text-sm font-medium text-text-charcoal shadow-card focus-visible:outline-deep-green"
          >
            청소 견적이 궁금하신가요?
          </motion.button>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label={isOpen ? "챗봇 닫기" : "챗봇 열기"}
        onClick={() => (isOpen ? setIsOpen(false) : openChat())}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-deep-green text-white shadow-card transition-transform hover:scale-105 active:scale-95 focus-visible:outline-deep-green"
      >
        {isOpen ? <X size={22} /> : <MessageCircleHeart size={24} aria-hidden="true" />}
      </button>
    </div>
  );
}
