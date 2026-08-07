"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { events } from "@/lib/events";

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export function SiteNav() {
  const pathname = usePathname();
  const columns = chunk(siteConfig.nav, 2);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-start justify-between px-6 pt-8 md:px-10 md:pt-10">
      <Link
        href="/"
        className="font-hand text-2xl leading-none text-ink md:text-3xl"
      >
        {siteConfig.name}
      </Link>

      <nav className="hidden gap-10 lg:flex">
        {columns.map((col, i) => (
          <ul key={i} className="flex flex-col gap-1.5">
            {col.map((item) => {
              const active = pathname.startsWith(item.href) && item.href !== "#";
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 font-mono text-xs tracking-wide text-ink transition-opacity hover:opacity-60"
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 ${
                        active ? "bg-accent" : "bg-ink"
                      }`}
                    />
                    {item.label}
                    {item.showCount ? ` [${events.length}]` : ""}
                  </Link>
                </li>
              );
            })}
          </ul>
        ))}
      </nav>

      <Link
        href="/events"
        className="font-mono text-xs tracking-wide text-ink lg:hidden"
      >
        EVENTS [{events.length}] ↗
      </Link>
    </header>
  );
}
