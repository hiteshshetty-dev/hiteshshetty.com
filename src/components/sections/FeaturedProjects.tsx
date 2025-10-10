import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import ProjectCardServer from "@/components/projects/ProjectCardServer";
import projectsData from "@/data/projects.json";

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

export default function FeaturedProjects() {
  const featuredProjects = (projectsData as Project[]).filter(
    (project) => project.featured,
  );

  return (
    <section className="py-20 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy font-sora mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-brand-navy/70 max-w-2xl mx-auto">
            Showcase of my work in building scalable platforms and innovative
            solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCardServer
              key={project.uuid}
              project={project}
              variant={project.type as "personal" | "professional"}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand-navy text-brand-beige font-medium rounded-lg hover:bg-brand-navy/90 transition-colors shadow-lg group"
          >
            View All Projects
            <HiArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
