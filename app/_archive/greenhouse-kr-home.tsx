// ============================================================
// Green House 한글 홈페이지 원본 보존 (Sample #001)
//
// 이 파일은 예전 app/page.tsx의 내용을 그대로 옮겨온 것입니다.
// 루트 URL(/)을 공개 중단하면서, 컴포넌트/구현을 삭제하지 않고
// 라우팅되지 않는 위치(app/_archive — App Router는 "_"로 시작하는
// 폴더를 라우트로 취급하지 않습니다)에 보관해 둔 것입니다.
//
// 다시 사용하려면: 이 파일 내용을 app/page.tsx로 옮기거나,
// 이 컴포넌트를 새 라우트(예: app/greenhouse-kr/page.tsx)에서 import하세요.
// ============================================================

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
