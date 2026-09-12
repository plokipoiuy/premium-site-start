import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBar } from "@/components/layout/MobileBar";
import { HeroSlider } from "@/components/hero/HeroSlider";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PartnersChecklistSection } from "@/components/sections/PartnersChecklistSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaBanner } from "@/components/sections/FinalCtaBanner";
import { Chatbot } from "@/components/chatbot/Chatbot";
import { QuoteModalProvider } from "@/components/quote/QuoteModalContext";
import { ContactModal } from "@/components/quote/ContactModal";
import { siteConfig } from "@/lib/siteConfig";

export default function Home() {
  return (
    <QuoteModalProvider>
      <Header />
      <main className="pb-20 lg:pb-0">
        <HeroSlider />
        <TrustSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        {siteConfig.hasRealReviews && <TestimonialsSection />}
        <PartnersChecklistSection />
        <FaqSection />
        <FinalCtaBanner />
      </main>
      <Footer />
      <MobileBar />
      <Chatbot />
      <ContactModal />
    </QuoteModalProvider>
  );
}
