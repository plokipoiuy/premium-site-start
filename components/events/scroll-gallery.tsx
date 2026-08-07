"use client";

import { useEffect, useRef, useState } from "react";
import { EventIndexList } from "@/components/events/event-index-list";
import { EventDateList } from "@/components/events/event-date-list";
import { EventPanelRow } from "@/components/events/event-panel-row";
import type { EventItem } from "@/lib/events";

export function ScrollGallery({ events }: { events: EventItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = rowRefs.current.findIndex((el) => el === entry.target);
          if (index !== -1) setActiveIndex(index);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    rowRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-y-16 px-6 pt-40 pb-40 md:px-10 lg:grid-cols-[220px_1fr_220px] lg:gap-x-12">
      <aside className="hidden self-start lg:sticky lg:top-1/2 lg:block lg:-translate-y-1/2">
        <EventIndexList events={events} activeIndex={activeIndex} />
      </aside>

      <div className="flex flex-col gap-32">
        {events.map((event, i) => (
          <EventPanelRow
            key={event.slug}
            event={event}
            isActive={i === activeIndex}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
          />
        ))}
      </div>

      <aside className="hidden self-start lg:sticky lg:top-1/2 lg:block lg:-translate-y-1/2">
        <EventDateList events={events} activeIndex={activeIndex} />
      </aside>
    </div>
  );
}
