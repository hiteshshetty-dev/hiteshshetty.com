import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
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
  title: "Hitesh Shetty - Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in full-stack product development, with expertise in React, TypeScript, Node.js, and distributed backend systems.",
  keywords: [
    "Hitesh Shetty",
    "Software Engineer",
    "React",
    "TypeScript",
    "Node.js",
    "Full Stack Developer",
  ],
  authors: [{ name: "Hitesh Shetty", url: "https://hiteshshetty.com" }],
  icons: "/logo-navy.svg",
  openGraph: {
    title: "Hitesh Shetty - Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in full-stack product development",
    type: "website",
    locale: "en_US",
  },
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
      </body>
    </html>
  );
}
