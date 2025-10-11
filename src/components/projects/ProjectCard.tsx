import { HiEye } from "react-icons/hi";
import ProjectLinks from "./ProjectLinks";
import ProjectPreview from "./ProjectPreview";
import ProjectTag from "./ProjectTag";
import ProjectTechStack from "./ProjectTechStack";

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
  const buttonColor = isPersonal
    ? "bg-brand-amber/10 hover:bg-brand-amber/20 text-brand-navy"
    : "bg-brand-rust/10 hover:bg-brand-rust/20 text-brand-rust";

  return (
    <div className="relative bg-white rounded-2xl border border-brand-navy/10 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <ProjectPreview previews={project.previews} title={project.title} />

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <ProjectTag type={project.type} company={project.company} />
          <button
            type="button"
            onClick={() => onViewDetails(project)}
            className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors group ${buttonColor}`}
            aria-label="View project details"
            title="View Details"
            data-umami-event="View Project Details"
            data-umami-event-project-title={project.title}
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

        <ProjectTechStack tech={project.tech} />
        <ProjectLinks links={project.links} />
      </div>
    </div>
  );
}
