import { HeroSection } from "@/components/marketing/hero-section";
import { StatsSection } from "@/components/marketing/stats-section";
import { ServicesSection } from "@/components/marketing/services-section";
import { WhyUsSection } from "@/components/marketing/why-us-section";
import { TeamSection } from "@/components/marketing/team-section";
import { CTASection } from "@/components/marketing/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyUsSection />
      <TeamSection />
      <CTASection />
    </>
  );
}
