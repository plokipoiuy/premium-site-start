// ============================================================
// 그리다클린 Sample #002 — 업체 정보 & 브랜드 설정
// Green House Sample #001(lib/siteConfig.ts)과 독립된 별도 설정 파일입니다.
// ============================================================

export const siteConfigGridaclean = {
  // "preview": 영업용 샘플 (검색엔진 노출 차단, LocalBusiness 구조화 데이터 미출력)
  // "production": 실 계약 사이트 (SEO 색인 허용, 구조화 데이터 출력 가능)
  siteMode: "preview" as "preview" | "production",

  businessName: "그리다클린",
  businessNameEnglish: "GRIDA CLEAN",

  // Notion에 첨부된 실제 로고 원본 파일(PNG)은 현재 세션에서 사용 가능한 도구로는
  // 바이너리를 내려받을 수 없어(텍스트 첨부파일만 다운로드 가능), 임시로 비워둡니다.
  // 로고 상태는 Notion상 "있음"이므로, 실제 로고 파일을 public/images/logo/gridaclean-logo.png
  // 경로에 넣으면 Logo 컴포넌트가 이를 우선 사용하도록 되어 있습니다.
  logo: "",

  // 연락처 — SAMPLE 전용 값. 실제 그리다클린 연락처(010-2888-6578 등)는 사용하지 않습니다.
  phoneRaw: "1234567890",
  phoneDisplay: "123-456-7890",
  smsBody:
    "안녕하세요, 그리다클린 청소 문의드립니다. 청소 종류/지역/평수/희망 날짜를 남겨주시면 더 빠르게 안내드릴 수 있어요.",
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

  // 색상 방식: 자동 — 그리다클린 업체명/업종이 주는 밝은 sky blue / cyan 계열 인상을 반영.
  // 실제 로고 바이너리를 확인하지 못해 로고 자체 색상 추출은 불가했고, 블로그 접근도
  // 차단되어(iframe/동적 로딩) 업체명과 업종을 기준으로 자연스러운 청소업체 브랜드
  // 톤으로 판단했습니다. 2~3개 핵심 컬러로 정돈.
  primaryColor: "#35BCEC", // 메인 — 밝은 sky blue
  secondaryColor: "#0878B5", // 보조 — 진한 teal
  accentColor: "#E85B7A", // 강조/CTA — 산호 핑크 (주요 액션 강조용)

  seoTitle: "그리다클린 GRIDA CLEAN | 세종 입주·상가·사무실·에어컨 청소 전문 (샘플)",
  seoDescription:
    "세종 지역 기반 청소 전문 브랜드 그리다클린. 입주청소, 상가청소, 사무실청소, 에어컨청소를 투명한 상담과 꼼꼼한 검수로 진행합니다. (영업용 샘플 페이지)",
  canonicalUrl: "https://premium-site-start.vercel.app/gridaclean",
};

export type SiteConfigGridaclean = typeof siteConfigGridaclean;
