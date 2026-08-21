import { SampleReview } from "@/lib/types";

// 실제 고객 후기가 등록되기 전까지는 허위 후기를 만들지 않습니다.
// 아래 sampleReview는 실제 후기가 아니라, 후기 영역이 어떻게 보일지 보여주는
// "샘플 미리보기" 1건입니다. 실제 후기가 들어오면 이 파일을 교체하세요.
export const sampleReview: SampleReview = {
  maskedName: "김O현 고객님",
  serviceType: "거주청소 이용",
  rating: 5,
  content: "예약부터 작업 완료까지 안내가 꼼꼼했고, 마무리 상태도 만족스러웠습니다.",
};
