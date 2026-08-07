import type { Metadata } from "next";
import { ScrollGallery } from "@/components/events/scroll-gallery";
import { Footer } from "@/components/footer";
import { events } from "@/lib/events";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Events — ${siteConfig.name}`,
};

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <ScrollGallery events={events} />
      <Footer />
    </main>
  );
}
