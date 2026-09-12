import type { Metadata } from "next";
import { Header } from "@/components/gridaclean/layout/Header";
import { Footer } from "@/components/gridaclean/layout/Footer";
import { MobileBar } from "@/components/gridaclean/layout/MobileBar";
import { HeroSlider } from "@/components/gridaclean/hero/HeroSlider";
import { TrustSection } from "@/components/gridaclean/sections/TrustSection";
import { ServicesSection } from "@/components/gridaclean/sections/ServicesSection";
import { ProcessSection } from "@/components/gridaclean/sections/ProcessSection";
import { PortfolioSection } from "@/components/gridaclean/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/gridaclean/sections/TestimonialsSection";
import { PartnersChecklistSection } from "@/components/gridaclean/sections/PartnersChecklistSection";
import { FaqSection } from "@/components/gridaclean/sections/FaqSection";
import { FinalCtaBanner } from "@/components/gridaclean/sections/FinalCtaBanner";
import { Chatbot } from "@/components/gridaclean/chatbot/Chatbot";
import { QuoteModalProvider } from "@/components/gridaclean/quote/QuoteModalContext";
import { ContactModal } from "@/components/gridaclean/quote/ContactModal";
import { siteConfigGridaclean } from "@/lib/siteConfig.gridaclean";

// 그리다클린 Sample #002 — PRE-CONTRACT SAMPLE. Green House Sample #001과 완전히
// 독립된 라우트/컴포넌트/데이터를 사용합니다 (app/_archive/greenhouse-kr-home.tsx는 수정하지 않음).
// 계약 전 영업용 샘플이므로 검색엔진 색인을 항상 차단합니다.
export const metadata: Metadata = {
  title: siteConfigGridaclean.seoTitle,
  description: siteConfigGridaclean.seoDescription,
  robots: { index: false, follow: false },
};

export default function GridacleanSampleHome() {
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
