import Image from "next/image";
import { HiExternalLink, HiEye } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

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

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
  variant: "personal" | "professional";
}

export default function ProjectCard({
  project,
  onViewDetails,
  variant,
}: ProjectCardProps) {
  const isPersonal = variant === "personal";
  const tagColor = isPersonal
    ? "bg-brand-amber/20 text-brand-navy"
    : "bg-brand-rust/10 text-brand-rust";
  const buttonColor = isPersonal
    ? "bg-brand-amber/10 hover:bg-brand-amber/20 text-brand-navy"
    : "bg-brand-rust/10 hover:bg-brand-rust/20 text-brand-rust";
  const tagText = isPersonal ? "Personal" : "Professional";

  return (
    <div className="relative bg-white rounded-2xl border border-brand-navy/10 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {project.previews && project.previews.length > 0 && (
        <div className="relative h-48 bg-brand-navy/5">
          <Image
            src={project.previews[0]}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${tagColor}`}
            >
              {tagText}
            </span>
            {project.company && (
              <span className="text-xs text-brand-navy/60">
                @ {project.company}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => onViewDetails(project)}
            className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors group ${buttonColor}`}
            aria-label="View project details"
            title="View Details"
          >
            <HiEye
              size={18}
              className="group-hover:scale-110 transition-transform"
            />
          </button>
        </div>

        <h3 className="text-xl font-bold text-brand-navy font-sora mb-2">
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
          <div className="flex items-center gap-3 pt-3 border-t border-brand-navy/10">
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
    </div>
  );
}
