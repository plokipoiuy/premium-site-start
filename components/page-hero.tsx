import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  breadcrumb: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-accent-soft">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-[13px] text-text-muted">홈 / {breadcrumb}</p>
        <p className="mt-6 text-[13px] font-semibold tracking-[0.2em] text-accent">{eyebrow}</p>
        <h1 className="mt-3 font-display text-[34px] font-medium tracking-tight text-text-primary sm:text-[44px]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-muted sm:text-[16px]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
