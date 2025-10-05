import { HiExternalLink, HiStar } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import openSourceData from "@/data/opensource.json";

export default function OpenSource() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy font-sora mb-4">
            Open Source Contributions
          </h2>
          <p className="text-lg text-brand-navy/70 max-w-2xl mx-auto">
            Contributing to the developer community and maintaining open-source
            projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {openSourceData.map((project) => (
            <a
              key={project.uuid}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-brand-beige/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-brand-navy/10 hover:border-brand-amber/50"
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
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy/5 rounded-xl">
            <SiGithub size={20} className="text-brand-navy" />
            <span className="text-brand-navy font-medium">
              Find more on my{" "}
              <a
                href="https://github.com/hiteshshetty-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-steel hover:text-brand-navy underline"
              >
                GitHub profile
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
