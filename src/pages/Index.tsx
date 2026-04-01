import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WfaSection from "@/components/WfaSection";
import SeeviseSection from "@/components/SeeviseSection";
import GeneratorSection from "@/components/GeneratorSection";
import EnergySection from "@/components/EnergySection";
import AgroSection from "@/components/AgroSection";
import AutomationSection from "@/components/AutomationSection";
import DashboardsSection from "@/components/DashboardsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <WfaSection />
    <SeeviseSection />
    <GeneratorSection />
    <EnergySection />
    <AgroSection />
    <AutomationSection />
    <DashboardsSection />
    <DifferentialsSection />
    <CtaSection />
    <Footer />
  </div>
);

export default Index;
