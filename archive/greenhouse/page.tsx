// ============================================================
// Green House 한글 홈페이지 최종 승인본 (Sample #001) — 영업 종료, archive 보관
//
// 루트 URL(/)은 공개 중단 상태이며, 이 구현은 archive/greenhouse/에 보존됩니다.
// app/archive/greenhouse/page.tsx가 이 컴포넌트를 import하여 라우팅합니다.
// ============================================================

import { Header } from "@/archive/greenhouse/components/layout/Header";
import { Footer } from "@/archive/greenhouse/components/layout/Footer";
import { MobileBar } from "@/archive/greenhouse/components/layout/MobileBar";
import { HeroSlider } from "@/archive/greenhouse/components/hero/HeroSlider";
import { TrustSection } from "@/archive/greenhouse/components/sections/TrustSection";
import { ServicesSection } from "@/archive/greenhouse/components/sections/ServicesSection";
import { ProcessSection } from "@/archive/greenhouse/components/sections/ProcessSection";
import { PortfolioSection } from "@/archive/greenhouse/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/archive/greenhouse/components/sections/TestimonialsSection";
import { PartnersChecklistSection } from "@/archive/greenhouse/components/sections/PartnersChecklistSection";
import { FaqSection } from "@/archive/greenhouse/components/sections/FaqSection";
import { FinalCtaBanner } from "@/archive/greenhouse/components/sections/FinalCtaBanner";
import { Chatbot } from "@/archive/greenhouse/components/chatbot/Chatbot";
import { QuoteModalProvider } from "@/archive/greenhouse/components/quote/QuoteModalContext";
import { ContactModal } from "@/archive/greenhouse/components/quote/ContactModal";

export default function GreenHouseKrHome() {
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
