import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export function CareCta() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <FadeIn>
          <div className="grid gap-10 rounded-3xl border border-line bg-surface p-8 sm:p-14 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.2em] text-accent">
                PATIENT CENTERED CARE
              </p>
              <h2 className="mt-3 font-display text-[26px] font-medium leading-snug tracking-tight text-text-primary sm:text-[32px]">
                환자 한 분 한 분의 이야기에
                <br />
                귀 기울이는 진료
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-text-muted">
                진단부터 치료, 회복까지 전 과정을 함께합니다. 처음 방문하시는
                분들을 위한 안내를 확인해 보세요.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-accent-strong"
              >
                온라인 진료예약
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3.5 text-[14px] font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent"
              >
                병원 둘러보기
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
