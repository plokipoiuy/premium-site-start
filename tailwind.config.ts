import type { Config } from "tailwindcss";
import { siteConfig } from "./lib/siteConfig";

// 강조색을 흰색과 섞어 배지/태그용 연한 톤을 자동으로 만든다.
function lighten(hex: string, amount: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const mix = (channel: number) => Math.round(channel + (255 - channel) * amount);
  const r = mix((num >> 16) & 0xff);
  const g = mix((num >> 8) & 0xff);
  const b = mix(num & 0xff);
  return `#${[r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 브랜드 컬러 3개 — lib/siteConfig.ts에서만 관리 (기존 클래스명은 그대로 유지)
        "deep-green": siteConfig.primaryColor,
        "sage-green": siteConfig.secondaryColor,
        "coral-pink": siteConfig.accentColor,
        "blush-pink": lighten(siteConfig.accentColor, 0.85),
        ivory: "#F8F6F0",
        "text-charcoal": "#202824",
        "text-body": "#59625E",
        "text-muted": "#8A928E",
        divider: "#E5E9E6",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        card: "24px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "light-travel": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-x": "marquee-x 22s linear infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(32, 40, 36, 0.08)",
        card: "0 8px 32px -8px rgba(32, 40, 36, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
