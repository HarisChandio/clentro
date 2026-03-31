import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clentro.io"),
  title: {
    default: "Clentro: Build Fast, Ship Fast – AI-Powered Product Development",
    template: "%s | Clentro",
  },
  description:
    "Have an idea or a vibe-coded product you want live—fast? We're engineers equipped with the best AI tools, turning early concepts into production-ready software for SaaS and AI startups.",
  keywords: [
    "software engineering",
    "SaaS development",
    "AI startups",
    "rapid development",
    "production-ready software",
    "MVP development",
    "high-velocity engineering",
    "AI-powered development",
  ],
  authors: [{ name: "Clentro" }],
  creator: "Clentro",
  publisher: "Clentro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clentro.io",
    title: "Clentro - Build. Ship. Fast.",
    description:
      "Engineers equipped with AI tools, turning early concepts into production-ready software for SaaS and AI startups. 45-day average delivery.",
    siteName: "Clentro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clentro - Build. Ship. Fast.",
    description:
      "Engineers equipped with AI tools, turning early concepts into production-ready software for SaaS and AI startups.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when ready
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
