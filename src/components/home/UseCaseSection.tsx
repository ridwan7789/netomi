import { Wallet, Store, Users, TrendingUp, Globe } from "lucide-react";

const useCases = [
  {
    icon: Wallet,
    title: "Private Payments",
    description: "Confidential peer-to-peer transactions with full privacy.",
  },
  {
    icon: Store,
    title: "Merchant Settlement",
    description: "Fast and private payment processing for businesses.",
  },
  {
    icon: Users,
    title: "Confidential Payroll",
    description: "Private salary payments for organizations.",
  },
  {
    icon: TrendingUp,
    title: "Private DeFi Layer",
    description: "Privacy-preserving decentralized finance operations.",
  },
  {
    icon: Globe,
    title: "Cross-Border Remittance",
    description: "Fast, cheap, and private international transfers.",
  },
];

const UseCaseSection = () => {
  return (
    <section className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
            Applications
          </p>
          <h2 className="section-title mb-4">Use Cases</h2>
          <p className="section-subtitle mx-auto">
            Netomi enables a wide range of privacy-focused financial
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <useCase.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
