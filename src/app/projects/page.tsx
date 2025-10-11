import type { Metadata } from "next";
import ProjectsClient from "@/components/pages/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of professional work and personal projects showcasing my expertise in full-stack development, system design, and problem-solving.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
