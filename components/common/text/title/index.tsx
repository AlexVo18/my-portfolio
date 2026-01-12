import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode | string;
  className?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "className">;

const Title = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        className,
        "tracking-tight font-bold sm:text-5xl text-3xl font-roboto mb-8"
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Title;
