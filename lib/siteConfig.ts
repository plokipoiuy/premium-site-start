// ============================================================
// 업체 정보 & 브랜드 설정 — 새 업체 사이트를 만들 때는 이 파일만 교체하세요.
// 값이 없는 항목은 빈 문자열("")로 두면 관련 UI가 자동으로 숨겨집니다.
// ============================================================

export const siteConfig = {
  // "preview": 영업용 샘플 (검색엔진 노출 차단, LocalBusiness 구조화 데이터 미출력)
  // "production": 실 계약 사이트 (SEO 색인 허용, 구조화 데이터 출력 가능)
  siteMode: "preview" as "preview" | "production",

  businessName: "그린하우스",
  businessNameEnglish: "GREEN HOUSE",

  // 로고 이미지 경로가 있으면 넣으세요. 없으면 기본 하우스 마크(SVG)를 사용합니다.
  logo: "",

  // 연락처 — 값이 없으면("") 해당 연락 채널 버튼이 자동으로 숨겨집니다.
  phoneRaw: "0212345678", // tel:/sms: 링크용, 하이픈 없이
  phoneDisplay: "02-1234-5678", // 화면 표시용
  smsBody:
    "안녕하세요, 그린하우스 청소 문의드립니다. 청소 종류/지역/평수/희망 날짜를 남겨주시면 더 빠르게 안내드릴 수 있어요.",
  kakaoUrl: "", // 실제 카카오톡 오픈채팅 URL. 없으면 카카오 버튼 숨김

  // 아래 5개는 Footer 업체정보 카드 전용(SAMPLE) — 실제 연결되는 링크가 아닌 표시 텍스트입니다.
  // 실제 계약 시 확인된 값으로 교체하세요.
  representativeName: "샘플 담당자",
  representativePhone: "123-4567-8901",
  businessRegNo: "123-45-67890",
  address: "대한민국 대한시 대한동 111-1111",
  email: "sample@sample.com",
  officialWebsite: "www.sample-preview.com",

  serviceAreas: ["전국"],
  services: ["입주청소", "이사청소", "거주청소", "부분·집중청소"],

  // 브랜드 컬러 3개 — 이 값만 바꾸면 사이트 전체 배색이 자동으로 바뀝니다 (tailwind.config.ts 참고)
  primaryColor: "#285C4D", // 메인 (기존 deep-green)
  secondaryColor: "#8EAD9D", // 보조 (기존 sage-green)
  accentColor: "#EF6F8D", // 강조/CTA (기존 coral-pink)

  seoTitle: "그린하우스 GREEN HOUSE | 강남 아파트 입주·이사·거주 청소 전문",
  seoDescription:
    "서울 강남구 논현로 기반 아파트 청소 전문 브랜드 그린하우스. 입주청소, 이사청소, 거주청소, 부분·집중청소를 투명한 상담과 꼼꼼한 검수로 진행합니다.",
  canonicalUrl: "https://greenhouse-cleaning-preview.vercel.app",
};

export type SiteConfig = typeof siteConfig;
