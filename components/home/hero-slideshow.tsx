"use client";

import { useEffect, useState } from "react";

const SLIDE_INTERVAL_MS = 6000;

const SLIDES = [
  {
    src: "https://cdn.imweb.me/thumbnail/20260811/709be9331ae49.png",
    fallback: "linear-gradient(135deg, #1a5aa8, #0b2d63)",
  },
  {
    src: "https://cdn.imweb.me/thumbnail/20260811/c2147be37120b.png",
    fallback: "linear-gradient(135deg, #14448c, #071c42)",
  },
  {
    src: "https://cdn.imweb.me/thumbnail/20260811/bad2a8f46f384.png",
    fallback: "linear-gradient(135deg, #0b2d63, #1c3f7a)",
  },
];

export function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: i === active ? 1 : 0,
              backgroundImage: slide.src ? `url(${slide.src})` : slide.fallback,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-8 z-20 flex justify-center gap-2 sm:bottom-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`배경 이미지 ${i + 1}번`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === active ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </>
  );
}
