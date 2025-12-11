import { ArrowRight } from "lucide-react";

const ClosingSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(147_71%_44%_/_0.1)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title text-4xl md:text-5xl mb-6">
            Building the Future of{" "}
            <span className="text-primary neon-text">Blockchain Privacy</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Netomi menciptakan masa depan privasi dan skalabilitas blockchain.
            Dengan teknologi stateless dan ZK, Netomi siap untuk adopsi masif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="btn-primary inline-flex items-center gap-2 justify-center text-lg px-8 py-4"
            >
              Join Community
              <ArrowRight size={20} />
            </a>
            <a
              href="https://docs.netomi.site"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 justify-center text-lg px-8 py-4"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
