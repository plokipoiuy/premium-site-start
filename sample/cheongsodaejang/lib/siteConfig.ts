// ============================================================
// 청소대장 Sample #002 — 업체 정보 & 브랜드 설정
// Green House Sample #001(lib/siteConfig.ts)과 독립된 별도 설정 파일입니다.
// ============================================================

export const siteConfigCheongsodaejang = {
  // "preview": 영업용 샘플 (검색엔진 노출 차단, LocalBusiness 구조화 데이터 미출력)
  // "production": 실 계약 사이트 (SEO 색인 허용, 구조화 데이터 출력 가능)
  siteMode: "preview" as "preview" | "production",

  businessName: "청소대장",
  businessNameEnglish: "CLEANING CAPTAIN",

  // Notion에 첨부된 실제 로고 원본 파일(PNG)은 현재 세션에서 사용 가능한 도구로는
  // 바이너리를 내려받을 수 없어(텍스트 첨부파일만 다운로드 가능), 임시로 비워둡니다.
  // 로고 상태는 Notion상 "있음"이므로, 실제 로고 파일을 public/images/logo/cheongsodaejang-logo.png
  // 경로에 넣으면 Logo 컴포넌트가 이를 우선 사용하도록 되어 있습니다.
  logo: "",

  // 연락처 — SAMPLE 전용 값. 실제 청소대장 연락처(010-2888-6578 등)는 사용하지 않습니다.
  phoneRaw: "12345678901",
  phoneDisplay: "123-4567-8901",
  smsBody:
    "안녕하세요, 청소대장 청소 문의드립니다. 청소 종류/지역/평수/희망 날짜를 남겨주시면 더 빠르게 안내드릴 수 있어요.",
  kakaoUrl: "",

  // Footer 업체정보 카드 전용(SAMPLE) — 실제 연결되는 링크가 아닌 표시 텍스트입니다.
  representativeName: "샘플 담당자",
  representativePhone: "123-4567-8901",
  businessRegNo: "123-45-67890",
  address: "대한민국 대한시 대한동 111-1111",
  email: "sample@sample.com",
  officialWebsite: "www.sample-preview.com",

  serviceAreas: ["세종"],
  services: ["입주청소", "상가청소", "사무실청소", "에어컨청소"],

  // 색상 방식: 자동 — 청소대장 업체명/업종이 주는 밝은 sky blue / cyan 계열 인상을 반영.
  // 실제 로고 바이너리를 확인하지 못해 로고 자체 색상 추출은 불가했고, 블로그 접근도
  // 차단되어(iframe/동적 로딩) 업체명과 업종을 기준으로 자연스러운 청소업체 브랜드
  // 톤으로 판단했습니다. 2~3개 핵심 컬러로 정돈.
  primaryColor: "#35BCEC", // 메인 — 밝은 sky blue
  secondaryColor: "#0878B5", // 보조 — 진한 teal
  accentColor: "#E85B7A", // 강조/CTA — 산호 핑크 (주요 액션 강조용)

  seoTitle: "청소대장 | 세종 입주·상가·사무실·에어컨 청소 전문 (샘플)",
  seoDescription: "세종 지역 청소 전문 청소대장 홈페이지 샘플입니다.",
  // 카카오톡 등 메신저 미리보기 전용 — <title>/설명보다 짧고 간결하게
  ogTitle: "청소대장 | 세종 청소업체",
  ogDescription: "세종 지역 청소 전문 청소대장 홈페이지 샘플입니다.",
  canonicalUrl: "https://bibilayer.vercel.app/sample/cheongsodaejang",
};

export type SiteConfigCheongsodaejang = typeof siteConfigCheongsodaejang;
