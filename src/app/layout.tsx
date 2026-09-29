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
  metadataBase: new URL("https://dea-ecommerce-portfolio-six.vercel.app"),
  title: {
    default: "Dea Annisa Wilona | E-commerce & Marketplace Operations",
    template: "%s | Dea Annisa Wilona",
  },
  description:
    "Evidence-led ecommerce operations portfolio for Dea Annisa Wilona, showing marketplace execution, commercial operations, pricing, inventory, fulfillment, SOPs, KPIs, and AI-assisted workflows.",
  keywords: [
    "E-commerce Operations Specialist",
    "Marketplace Operations",
    "Marketplace Specialist",
    "Business Operations Specialist",
    "Commercial Operations",
    "Pricing and Margin Management",
    "Shopee",
    "Lazada",
    "TikTok Shop",
    "Tokopedia",
    "Zalora",
    "Operations Coordinator",
    "Google Sheets",
    "SOP Development",
    "KPI System",
    "Inventory Management",
    "Fulfillment Operations",
    "Seller Center",
    "AI-Assisted Operations",
  ],
  authors: [{ name: "Dea Annisa Wilona" }],
  creator: "Dea Annisa Wilona",
  openGraph: {
    title: "Dea Annisa Wilona | E-commerce & Marketplace Operations",
    description:
      "Marketplace, commercial, inventory, fulfillment, SOP, KPI, and AI-assisted workflow proof for remote ecommerce operations roles.",
    url: "https://dea-ecommerce-portfolio-six.vercel.app",
    siteName: "Dea Annisa Wilona Portfolio",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dea Annisa Wilona | E-commerce & Marketplace Operations",
    description:
      "Evidence-led portfolio for marketplace execution, commercial operations, pricing, inventory, fulfillment, SOPs, KPIs, and AI-assisted workflows.",
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
