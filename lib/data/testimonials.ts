import { SampleReview } from "@/lib/types";

// 실제 고객 후기가 등록되기 전까지는 허위 후기를 만들지 않습니다.
// 아래 sampleReviews는 실제 후기가 아니라, 후기 영역이 어떻게 보일지 보여주는
// "샘플" 3건입니다. 실제 후기가 들어오면 이 배열을 교체하세요.
export const sampleReviews: SampleReview[] = [
  {
    id: "sample-1",
    maskedName: "김O현 고객님",
    serviceType: "거주청소 이용",
    rating: 5,
    content: "예약부터 작업 완료까지 안내가 꼼꼼했고, 마무리 상태도 만족스러웠습니다.",
  },
  {
    id: "sample-2",
    maskedName: "이O 고객님",
    serviceType: "입주청소 이용",
    rating: 5,
    content: "새 집에 들어가기 전 구석구석 신경 써주셔서 마음 편히 입주했습니다.",
  },
  {
    id: "sample-3",
    maskedName: "박O영 고객님",
    serviceType: "이사청소 이용",
    rating: 5,
    content: "짧은 시간 안에 필요한 부분을 정확히 짚어서 처리해주셔서 좋았어요.",
  },
];
