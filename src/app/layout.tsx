import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PopupConsultation from "@/components/ui/PopupConsultation";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Study Abroad & Overseas Education Consultancy`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} | Study Abroad & Overseas Education Consultancy`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Study Abroad & Overseas Education Consultancy`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased h-full w-full overflow-x-hidden`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className="min-h-full flex flex-col pt-[72px] w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden w-full">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <PopupConsultation />
      </body>
    </html>
  );
}
