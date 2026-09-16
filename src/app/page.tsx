import type { Metadata } from "next";
import ChallengeSectionRadial from "@/components/sections/ChallengeSectionRadial";
import { homepageSeo } from "@/data/seo";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(homepageSeo);
import CustomerChallengesSection from "@/components/sections/CustomerChallengesSection";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import AboutSolvinaSection from "@/components/sections/AboutSolvinaSection";
import WhySolvinaSection from "@/components/sections/WhySolvinaSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import ModelToPlantSection from "@/components/sections/ModelToPlantSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import SolutionsSection from "@/components/sections/SolutionSection";
import SoftwareToolsSection from "@/components/sections/SoftwareToolsSection";
import SoftwareToolsLightTheme from "@/components/sections/SoftwareToolsLightTheme";
import GlobalPresenceSection from "@/components/sections/GlobalPresenceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CustomerVoiceSection from "@/components/sections/CustomerVoiceSection";
import KnowledgeCentreSection from "@/components/sections/KnowledgeCenterSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import CustomerSection from "@/components/sections/CustomerSection";
import CustomerGridSection from "@/components/sections/CustomerGridSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ExpertiseSection />
      <ModelToPlantSection />
      <WhySolvinaSection />
      <IndustriesSection />
      <CustomerSection />
      <CustomerGridSection />
      <TrustSection />
      <CustomerChallengesSection />
      {/* <ChallengeSectionRadial /> */}
      <AboutSolvinaSection />
      <SolutionsSection />
      <SoftwareToolsSection />
      {/* <SoftwareToolsLightTheme /> */}
      <GlobalPresenceSection />
      <ProjectsSection />
      {/* <CustomerVoiceSection /> */}
      {/* <KnowledgeCentreSection /> */}
      <FinalCTASection />
    </div>
  );
}
