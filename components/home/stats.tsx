import { FadeIn } from "@/components/fade-in";

const STATS = [
  { value: "1,200+", label: "병상 수" },
  { value: "950+", label: "전문 의료진" },
  { value: "45", label: "진료과" },
  { value: "연 210만", label: "외래 환자" },
];

export function Stats() {
  return (
    <section className="bg-accent-strong">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-display text-[32px] font-medium text-white sm:text-[40px]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[13px] tracking-wide text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
