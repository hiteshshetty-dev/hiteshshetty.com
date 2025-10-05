import Link from "next/link";
import { HiArrowRight, HiExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import projectsData from "@/data/projects.json";

export default function FeaturedProjects() {
  const featuredProjects = projectsData.filter((project) => project.featured);

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
            <div
              key={project.uuid}
              className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-brand-navy/10 hover:border-brand-amber/50"
            >
              <div className="mb-4">
                {project.type === "professional" && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-rust/10 text-brand-rust text-xs font-medium mb-3">
                    Professional
                  </span>
                )}
                {project.type === "personal" && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-amber/20 text-brand-navy text-xs font-medium mb-3">
                    Personal
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-brand-navy font-sora mb-2 group-hover:text-brand-steel transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-brand-steel font-medium mb-3">
                {project.subtitle}
              </p>

              <p className="text-brand-navy/70 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-brand-navy/5 text-brand-navy text-xs rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(project.links?.github ||
                project.links?.demo ||
                project.links?.npm) && (
                <div className="flex items-center gap-3 pt-4 border-t border-brand-navy/10">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-brand-navy/70 hover:text-brand-navy text-sm transition-colors"
                      aria-label="GitHub"
                    >
                      <SiGithub size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-brand-navy/70 hover:text-brand-navy text-sm transition-colors"
                      aria-label="Demo"
                    >
                      <HiExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                  {project.links.npm && (
                    <a
                      href={project.links.npm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-brand-navy/70 hover:text-brand-navy text-sm transition-colors"
                      aria-label="npm"
                    >
                      <HiExternalLink size={16} />
                      <span>npm</span>
                    </a>
                  )}
                </div>
              )}
            </div>
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
