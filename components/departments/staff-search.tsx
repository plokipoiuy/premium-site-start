import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export function StaffSearch() {
  return (
    <section id="find-a-doctor" className="scroll-mt-24 border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <FadeIn>
          <div className="grid gap-8 rounded-3xl bg-accent-strong p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.2em] text-sky-200">
                FIND A DOCTOR
              </p>
              <h2 className="mt-3 font-display text-[26px] font-medium tracking-tight text-white sm:text-[30px]">
                의료진을 찾고 계신가요?
              </h2>
              <p className="mt-3 max-w-md text-[14px] leading-relaxed text-white/75">
                진료과, 질환명, 의료진 성함으로 원하시는 전문의를 빠르게
                찾아보세요.
              </p>
            </div>
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-accent-strong transition-transform hover:-translate-y-0.5"
            >
              의료진 검색하기
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
