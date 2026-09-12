import { PartnerCompany } from "@/lib/types";

// isSample: true — 실제 협력사 동의를 받기 전까지 사용하는 샘플 데이터입니다.
// 실제 협력사명을 넣을 때는 반드시 해당 업체의 게재 동의를 먼저 받아주세요.
export const partnerCompanies: PartnerCompany[] = [
  { id: "partner-1", name: "샘플부동산 세종점", isSample: true },
  { id: "partner-2", name: "샘플이사 익스프레스", isSample: true },
  { id: "partner-3", name: "래미안 OO 관리사무소", isSample: true },
  { id: "partner-4", name: "샘플공인중개사사무소", isSample: true },
  { id: "partner-5", name: "샘플인테리어", isSample: true },
  { id: "partner-6", name: "자이 OO 관리사무소", isSample: true },
];
