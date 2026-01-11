import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  defaultSpacing?: boolean;
  bgClassName?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "className">;

const ContainerWrapper = ({
  children,
  className,
  defaultSpacing = true,
  bgClassName = "",
  ...props
}: Props) => {
  return (
    <div className={cn(bgClassName, defaultSpacing && "sm:py-20 py-10")}>
      <div
        className={cn("container mx-auto max-w-6xl sm:px-20 px-8", className)}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export default ContainerWrapper;
