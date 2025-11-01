import type { IconType } from "react-icons";
import { GrTest } from "react-icons/gr";
import {
  SiAmazon,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
} from "react-icons/si";
import skillsData from "@/data/skills.json";

const iconMap: Record<string, IconType> = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: SiCss3,
  nextjs: SiNextdotjs,
  redux: SiRedux,
  tailwindcss: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  nestjs: SiNestjs,
  graphql: SiGraphql,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  aws: SiAmazon,
  redis: SiRedis,
  git: SiGit,
  github: SiGithub,
  figma: SiFigma,
  jest: SiJest,
  "react-testing-library": SiTestinglibrary,
  playwright: GrTest,
  "react-query": SiReactquery,
};

export default function Skills() {
  return (
    <section className="py-20 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy font-sora mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-brand-navy/70 max-w-2xl mx-auto">
            Tools and technologies I work with to build modern applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.categories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-2xl p-6 border border-brand-navy/10"
            >
              <h3 className="text-xl font-bold text-brand-navy font-sora mb-6">
                {category.name}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-4 rounded-xl bg-brand-beige/50 hover:bg-brand-amber/10 hover:shadow-md transition-all duration-300 group [will-change:background-color,box-shadow]"
                    >
                      {Icon && (
                        <Icon
                          className="text-brand-navy group-hover:text-brand-steel transition-colors mb-2"
                          size={32}
                        />
                      )}
                      <span className="text-sm font-medium text-brand-navy text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
