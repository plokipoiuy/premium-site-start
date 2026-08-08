"use client";

import Script from "next/script";
import { useEffect, useRef, useSyncExternalStore } from "react";

const PROJECT_ID = "dYI8qy5lmCVdxwAFD0rG";
const SCRIPT_SRC =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.8/dist/unicornStudio.umd.js";

declare global {
  interface Window {
    UnicornStudio?: { isInitialized?: boolean; init: () => void };
  }
}

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function UnicornScene() {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  const reveal = () => containerRef.current?.classList.add("opacity-100");

  useEffect(() => {
    if (reducedMotion) return;
    if (window.UnicornStudio?.init) {
      window.UnicornStudio.init();
      reveal();
    }
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <>
      <div
        ref={containerRef}
        data-us-project={PROJECT_ID}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-700"
      />
      <Script
        src={SCRIPT_SRC}
        strategy="afterInteractive"
        onLoad={() => {
          window.UnicornStudio?.init();
          reveal();
        }}
      />
    </>
  );
}
