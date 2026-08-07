export type SubNavItem = {
  label: string;
  href: string;
  desc?: string;
};

export type NavItem = {
  label: string;
  href: string;
  desc: string;
  sub: SubNavItem[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "병원소개",
    href: "/about",
    desc: "인사말 · 연혁 · 오시는 길",
    sub: [
      { label: "인사말", href: "/about#greeting" },
      { label: "병원 연혁", href: "/about#history" },
      { label: "시설 및 규모", href: "/about#facility" },
      { label: "찾아오시는 길", href: "/about#location" },
    ],
  },
  {
    label: "진료안내",
    href: "/departments",
    desc: "진료과 · 의료진 안내",
    sub: [
      { label: "진료과 안내", href: "/departments#departments" },
      { label: "의료진 찾기", href: "/departments#find-a-doctor" },
      { label: "진료예약 바로가기", href: "/appointment" },
    ],
  },
  {
    label: "진료예약",
    href: "/appointment",
    desc: "온라인 예약 · 이용 안내",
    sub: [
      { label: "예약 절차", href: "/appointment#guide" },
      { label: "온라인 진료예약", href: "/appointment#reservation" },
    ],
  },
  {
    label: "건강정보",
    href: "/health-info",
    desc: "건강칼럼 · 질환 정보",
    sub: [
      { label: "심장혈관", href: "/health-info?category=심장혈관" },
      { label: "소화기", href: "/health-info?category=소화기" },
      { label: "정형외과", href: "/health-info?category=정형외과" },
      { label: "여성건강", href: "/health-info?category=여성건강" },
      { label: "소아청소년과", href: "/health-info?category=소아청소년과" },
      { label: "정신건강", href: "/health-info?category=정신건강" },
      { label: "종양혈액", href: "/health-info?category=종양혈액" },
      { label: "안과", href: "/health-info?category=안과" },
    ],
  },
  {
    label: "알림마당",
    href: "/notices",
    desc: "공지사항 · 보도자료",
    sub: [
      { label: "전체보기", href: "/notices" },
      { label: "공지사항", href: "/notices?tab=공지사항" },
      { label: "보도자료", href: "/notices?tab=보도자료" },
    ],
  },
];

export const HOSPITAL_NAME = "한빛대학교병원";
export const HOSPITAL_NAME_EN = "Hanbit University Hospital";
