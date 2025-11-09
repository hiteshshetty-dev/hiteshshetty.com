import recommendationsData from "@/data/recommendations.json";

interface Recommendation {
  uuid: string;
  recommenderName: string;
  recommenderTitle: string;
  recommenderCompany: string;
  recommenderLinkedIn?: string;
  relationship: string;
  recommendationText: string;
  date: string;
}

export default function Recommendations() {
  const recommendations = recommendationsData as Recommendation[];

  return (
    <section className="py-20 bg-brand-beige/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            LinkedIn Recommendations
          </h2>
          <p className="text-lg text-brand-navy/70 max-w-2xl mx-auto">
            What colleagues and peers say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((recommendation) => (
            <div
              key={recommendation.uuid}
              className="bg-white rounded-2xl border border-brand-navy/10  hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <blockquote className="flex-1 mb-6 min-h-0 recommendation-blockquote">
                  <p className="text-sm md:text-base text-brand-navy/90 leading-relaxed italic whitespace-pre-line max-h-[350px] overflow-y-auto pr-2">
                    {recommendation.recommendationText}
                  </p>
                </blockquote>

                <div className="border-t border-brand-navy/10 pt-6 mt-auto">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-brand-steel/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-steel font-bold text-lg">
                        {recommendation.recommenderName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <a
                        href={recommendation.recommenderLinkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                        aria-label={`View ${recommendation.recommenderName}'s LinkedIn profile`}
                      >
                        <h3 className="font-bold text-brand-navy mb-1 group-hover:text-brand-steel transition-colors">
                          {recommendation.recommenderName}
                        </h3>
                      </a>
                      <p className="text-sm text-brand-steel mb-1">
                        {recommendation.recommenderTitle} @{" "}
                        {recommendation.recommenderCompany}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-brand-navy/50 mt-3">
                    {recommendation.relationship} •{" "}
                    {new Date(recommendation.date).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
