interface ProjectTechStackProps {
  tech: string[];
}

export default function ProjectTechStack({ tech }: ProjectTechStackProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((techItem) => (
        <span
          key={techItem}
          className="px-2 py-1 bg-brand-navy/5 text-brand-navy text-xs rounded-md font-medium"
        >
          {techItem}
        </span>
      ))}
    </div>
  );
}
