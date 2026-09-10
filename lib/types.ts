export type NavLink = {
  label: string;
  href: string;
};

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  gradientFrom: string;
};

export type TrustPoint = {
  id: string;
  title: string;
  description: string;
};

export type ServiceType = {
  id: string;
  slug: string;
  name: string;
  englishLabel: string;
  summary: string;
  scope: string[];
  image: string;
  imageAlt: string;
};

export type ProcessStep = {
  id: string;
  step: number;
  title: string;
  description: string;
};

export type PortfolioCategory = "전체" | "주방" | "욕실" | "창틀" | "거실·바닥" | "베란다";

export type PortfolioCase = {
  id: string;
  category: Exclude<PortfolioCategory, "전체">;
  title: string;
  region: string;
  pyeong: string;
  serviceType: string;
  crew: string;
  duration: string;
  scope: string[];
  isSample: boolean;
  image?: string;
  beforeImage?: string;
  afterImage?: string;
};

export type Testimonial = {
  id: string;
  isPlaceholder: true;
};

// 실제 후기 등록 전, 디자인 미리보기 용도로만 사용하는 샘플 후기
export type SampleReview = {
  id: string;
  maskedName: string;
  serviceType: string;
  rating: number;
  content: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type ChecklistItem = {
  id: string;
  text: string;
};

// isSample: true — 실제 협력사 동의를 받기 전까지는 샘플 표기가 필요합니다.
export type PartnerCompany = {
  id: string;
  name: string;
  isSample: boolean;
};

export type ChatbotOption = {
  id: string;
  label: string;
  reply: string;
};
