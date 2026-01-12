import ContainerWrapper from "@/components/layout/container";
import AboutSection from "@/components/main/about";
import ContactSection from "@/components/main/contact";
import HeroSection from "@/components/main/hero";
import ProjectSection from "@/components/main/projects";
import SkillsSection from "@/components/main/skills";
import WorkSection from "@/components/main/work";
import { cn } from "@/lib/utils";

export type SectionType = {
  id: string;
  component: React.ReactNode;
  label: string;
};

export const sections: SectionType[] = [
  { id: "hero", component: <HeroSection />, label: "Home" },
  { id: "about", component: <AboutSection />, label: "About me" },
  { id: "skills", component: <SkillsSection />, label: "Skills" },
  { id: "work", component: <WorkSection />, label: "Experiences" },
  { id: "projects", component: <ProjectSection />, label: "Projects" },
  { id: "contact", component: <ContactSection />, label: "Contact" },
] as const;

export default function Page() {
  return (
    <>
      {sections.map((section, index) => (
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
