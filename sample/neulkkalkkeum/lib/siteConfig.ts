// ============================================================
// 늘깔끔 Sample #003 — 업체 정보 & 브랜드 설정
// Green House(archive/greenhouse), GridaClean(sample/gridaclean)과 독립된 설정 파일입니다.
// ============================================================

export const siteConfigNeulkkalkkeum = {
  // "preview": 영업용 샘플 (검색엔진 노출 차단, LocalBusiness 구조화 데이터 미출력)
  // "production": 실 계약 사이트 (SEO 색인 허용, 구조화 데이터 출력 가능)
  siteMode: "preview" as "preview" | "production",

  businessName: "늘깔끔",
  businessNameEnglish: "NEULKKALKKEUM",

  // 실제 로고(Notion 첨부 logo_늘깔끔.jpg) 이미지 파일이 헤더/푸터에서 깨져 표시되어
  // 이미지 로고 사용을 중단했습니다. 현재는 components/ui/Logo.tsx의 inline SVG
  // (원본 로고 우측 하단 "집+반짝이" 심볼을 단순화)로 대체합니다. 이 필드는 더 이상
  // 참조되지 않습니다.
  logo: "",

  // 연락처 — SAMPLE 전용 값. 실제 늘깔끔 연락처(010-9974-5052 등)는 사용하지 않습니다.
  phoneRaw: "0212345678",
  phoneDisplay: "02-1234-5678",
  smsBody:
    "안녕하세요, 늘깔끔 청소 문의드립니다. 청소 종류/지역/평수/희망 날짜를 남겨주시면 더 빠르게 안내드릴 수 있어요.",
  kakaoUrl: "",

  // Footer 업체정보 카드 전용(SAMPLE) — 실제 연결되는 링크가 아닌 표시 텍스트입니다.
  representativeName: "샘플 담당자",
  representativePhone: "123-4567-8901",
  businessRegNo: "123-45-67890",
  address: "대한민국 대한시 대한동 111-1111",
  email: "sample@sample.com",
  officialWebsite: "www.sample-preview.com",

  serviceAreas: ["세종"],
  services: ["입주청소", "이사청소", "거주청소", "부분·집중청소"],

  // 색상: 브랜드 포인트 초록만 늘깔끔 고유값을 쓰고, 전체 밝기/배경/CTA는
  // Green House 최종본 기준을 그대로 따릅니다.
  primaryColor: "#296330", // 메인 — 늘깔끔 브랜드 포인트 초록
  secondaryColor: "#7FA88F", // 보조 — Primary보다 밝은 초록
  accentColor: "#EF6F8D", // 강조/CTA — Green House와 동일 계열 핑크

  seoTitle: "늘깔끔 | 세종 입주·이사·거주 청소 전문 (샘플)",
  seoDescription:
    "세종 지역 기반 청소 전문 브랜드 늘깔끔. 입주청소, 이사청소, 거주청소, 부분·집중청소를 투명한 상담과 꼼꼼한 검수로 진행합니다. (영업용 샘플 페이지)",
  canonicalUrl: "https://bibilayer.vercel.app/sample/neulkkalkkeum",
};

export type SiteConfigNeulkkalkkeum = typeof siteConfigNeulkkalkkeum;
