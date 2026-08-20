type LogoProps = {
  className?: string;
  mark?: string;
  text?: string;
};

// 지붕 윤곽 + 잎사귀 + 작은 반짝임을 결합한 라인형 심볼
export function Logo({ className = "", mark = "#285C4D", text = "#202824" }: LogoProps) {
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
        <path
          d="M17 26V20C17 17.7909 18.7909 16 21 16C21 18.2091 19.2091 20 17 20"
          stroke={mark}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M27 8L27.6 9.4L29 10L27.6 10.6L27 12L26.4 10.6L25 10L26.4 9.4L27 8Z" fill={mark} />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-manrope text-[15px] font-extrabold tracking-[0.06em]" style={{ color: text }}>
          GREEN HOUSE
        </span>
        <span className="mt-0.5 text-[11px] font-medium tracking-tight" style={{ color: text, opacity: 0.65 }}>
          그린하우스
        </span>
      </span>
    </span>
  );
}
