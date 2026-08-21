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

export type Notice = {
  id: string;
  category: "공지" | "이벤트" | "안내";
  title: string;
  date: string;
};

export type ReservationStatus = "접수완료" | "상담중" | "상담완료" | "예약확정";

export type ReservationEntry = {
  id: string;
  status: ReservationStatus;
  maskedName: string;
  serviceType: string;
};

export type ChatbotOption = {
  id: string;
  label: string;
  reply: string;
};
