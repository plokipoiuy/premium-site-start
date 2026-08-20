import { NavLink } from "@/lib/types";

// 헤더 및 모바일 메뉴에서 공통으로 사용하는 내비게이션 항목
export const navLinks: NavLink[] = [
  { label: "그린하우스 소개", href: "#about" },
  { label: "청소서비스", href: "#services" },
  { label: "진행과정", href: "#process" },
  { label: "작업사례", href: "#portfolio" },
  { label: "고객후기", href: "#testimonials" },
  { label: "공지사항", href: "#notice" },
];

export const quoteCta = { label: "간편 견적", href: "#quote" };
