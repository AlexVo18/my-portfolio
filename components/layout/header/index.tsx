"use client";

import { useEffect, useState } from "react";
import ContainerWrapper from "../container";
import ThemeButton from "./theme-button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ContainerWrapper
      defaultSpacing={false}
      className="flex items-center justify-between py-4"
      bgClassName={cn(
        "sticky z-50 top-0 w-full bg-background border-0  transition-all duration-100",
        isScrolled && "border-b border-foreground/10 dark:border-foreground/20 "
      )}
    >
      <div className="text-xl">Vo Minh Tri</div>
      <ThemeButton />
    </ContainerWrapper>
  );
};

export default Header;
