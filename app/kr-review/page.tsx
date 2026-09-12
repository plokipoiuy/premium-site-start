import type { Metadata } from "next";
import GreenHouseKrHome from "@/app/_archive/greenhouse-kr-home";

// 임시 검수 전용 라우트 — 공개 루트(/)는 계속 404로 유지되고, 이 경로는 검색엔진에 노출되지 않는다.
// 검수가 끝나면 이 파일과 app/kr-review 폴더를 삭제하면 된다.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function KrReview() {
  return <GreenHouseKrHome />;
}
