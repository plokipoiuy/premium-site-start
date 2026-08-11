import { Hero } from "@/components/home/hero";
import { QuickMenu } from "@/components/home/quick-menu";
import { NoticesPreview } from "@/components/home/notices-preview";
import { HealthInfoPreview } from "@/components/home/health-info-preview";
import { Stats } from "@/components/home/stats";
import { CareCta } from "@/components/home/care-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickMenu />
      <NoticesPreview />
      <HealthInfoPreview />
      <Stats />
      <CareCta />
    </>
  );
}
