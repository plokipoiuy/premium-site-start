import { HeroSlide } from "@/lib/types";

// 히어로 슬라이드 3종 — image는 public/images/hero/ 안의 파일을 가리킴
export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    eyebrow: "CLEANING CAPTAIN",
    title: "새로운 집의 첫인상,\n청소대장이\n깨끗하게 완성합니다.",
    description:
      "세종 아파트 입주·이사·거주 청소 전문. 상담부터 검수까지 투명하고 꼼꼼하게 진행합니다.",
    image: "/images/hero/hero-1.png",
    imageAlt: "따뜻한 햇살이 들어오는 밝고 정돈된 아파트 거실",
    gradientFrom: "from-cheongso-blue",
  },
  {
    id: "slide-2",
    eyebrow: "CLEANING CAPTAIN",
    title: "보이는 곳보다\n보이지 않는 곳을\n더 꼼꼼하게",
    description: "공간별 전용 장비와 체계적인 작업 순서로 진행합니다.",
    image: "/images/hero/hero-2.png",
    imageAlt: "청소대장 작업자가 주방 조리대를 닦는 모습",
    gradientFrom: "from-cheongso-blue",
  },
  {
    id: "slide-3",
    eyebrow: "CLEANING CAPTAIN",
    title: "말보다 확실한\n청소 전후의 차이",
    description: "청소대장의 실제 작업 현장을 확인해 보세요.",
    image: "/images/hero/hero-3.png",
    imageAlt: "깨끗하게 정돈된 거실 바닥에 앉아 웃고 있는 가족",
    gradientFrom: "from-cheongso-blue",
  },
];
