import type { EventItem } from "@/lib/events";

export function EventDateList({
  events,
  activeIndex,
}: {
  events: EventItem[];
  activeIndex: number;
}) {
  return (
    <div className="font-mono text-xs tracking-wide">
      <p className="mb-4 flex items-center justify-end gap-2 text-ink">
        DATE
        <span className="h-1.5 w-1.5 bg-accent" />
      </p>
      <ol className="flex flex-col items-end gap-2">
        {events.map((event, i) => (
          <li
            key={event.slug}
            className={
              i === activeIndex ? "text-ink" : "text-muted-2"
            }
          >
            {event.dateLabel}
          </li>
        ))}
      </ol>
    </div>
  );
}
