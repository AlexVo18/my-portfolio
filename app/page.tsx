import AboutSection from "@/components/main/about";
import ContactSection from "@/components/main/contact";
import HeroSection from "@/components/main/hero";
import ProjectSection from "@/components/main/projects";
import SkillsSection from "@/components/main/skills";
import WorkSection from "@/components/main/work";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
