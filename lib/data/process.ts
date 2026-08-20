import { ProcessStep } from "@/lib/types";

export const processSteps: ProcessStep[] = [
  {
    id: "step-1",
    step: 1,
    title: "간편 견적 신청",
    description: "1분이면 충분한 간단한 정보 입력으로 시작합니다.",
  },
  {
    id: "step-2",
    step: 2,
    title: "상담 및 일정 확정",
    description: "담당자가 연락드려 공간과 일정을 함께 확인합니다.",
  },
  {
    id: "step-3",
    step: 3,
    title: "작업 전 현장 확인",
    description: "방문 전 공간 상태와 청소 범위를 다시 한번 점검합니다.",
  },
  {
    id: "step-4",
    step: 4,
    title: "공간별 전문 청소",
    description: "전용 장비와 체계적인 순서로 공간별 청소를 진행합니다.",
  },
  {
    id: "step-5",
    step: 5,
    title: "고객 검수 및 A/S 안내",
    description: "완료 후 함께 검수하고 필요 시 A/S 절차를 안내해 드립니다.",
  },
];
