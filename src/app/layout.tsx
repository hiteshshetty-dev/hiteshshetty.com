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
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
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
    "linkedin:profile": "https://linkedin.com/in/hiteshshetty-dev",
    "github:profile": "https://github.com/hiteshshetty-dev",
    "application-name": "Hitesh Shetty",
    "msapplication-TileColor": "#1D3557",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#1D3557",
    "profile:first_name": "Hitesh",
    "profile:last_name": "Shetty",
    "profile:username": "hiteshshetty-dev",
  },
  icons: {
    icon: [
      { url: "/icons/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32" },
      { url: "/icons/favicon-96x96.png", sizes: "96x96" },
      { url: "/icons/logo-navy.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-icon-180.png",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://hiteshshetty.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hiteshshetty.com",
    siteName: "Hitesh Shetty",
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
  twitter: {
    card: "summary_large_image",
    title: "Hitesh Shetty - Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in full-stack product development with expertise in React, TypeScript, Node.js, and distributed backend systems.",
    images: ["/images/og-image.jpg"],
    creator: "@hiteshshettydev",
    site: "@hiteshshettydev",
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
