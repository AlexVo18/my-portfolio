import { Button as PrimeButton } from "@/components/ui/button";
import React from "react";

type ButtonProps = React.ComponentProps<typeof PrimeButton>;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <PrimeButton className="transition duration-300" {...props}>
      {children}
    </PrimeButton>
  );
};

export default Button;
