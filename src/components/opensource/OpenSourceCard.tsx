import { HiExternalLink, HiStar } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

interface OpenSourceProject {
  uuid: string;
  name: string;
  description: string;
  stars?: string;
  url: string;
  contributions: string;
}

interface OpenSourceCardProps {
  project: OpenSourceProject;
}

export default function OpenSourceCard({ project }: OpenSourceCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-brand-beige/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-brand-navy/10 hover:border-brand-amber/50 [will-change:transform,box-shadow]"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center group-hover:bg-brand-steel transition-colors">
          <SiGithub size={24} className="text-brand-beige" />
        </div>
        {project.stars && (
          <div className="flex items-center gap-1 px-3 py-1 bg-brand-amber/20 rounded-full">
            <HiStar className="text-brand-amber" size={16} />
            <span className="text-brand-navy text-sm font-medium">
              {project.stars}
            </span>
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-brand-navy font-sora mb-2 group-hover:text-brand-steel transition-colors">
        {project.name}
      </h3>

      <p className="text-brand-navy/70 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-brand-navy/10">
        <span className="text-xs text-brand-navy/60 font-medium">
          {project.contributions}
        </span>
        <HiExternalLink
          className="text-brand-navy/40 group-hover:text-brand-navy transition-colors"
          size={18}
        />
      </div>
    </a>
  );
}
