import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-green": "#285C4D",
        "sage-green": "#8EAD9D",
        "coral-pink": "#EF6F8D",
        "blush-pink": "#F9E4E8",
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
