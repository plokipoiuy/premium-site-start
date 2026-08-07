"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/fade-in";
import { NOTICES } from "@/lib/content";

const TABS = ["전체", "공지사항", "보도자료"] as const;

export function NoticeBrowser() {
  const [active, setActive] = useState<(typeof TABS)[number]>("전체");

  const items = useMemo(
    () => (active === "전체" ? NOTICES : NOTICES.filter((n) => n.category === active)),
    [active],
  );

  return (
    <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
      <FadeIn className="flex gap-2 border-b border-line">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`px-4 py-3 text-[14px] font-medium transition-colors ${
              active === tab
                ? "border-b-2 border-accent text-accent"
                : "text-text-muted hover:text-text-primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </FadeIn>

      <FadeIn delay={0.1} className="mt-2 divide-y divide-line">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent">
                {item.category}
              </span>
              <p className="text-[15px] text-text-primary">{item.title}</p>
            </div>
            <span className="text-[13px] text-text-muted">{item.date}</span>
          </div>
        ))}
        {items.length === 0 && (
          <p className="py-10 text-center text-[14px] text-text-muted">게시글이 없습니다.</p>
        )}
      </FadeIn>
    </section>
  );
}
