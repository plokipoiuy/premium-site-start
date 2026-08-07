import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

const ITEMS = [
  {
    label: "진료예약",
    href: "/appointment",
    icon: (
      <path d="M8 3v3M17 3v3M4.5 9h16M6 5.5h13A1.5 1.5 0 0 1 20.5 7v12A1.5 1.5 0 0 1 19 20.5H6A1.5 1.5 0 0 1 4.5 19V7A1.5 1.5 0 0 1 6 5.5Z" />
    ),
  },
  {
    label: "건강검진예약",
    href: "/appointment",
    icon: <path d="M12 3v6m0 0-3-3m3 3 3-3M5 13h14M6.5 13l1 7.5h9l1-7.5" />,
  },
  {
    label: "증명서 발급",
    href: "/notices",
    icon: (
      <path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5ZM14 3.5V8h4.2M9 13h6M9 16.5h6" />
    ),
  },
  {
    label: "오시는 길",
    href: "/about",
    icon: (
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    ),
  },
  {
    label: "진료비 안내",
    href: "/appointment",
    icon: (
      <path d="M4 7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7Zm2 4h2m3 0h6M6 15h4" />
    ),
  },
  {
    label: "자주 묻는 질문",
    href: "/notices",
    icon: (
      <path d="M12 21a9 9 0 1 0-6.3-2.6L4 21l3-1.1A8.96 8.96 0 0 0 12 21ZM12 9.5a2 2 0 1 0-2 2M12 14.5v.01" />
    ),
  },
];

export function QuickMenu() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-4">
          {ITEMS.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.06}>
              <Link
                href={item.href}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-background px-3 py-6 text-center transition-colors hover:border-accent/40 hover:bg-accent-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    {item.icon}
                  </svg>
                </span>
                <span className="text-[13px] font-medium leading-tight text-text-primary sm:text-[14px]">
                  {item.label}
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
