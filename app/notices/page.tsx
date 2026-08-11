import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/page-hero";
import { NoticeBrowser } from "@/components/notices/notice-browser";

export const metadata: Metadata = {
  title: "알림마당 | 한빛대학교병원",
};

export default function NoticesPage() {
  return (
    <>
      <PageHero
        eyebrow="NEWS & NOTICE"
        title="알림마당"
        breadcrumb="알림마당"
        description="병원 공지사항과 보도자료를 빠르게 확인하세요."
      />
      <Suspense>
        <NoticeBrowser />
      </Suspense>
    </>
  );
}
