import { cn } from "@/lib/utils";
import Link from "next/link";
type Props = {
  className?: string;
} & React.ComponentProps<typeof Link>;

const SocialLink = ({ className, children, ...props }: Props) => {
  return (
    <Link
      target="_blank"
      className={cn(
        "transition duration-300 uppercase text-xs font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default SocialLink;
