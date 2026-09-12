import { notFound } from "next/navigation";

// 한글 루트(/) 공개 중단 — 구현은 삭제하지 않고 archive/greenhouse/page.tsx에 보존했습니다.
export default function Home() {
  notFound();
}
