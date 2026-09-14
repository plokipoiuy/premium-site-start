import type { Metadata } from "next";
import { Header } from "@/sample/cheongsodaejang/components/layout/Header";
import { Footer } from "@/sample/cheongsodaejang/components/layout/Footer";
import { MobileBar } from "@/sample/cheongsodaejang/components/layout/MobileBar";
import { HeroSlider } from "@/sample/cheongsodaejang/components/hero/HeroSlider";
import { TrustSection } from "@/sample/cheongsodaejang/components/sections/TrustSection";
import { ServicesSection } from "@/sample/cheongsodaejang/components/sections/ServicesSection";
import { ProcessSection } from "@/sample/cheongsodaejang/components/sections/ProcessSection";
import { PortfolioSection } from "@/sample/cheongsodaejang/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/sample/cheongsodaejang/components/sections/TestimonialsSection";
import { PartnersChecklistSection } from "@/sample/cheongsodaejang/components/sections/PartnersChecklistSection";
import { FaqSection } from "@/sample/cheongsodaejang/components/sections/FaqSection";
import { FinalCtaBanner } from "@/sample/cheongsodaejang/components/sections/FinalCtaBanner";
import { Chatbot } from "@/sample/cheongsodaejang/components/chatbot/Chatbot";
import { QuoteModalProvider } from "@/sample/cheongsodaejang/components/quote/QuoteModalContext";
import { ContactModal } from "@/sample/cheongsodaejang/components/quote/ContactModal";
import { siteConfigCheongsodaejang } from "@/sample/cheongsodaejang/lib/siteConfig";

// 청소대장 Sample #002 — PRE-CONTRACT SAMPLE. Green House(archive/greenhouse)와 완전히
// 독립된 라우트/컴포넌트/데이터를 사용합니다 (archive/greenhouse/page.tsx는 수정하지 않음).
// 계약 전 영업용 샘플이므로 검색엔진 색인을 항상 차단합니다.
export const metadata: Metadata = {
  title: siteConfigCheongsodaejang.seoTitle,
  description: siteConfigCheongsodaejang.seoDescription,
  robots: { index: false, follow: false },
  // 카카오톡 등 메신저 미리보기용. 검색엔진 색인과는 무관하며 위 robots 설정이 우선한다.
  // 이미지는 같은 라우트의 opengraph-image.tsx(청소대장 전용, 코드로 생성)가 자동으로 채운다.
  openGraph: {
    title: siteConfigCheongsodaejang.ogTitle,
    description: siteConfigCheongsodaejang.ogDescription,
    url: siteConfigCheongsodaejang.canonicalUrl,
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfigCheongsodaejang.ogTitle,
    description: siteConfigCheongsodaejang.ogDescription,
  },
};

export default function CheongsodaejangSampleHome() {
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
