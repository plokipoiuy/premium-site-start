import Link from "next/link";
import { HOSPITAL_NAME, HOSPITAL_NAME_EN, NAV_ITEMS } from "@/lib/nav";
import { Mark } from "@/components/mark";

const UTILITY_LINKS = [
  { label: "이용약관", href: "/notices" },
  { label: "개인정보처리방침", href: "/notices" },
  { label: "이메일무단수집거부", href: "/notices" },
  { label: "찾아오시는 길", href: "/about" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="flex items-center gap-2 text-accent-strong">
              <Mark className="h-7 w-7" />
              <span className="font-display text-lg font-medium text-text-primary">
                {HOSPITAL_NAME}
              </span>
            </div>
            <p className="mt-3 text-[13px] tracking-wide text-text-muted">
              {HOSPITAL_NAME_EN}
            </p>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-text-muted">
              서울특별시 강남구 한빛로 81 한빛대학교병원
              <br />
              대표전화 1588-0000 (24시간)
              <br />
              응급실 02-3410-0119
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13px] font-semibold tracking-wide text-text-primary"
                >
                  {item.label}
                </Link>
                <p className="mt-2 text-[12px] leading-relaxed text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-text-muted">
            {UTILITY_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-[12px] text-text-muted">
            &copy; {new Date().getFullYear()} {HOSPITAL_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
