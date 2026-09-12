import { MouseEvent } from "react";
import { siteConfigGridaclean } from "@/sample/gridaclean/lib/siteConfig";

// SAMPLE 단계(siteMode: "preview")에서는 전화·문자·카카오 링크를 눌러도
// 실제로 연결되지 않도록 클릭을 막습니다. 버튼 디자인은 그대로 유지되고,
// siteMode를 "production"으로 바꾸면 별도 수정 없이 다시 정상 연결됩니다.
export function guardSampleLink(e: MouseEvent) {
  if (siteConfigGridaclean.siteMode === "preview") {
    e.preventDefault();
  }
}
