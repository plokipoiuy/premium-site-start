"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

type CompareSliderProps = {
  beforeAlt: string;
  afterAlt: string;
  beforeImage?: string;
  afterImage?: string;
  className?: string;
};

// 중앙 드래그로 Before/After를 비교하는 슬라이더. 마우스, 터치, 키보드 모두 지원.
// beforeImage/afterImage가 없으면 샘플 placeholder를 보여준다.
export function CompareSlider({ beforeAlt, afterAlt, beforeImage, afterImage, className = "" }: CompareSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setPosition((p) => Math.max(0, p - 5));
    } else if (e.key === "ArrowRight") {
      setPosition((p) => Math.min(100, p + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[4/3] w-full select-none overflow-hidden rounded-card lg:aspect-[16/10] ${className}`}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <div className="absolute inset-0">
        {beforeImage ? (
          <Image src={beforeImage} alt={beforeAlt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
        ) : (
          <PlaceholderImage alt={beforeAlt} variant="ivory" className="h-full w-full" />
        )}
      </div>

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        {afterImage ? (
          <Image src={afterImage} alt={afterAlt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
        ) : (
          <PlaceholderImage alt={afterAlt} variant="sage" className="h-full w-full" />
        )}
      </div>

      {/* 라벨은 잘리는 사진과 분리해 항상 같은 자리에 보이도록 고정 */}
      <span className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-text-charcoal/70 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 z-10 rounded-full bg-deep-green/85 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
        After
      </span>

      <div
        role="slider"
        tabIndex={0}
        aria-label="청소 전후 비교 슬라이더"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        onPointerDown={onPointerDown}
        onKeyDown={onKeyDown}
        className="absolute top-0 h-full w-1 cursor-ew-resize bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)] focus-visible:outline-deep-green"
        style={{ left: `calc(${position}% - 2px)` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-deep-green shadow-card">
          <MoveHorizontal size={18} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
