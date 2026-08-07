import type { Metadata } from "next";
import { JetBrains_Mono, Permanent_Marker, Inter } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { CornerFrame } from "@/components/corner-frame";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — Events`,
  description: siteConfig.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${jetbrainsMono.variable} ${permanentMarker.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-ink font-body">
        <CornerFrame />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
