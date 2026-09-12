"use client";

import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="배경 클릭하여 닫기"
        onClick={onClose}
        className="absolute inset-0 bg-text-charcoal/60 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-card bg-white p-6 shadow-card lg:p-8"
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 id="modal-title" className="text-xl font-bold text-text-charcoal">
            {title}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="닫기"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-ivory hover:text-text-charcoal focus-visible:outline-deep-green"
          >
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
}
