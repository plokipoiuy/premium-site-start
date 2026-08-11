export const NOTICES = [
  {
    category: "공지사항",
    title: "2026년 추석 연휴 진료 안내",
    date: "2026.08.05",
  },
  {
    category: "공지사항",
    title: "본관 3층 채혈실 이전 안내",
    date: "2026.08.01",
  },
  {
    category: "보도자료",
    title: "한빛대학교병원, 로봇수술 5,000례 달성",
    date: "2026.07.28",
  },
  {
    category: "공지사항",
    title: "개인정보 처리방침 개정 안내",
    date: "2026.07.22",
  },
  {
    category: "보도자료",
    title: "중입자치료센터 개소, 정밀의료 시대 연다",
    date: "2026.07.15",
  },
  {
    category: "공지사항",
    title: "여름철 감염병 예방 수칙 안내",
    date: "2026.07.10",
  },
] as const;

export const HEALTH_ARTICLES = [
  {
    category: "심장혈관",
    title: "무증상 고혈압, 왜 위험할까요",
    summary: "혈압은 소리 없이 혈관을 망가뜨립니다. 정기 측정이 왜 중요한지 알아봅니다.",
  },
  {
    category: "소화기",
    title: "역류성 식도염, 생활습관으로 관리하기",
    summary: "식습관과 수면 자세만 바꿔도 증상을 크게 줄일 수 있습니다.",
  },
  {
    category: "정형외과",
    title: "허리디스크, 수술이 꼭 필요할까",
    summary: "비수술적 치료로 호전되는 경우와 수술이 필요한 경우를 구분해 드립니다.",
  },
  {
    category: "여성건강",
    title: "40대 이후 꼭 받아야 할 건강검진",
    summary: "나이대별로 놓치기 쉬운 필수 검진 항목을 정리했습니다.",
  },
] as const;

export const HEALTH_ARTICLES_FULL = [
  ...HEALTH_ARTICLES,
  {
    category: "정형외과",
    title: "무릎 통증, 퇴행성관절염 초기 신호",
    summary: "계단을 오를 때 느껴지는 통증, 방치하면 안 되는 이유가 있습니다.",
  },
  {
    category: "소아청소년과",
    title: "우리 아이 성장, 언제 검사해야 할까",
    summary: "또래보다 작은 키, 성장판 검사 시기를 놓치지 마세요.",
  },
  {
    category: "정신건강",
    title: "번아웃과 우울증, 어떻게 구분할까요",
    summary: "지속되는 무기력감이 있다면 전문가와의 상담을 권합니다.",
  },
  {
    category: "종양혈액",
    title: "가족력이 있다면, 암 검진 이렇게 받으세요",
    summary: "가족력에 따른 맞춤 검진 주기와 항목을 안내합니다.",
  },
  {
    category: "안과",
    title: "스마트폰 시대의 눈 건강 지키기",
    summary: "디지털 눈 피로 증후군을 예방하는 생활 속 습관들.",
  },
  {
    category: "심장혈관",
    title: "부정맥, 심장이 보내는 위험 신호",
    summary: "가슴 두근거림이 반복된다면 정밀 검사가 필요합니다.",
  },
] as const;

export const DEPARTMENTS = [
  { name: "심장혈관센터", desc: "관상동맥질환, 부정맥, 심부전 진단 및 치료" },
  { name: "소화기내과", desc: "위·대장 내시경, 간·담도·췌장 질환 진료" },
  { name: "정형외과", desc: "척추, 관절, 스포츠 손상 진료 및 재활" },
  { name: "신경과", desc: "뇌졸중, 두통, 파킨슨병, 치매 진단 및 치료" },
  { name: "산부인과", desc: "여성 생애주기별 건강 관리 및 분만" },
  { name: "소아청소년과", desc: "신생아부터 청소년까지 성장·발달 진료" },
  { name: "종양혈액내과", desc: "항암치료, 혈액질환 통합 진료" },
  { name: "정신건강의학과", desc: "우울, 불안, 수면장애 상담 및 치료" },
  { name: "안과", desc: "백내장, 망막질환, 시력교정 진료" },
] as const;
