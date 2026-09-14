import { ImageResponse } from "next/og";
import { siteConfigNeulkkalkkeum as siteConfig } from "@/sample/neulkkalkkeum/lib/siteConfig";

// 늘깔끔 전용 카카오톡/메신저 미리보기 이미지. 실제 로고 파일(Notion 첨부)을
// 이번 세션의 Notion 연동 도구로 다운로드할 수 없어(바이너리 미제공), Hero 실내
// 사진 대신 헤더/푸터에 쓰는 것과 같은 "집+반짝이" SVG 심볼 + 텍스트를 재사용해
// 코드로 직접 구성한다(next/og ImageResponse — 서버 렌더링, 브라우저 캡처 아님).
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: siteConfig.primaryColor,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 200,
            height: 200,
            borderRadius: 48,
            background: "rgba(255,255,255,0.16)",
          }}
        >
          <svg width="120" height="120" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 17L17 7L28 17"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 15.5V25C9.5 25.5523 9.94772 26 10.5 26H23.5C24.0523 26 24.5 25.5523 24.5 25V15.5"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M27 8L27.6 9.4L29 10L27.6 10.6L27 12L26.4 10.6L25 10L26.4 9.4L27 8Z" fill="#FFFFFF" />
          </svg>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 76,
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
          }}
        >
          {siteConfig.businessName}
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 28,
            fontWeight: 600,
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.12em",
          }}
        >
          CLEANING SERVICE
        </div>
      </div>
    ),
    { ...size }
  );
}
