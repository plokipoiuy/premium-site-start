import { siteConfigNeulkkalkkeum as siteConfig } from "@/sample/neulkkalkkeum/lib/siteConfig";

type LogoProps = {
  className?: string;
  mark?: string;
  text?: string;
};

// 원본 로고 우측 하단의 "집 모양 + 반짝이" 심볼을 참고한 단순화된 inline SVG.
// 원본 로고 이미지(가로형 크롭)는 표시가 깨져 더 이상 사용하지 않고,
// 심볼 + 2줄 텍스트(한글 메인 "늘깔끔" / 영문 서브 "CLEANING SERVICE") 조합으로
// 대체한다. Green House 헤더 로고와 동일한 2줄 구조 — 새 로고로 재디자인하지 않고
// 원본 심볼 형태(지붕 + 벽 + 반짝임)만 최대한 단순하게 유지한다.
export function Logo({ className = "", mark = siteConfig.primaryColor, text = "#202824" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M6 17L17 7L28 17"
          stroke={mark}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 15.5V25C9.5 25.5523 9.94772 26 10.5 26H23.5C24.0523 26 24.5 25.5523 24.5 25V15.5"
          stroke={mark}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M27 8L27.6 9.4L29 10L27.6 10.6L27 12L26.4 10.6L25 10L26.4 9.4L27 8Z" fill={mark} />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-manrope text-[15px] font-extrabold tracking-tight" style={{ color: text }}>
          {siteConfig.businessName}
        </span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.06em]" style={{ color: text, opacity: 0.65 }}>
          CLEANING SERVICE
        </span>
      </span>
    </span>
  );
}
