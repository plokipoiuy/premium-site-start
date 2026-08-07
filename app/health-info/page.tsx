import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ArticleBrowser } from "@/components/health-info/article-browser";

export const metadata: Metadata = {
  title: "건강정보 | 한빛대학교병원",
};

export default function HealthInfoPage() {
  return (
    <>
      <PageHero
        eyebrow="HEALTH INFO"
        title="건강정보"
        breadcrumb="건강정보"
        description="전문 의료진이 직접 전하는 질환 정보와 건강 관리 칼럼을 확인하세요."
      />
      <ArticleBrowser />
    </>
  );
}
