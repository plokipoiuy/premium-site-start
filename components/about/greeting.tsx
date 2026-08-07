import { FadeIn } from "@/components/fade-in";
import { HOSPITAL_NAME } from "@/lib/nav";

export function Greeting() {
  return (
    <section id="greeting" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
        <FadeIn>
          <div className="aspect-[4/5] w-full max-w-sm rounded-3xl bg-gradient-to-br from-accent-soft via-accent/15 to-accent-strong/20" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-[13px] font-semibold tracking-[0.2em] text-accent">GREETING</p>
          <h2 className="mt-3 font-display text-[28px] font-medium tracking-tight text-text-primary sm:text-[34px]">
            인사말
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-text-muted sm:text-[16px]">
            <p>
              {HOSPITAL_NAME} 홈페이지를 찾아주신 여러분께 진심으로
              감사드립니다.
            </p>
            <p>
              저희 병원은 개원 이래 &lsquo;환자의 생명과 존엄을 최우선으로&rsquo;라는
              가치를 지켜오며, 최고의 의료진과 첨단 의료 시설을 바탕으로
              지역사회와 국가 의료 발전에 기여해 왔습니다.
            </p>
            <p>
              앞으로도 끊임없는 연구와 교육을 통해 의료의 질을 높이고, 환자
              중심의 따뜻한 진료로 신뢰받는 대학병원이 되겠습니다.
            </p>
          </div>
          <p className="mt-8 text-[15px] font-semibold text-text-primary">
            한빛대학교병원장 김 민 준
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
