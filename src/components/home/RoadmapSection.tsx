import { Check, Circle } from "lucide-react";

const roadmapData = [
  {
    period: "Q1-Q2 2025",
    title: "Research & Development",
    items: ["Protocol Research", "Architecture Design", "Testnet Development", "Wallet Alpha Release"],
    status: "current",
  },
  {
    period: "Q3-Q4 2025",
    title: "Mainnet Launch",
    items: ["Mainnet Deployment", "Staking System", "Security Audits", "Exchange Listings"],
    status: "upcoming",
  },
  {
    period: "2026",
    title: "Ecosystem Expansion",
    items: ["DAO Governance", "Merchant Payments", "Cross-chain Integration", "Enterprise Solutions"],
    status: "future",
  },
];

const RoadmapSection = () => {
  return (
    <section className="py-24 relative bg-card/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(147_71%_44%_/_0.05)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
            Timeline
          </p>
          <h2 className="section-title mb-4">Roadmap</h2>
          <p className="section-subtitle mx-auto">
            Our journey to revolutionize blockchain privacy.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-border hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {roadmapData.map((phase, index) => (
              <div
                key={index}
                className={`relative md:flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  }`}
                >
                  <div
                    className={`inline-block p-6 rounded-2xl bg-card border transition-all duration-300 ${
                      phase.status === "current"
                        ? "border-primary/50 neon-border"
                        : "border-border/50 hover:border-primary/30"
                    }`}
                  >
                    <p className="text-primary font-medium text-sm mb-2">
                      {phase.period}
                    </p>
                    <h3 className="font-heading text-xl font-semibold mb-4">
                      {phase.title}
                    </h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className={`flex items-center gap-2 text-sm ${
                            index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                          }`}
                        >
                          {phase.status === "current" && itemIndex === 0 ? (
                            <Check className="w-4 h-4 text-primary" />
                          ) : (
                            <Circle className="w-3 h-3 text-muted-foreground" />
                          )}
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                  <div
                    className={`w-5 h-5 rounded-full border-2 ${
                      phase.status === "current"
                        ? "border-primary bg-primary animate-pulse"
                        : phase.status === "upcoming"
                        ? "border-primary/50 bg-background"
                        : "border-border bg-background"
                    }`}
                  />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
