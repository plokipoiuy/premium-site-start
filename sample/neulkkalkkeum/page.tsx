import type { Metadata } from "next";
import { Header } from "@/sample/neulkkalkkeum/components/layout/Header";
import { Footer } from "@/sample/neulkkalkkeum/components/layout/Footer";
import { MobileBar } from "@/sample/neulkkalkkeum/components/layout/MobileBar";
import { HeroSlider } from "@/sample/neulkkalkkeum/components/hero/HeroSlider";
import { TrustSection } from "@/sample/neulkkalkkeum/components/sections/TrustSection";
import { ServicesSection } from "@/sample/neulkkalkkeum/components/sections/ServicesSection";
import { ProcessSection } from "@/sample/neulkkalkkeum/components/sections/ProcessSection";
import { PortfolioSection } from "@/sample/neulkkalkkeum/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/sample/neulkkalkkeum/components/sections/TestimonialsSection";
import { PartnersChecklistSection } from "@/sample/neulkkalkkeum/components/sections/PartnersChecklistSection";
import { FaqSection } from "@/sample/neulkkalkkeum/components/sections/FaqSection";
import { FinalCtaBanner } from "@/sample/neulkkalkkeum/components/sections/FinalCtaBanner";
import { Chatbot } from "@/sample/neulkkalkkeum/components/chatbot/Chatbot";
import { QuoteModalProvider } from "@/sample/neulkkalkkeum/components/quote/QuoteModalContext";
import { ContactModal } from "@/sample/neulkkalkkeum/components/quote/ContactModal";
import { siteConfigNeulkkalkkeum } from "@/sample/neulkkalkkeum/lib/siteConfig";

// 늘깔끔 Sample #003 — PRE-CONTRACT SAMPLE. Green House(archive/greenhouse),
// GridaClean(sample/gridaclean)과 완전히 독립된 라우트/컴포넌트/데이터를 사용합니다.
// 계약 전 영업용 샘플이므로 검색엔진 색인을 항상 차단하고 LocalBusiness 구조화 데이터는 출력하지 않습니다.
export const metadata: Metadata = {
  title: siteConfigNeulkkalkkeum.seoTitle,
  description: siteConfigNeulkkalkkeum.seoDescription,
  robots: { index: false, follow: false },
  // 카카오톡 등 메신저 미리보기용. 검색엔진 색인과는 무관하며 위 robots 설정이 우선한다.
  openGraph: {
    title: siteConfigNeulkkalkkeum.seoTitle,
    description: siteConfigNeulkkalkkeum.seoDescription,
    url: siteConfigNeulkkalkkeum.canonicalUrl,
    type: "website",
    locale: "ko_KR",
    images: [{ url: "/images/hero/hero-1.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfigNeulkkalkkeum.seoTitle,
    description: siteConfigNeulkkalkkeum.seoDescription,
    images: ["/images/hero/hero-1.png"],
  },
};

export default function NeulkkalkkeumSampleHome() {
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
