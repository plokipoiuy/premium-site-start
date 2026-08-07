import Link from "next/link";
import { FramedPanel } from "@/components/framed-panel";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 pt-24 text-center">
      <div>
        <p className="mb-4 font-mono text-xs tracking-widest text-muted">
          {siteConfig.tagline.toUpperCase()}
        </p>
        <h1 className="font-hand text-6xl leading-none text-ink md:text-8xl">
          {siteConfig.name}
        </h1>
      </div>

      <FramedPanel
        gradient="linear-gradient(160deg, #0f2740 0%, #6f5fb0 45%, #d6371f 100%)"
        label="ON THE ROAD"
        sublabel="2026 WORLD DATES"
        className="w-full max-w-md"
      />

      <Link
        href="/events"
        className="border border-ink px-6 py-3 font-mono text-xs tracking-widest text-ink transition-colors hover:bg-ink hover:text-bg"
      >
        → UPCOMING EVENTS
      </Link>
    </section>
  );
}
