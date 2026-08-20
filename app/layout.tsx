import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "그린하우스 GREEN HOUSE | 강남 아파트 입주·이사·거주 청소 전문",
  description:
    "서울 강남구 논현로 기반 아파트 청소 전문 브랜드 그린하우스. 입주청소, 이사청소, 거주청소, 부분·집중청소를 투명한 상담과 꼼꼼한 검수로 진행합니다.",
  keywords: ["강남 청소업체", "아파트 청소", "입주청소", "이사청소", "그린하우스"],
  openGraph: {
    title: "그린하우스 GREEN HOUSE | 강남 아파트 청소 전문",
    description: "상담부터 검수까지 투명하고 꼼꼼한 강남 아파트 청소 전문 브랜드",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#285C4D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
