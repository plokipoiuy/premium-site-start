import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { NOTICES } from "@/lib/content";

export function NoticesPreview() {
  return (
    <section className="border-b border-line bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <FadeIn className="flex items-end justify-between">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.2em] text-accent">NEWS</p>
            <h2 className="mt-3 font-display text-[28px] font-medium tracking-tight text-text-primary sm:text-[34px]">
              알림마당
            </h2>
          </div>
          <Link
            href="/notices"
            className="hidden text-[14px] font-medium text-text-muted hover:text-accent sm:block"
          >
            전체보기 →
          </Link>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {NOTICES.slice(0, 6).map((notice, i) => (
            <FadeIn key={notice.title} delay={(i % 4) * 0.06}>
              <Link
                href="/notices"
                className="flex items-center justify-between gap-4 bg-surface px-6 py-5 transition-colors hover:bg-accent-soft"
              >
                <div className="min-w-0">
                  <span className="text-[12px] font-semibold text-accent">{notice.category}</span>
                  <p className="mt-1 truncate text-[15px] text-text-primary">{notice.title}</p>
                </div>
                <span className="shrink-0 text-[13px] text-text-muted">{notice.date}</span>
              </Link>
            </FadeIn>
          ))}
        </div>

        <Link
          href="/notices"
          className="mt-8 block text-center text-[14px] font-medium text-text-muted hover:text-accent sm:hidden"
        >
          전체보기 →
        </Link>
      </div>
    </section>
  );
}
