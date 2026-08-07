"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { HOSPITAL_NAME, NAV_ITEMS } from "@/lib/nav";
import { Mark } from "@/components/mark";

const panelVariants: Variants = {
  hidden: { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    clipPath: "inset(0% 0% 100% 0%)",
    transition: { duration: 0.28, ease: [0.7, 0, 0.84, 0] },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.06 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);
  const navRefs = useRef<Array<HTMLDivElement | null>>([]);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const focusItem = (index: number) => {
    const el = navRefs.current[index];
    const container = navContainerRef.current;
    if (!el || !container) return;
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setIndicator({ left: elRect.left - containerRect.left, width: elRect.width });
    setActiveIndex(index);
  };

  const closeMenu = () => setActiveIndex(null);

  const activeItem = activeIndex !== null ? NAV_ITEMS[activeIndex] : null;

  return (
    <header
      onMouseLeave={closeMenu}
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled || activeIndex !== null
          ? "border-line bg-surface/95 backdrop-blur-md"
          : "border-transparent bg-surface/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          onMouseEnter={closeMenu}
          className="flex items-center gap-2 text-accent-strong"
        >
          <Mark className="h-7 w-7" />
          <span className="font-display text-[17px] font-medium tracking-tight text-text-primary sm:text-lg">
            {HOSPITAL_NAME}
          </span>
        </Link>

        <nav ref={navContainerRef} className="relative hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item, i) => (
            <div
              key={item.href}
              ref={(el) => {
                navRefs.current[i] = el;
              }}
              onMouseEnter={() => focusItem(i)}
            >
              <Link
                href={item.href}
                className={`text-[15px] transition-colors hover:text-accent ${
                  pathname === item.href || pathname?.startsWith(item.href + "/")
                    ? "font-semibold text-accent"
                    : "text-text-primary/85"
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}

          <motion.div
            className="pointer-events-none absolute -bottom-[13px] h-[2px] rounded-full bg-gradient-to-r from-accent to-sky-400"
            animate={{
              left: indicator?.left ?? 0,
              width: indicator?.width ?? 0,
              opacity: activeIndex !== null ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          />
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/appointment"
            onMouseEnter={closeMenu}
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
        {activeItem && (
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ transformOrigin: "top" }}
            className="absolute inset-x-0 top-full hidden border-b border-line bg-surface shadow-[0_24px_48px_-24px_rgba(10,15,25,0.18)] md:block"
          >
            <motion.div layout className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
              <motion.div
                key={activeIndex}
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="grid w-fit grid-cols-1 gap-y-1"
              >
                {activeItem.sub.map((sub) => (
                  <motion.div key={sub.href} variants={itemVariants}>
                    <Link
                      href={sub.href}
                      className="block rounded-lg px-3 py-2.5 text-[14px] text-text-primary/80 transition-colors hover:bg-accent-soft hover:text-accent"
                    >
                      {sub.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
