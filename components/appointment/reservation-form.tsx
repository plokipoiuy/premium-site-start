"use client";

import { useState } from "react";
import { FadeIn } from "@/components/fade-in";
import { DEPARTMENTS } from "@/lib/content";

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="reservation" className="scroll-mt-24 border-t border-line bg-surface">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <FadeIn>
          <p className="text-[13px] font-semibold tracking-[0.2em] text-accent">RESERVATION</p>
          <h2 className="mt-3 font-display text-[28px] font-medium tracking-tight text-text-primary sm:text-[34px]">
            온라인 진료예약
          </h2>
          <p className="mt-3 text-[14px] text-text-muted">
            아래 정보를 입력해 주시면 담당 부서에서 확인 후 연락드립니다.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {submitted ? (
            <div className="mt-10 rounded-2xl border border-accent/30 bg-accent-soft p-10 text-center">
              <p className="text-[16px] font-semibold text-accent-strong">
                예약 신청이 접수되었습니다.
              </p>
              <p className="mt-2 text-[14px] text-text-muted">
                입력하신 연락처로 담당자가 확인 연락을 드립니다.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-10 grid gap-5 sm:grid-cols-2"
            >
              <label className="flex flex-col gap-2 text-[13px] font-medium text-text-primary">
                이름
                <input
                  required
                  type="text"
                  placeholder="환자 성함"
                  className="rounded-xl border border-line bg-background px-4 py-3 text-[14px] outline-none transition-colors focus:border-accent"
                />
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-medium text-text-primary">
                연락처
                <input
                  required
                  type="tel"
                  placeholder="010-0000-0000"
                  className="rounded-xl border border-line bg-background px-4 py-3 text-[14px] outline-none transition-colors focus:border-accent"
                />
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-medium text-text-primary">
                진료과
                <select
                  required
                  defaultValue=""
                  className="rounded-xl border border-line bg-background px-4 py-3 text-[14px] outline-none transition-colors focus:border-accent"
                >
                  <option value="" disabled>
                    선택해 주세요
                  </option>
                  {DEPARTMENTS.map((d) => (
                    <option key={d.name} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-medium text-text-primary">
                희망 날짜
                <input
                  required
                  type="date"
                  className="rounded-xl border border-line bg-background px-4 py-3 text-[14px] outline-none transition-colors focus:border-accent"
                />
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-medium text-text-primary sm:col-span-2">
                증상 및 요청사항
                <textarea
                  rows={4}
                  placeholder="간단한 증상을 남겨주시면 진료에 참고하겠습니다."
                  className="resize-none rounded-xl border border-line bg-background px-4 py-3 text-[14px] outline-none transition-colors focus:border-accent"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-accent-strong sm:col-span-2 sm:w-fit"
              >
                예약 신청하기
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
