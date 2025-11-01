import { HiChevronDown } from "react-icons/hi";
import experienceData from "@/data/experience.json";

interface Role {
  uuid: string;
  title: string;
  period: string;
  achievements: string[];
}

function RoleContent({ role }: { role: { achievements: string[] } }) {
  return (
    <ul className="space-y-3">
      {role.achievements.map((achievement) => (
        <li
          key={achievement}
          className="flex items-start gap-3 text-brand-navy/80"
        >
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-rust mt-2" />
          <span className="leading-relaxed">{achievement}</span>
        </li>
      ))}
    </ul>
  );
}

function RoleCard({ role, isLast = false }: { role: Role; isLast?: boolean }) {
  return (
    <div
      className={`relative pl-8 pb-8 border-l-2 border-brand-steel/30 ${
        isLast ? "last:border-0" : ""
      }`}
    >
      <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-brand-amber border-4 border-white" />

      <div className="bg-brand-beige/50 rounded-2xl p-6 hover:shadow-lg transition-shadow [will-change:box-shadow]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h4 className="text-xl font-semibold text-brand-navy mb-2 md:mb-0">
            {role.title}
          </h4>
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm font-medium">
            {role.period}
          </span>
        </div>

        <div className="pt-4 border-t border-brand-navy/10">
          <RoleContent role={role} />
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-brand-navy/70 max-w-2xl mx-auto">
            My journey in software engineering and product development
          </p>
        </div>

        <div className="space-y-12">
          {experienceData.map((company) => {
            const visibleRoles = company.roles.slice(0, 2);
            const additionalRoles = company.roles.slice(2);
            const hasMoreRoles = additionalRoles.length > 0;

            return (
              <div key={company.uuid} className="relative">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-brand-navy font-sora mb-2">
                    {company.company}
                  </h3>
                  <p className="text-brand-steel">{company.location}</p>
                </div>

                <div className="space-y-8">
                  {visibleRoles.map((role) => (
                    <RoleCard key={role.uuid} role={role} />
                  ))}

                  {hasMoreRoles && (
                    <details className="group">
                      <summary
                        className="cursor-pointer list-none flex justify-center"
                        aria-label={`Show ${additionalRoles.length} additional role${additionalRoles.length > 1 ? "s" : ""} at ${company.company}`}
                      >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-brand-navy/20 hover:border-brand-amber/50 bg-white hover:bg-brand-amber/5 text-brand-navy hover:text-brand-navy font-medium transition-all duration-200">
                          <span>
                            View {additionalRoles.length} More Role
                            {additionalRoles.length > 1 ? "s" : ""}
                          </span>
                          <HiChevronDown
                            size={16}
                            className="transition-transform duration-300 group-open:rotate-180 [will-change:transform]"
                            aria-hidden="true"
                          />
                        </div>
                      </summary>

                      <div className="mt-6 space-y-8">
                        {additionalRoles.map((role, index) => (
                          <RoleCard
                            key={role.uuid}
                            role={role}
                            isLast={index === additionalRoles.length - 1}
                          />
                        ))}
                      </div>
                    </details>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
