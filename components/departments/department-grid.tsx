import { FadeIn } from "@/components/fade-in";
import { DEPARTMENTS } from "@/lib/content";

export function DepartmentGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <FadeIn>
        <p className="text-[13px] font-semibold tracking-[0.2em] text-accent">DEPARTMENTS</p>
        <h2 className="mt-3 font-display text-[28px] font-medium tracking-tight text-text-primary sm:text-[34px]">
          진료과 안내
        </h2>
      </FadeIn>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {DEPARTMENTS.map((dept, i) => (
          <FadeIn key={dept.name} delay={(i % 3) * 0.06}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40 hover:bg-accent-soft">
              <h3 className="text-[16px] font-semibold text-text-primary">{dept.name}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{dept.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
