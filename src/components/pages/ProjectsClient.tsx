"use client";

import Link from "next/link";
import { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import OpenSourceCard from "@/components/opensource/OpenSourceCard";
import ProjectModal from "@/components/projects/ProjectModal";
import ProjectSection from "@/components/projects/ProjectSection";
import JsonLd from "@/components/ui/JsonLd";
import openSourceData from "@/data/opensource.json";
import projectsData from "@/data/projects.json";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

interface Project {
  uuid: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  type: string;
  featured: boolean;
  company?: string;
  previews?: string[];
  links?: {
    github?: string;
    demo?: string;
    npm?: string;
  };
}

export default function ProjectsClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const professionalProjects = (projectsData as Project[]).filter(
    (p) => p.type === "professional",
  );
  const personalProjects = (projectsData as Project[]).filter(
    (p) => p.type === "personal",
  );

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsImageLoading(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handlePrevImage = () => {
    if (selectedProject?.previews) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? (selectedProject.previews?.length ?? 1) - 1 : prev - 1,
      );
      setIsImageLoading(true);
    }
  };

  const handleNextImage = () => {
    if (selectedProject?.previews) {
      setCurrentImageIndex((prev) =>
        prev === (selectedProject.previews?.length ?? 1) - 1 ? 0 : prev + 1,
      );
      setIsImageLoading(true);
    }
  };

  const handleImageSelect = (index: number) => {
    setCurrentImageIndex(index);
    setIsImageLoading(true);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const breadcrumbs = [
    { name: "Home", url: "https://hiteshshetty.com/" },
    { name: "Projects" },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <main className="min-h-screen bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-navy/70 hover:text-brand-navy mb-8 transition-colors"
          >
            <HiArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-navy font-sora mb-4">
              Projects
            </h1>
            <p className="text-lg text-brand-navy/70">
              A collection of professional work and personal projects showcasing
              my expertise in full-stack development, system design, and
              problem-solving.
            </p>
          </div>

          <ProjectSection
            projects={personalProjects}
            title="Personal Projects"
            variant="personal"
            onViewDetails={handleProjectSelect}
          />

          <ProjectSection
            projects={professionalProjects}
            title="Professional Projects"
            variant="professional"
            onViewDetails={handleProjectSelect}
          />

          <div className="mt-20">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-sora mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-steel rounded-full"></span>
                Open Source Contributions
              </h2>
              <p className="text-lg text-brand-navy/70">
                Contributing to the developer community and maintaining
                open-source projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {openSourceData.map((project) => (
                <OpenSourceCard
                  key={project.uuid}
                  project={project}
                  variant="projects"
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy/5 rounded-xl">
                <SiGithub size={20} className="text-brand-navy" />
                <span className="text-brand-navy font-medium">
                  Find more on my{" "}
                  <a
                    href="https://github.com/hiteshshetty-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-steel hover:text-brand-navy underline"
                  >
                    GitHub profile
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        currentImageIndex={currentImageIndex}
        onPrevImage={handlePrevImage}
        onNextImage={handleNextImage}
        onImageSelect={handleImageSelect}
        isImageLoading={isImageLoading}
        onImageLoad={handleImageLoad}
      />
    </>
  );
}
