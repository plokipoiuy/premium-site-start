import { FadeIn } from "@/components/fade-in";

const STEPS = [
  { step: "01", title: "진료과 선택", desc: "증상에 맞는 진료과를 선택합니다." },
  { step: "02", title: "일정 선택", desc: "희망하는 날짜와 시간을 선택합니다." },
  { step: "03", title: "환자 정보 입력", desc: "초진/재진 여부와 환자 정보를 입력합니다." },
  { step: "04", title: "예약 완료", desc: "예약 확인 문자와 함께 접수가 완료됩니다." },
];

export function Guide() {
  return (
    <section id="guide" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8">
      <FadeIn>
        <p className="text-[13px] font-semibold tracking-[0.2em] text-accent">HOW IT WORKS</p>
        <h2 className="mt-3 font-display text-[28px] font-medium tracking-tight text-text-primary sm:text-[34px]">
          예약 절차
        </h2>
      </FadeIn>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <FadeIn key={s.step} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <span className="font-display text-[26px] font-medium text-accent">{s.step}</span>
              <h3 className="mt-3 text-[15px] font-semibold text-text-primary">{s.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-text-muted">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
