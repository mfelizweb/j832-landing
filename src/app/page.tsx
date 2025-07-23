import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FlowAnimation from "@/components/FlowAnimation";
import UseCases from "@/components/UseCases";
import HowItWorksTimeline from "@/components/HowItWorksTimeline";
import SdkDemo from "@/components/SdkDemo";

import FaqSection from "@/components/FaqSection";
import CommunityCta from "@/components/CommunityCta";
 import Roadmap from "@/components/Roadmap";

export default function Home() {
  return (
    <main>
      
      <Hero />
      <UseCases />
      <HowItWorksTimeline />
      <AboutSection />
      <SdkDemo />
      <FlowAnimation />
      <Roadmap />
      <FaqSection />
      <CommunityCta />
 
    </main>
  );
}
