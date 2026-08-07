import { FadeIn } from "@/components/fade-in";

const TRANSPORT = [
  { mode: "지하철", desc: "2호선 한빛역 3번 출구 도보 5분" },
  { mode: "버스", desc: "간선 143, 401 / 지선 4211 한빛병원 정류장 하차" },
  { mode: "자가용", desc: "내비게이션 '한빛대학교병원' 검색, 지하주차장 이용" },
];

export function Location() {
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <FadeIn>
          <p className="text-[13px] font-semibold tracking-[0.2em] text-accent">LOCATION</p>
          <h2 className="mt-3 font-display text-[28px] font-medium tracking-tight text-text-primary sm:text-[34px]">
            찾아오시는 길
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <FadeIn delay={0.1}>
            <div className="flex aspect-[16/10] w-full items-center justify-center rounded-2xl border border-line bg-[linear-gradient(135deg,var(--accent-soft),var(--background))] text-[13px] text-text-muted">
              지도 영역 (연동 예정)
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-line bg-background p-7">
              <p className="text-[15px] font-semibold text-text-primary">
                서울특별시 강남구 한빛로 81
              </p>
              <p className="mt-1 text-[13px] text-text-muted">한빛대학교병원</p>
              <div className="mt-6 space-y-4">
                {TRANSPORT.map((t) => (
                  <div key={t.mode}>
                    <p className="text-[13px] font-semibold text-accent">{t.mode}</p>
                    <p className="mt-1 text-[14px] text-text-muted">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
