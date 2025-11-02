import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics/Analytics";
import ImageErrorTracker from "@/components/Analytics/ImageErrorTracker";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import profileData from "@/data/profile.json";

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

const title = "Hitesh Shetty - Senior Software Engineer";
export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s - Hitesh Shetty",
  },
  description: profileData.description,
  keywords: [
    "Hitesh Shetty",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Nest.js",
    "NestJS",
    "MongoDB",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Portfolio",
    "Open Source",
    "Visual Editing",
    "AI Integration",
    "Microservices",
    "Cloud Technologies",
    "AWS",
    "Docker",
    "Kubernetes",
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
      {
        url: "/icons/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: "/icons/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
      },
      { url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon.ico" },

      { url: "/icons/logo-navy.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/icons/favicon.ico" }],
    apple: "/icons/apple-icon-180.png",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://hiteshshetty.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hiteshshetty.com",
    siteName: "Hitesh Shetty",
    title: title,
    description: profileData.description,
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Hitesh Shetty - Senior Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: profileData.description,
    images: ["/images/og-image.webp"],
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
        <ImageErrorTracker />
      </body>
    </html>
  );
}
