import { Badge } from "@/components/ui/badge";
import { ExperienceType } from "@/types/work.type";
import { Building2, Calendar, Laptop } from "lucide-react";

type Props = {
  experiences: ExperienceType[];
};

const Timeline = ({ experiences }: Props) => {
  return (
    <div>
      <div className="relative ml-3">
        <div className="absolute left-0 top-4 bottom-0 border-l-2" />

        {experiences.map(
          (
            {
              companyName,
              description,
              isFreelance,
              techs,
              title,
              startDate,
              endDate,
            },
            index
          ) => (
            <div
              key={companyName + index}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background" />

              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                    {isFreelance ? (
                      <Laptop className="size-5 text-muted-foreground" />
                    ) : (
                      <Building2 className="size-5 text-muted-foreground" />
                    )}
                  </div>
                  <span className="text-base font-medium">{companyName}</span>
                  {isFreelance && (
                    <Badge variant={"destructive"}>Freelance</Badge>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.01em]">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{startDate}</span>
                    <span>-</span>
                    <span>{endDate}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground text-pretty">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {techs.map(({ name, icon }) => {
                    const Icon = typeof icon !== "string" ? icon : null;
                    return (
                      <Badge
                        key={name}
                        variant="secondary"
                        className="rounded-full flex items-center gap-1.5 py-2.5 px-3"
                      >
                        {Icon && <Icon size={24} />}
                        <span>{name}</span>
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Timeline;
