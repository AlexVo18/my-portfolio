import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode | string;
  className?: string;
  subText?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "className">;

const Title = ({ children, className, subText, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <div
        className={cn(
          className,
          "tracking-tight font-bold sm:text-5xl text-3xl font-roboto"
        )}
        {...props}
      >
        {children}
      </div>
      {subText ? <div className="text-center">{subText}</div> : null}
    </div>
  );
};

export default Title;
