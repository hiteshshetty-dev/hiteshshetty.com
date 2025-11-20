import { SiGithub } from "react-icons/si";
import OpenSourceCard from "@/components/opensource/OpenSourceCard";
import openSourceData from "@/data/opensource.json";

export default function OpenSource() {
  const personalOpenSource = openSourceData.filter(
    (project) => !project.professional,
  );

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
          {personalOpenSource.map((project) => (
            <OpenSourceCard key={project.uuid} project={project} />
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
