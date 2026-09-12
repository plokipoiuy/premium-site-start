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
  title: siteConfig.seoTitle,
  description: siteConfig.seoDescription,
  keywords: [...siteConfig.serviceAreas, ...siteConfig.services, siteConfig.businessName],
  alternates: {
    canonical: siteConfig.canonicalUrl,
  },
  openGraph: {
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    type: "website",
    locale: "ko_KR",
  },
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
