import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBar } from "@/components/layout/MobileBar";
import { HeroSlider } from "@/components/hero/HeroSlider";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { NoticeStatusSection } from "@/components/sections/NoticeStatusSection";
import { FinalCtaBanner } from "@/components/sections/FinalCtaBanner";
import { Chatbot } from "@/components/chatbot/Chatbot";
import { QuoteModalProvider } from "@/components/quote/QuoteModalContext";
import { QuoteFormModal } from "@/components/quote/QuoteFormModal";

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
        <TestimonialsSection />
        <NoticeStatusSection />
        <FinalCtaBanner />
      </main>
      <Footer />
      <MobileBar />
      <Chatbot />
      <QuoteFormModal />
    </QuoteModalProvider>
  );
}
