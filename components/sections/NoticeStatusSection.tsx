import { ChevronRight } from "lucide-react";
import { notices } from "@/lib/data/notices";
import { reservationEntries, statusBadgeStyle } from "@/lib/data/status";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const noticeCategoryStyle: Record<string, string> = {
  공지: "bg-deep-green/10 text-deep-green",
  이벤트: "bg-coral-pink/10 text-coral-pink",
  안내: "bg-sage-green/20 text-deep-green",
};

export function NoticeStatusSection() {
  return (
    <section id="notice" className="section-padding bg-ivory">
      <div className="container-content">
        <SectionHeading eyebrow="NOTICE" title="공지사항 및 상담 현황" />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2 lg:items-stretch">
          {/* 공지사항 */}
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-card bg-white p-6 shadow-soft lg:p-8">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-bold text-text-charcoal">공지사항</h3>
                <a
                  href="#notice"
                  className="flex items-center gap-1 text-sm font-medium text-text-muted transition-colors hover:text-deep-green focus-visible:outline-deep-green"
                >
                  전체보기
                  <ChevronRight size={15} aria-hidden="true" />
                </a>
              </div>
              <ul className="mt-2 flex flex-1 flex-col divide-y divide-divider">
                {notices.map((notice) => (
                  <li key={notice.id} className="flex items-center justify-between gap-4 py-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${noticeCategoryStyle[notice.category]}`}
                      >
                        {notice.category}
                      </span>
                      <span className="truncate text-sm font-medium text-text-charcoal">{notice.title}</span>
                    </div>
                    <span className="shrink-0 text-xs text-text-muted">{notice.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* 접수현황 */}
          <Reveal delay={0.1} className="order-first h-full lg:order-none">
            <div className="flex h-full flex-col rounded-card bg-white p-6 shadow-soft lg:p-8">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-bold text-text-charcoal">최근 상담·예약 현황</h3>
                <span className="rounded-full bg-blush-pink px-2.5 py-1 text-xs font-bold text-coral-pink">
                  Sample
                </span>
              </div>
              <p className="mb-2 text-xs text-text-muted">
                실제 데이터 연동 전까지 표시되는 샘플이며, 고객명은 마스킹 처리됩니다.
              </p>
              <div
                tabIndex={-1}
                className="group relative mt-2 h-[280px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
              >
                <div className="animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none">
                  {[...reservationEntries, ...reservationEntries].map((entry, i) => (
                    <div
                      key={`${entry.id}-${i}`}
                      tabIndex={0}
                      className="flex items-center justify-between gap-3 border-b border-divider px-1 py-3.5 focus-visible:outline-deep-green"
                    >
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${statusBadgeStyle[entry.status]}`}
                      >
                        {entry.status}
                      </span>
                      <span className="flex-1 text-center text-sm font-medium text-text-charcoal">
                        {entry.maskedName}
                      </span>
                      <span className="shrink-0 text-sm text-text-muted">{entry.serviceType}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
