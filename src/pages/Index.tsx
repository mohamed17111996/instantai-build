import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { SocialProof } from "@/components/sections/SocialProof";
import { ValueSection } from "@/components/sections/ValueSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesGrid />
      <SocialProof />
      <ValueSection />
      <CTASection />
    </main>
  );
};

export default Index;