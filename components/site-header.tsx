"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "motion/react";
import { HOSPITAL_NAME, NAV_ITEMS } from "@/lib/nav";
import { Mark } from "@/components/mark";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-surface/90 backdrop-blur-md"
          : "border-transparent bg-surface/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-accent-strong">
          <Mark className="h-7 w-7" />
          <span className="font-display text-[17px] font-medium tracking-tight text-text-primary sm:text-lg">
            {HOSPITAL_NAME}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] transition-colors hover:text-accent ${
                pathname === item.href || pathname?.startsWith(item.href + "/")
                  ? "font-semibold text-accent"
                  : "text-text-primary/85"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/appointment"
            className="rounded-full bg-accent px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-accent-strong"
          >
            진료예약
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴 열기"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-[1.5px] w-5 bg-text-primary transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-[1.5px] w-5 bg-text-primary transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[1.5px] w-5 bg-text-primary transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-surface md:hidden"
          >
            <ul className="flex flex-col px-5 py-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="border-b border-line/70 last:border-none">
                  <Link href={item.href} onClick={() => setOpen(false)} className="block py-4">
                    <span className="block text-[15px] font-medium text-text-primary">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-[12px] text-text-muted">{item.desc}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
