import experienceData from "@/data/experience.json";

export default function Experience() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy font-sora mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-brand-navy/70 max-w-2xl mx-auto">
            My journey in software engineering and product development
          </p>
        </div>

        <div className="space-y-12">
          {experienceData.map((company) => (
            <div key={company.uuid} className="relative">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-brand-navy font-sora mb-2">
                  {company.company}
                </h3>
                <p className="text-brand-steel">{company.location}</p>
              </div>

              <div className="space-y-8">
                {company.roles.map((role) => (
                  <div
                    key={role.uuid}
                    className="relative pl-8 pb-8 border-l-2 border-brand-steel/30 last:border-0"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-brand-amber border-4 border-white" />

                    <div className="bg-brand-beige/50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h4 className="text-xl font-semibold text-brand-navy mb-2 md:mb-0">
                          {role.title}
                        </h4>
                        <span className="inline-flex items-center px-4 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm font-medium">
                          {role.period}
                        </span>
                      </div>

                      <ul className="space-y-3">
                        {role.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start gap-3 text-brand-navy/80"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-rust mt-2" />
                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
