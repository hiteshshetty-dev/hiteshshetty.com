import ProjectCard from "./ProjectCard";

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

interface ProjectSectionProps {
  projects: Project[];
  title: string;
  variant: "personal" | "professional";
  onViewDetails: (project: Project) => void;
}

export default function ProjectSection({
  projects,
  title,
  variant,
  onViewDetails,
}: ProjectSectionProps) {
  const accentColor =
    variant === "personal" ? "bg-brand-amber" : "bg-brand-rust";

  return (
    <section className={variant === "personal" ? "mb-16" : ""}>
      <h2 className="text-3xl font-bold text-brand-navy font-sora mb-8 flex items-center gap-3">
        <span className={`w-2 h-8 ${accentColor} rounded-full`}></span>
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.uuid}
            project={project}
            onViewDetails={onViewDetails}
            variant={variant}
          />
        ))}
      </div>
    </section>
  );
}
