import type { Metadata } from "next";
import { Header } from "@/sample/gridaclean/components/layout/Header";
import { Footer } from "@/sample/gridaclean/components/layout/Footer";
import { MobileBar } from "@/sample/gridaclean/components/layout/MobileBar";
import { HeroSlider } from "@/sample/gridaclean/components/hero/HeroSlider";
import { TrustSection } from "@/sample/gridaclean/components/sections/TrustSection";
import { ServicesSection } from "@/sample/gridaclean/components/sections/ServicesSection";
import { ProcessSection } from "@/sample/gridaclean/components/sections/ProcessSection";
import { PortfolioSection } from "@/sample/gridaclean/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/sample/gridaclean/components/sections/TestimonialsSection";
import { PartnersChecklistSection } from "@/sample/gridaclean/components/sections/PartnersChecklistSection";
import { FaqSection } from "@/sample/gridaclean/components/sections/FaqSection";
import { FinalCtaBanner } from "@/sample/gridaclean/components/sections/FinalCtaBanner";
import { Chatbot } from "@/sample/gridaclean/components/chatbot/Chatbot";
import { QuoteModalProvider } from "@/sample/gridaclean/components/quote/QuoteModalContext";
import { ContactModal } from "@/sample/gridaclean/components/quote/ContactModal";
import { siteConfigGridaclean } from "@/sample/gridaclean/lib/siteConfig";

// 그리다클린 Sample #002 — PRE-CONTRACT SAMPLE. Green House(archive/greenhouse)와 완전히
// 독립된 라우트/컴포넌트/데이터를 사용합니다 (archive/greenhouse/page.tsx는 수정하지 않음).
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
