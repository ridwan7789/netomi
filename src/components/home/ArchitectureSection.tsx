const ArchitectureSection = () => {
  const components = [
    { id: "engine", label: "Stateless Transaction Engine", x: 50, y: 20 },
    { id: "zk", label: "Zero-Knowledge Proof System", x: 20, y: 50 },
    { id: "aggregator", label: "Aggregator Nodes", x: 50, y: 50 },
    { id: "verifier", label: "On-Chain Verifier (BSC)", x: 80, y: 50 },
    { id: "wallet", label: "Light Client Wallet", x: 50, y: 80 },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
            Architecture
          </p>
          <h2 className="section-title mb-4">Technology Architecture</h2>
          <p className="section-subtitle mx-auto">
            A sophisticated system designed for maximum privacy and scalability.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative max-w-4xl mx-auto">
          {/* SVG Connections */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(147 71% 44% / 0.2)" />
                <stop offset="50%" stopColor="hsl(147 71% 44% / 0.8)" />
                <stop offset="100%" stopColor="hsl(147 71% 44% / 0.2)" />
              </linearGradient>
            </defs>
            {/* Engine to ZK */}
            <path
              d="M50,25 Q35,37.5 25,45"
              stroke="url(#lineGrad)"
              strokeWidth="0.3"
              fill="none"
              className="animate-pulse"
            />
            {/* Engine to Aggregator */}
            <path
              d="M50,25 L50,45"
              stroke="url(#lineGrad)"
              strokeWidth="0.3"
              fill="none"
              className="animate-pulse"
            />
            {/* Engine to Verifier */}
            <path
              d="M50,25 Q65,37.5 75,45"
              stroke="url(#lineGrad)"
              strokeWidth="0.3"
              fill="none"
              className="animate-pulse"
            />
            {/* ZK to Wallet */}
            <path
              d="M25,55 Q35,67.5 50,75"
              stroke="url(#lineGrad)"
              strokeWidth="0.3"
              fill="none"
              className="animate-pulse"
            />
            {/* Aggregator to Wallet */}
            <path
              d="M50,55 L50,75"
              stroke="url(#lineGrad)"
              strokeWidth="0.3"
              fill="none"
              className="animate-pulse"
            />
            {/* Verifier to Wallet */}
            <path
              d="M75,55 Q65,67.5 50,75"
              stroke="url(#lineGrad)"
              strokeWidth="0.3"
              fill="none"
              className="animate-pulse"
            />
          </svg>

          {/* Component Cards */}
          <div className="relative aspect-square md:aspect-[16/10]">
            {components.map((comp, index) => (
              <div
                key={comp.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${comp.x}%`, top: `${comp.y}%` }}
              >
                <div className="group relative">
                  {/* Glow */}
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Card */}
                  <div
                    className="relative px-4 py-3 md:px-6 md:py-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary animate-pulse" />
                      <span className="font-heading text-xs md:text-sm font-medium whitespace-nowrap">
                        {comp.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Component Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
          {[
            { title: "Stateless Engine", desc: "Processes transactions without storing global state" },
            { title: "ZK Proof System", desc: "Generates privacy-preserving proofs" },
            { title: "Aggregator Nodes", desc: "Bundles and batches transactions" },
            { title: "On-Chain Verifier", desc: "Validates proofs on BSC mainnet" },
            { title: "Light Wallet", desc: "Minimal resource user interface" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-card/50 border border-border/30 text-center"
            >
              <h4 className="font-heading text-sm font-semibold text-primary mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
