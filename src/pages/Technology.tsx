import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import { Cpu, Shield, Network, CheckCircle, Smartphone } from "lucide-react";

const techSections = [
  {
    icon: Cpu,
    title: "Stateless Architecture",
    subtitle: "Infinite Scaling Without State Bloat",
    description:
      "Netomi's stateless architecture eliminates the need for global state storage, enabling virtually unlimited scalability. Unlike traditional blockchains that grow heavier with each transaction, our system maintains constant resource requirements regardless of transaction volume.",
    features: [
      "No global state storage required",
      "Infinite horizontal scaling potential",
      "Constant memory footprint",
      "Reduced node requirements",
      "Faster synchronization times",
    ],
  },
  {
    icon: Shield,
    title: "Zero-Knowledge Proof System",
    subtitle: "Privacy-Preserving Verification",
    description:
      "Our ZK proof system ensures complete transaction privacy while maintaining full verifiability. Using advanced cryptographic techniques, we prove transaction validity without revealing any sensitive information about the sender, receiver, or amount.",
    features: [
      "Complete transaction confidentiality",
      "Cryptographic privacy guarantees",
      "Efficient proof generation",
      "On-chain verification",
      "No trusted setup required",
    ],
  },
  {
    icon: Network,
    title: "Aggregator Nodes",
    subtitle: "Efficient Transaction Batching",
    description:
      "Aggregator nodes collect and bundle multiple transactions into efficient batches. This architecture dramatically reduces the cost per transaction while maintaining security and privacy guarantees for each individual payment.",
    features: [
      "Transaction bundling & batching",
      "Reduced per-transaction costs",
      "Optimized proof aggregation",
      "Decentralized node network",
      "MEV-resistant architecture",
    ],
  },
  {
    icon: CheckCircle,
    title: "On-Chain Verifier (BSC)",
    subtitle: "Lightweight Validation on Mainnet",
    description:
      "The on-chain verifier smart contract on Binance Smart Chain validates aggregated proofs with minimal gas consumption. This enables trustless settlement while leveraging BSC's established security and liquidity.",
    features: [
      "Lightweight proof verification",
      "Low gas consumption",
      "BSC mainnet security",
      "Trustless settlement",
      "Instant finality",
    ],
  },
  {
    icon: Smartphone,
    title: "Light Client Wallet",
    subtitle: "Minimal Resource User Interface",
    description:
      "Our light client wallet provides full privacy features without requiring users to run a full node. The wallet maintains minimal local state while enabling secure, private transactions from any device.",
    features: [
      "No full node required",
      "Mobile-friendly design",
      "Instant transaction creation",
      "Minimal storage requirements",
      "End-to-end encryption",
    ],
  },
];

const Technology = () => {
  return (
    <div className="min-h-screen bg-background">
      <ParticlesBackground />
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(147_71%_44%_/_0.08)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-20" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm fade-up">
                Deep Dive
              </p>
              <h1 className="section-title text-5xl md:text-6xl mb-6 fade-up fade-up-delay-1">
                Technology Behind{" "}
                <span className="text-primary neon-text">Netomi</span>
              </h1>
              <p className="section-subtitle text-lg md:text-xl mx-auto fade-up fade-up-delay-2">
                Explore the innovative architecture that powers hyper-scalable,
                privacy-preserving payments on the blockchain.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Sections */}
        {techSections.map((section, index) => (
          <section
            key={index}
            className={`py-24 relative ${
              index % 2 === 0 ? "bg-background" : "bg-card/30"
            }`}
          >
            <div className="container mx-auto px-6">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-primary font-medium text-sm uppercase tracking-wider">
                      Core Component
                    </p>
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                    {section.title}
                  </h2>
                  <p className="text-xl text-primary/80 mb-6">
                    {section.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {section.description}
                  </p>
                  <ul className="space-y-3">
                    {section.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl" />

                    {/* Card */}
                    <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card to-background border border-border/50">
                      {/* Animated Icon */}
                      <div className="relative w-32 h-32 mx-auto mb-8">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
                        <div className="relative w-full h-full rounded-full bg-card border border-primary/30 flex items-center justify-center">
                          <section.icon className="w-16 h-16 text-primary" />
                        </div>
                      </div>

                      {/* Decorative Lines */}
                      <svg
                        className="w-full h-32 opacity-30"
                        viewBox="0 0 200 100"
                      >
                        <defs>
                          <linearGradient
                            id={`grad-${index}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              stopColor="hsl(147 71% 44% / 0)"
                            />
                            <stop
                              offset="50%"
                              stopColor="hsl(147 71% 44% / 1)"
                            />
                            <stop
                              offset="100%"
                              stopColor="hsl(147 71% 44% / 0)"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,50 Q50,20 100,50 T200,50"
                          stroke={`url(#grad-${index})`}
                          strokeWidth="1"
                          fill="none"
                          className="animate-pulse"
                        />
                        <path
                          d="M0,70 Q50,40 100,70 T200,70"
                          stroke={`url(#grad-${index})`}
                          strokeWidth="1"
                          fill="none"
                          className="animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        />
                      </svg>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-4 rounded-xl bg-background/50">
                          <p className="text-2xl font-bold text-primary">
                            {index === 0 ? "0" : index === 1 ? "100%" : index === 2 ? "1000+" : index === 3 ? "<1s" : "5MB"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {index === 0 ? "State Storage" : index === 1 ? "Privacy" : index === 2 ? "TPS" : index === 3 ? "Finality" : "Wallet Size"}
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-background/50">
                          <p className="text-2xl font-bold text-primary">
                            {index === 0 ? "∞" : index === 1 ? "ZK" : index === 2 ? "Batch" : index === 3 ? "BSC" : "Light"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {index === 0 ? "Scale Potential" : index === 1 ? "Technology" : index === 2 ? "Processing" : index === 3 ? "Network" : "Client Type"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(147_71%_44%_/_0.08)_0%,_transparent_50%)]" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Ready to Build with Netomi?
              </h2>
              <p className="text-muted-foreground mb-8">
                Explore our documentation and start integrating privacy-first
                payments into your application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#" className="btn-primary">
                  Read Documentation
                </a>
                <a href="#" className="btn-outline">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Technology;
