import { FadeIn } from "@/components/fade-in";

const FACILITIES = [
  { label: "지상 층수", value: "20층" },
  { label: "지하 층수", value: "6층" },
  { label: "연면적", value: "148,000㎡" },
  { label: "주차 대수", value: "1,400대" },
];

export function Facility() {
  return (
    <section id="facility" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8">
      <FadeIn>
        <p className="text-[13px] font-semibold tracking-[0.2em] text-accent">FACILITY</p>
        <h2 className="mt-3 font-display text-[28px] font-medium tracking-tight text-text-primary sm:text-[34px]">
          시설 및 규모
        </h2>
      </FadeIn>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FACILITIES.map((f, i) => (
          <FadeIn key={f.label} delay={i * 0.06}>
            <div className="rounded-2xl border border-line bg-surface p-7">
              <p className="font-display text-[30px] font-medium text-text-primary">{f.value}</p>
              <p className="mt-1 text-[13px] text-text-muted">{f.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
