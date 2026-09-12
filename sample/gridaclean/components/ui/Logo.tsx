import { siteConfigGridaclean as siteConfig } from "@/sample/gridaclean/lib/siteConfig";

type LogoProps = {
  className?: string;
  mark?: string;
  text?: string;
};

// 실제 그리다클린 로고(Notion 첨부) 바이너리를 현재 도구로는 내려받을 수 없어
// 임시 인라인 SVG 픽토그램(스파클 + 청소 동선)을 사용합니다.
// public/images/logo/gridaclean-logo.png 를 추가하면 실제 로고로 교체할 수 있습니다.
export function Logo({ className = "", mark = siteConfig.primaryColor, text = "#202824" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M7 22C7 22 10 15 17 15C24 15 27 22 27 22"
          stroke={mark}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="17" cy="15" r="3.2" stroke={mark} strokeWidth="2" />
        <path d="M27 7L27.6 8.4L29 9L27.6 9.6L27 11L26.4 9.6L25 9L26.4 8.4L27 7Z" fill={mark} />
        <path d="M9 26H25" stroke={mark} strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-manrope text-[15px] font-extrabold tracking-[0.06em]" style={{ color: text }}>
          {siteConfig.businessNameEnglish}
        </span>
        <span className="mt-0.5 text-[11px] font-medium tracking-tight" style={{ color: text, opacity: 0.65 }}>
          {siteConfig.businessName}
        </span>
      </span>
    </span>
  );
}
