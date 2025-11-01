import type { IconType } from "react-icons";
import { GiTrophy } from "react-icons/gi";
import { HiLightningBolt, HiShieldCheck } from "react-icons/hi";
import achievementsData from "@/data/achievements.json";

const iconMap: Record<string, IconType> = {
  hackathon: HiLightningBolt,
  security: HiShieldCheck,
  project: GiTrophy,
};

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  hackathon: {
    bg: "bg-brand-amber/10",
    icon: "text-brand-amber",
    border: "border-brand-amber/30",
  },
  security: {
    bg: "bg-brand-rust/10",
    icon: "text-brand-rust",
    border: "border-brand-rust/30",
  },
  project: {
    bg: "bg-brand-steel/10",
    icon: "text-brand-steel",
    border: "border-brand-steel/30",
  },
};

export default function Achievements() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy font-sora mb-4">
            Achievements & Awards
          </h2>
          <p className="text-lg text-brand-navy/70 max-w-2xl mx-auto">
            Recognition for innovation, security, and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((achievement) => {
            const Icon = iconMap[achievement.type];
            const colors = colorMap[achievement.type];

            return (
              <div
                key={achievement.uuid}
                className="bg-brand-beige/50 rounded-2xl p-6 border border-brand-navy/10 hover:shadow-lg transition-all duration-300 [will-change:box-shadow]"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${colors.bg} border-2 ${colors.border} flex items-center justify-center mb-4`}
                >
                  {Icon && <Icon className={colors.icon} size={28} />}
                </div>

                <span className="inline-block px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-medium mb-3">
                  {achievement.year}
                </span>

                <h3 className="text-xl font-bold text-brand-navy font-sora mb-3">
                  {achievement.title}
                </h3>

                <p className="text-brand-navy/70 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
