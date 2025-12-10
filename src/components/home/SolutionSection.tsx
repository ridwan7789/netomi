import { Cpu, Shield, Zap, Link2 } from "lucide-react";

const solutions = [
  {
    icon: Cpu,
    title: "Arsitektur Stateless",
    description:
      "Tidak menyimpan state global, memungkinkan skalabilitas tanpa batas tanpa bloat.",
  },
  {
    icon: Shield,
    title: "Zero-Knowledge Privacy",
    description:
      "Lapisan privasi ZK yang menjamin kerahasiaan transaksi sepenuhnya.",
  },
  {
    icon: Zap,
    title: "Hyper-Scaling",
    description:
      "Throughput tinggi tanpa mengorbankan desentralisasi atau keamanan.",
  },
  {
    icon: Link2,
    title: "BSC Compatible",
    description:
      "Terintegrasi sempurna dengan ekosistem Binance Smart Chain.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24 relative bg-card/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(147_71%_44%_/_0.05)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
            Our Solution
          </p>
          <h2 className="section-title mb-4">Netomi L2 Solution</h2>
          <p className="section-subtitle mx-auto">
            Revolutionary technology stack designed for privacy-first,
            infinitely scalable payments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-card to-background border border-border/50 hover:border-primary/50 transition-all duration-500"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
