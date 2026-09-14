import type { Metadata } from "next";
import GreenHouseKrHome from "@/archive/greenhouse/page";
import { siteConfig } from "@/archive/greenhouse/lib/siteConfig";

// 영업 종료된 Green House 최종 승인본 검수/보관용 라우트 — 검색엔진에 노출되지 않는다.
// Open Graph는 이 라우트 전용으로 직접 지정 — 다른 샘플 페이지가 이 값을 상속하지 않는다.
export const metadata: Metadata = {
  title: siteConfig.seoTitle,
  description: siteConfig.seoDescription,
  robots: { index: false, follow: false },
  openGraph: {
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    url: siteConfig.canonicalUrl,
    type: "website",
    locale: "ko_KR",
  },
};

export default function ArchiveGreenHouse() {
  return <GreenHouseKrHome />;
}
