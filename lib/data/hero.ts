import { HeroSlide } from "@/lib/types";

// 히어로 슬라이드 3종 — image는 public/images/hero/ 안의 파일을 가리킴
export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    eyebrow: "GREEN HOUSE CLEANING",
    title: "새로운 집의 첫인상,\n그린하우스가 깨끗하게 완성합니다.",
    description:
      "강남 아파트 입주·이사·거주 청소 전문. 상담부터 검수까지 투명하고 꼼꼼하게 진행합니다.",
    image: "/images/hero/hero-1.jpg",
    imageAlt: "따뜻한 햇살이 들어오는 밝고 정돈된 아파트 거실",
    gradientFrom: "from-deep-green",
  },
  {
    id: "slide-2",
    eyebrow: "GREEN HOUSE CLEANING",
    title: "보이는 곳보다\n보이지 않는 곳을 더 꼼꼼하게",
    description: "공간별 전용 장비와 체계적인 작업 순서로 진행합니다.",
    image: "/images/hero/hero-2.jpg",
    imageAlt: "초록색 유니폼을 입은 그린하우스 작업자가 주방 조리대를 닦는 모습",
    gradientFrom: "from-deep-green",
  },
  {
    id: "slide-3",
    eyebrow: "GREEN HOUSE CLEANING",
    title: "말보다 확실한\n청소 전후의 차이",
    description: "그린하우스의 실제 작업 현장을 확인해 보세요.",
    image: "/images/hero/hero-3.jpg",
    imageAlt: "깨끗하게 정돈된 거실 바닥에 앉아 웃고 있는 가족",
    gradientFrom: "from-deep-green",
  },
];
