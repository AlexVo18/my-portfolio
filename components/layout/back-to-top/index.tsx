"use client";

import Button from "@/components/common/button";
import ArrowUp from "@/icons/arrow-up";

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 ">
      <Button
        variant={"ghost"}
        onClick={scrollToTop}
        className="rounded-full transition hover:scale-110 bg-foreground hover:bg-foreground dark:hover:bg-foreground shadow-xl/25"
      >
        <ArrowUp className="text-background " />
      </Button>
    </div>
  );
};

export default BackToTopButton;
