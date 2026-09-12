import type { Metadata } from "next";
import GreenHouseKrHome from "@/archive/greenhouse/page";

// 영업 종료된 Green House 최종 승인본 검수/보관용 라우트 — 검색엔진에 노출되지 않는다.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ArchiveGreenHouse() {
  return <GreenHouseKrHome />;
}
