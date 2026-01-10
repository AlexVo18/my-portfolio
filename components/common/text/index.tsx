import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "className">;

const Text = ({ className, children, ...props }: Props) => {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
};

export default Text;
