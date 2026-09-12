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
    imageAlt: "주방 스테인리스 후드를 전문 장비로 세척하는 그린하우스 작업자",
  },
  {
    id: "move-out",
    slug: "move-out",
    name: "이사청소",
    englishLabel: "MOVE-OUT",
    summary: "이사 전후 짧은 시간 안에 필요한 공간을 확실하게 정리합니다.",
    scope: ["이사 전/후 공간 정리", "주방·욕실 위생 세척", "바닥 및 걸레받이 청소", "베란다 정리"],
    image: "/images/services/move-out.jpg",
    imageAlt: "거실 테이블을 꼼꼼하게 닦고 있는 그린하우스 작업자",
  },
  {
    id: "residential",
    slug: "residential",
    name: "거주청소",
    englishLabel: "RESIDENTIAL",
    summary: "생활하고 계신 공간을 방해 없이 정기적으로 관리합니다.",
    scope: ["정기 방문 청소", "주방·욕실 위생 관리", "생활 먼지 및 바닥 관리", "맞춤 일정 조율"],
    image: "/images/services/residential.jpg",
    imageAlt: "이사 상자가 놓인 빈 집 바닥을 물걸레질하는 그린하우스 작업자",
  },
  {
    id: "partial",
    slug: "partial",
    name: "부분·집중청소",
    englishLabel: "PARTIAL",
    summary: "욕실, 주방 등 원하는 공간만 집중적으로 청소합니다.",
    scope: ["욕실 집중 세척", "주방 기름때 제거", "창틀·베란다 부분 청소", "필요 공간 맞춤 견적"],
    image: "/images/services/partial.jpg",
    imageAlt: "창틀과 창문 새시를 꼼꼼하게 닦는 그린하우스 작업자",
  },
];
