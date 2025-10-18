import type { Metadata } from "next";
import Achievements from "@/components/sections/Achievements";
import Experience from "@/components/sections/Experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import OpenSource from "@/components/sections/OpenSource";
import Skills from "@/components/sections/Skills";
import JsonLd from "@/components/ui/JsonLd";
import {
  generatePersonSchema,
  generateWebsiteSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://hiteshshetty.com",
  },
};
export default function Home() {
  return (
    <>
      <JsonLd data={generatePersonSchema()} />
      <JsonLd data={generateWebsiteSchema()} />
      <main>
        <Hero />
        <Experience />
        <FeaturedProjects />
        <OpenSource />
        <Skills />
        <Achievements />
      </main>
    </>
  );
}
