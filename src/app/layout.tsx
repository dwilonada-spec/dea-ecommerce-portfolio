import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dea-annisa-wilona.vercel.app"),
  title: {
    default: "Dea Annisa Wilona | Ecommerce Operations Specialist",
    template: "%s | Dea Annisa Wilona",
  },
  description:
    "Evidence-led ecommerce operations portfolio for Dea Annisa Wilona, showing systems for 2,000+ SKUs, 50,000+ orders, seller-center dashboards, SOPs, KPIs, and marketplace execution.",
  keywords: [
    "Ecommerce Operations Specialist",
    "Marketplace Operations",
    "Shopee",
    "Lazada",
    "TikTok Shop",
    "Tokopedia",
    "Zalora",
    "Operations Coordinator",
    "Ecommerce VA",
    "Customer Support Specialist",
    "Google Sheets",
    "SOP Development",
    "KPI System",
    "Seller Center",
  ],
  authors: [{ name: "Dea Annisa Wilona" }],
  creator: "Dea Annisa Wilona",
  openGraph: {
    title: "Dea Annisa Wilona | Ecommerce Operations Specialist",
    description:
      "Built ecommerce operating systems for 2,000+ SKUs, 50,000+ orders, dashboards, SOPs, KPIs, and marketplace execution.",
    url: "https://dea-annisa-wilona.vercel.app",
    siteName: "Dea Annisa Wilona Portfolio",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dea Annisa Wilona | Ecommerce Operations Specialist",
    description:
      "Evidence-led portfolio for 2,000+ SKUs, 50,000+ orders, seller-center execution, SOPs, KPI dashboards, and reporting.",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080a0d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
