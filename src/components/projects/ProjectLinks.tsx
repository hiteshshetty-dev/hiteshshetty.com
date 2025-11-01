import { CgNpm } from "react-icons/cg";
import { SiGithub } from "react-icons/si";
import { SlControlPlay } from "react-icons/sl";

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
          className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-brand-navy/20 hover:border-brand-amber/50 bg-white hover:bg-brand-amber/10 text-brand-navy/80 hover:text-brand-navy text-xs font-medium transition-all duration-200 [will-change:background-color,border-color]"
          aria-label="GitHub"
          data-umami-event="GitHub"
          data-umami-event-project-title={links.github}
        >
          <SiGithub size={12} />
          <span>Code</span>
        </a>
      )}
      {links.demo && (
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-brand-navy/20 hover:border-brand-amber/50 bg-white hover:bg-brand-amber/10 text-brand-navy/80 hover:text-brand-navy text-xs font-medium transition-all duration-200 [will-change:background-color,border-color]"
          aria-label="Demo"
          data-umami-event="Demo"
          data-umami-event-project-title={links.demo}
        >
          <SlControlPlay size={12} />
          <span>Demo</span>
        </a>
      )}
      {links.npm && (
        <a
          href={links.npm}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-brand-navy/20 hover:border-brand-amber/50 bg-white hover:bg-brand-amber/10 text-brand-navy/80 hover:text-brand-navy text-xs font-medium transition-all duration-200 [will-change:background-color,border-color]"
          aria-label="npm"
        >
          <CgNpm size={14} />
          <span>npm</span>
        </a>
      )}
    </div>
  );
}
