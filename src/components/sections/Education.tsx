import { HiAcademicCap, HiCalendar, HiLocationMarker } from "react-icons/hi";
import educationData from "@/data/education.json";

export default function Education() {
  return (
    <section className="py-20 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy font-sora mb-4">
            Education
          </h2>
          <p className="text-lg text-brand-navy/70 max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((edu) => (
            <div
              key={edu.uuid}
              className="bg-white rounded-2xl p-8 border border-brand-navy/10 shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-navy to-brand-steel flex items-center justify-center">
                    <HiAcademicCap className="text-brand-beige" size={32} />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-brand-navy font-sora mb-2">
                    {edu.institution}
                  </h3>

                  <p className="text-lg text-brand-steel font-medium mb-3">
                    {edu.degree} in {edu.field}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-brand-navy/70">
                      <HiLocationMarker size={18} />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-navy/70">
                      <HiCalendar size={18} />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-amber/20 rounded-lg border border-brand-amber/30">
                    <span className="text-brand-navy font-semibold">CGPA:</span>
                    <span className="text-brand-navy font-bold text-lg">
                      {edu.cgpa}
                    </span>
                    <span className="text-brand-navy/70 text-sm">/ 10</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
