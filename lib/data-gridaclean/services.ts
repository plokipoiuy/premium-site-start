import { ServiceType } from "@/lib/types";

export const services: ServiceType[] = [
  {
    id: "move-in",
    slug: "move-in",
    name: "입주청소",
    englishLabel: "MOVE-IN",
    summary: "새 집에 들어가기 전, 처음 상태 그대로 깨끗하게 준비합니다.",
    scope: ["전체 공간 먼지 및 오염 제거", "새시·창틀 세척", "주방·욕실 집중 세척", "바닥 왁싱"],
    image: "/images/services/move-in.jpg",
    imageAlt: "주방 스테인리스 후드를 전문 장비로 세척하는 그리다클린 작업자",
  },
  {
    id: "commercial",
    slug: "commercial",
    name: "상가청소",
    englishLabel: "COMMERCIAL",
    summary: "상업 공간의 전문적인 청소로 고객 만족도를 높입니다.",
    scope: ["매장 바닥·벽면 청소", "입구·쇼윈도우 광택", "매장 내 물품 정리", "위생 기준 준수"],
    image: "/images/services/commercial.jpg",
    imageAlt: "상가 매장 바닥을 전문 장비로 세척하는 그리다클린 작업자",
  },
  {
    id: "office",
    slug: "office",
    name: "사무실청소",
    englishLabel: "OFFICE",
    summary: "쾌적한 업무 환경을 위해 꼼꼼하게 관리합니다.",
    scope: ["사무실 먼지 및 오염 제거", "책상·의자 세척", "화장실·휴게실 위생 관리", "정기 방문 청소"],
    image: "/images/services/office.jpg",
    imageAlt: "사무실 책상과 의자를 정성스럽게 닦고 있는 그리다클린 작업자",
  },
  {
    id: "airconditioner",
    slug: "airconditioner",
    name: "에어컨청소",
    englishLabel: "AIRCON",
    summary: "에어컨 필터와 내부를 전문적으로 청소해 실내 공기질을 개선합니다.",
    scope: ["에어컨 필터 교체·세척", "실내기 내부 청소", "실외기 먼지 제거", "성능 점검 및 정비"],
    image: "/images/services/airconditioner.jpg",
    imageAlt: "에어컨 실내기를 분해하여 전문적으로 청소하는 그리다클린 작업자",
  },
];
