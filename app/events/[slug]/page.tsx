import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FramedPanel } from "@/components/framed-panel";
import { Footer } from "@/components/footer";
import { events } from "@/lib/events";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  return { title: event ? `${event.city} — ${siteConfig.name}` : siteConfig.name };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  return (
    <main>
      <div className="mx-auto max-w-2xl px-6 pb-32 pt-40 text-center">
        <Link
          href="/events"
          className="mb-10 inline-block font-mono text-xs tracking-widest text-muted hover:text-ink"
        >
          ← ALL EVENTS
        </Link>

        <FramedPanel
          gradient={event.gradient}
          label={event.city}
          sublabel={event.dateLabel}
          className="mx-auto"
        />

        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="font-mono text-xs tracking-widest text-muted">
            {event.flag} {event.country}
          </p>
          <p className="text-lg leading-[1.6] text-ink/80">{event.blurb}</p>
          <a
            href="#"
            className="mt-4 border border-ink px-6 py-3 font-mono text-xs tracking-widest text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            → GET TICKETS
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
