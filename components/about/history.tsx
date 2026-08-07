import { FadeIn } from "@/components/fade-in";

const HISTORY = [
  { year: "2024", desc: "중입자치료센터 개소" },
  { year: "2019", desc: "국제진료센터 개소, 해외 환자 1만 명 돌파" },
  { year: "2011", desc: "권역응급의료센터 지정" },
  { year: "2003", desc: "암센터 개원" },
  { year: "1994", desc: "본관 신축 이전, 병상 800개 확충" },
  { year: "1985", desc: "한빛대학교병원 개원" },
];

export function History() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <FadeIn>
          <p className="text-[13px] font-semibold tracking-[0.2em] text-accent">HISTORY</p>
          <h2 className="mt-3 font-display text-[28px] font-medium tracking-tight text-text-primary sm:text-[34px]">
            병원 연혁
          </h2>
        </FadeIn>

        <div className="mt-10 divide-y divide-line border-t border-line">
          {HISTORY.map((item, i) => (
            <FadeIn key={item.year} delay={i * 0.05}>
              <div className="flex items-baseline gap-8 py-5">
                <span className="w-16 shrink-0 font-display text-[20px] font-medium text-accent">
                  {item.year}
                </span>
                <span className="text-[15px] text-text-primary">{item.desc}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
