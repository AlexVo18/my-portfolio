import { TechType } from "./project.type";

export type ExperienceType = {
  companyName: string;
  title: string;
  startDate: string;
  endDate: string | null;
  description: string;
  techs: TechType[];
  isFreelance: boolean;
};
