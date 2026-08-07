import Link from "next/link";
import { events } from "@/lib/events";

export function EventsTeaser() {
  const upcoming = events.slice(0, 3);

  return (
    <section className="mx-auto max-w-2xl px-6 pb-32">
      <p className="mb-6 flex items-center gap-2 font-mono text-xs tracking-widest text-ink">
        <span className="h-1.5 w-1.5 bg-accent" />
        NEXT UP
      </p>
      <ul className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
        {upcoming.map((event) => (
          <li key={event.slug}>
            <Link
              href={`/events/${event.slug}`}
              className="flex items-center justify-between gap-4 py-4 font-mono text-sm text-ink transition-opacity hover:opacity-60"
            >
              <span>
                {event.flag} {event.city}
              </span>
              <span className="text-muted">{event.dateLabel}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/events"
        className="mt-6 inline-block font-mono text-xs tracking-widest text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
      >
        ALL EVENTS ↗
      </Link>
    </section>
  );
}
