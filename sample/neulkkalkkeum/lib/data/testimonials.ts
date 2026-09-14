import { SampleReview } from "@/lib/types";

// 실제 고객 후기가 등록되기 전까지는 허위 후기를 만들지 않습니다.
// 아래 sampleReviews는 실제 후기가 아니라, 후기 영역이 어떻게 보일지 보여주는
// "샘플" 3건입니다. 실제 후기가 들어오면 이 배열을 교체하세요.
export const sampleReviews: SampleReview[] = [
  {
    id: "sample-1",
    maskedName: "정O아 고객님",
    serviceType: "거주청소 이용",
    rating: 5,
    content: "일정 조율부터 마무리까지 안내가 명확했고, 구석구석 깔끔하게 처리해주셨습니다.",
  },
  {
    id: "sample-2",
    maskedName: "한O수 고객님",
    serviceType: "입주청소 이용",
    rating: 5,
    content: "입주 전에 신경 쓰이던 부분을 미리 확인해주셔서 편하게 준비할 수 있었어요.",
  },
  {
    id: "sample-3",
    maskedName: "윤O진 고객님",
    serviceType: "이사청소 이용",
    rating: 5,
    content: "짧은 시간 안에 필요한 공간을 정확하게 짚어서 처리해주셔서 만족스러웠습니다.",
  },
];
