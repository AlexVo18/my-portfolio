import ContainerWrapper from "@/components/layout/container";
import AboutSection from "@/components/main/about";
import ContactSection from "@/components/main/contact";
import HeroSection from "@/components/main/hero";
import ProjectSection from "@/components/main/projects";
import SkillsSection from "@/components/main/skills";
import WorkSection from "@/components/main/work";
import { cn } from "@/lib/utils";

export const Sections = [
  { id: "hero", component: <HeroSection /> },
  { id: "about", component: <AboutSection /> },
  { id: "skills", component: <SkillsSection /> },
  { id: "work", component: <WorkSection /> },
  { id: "projects", component: <ProjectSection /> },
  { id: "contact", component: <ContactSection /> },
] as const;

export default function Page() {
  return (
    <>
      {Sections.map((section, index) => (
        <ContainerWrapper
          as={"section"}
          key={section.id}
          id={section.id}
          bgClassName={cn(index % 2 !== 0 && "bg-secondary")}
        >
          {section.component}
        </ContainerWrapper>
      ))}
    </>
  );
}
