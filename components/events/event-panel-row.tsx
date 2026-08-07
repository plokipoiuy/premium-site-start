import { forwardRef } from "react";
import { FramedPanel } from "@/components/framed-panel";
import type { EventItem } from "@/lib/events";

export const EventPanelRow = forwardRef<
  HTMLDivElement,
  { event: EventItem; isActive: boolean }
>(function EventPanelRow({ event, isActive }, ref) {
  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-35"
      }`}
    >
      <FramedPanel
        gradient={event.gradient}
        label={event.city}
        className="mx-auto max-w-xl"
      />
      <div className="mt-3 flex justify-between font-mono text-[11px] tracking-wide text-muted lg:hidden">
        <span>
          {event.flag} {event.city}
        </span>
        <span>{event.dateLabel}</span>
      </div>
    </div>
  );
});
