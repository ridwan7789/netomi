import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import ArchitectureSection from "@/components/home/ArchitectureSection";
import UseCaseSection from "@/components/home/UseCaseSection";
import PartnersSection from "@/components/home/PartnersSection";
import TokenomicsSection from "@/components/home/TokenomicsSection";
import RoadmapSection from "@/components/home/RoadmapSection";
import ClosingSection from "@/components/home/ClosingSection";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ParticlesBackground />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ArchitectureSection />
        <UseCaseSection />
        <PartnersSection />
        <TokenomicsSection />
        <RoadmapSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
