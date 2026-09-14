import { siteConfigNeulkkalkkeum as siteConfig } from "@/sample/neulkkalkkeum/lib/siteConfig";

type LogoProps = {
  className?: string;
  mark?: string;
  text?: string;
};

// 원본 로고 우측 하단의 "집 모양 + 반짝이" 심볼을 참고한 단순화된 inline SVG.
// 원본 로고 이미지(가로형 크롭)는 표시가 깨져 더 이상 사용하지 않고,
// 심볼 + "늘깔끔" 텍스트 조합으로 대체한다. 새 로고로 재디자인하지 않고
// 원본 심볼 형태(지붕 + 벽 + 반짝임)만 최대한 단순하게 유지한다.
export function Logo({ className = "", mark = siteConfig.primaryColor, text = "#202824" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M5 15L14 7L23 15"
          stroke={mark}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 13.5V22C8 22.5523 8.44772 23 9 23H19C19.5523 23 20 22.5523 20 22V13.5"
          stroke={mark}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M24 5L24.7 6.6L26.3 7.3L24.7 8L24 9.6L23.3 8L21.7 7.3L23.3 6.6L24 5Z" fill={mark} />
      </svg>
      <span className="font-manrope text-base font-extrabold tracking-tight" style={{ color: text }}>
        {siteConfig.businessName}
      </span>
    </span>
  );
}
