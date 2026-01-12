import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  defaultSpacing?: boolean;
  bgClassName?: string;
  as?: React.ElementType;
} & Omit<React.ComponentPropsWithoutRef<"div">, "className">;

const ContainerWrapper = ({
  children,
  className,
  defaultSpacing = true,
  bgClassName = "",
  as: Component = "div",
  ...props
}: Props) => {
  return (
    <Component
      className={cn(bgClassName, defaultSpacing && "sm:py-20 py-10")}
      {...props}
    >
      <div
        className={cn("container mx-auto max-w-6xl sm:px-20 px-8", className)}
      >
        {children}
      </div>
    </Component>
  );
};

export default ContainerWrapper;
