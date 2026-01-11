import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode | string;
  className?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "className">;

const Title = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={cn(className, "tracking-tight font-bold text-5xl font-roboto")}
      {...props}
    >
      {children}
    </div>
  );
};

export default Title;
