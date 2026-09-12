import { TrustPoint } from "@/lib/types";

// 실제로 확인되지 않은 인증/보험/누적 건수/만족도 문구는 넣지 않는다
export const trustPoints: TrustPoint[] = [
  {
    id: "scope",
    title: "청소 범위 사전 안내",
    description: "작업 전 공간별 청소 범위를 구체적으로 안내해 드립니다.",
  },
  {
    id: "cost",
    title: "추가 비용 사전 고지",
    description: "현장 확인 후 추가 비용이 예상되면 작업 전 먼저 말씀드립니다.",
  },
  {
    id: "equipment",
    title: "공간별 전용 장비",
    description: "주방, 욕실, 창틀 등 공간 특성에 맞는 장비를 구분해 사용합니다.",
  },
  {
    id: "team",
    title: "전문 담당팀 배정",
    description: "예약 건마다 담당팀을 배정해 처음부터 끝까지 책임지고 진행합니다.",
  },
  {
    id: "inspection",
    title: "완료 후 고객 검수",
    description: "작업이 끝나면 고객님과 함께 마무리 상태를 확인합니다.",
  },
  {
    id: "as",
    title: "미흡한 부분 A/S",
    description: "검수 과정에서 확인된 미흡한 부분은 다시 방문해 보완해 드립니다.",
  },
];
