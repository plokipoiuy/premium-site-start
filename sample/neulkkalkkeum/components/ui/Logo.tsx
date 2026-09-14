import { siteConfigNeulkkalkkeum as siteConfig } from "@/sample/neulkkalkkeum/lib/siteConfig";

type LogoProps = {
  className?: string;
};

// 늘깔끔 실제 로고(가로형 크롭) 이미지를 그대로 사용합니다.
// 원본 파일(logo_늘깔끔.jpg)은 현재 세션의 Notion 연동 도구로는 바이너리를 내려받을 수
// 없어(텍스트 첨부만 다운로드 가능, 파일 속성도 서명 URL을 반환하지 않음) 저장소에 아직
// 없습니다. public/images/logo/neulkkalkkeum-logo.jpg 경로에 실제 파일을 넣으면
// 이 컴포넌트가 자동으로 그 이미지를 표시합니다. 로고 자체를 새로 그리지 않습니다.
export function Logo({ className = "" }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={siteConfig.logo}
      alt={siteConfig.businessName}
      className={`h-10 w-auto object-contain lg:h-12 ${className}`}
    />
  );
}
