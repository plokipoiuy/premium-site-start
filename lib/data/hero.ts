import { HeroSlide } from "@/lib/types";

// 히어로 슬라이드 3종 — imageAlt는 실제 사진 교체 시 대체 텍스트로도 사용
export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    eyebrow: "GREEN HOUSE CLEANING",
    title: "새로운 집의 첫인상,\n그린하우스가 깨끗하게 완성합니다.",
    description:
      "강남 아파트 입주·이사·거주 청소 전문. 상담부터 검수까지 투명하고 꼼꼼하게 진행합니다.",
    imageAlt: "따뜻한 자연광이 들어오는 정돈된 서울 아파트 거실 (샘플 이미지)",
    gradientFrom: "from-deep-green",
  },
  {
    id: "slide-2",
    eyebrow: "GREEN HOUSE CLEANING",
    title: "보이는 곳보다\n보이지 않는 곳을 더 꼼꼼하게",
    description: "공간별 전용 장비와 체계적인 작업 순서로 진행합니다.",
    imageAlt: "전문 장비와 위생 장갑을 착용하고 청소하는 작업자의 뒷모습 (샘플 이미지)",
    gradientFrom: "from-deep-green",
  },
  {
    id: "slide-3",
    eyebrow: "GREEN HOUSE CLEANING",
    title: "말보다 확실한\n청소 전후의 차이",
    description: "그린하우스의 실제 작업 현장을 확인해 보세요.",
    imageAlt: "동일 공간의 청소 전후를 비교한 이미지 (샘플 이미지)",
    gradientFrom: "from-deep-green",
  },
];
