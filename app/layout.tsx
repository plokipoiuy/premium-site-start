import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/archive/greenhouse/lib/siteConfig";
import { LocalBusinessJsonLd } from "@/archive/greenhouse/components/seo/LocalBusinessJsonLd";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const isPreview = siteConfig.siteMode === "preview";

export const metadata: Metadata = {
  // 각 라우트 openGraph.images의 상대 경로(/images/...)를 절대 URL로 바꾸는 데 쓰인다.
  // 브랜드 정보가 아닌 배포 도메인 기준값이라 특정 사이트로 상속돼도 문제되지 않는다.
  metadataBase: new URL("https://bibilayer.vercel.app"),
  title: siteConfig.seoTitle,
  description: siteConfig.seoDescription,
  keywords: [...siteConfig.serviceAreas, ...siteConfig.services, siteConfig.businessName],
  alternates: {
    canonical: siteConfig.canonicalUrl,
  },
  // openGraph는 여기서 전역으로 설정하지 않는다 — 설정하면 자체 openGraph를 정의하지 않은
  // 모든 하위 라우트(샘플 사이트 포함)가 이 값을 그대로 상속해 카카오톡 등 메신저 미리보기에
  // Green House 정보가 잘못 노출된다. 각 사이트 라우트(app/archive/greenhouse, app/sample/*)가
  // 자신의 openGraph를 직접 지정한다.
  // preview: 영업용 샘플이므로 검색엔진 색인을 막는다. 실 계약 시 siteConfig.siteMode를 "production"으로.
  robots: isPreview
    ? { index: false, follow: false }
    : { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteConfig.primaryColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={manrope.variable}>
      <body>
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
