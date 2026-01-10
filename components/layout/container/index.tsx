import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  defaultSpacing?: boolean;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "className">;

const ContainerWrapper = ({
  children,
  className,
  defaultSpacing = true,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        "container mx-auto max-w-6xl sm:px-20 px-8",
        defaultSpacing && "sm:my-20 my-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default ContainerWrapper;
