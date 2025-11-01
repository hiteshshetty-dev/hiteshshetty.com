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

interface ProjectCardServerProps {
  project: Project;
  variant: "personal" | "professional";
}

export default function ProjectCardServer({ project }: ProjectCardServerProps) {
  return (
    <div className="relative bg-white rounded-2xl border border-brand-navy/10 hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full [will-change:transform,box-shadow]">
      <ProjectPreview previews={project.previews} title={project.title} />

      <div className="p-6 flex flex-col flex-1">
        <ProjectTag type={project.type} company={project.company} />

        <h3 className="text-xl font-bold text-brand-navy font-sora mb-2 group-hover:text-brand-steel transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-brand-steel font-medium mb-3">
          {project.subtitle}
        </p>

        <p className="text-brand-navy/70 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <ProjectTechStack tech={project.tech} />
        <ProjectLinks links={project.links} />
      </div>
    </div>
  );
}
