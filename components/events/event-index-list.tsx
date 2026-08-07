import Link from "next/link";
import type { EventItem } from "@/lib/events";
import { siteConfig } from "@/lib/site-config";

export function EventIndexList({
  events,
  activeIndex,
}: {
  events: EventItem[];
  activeIndex: number;
}) {
  return (
    <div className="font-mono text-xs tracking-wide">
      <p className="mb-4 flex items-center gap-2 text-ink">
        <span className="h-1.5 w-1.5 bg-accent" />
        UPCOMING EVENTS
      </p>
      <ol className="flex flex-col gap-2">
        {events.map((event, i) => {
          const active = i === activeIndex;
          return (
            <li key={event.slug}>
              <Link
                href={`/events/${event.slug}`}
                className={`flex items-center gap-2 transition-colors ${
                  active ? "text-ink" : "text-muted-2 hover:text-muted"
                }`}
              >
                <span>[{i + 1}]</span>
                <span>{event.flag}</span>
                <span>
                  {siteConfig.name} {event.city}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
