import Image from "next/image";
import {
  HiChevronLeft,
  HiChevronRight,
  HiExternalLink,
  HiX,
} from "react-icons/hi";
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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  currentImageIndex: number;
  onPrevImage: () => void;
  onNextImage: () => void;
  onImageSelect: (index: number) => void;
  isImageLoading: boolean;
  onImageLoad: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
  currentImageIndex,
  onPrevImage,
  onNextImage,
  onImageSelect,
  isImageLoading,
  onImageLoad,
}: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
    >
      <div
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        role="document"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 w-10 h-10 flex items-center justify-center rounded-full bg-brand-charcoal/80 hover:bg-brand-charcoal text-white transition-colors"
          aria-label="Close modal"
        >
          <HiX size={24} />
        </button>

        <div className="p-6 pt-4">
          <div className="mb-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                project.type === "professional"
                  ? "bg-brand-rust/10 text-brand-rust"
                  : "bg-brand-amber/20 text-brand-navy"
              }`}
            >
              {project.type === "professional" ? "Professional" : "Personal"}
            </span>
            {project.company && (
              <span className="ml-2 text-xs text-brand-navy/60">
                @ {project.company}
              </span>
            )}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy font-sora mb-2">
            {project.title}
          </h2>
          <p className="text-lg text-brand-steel font-medium mb-4">
            {project.subtitle}
          </p>

          {project.previews && project.previews.length > 0 && (
            <div className="relative w-full max-w-2xl mx-auto mb-6">
              <div className="relative rounded-xl overflow-hidden bg-brand-navy/5 border border-brand-navy/10 min-h-[350px]">
                {isImageLoading && (
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-r from-brand-navy/5 via-brand-navy/10 to-brand-navy/5 animate-pulse">
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative">
                        <div className="w-10 h-10 border-3 border-brand-navy/20 rounded-full"></div>
                        <div className="absolute top-0 left-0 w-10 h-10 border-3 border-transparent border-t-brand-navy rounded-full animate-spin"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-navy/40 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-brand-navy/40 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 bg-brand-navy/40 rounded-full animate-bounce"></div>
                      </div>
                      <p className="text-brand-navy/60 text-sm font-medium">
                        Loading preview...
                      </p>
                    </div>
                  </div>
                )}

                <div
                  className={`transition-all duration-500 ease-out ${
                    isImageLoading
                      ? "opacity-0 scale-95"
                      : "opacity-100 scale-100"
                  }`}
                >
                  <Image
                    src={project.previews[currentImageIndex]}
                    alt={`${project.title} preview ${currentImageIndex + 1}`}
                    width={600}
                    height={350}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 600px"
                    onLoad={onImageLoad}
                    priority={currentImageIndex === 0}
                  />
                </div>

                {project.previews.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={onPrevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-brand-charcoal/80 hover:bg-brand-charcoal text-white transition-colors"
                      aria-label="Previous image"
                    >
                      <HiChevronLeft size={24} />
                    </button>
                    <button
                      type="button"
                      onClick={onNextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-brand-charcoal/80 hover:bg-brand-charcoal text-white transition-colors"
                      aria-label="Next image"
                    >
                      <HiChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {project.previews.length > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                  {project.previews.map((_, index) => (
                    <button
                      key={`${project.title}-preview-${index}`}
                      type="button"
                      onClick={() => onImageSelect(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-brand-navy w-8"
                          : "bg-brand-navy/30 hover:bg-brand-navy/50"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          <p className="text-brand-navy/80 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-brand-navy/5 text-brand-navy text-sm rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {(project.links?.github ||
            project.links?.demo ||
            project.links?.npm) && (
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-brand-navy/10">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy text-white rounded-lg hover:bg-brand-navy/90 transition-colors"
                >
                  <SiGithub size={18} />
                  <span>View Code</span>
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-brand-amber text-brand-charcoal rounded-lg hover:bg-brand-amber/90 transition-colors"
                >
                  <HiExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              )}
              {project.links.npm && (
                <a
                  href={project.links.npm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-brand-rust text-white rounded-lg hover:bg-brand-rust/90 transition-colors"
                >
                  <HiExternalLink size={18} />
                  <span>NPM Package</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
