import { Database, EyeOff, Layers, DollarSign } from "lucide-react";

const problems = [
  {
    icon: Database,
    title: "State Bloat",
    description:
      "Blockchain mengalami state bloat yang menghambat skalabilitas dan performa jaringan.",
  },
  {
    icon: EyeOff,
    title: "Minimal Privacy",
    description:
      "Privasi transaksi sangat minim, semua aktivitas keuangan dapat dilihat publik.",
  },
  {
    icon: Layers,
    title: "Heavy Layer-2s",
    description:
      "Layer-2 existing masih state-heavy, tidak menyelesaikan masalah fundamental.",
  },
  {
    icon: DollarSign,
    title: "Inefficient Costs",
    description:
      "Biaya & throughput belum efisien untuk adopsi pembayaran skala massal.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
            The Challenge
          </p>
          <h2 className="section-title mb-4">Problems We Solve</h2>
          <p className="section-subtitle mx-auto">
            Current blockchain infrastructure faces fundamental limitations that
            prevent mass adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card/50 neon-border-hover transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
