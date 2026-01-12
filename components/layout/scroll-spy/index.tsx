"use client";

import { useEffect, useState } from "react";
import { sections } from "@/app/page";
import ScrollNode from "./scroll-node";

export default function ScrollSpy() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (windowHeight + window.scrollY >= documentHeight - 10) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const currIndex = sections.findIndex((section) => section.id === id);
    if (currIndex === 0) {
      return window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (currIndex === sections.length - 1) {
      return window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 block">
      <ul className="space-y-4 flex flex-col justify-end">
        {sections.map((section) => (
          <ScrollNode
            key={section.id}
            section={section}
            isActive={section.id === activeSection}
            handleClick={scrollToSection}
          />
        ))}
      </ul>
    </nav>
  );
}
