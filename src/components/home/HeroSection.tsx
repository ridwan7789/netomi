import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import netomiLogo from "@/assets/netomi-logo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(147_71%_44%_/_0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-20" />

      {/* Animated Neon Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(147 71% 44% / 0)" />
            <stop offset="50%" stopColor="hsl(147 71% 44% / 0.5)" />
            <stop offset="100%" stopColor="hsl(147 71% 44% / 0)" />
          </linearGradient>
        </defs>
        <path
          d="M0,200 Q400,100 800,200 T1600,200"
          stroke="url(#neonGrad)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse-glow"
        />
        <path
          d="M0,400 Q400,300 800,400 T1600,400"
          stroke="url(#neonGrad)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
      </svg>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 fade-up">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
              <img
                src={netomiLogo}
                alt="Netomi Logo"
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-primary/30"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 fade-up fade-up-delay-1">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">
              Stateless Privacy Layer-2 on BSC
            </span>
          </div>

          {/* Headline */}
          <h1 className="section-title text-5xl md:text-6xl lg:text-7xl mb-6 fade-up fade-up-delay-2">
            A Stateless Privacy Layer-2 for{" "}
            <span className="text-primary neon-text">Hyper-Scalable</span>{" "}
            Payments on BSC
          </h1>

          {/* Sub-headline */}
          <p className="section-subtitle text-lg md:text-xl mx-auto mb-10 fade-up fade-up-delay-3">
            Netomi brings zero-knowledge privacy and stateless architecture to
            enable confidential, massively scalable blockchain payments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up fade-up-delay-4">
            <Link to="/technology" className="btn-primary inline-flex items-center gap-2 justify-center focusable">
              Explore Technology
              <ArrowRight size={18} />
            </Link>
            <a href="https://docs.netomi.site" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2 justify-center focusable">
              <FileText size={18} />
              Read Documentation
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 fade-up fade-up-delay-5">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary neon-text">10M</p>
              <p className="text-muted-foreground text-sm mt-1">Total Supply</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary neon-text">0</p>
              <p className="text-muted-foreground text-sm mt-1">State Bloat</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary neon-text">∞</p>
              <p className="text-muted-foreground text-sm mt-1">Scalability</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
