"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/fade-in";
import { HEALTH_ARTICLES_FULL } from "@/lib/content";

const CATEGORIES = [
  "전체",
  ...Array.from(new Set(HEALTH_ARTICLES_FULL.map((a) => a.category))),
];

export function ArticleBrowser() {
  const [active, setActive] = useState("전체");

  const articles = useMemo(
    () =>
      active === "전체"
        ? HEALTH_ARTICLES_FULL
        : HEALTH_ARTICLES_FULL.filter((a) => a.category === active),
    [active],
  );

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <FadeIn className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
              active === cat
                ? "border-accent bg-accent text-white"
                : "border-line bg-surface text-text-muted hover:border-accent/40 hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </FadeIn>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <FadeIn key={article.title} delay={(i % 3) * 0.06}>
            <div className="group flex h-full cursor-pointer flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40 hover:bg-accent-soft">
              <span className="text-[12px] font-semibold text-accent">{article.category}</span>
              <h3 className="mt-3 text-[16px] font-semibold leading-snug text-text-primary">
                {article.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-text-muted">
                {article.summary}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
