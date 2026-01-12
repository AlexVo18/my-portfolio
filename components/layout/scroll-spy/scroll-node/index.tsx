import { SectionType } from "@/app/page";
import { cn } from "@/lib/utils";

type Props = {
  handleClick: (id: string) => void;
  section: SectionType;
  isActive: boolean;
} & React.ComponentPropsWithoutRef<"li">;

const ScrollNode = ({ section, isActive, handleClick }: Props) => {
  const { id, label } = section;
  return (
    <li>
      <button
        className={cn(
          "group flex items-center  text-right gap-3 justify-self-end",
          !isActive && "hover:cursor-pointer"
        )}
        onClick={() => handleClick(id)}
        aria-label={`Navigate to ${section.label}`}
      >
        <span
          className={cn(
            " text-xs font-medium opacity-0 -left-8 translate-x-2 transition-all duration-200 ",
            isActive
              ? "opacity-100 mr-2"
              : "group-hover:opacity-100 group-hover:translate-x-0 "
          )}
        >
          {label}
        </span>
        <div
          className={cn(
            "size-5 rounded-full border-0 border-black flex items-center justify-center transition duration-300",
            isActive ? "border-2 " : "hover:border-2"
          )}
        >
          <div
            className={cn(
              "size-3 rounded-full border-3 border-primary",
              isActive && "bg-primary"
            )}
          />
        </div>
      </button>
    </li>
  );
};

export default ScrollNode;
