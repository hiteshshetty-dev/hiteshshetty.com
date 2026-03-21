import type { Metadata } from "next";
import ProjectsClient from "@/components/pages/ProjectsClient";

const url = "https://hiteshshetty.com/projects";
const title = "Projects - Hitesh Shetty";
const description =
  "A collection of professional work and personal projects showcasing my expertise in full-stack development, system design, and problem-solving.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    siteName: "Hitesh Shetty",
    title,
    description,
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.webp"],
    creator: "@hiteshshettydev",
    site: "@hiteshshettydev",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
