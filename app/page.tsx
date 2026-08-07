import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { EventsTeaser } from "@/components/events-teaser";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <EventsTeaser />
      <Footer />
    </main>
  );
}
