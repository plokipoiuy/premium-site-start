import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { HEALTH_ARTICLES } from "@/lib/content";

export function HealthInfoPreview() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <FadeIn className="flex items-end justify-between">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.2em] text-accent">
              HEALTH INFO
            </p>
            <h2 className="mt-3 font-display text-[28px] font-medium tracking-tight text-text-primary sm:text-[34px]">
              건강정보
            </h2>
          </div>
          <Link
            href="/health-info"
            className="hidden text-[14px] font-medium text-text-muted hover:text-accent sm:block"
          >
            전체보기 →
          </Link>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HEALTH_ARTICLES.map((article, i) => (
            <FadeIn key={article.title} delay={i * 0.08}>
              <Link
                href="/health-info"
                className="group flex h-full flex-col rounded-2xl border border-line bg-background p-6 transition-colors hover:border-accent/40 hover:bg-accent-soft"
              >
                <span className="text-[12px] font-semibold text-accent">{article.category}</span>
                <h3 className="mt-3 text-[16px] font-semibold leading-snug text-text-primary">
                  {article.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-muted">
                  {article.summary}
                </p>
                <span className="mt-4 text-[13px] font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  자세히 보기 →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
