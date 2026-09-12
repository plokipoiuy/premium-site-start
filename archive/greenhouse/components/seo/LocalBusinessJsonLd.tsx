import { siteConfig } from "@/archive/greenhouse/lib/siteConfig";

// production 모드 + 실제 주소·전화 데이터가 있을 때만 구조화 데이터를 출력합니다.
// preview(영업용 샘플) 상태에서는 항상 출력하지 않습니다.
// 없는 정보(영업시간 등)는 임의로 만들어 넣지 않습니다.
export function LocalBusinessJsonLd() {
  if (siteConfig.siteMode !== "production") return null;
  if (!siteConfig.address || !siteConfig.phoneDisplay) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.businessName,
    telephone: siteConfig.phoneDisplay,
    address: siteConfig.address,
    areaServed: siteConfig.serviceAreas,
    url: siteConfig.canonicalUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
