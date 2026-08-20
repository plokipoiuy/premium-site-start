import { ReservationEntry } from "@/lib/types";

// 실제 접수 데이터 연동 전까지 사용하는 sample 데이터입니다.
// 고객명은 항상 마스킹된 형태로만 저장/표시합니다 (예: 김O현 -> 김O O).
export const reservationEntries: ReservationEntry[] = [
  { id: "res-1", status: "예약확정", maskedName: "김O현", serviceType: "입주청소" },
  { id: "res-2", status: "상담완료", maskedName: "이O", serviceType: "이사청소" },
  { id: "res-3", status: "상담중", maskedName: "박O영", serviceType: "거주청소" },
  { id: "res-4", status: "접수완료", maskedName: "최O", serviceType: "부분·집중청소" },
  { id: "res-5", status: "예약확정", maskedName: "정O민", serviceType: "입주청소" },
  { id: "res-6", status: "상담중", maskedName: "한O", serviceType: "이사청소" },
  { id: "res-7", status: "상담완료", maskedName: "윤O서", serviceType: "거주청소" },
  { id: "res-8", status: "접수완료", maskedName: "임O", serviceType: "입주청소" },
];

export const statusBadgeStyle: Record<ReservationEntry["status"], string> = {
  접수완료: "bg-sage-green/20 text-deep-green",
  상담중: "bg-blush-pink text-coral-pink",
  상담완료: "bg-deep-green/10 text-deep-green",
  예약확정: "bg-coral-pink text-white",
};
