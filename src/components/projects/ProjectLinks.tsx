import { HiExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

interface ProjectLinksProps {
  links?: {
    github?: string;
    demo?: string;
    npm?: string;
  };
}

export default function ProjectLinks({ links }: ProjectLinksProps) {
  if (!links?.github && !links?.demo && !links?.npm) return null;

  return (
    <div className="flex items-center gap-3 pt-3 border-t border-brand-navy/10">
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-brand-navy/70 hover:text-brand-navy text-sm transition-colors"
          aria-label="GitHub"
        >
          <SiGithub size={16} />
          <span>Code</span>
        </a>
      )}
      {links.demo && (
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-brand-navy/70 hover:text-brand-navy text-sm transition-colors"
          aria-label="Demo"
        >
          <HiExternalLink size={16} />
          <span>Demo</span>
        </a>
      )}
      {links.npm && (
        <a
          href={links.npm}
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
  );
}
