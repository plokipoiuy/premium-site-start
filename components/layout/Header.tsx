"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks, quoteCta } from "@/lib/data/nav";
import { useQuoteModal } from "@/components/quote/QuoteModalContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { open } = useQuoteModal();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  const solid = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/95 shadow-soft backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container-content flex h-[72px] items-center justify-between lg:h-20">
        <a href="#top" className="shrink-0" aria-label="그린하우스 홈으로 이동">
          <Logo mark={solid ? "#285C4D" : "#FFFFFF"} text={solid ? "#202824" : "#FFFFFF"} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="주요 메뉴">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-coral-pink ${
                solid ? "text-text-charcoal" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button onClick={open} size="md">
            {quoteCta.label}
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Button onClick={open} size="md" className="!px-4 !py-2 text-sm">
            견적
          </Button>
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              solid ? "text-deep-green hover:bg-deep-green/5" : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          aria-label="모바일 메뉴"
          className="border-t border-divider bg-white px-5 pb-8 pt-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-text-charcoal hover:bg-deep-green/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
