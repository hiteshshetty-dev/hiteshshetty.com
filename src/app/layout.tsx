import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics/Analytics";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hitesh Shetty - Senior Software Engineer & Full-Stack Developer",
    template: "%s - Hitesh Shetty",
  },
  description:
    "Senior Software Engineer specializing in full-stack product development with expertise in React, TypeScript, Node.js, and distributed backend systems.",
  keywords: [
    "Hitesh Shetty",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Nest.js",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Portfolio",
    "Open Source",
    "Visual Editing",
    "AI Integration",
  ],
  authors: [{ name: "Hitesh Shetty", url: "https://hiteshshetty.com" }],
  creator: "Hitesh Shetty",
  publisher: "Hitesh Shetty",
  other: {
    "linkedin:profile": "https://linkedin.com/in/hitesh-shetty2011",
    "github:profile": "https://github.com/hiteshshetty-dev",
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
  icons: {
    icon: "/icons/logo-navy.svg",
    shortcut: "/icons/logo-navy.svg",
    apple: "/icons/apple-icon-180.png",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://hiteshshetty.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hiteshshetty.com",
    siteName: "Hitesh Shetty Portfolio",
    title: "Hitesh Shetty - Senior Software Engineer & Full-Stack Developer",
    description:
      "Senior Software Engineer specializing in full-stack product development with expertise in React, TypeScript, Node.js, and distributed backend systems.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hitesh Shetty - Senior Software Engineer Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://hiteshshetty.com",
  },
  category: "technology",
  classification: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${inter.variable}`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
