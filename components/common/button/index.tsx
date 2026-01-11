import { Button as PrimeButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

type Props = { className?: string } & Omit<
  React.ComponentProps<typeof PrimeButton>,
  "className"
>;

const Button = ({ children, className, ...props }: Props) => {
  return (
    <PrimeButton
      className={cn("transition duration-300 hover: cursor-pointer", className)}
      variant={"ghost"}
      {...props}
    >
      {children}
    </PrimeButton>
  );
};

export default Button;
