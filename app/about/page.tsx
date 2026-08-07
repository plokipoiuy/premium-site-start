import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Greeting } from "@/components/about/greeting";
import { History } from "@/components/about/history";
import { Facility } from "@/components/about/facility";
import { Location } from "@/components/about/location";

export const metadata: Metadata = {
  title: "병원소개 | 한빛대학교병원",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title="병원소개"
        breadcrumb="병원소개"
        description="한빛대학교병원은 최고의 의료진과 첨단 시설을 바탕으로 환자 중심의 신뢰받는 의료를 실현합니다."
      />
      <Greeting />
      <History />
      <Facility />
      <Location />
    </>
  );
}
