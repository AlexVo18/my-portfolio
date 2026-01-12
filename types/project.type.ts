import { IconType } from "@icons-pack/react-simple-icons";

export type ProjectDataType = {
  name: string;
  types: string[];
  demoHref: projectHrefType[];
  codeHref: projectHrefType[];
  techs: string[];
  startDate: string;
  endDate: string | null;
  description: string;
  context: string;
  projectImages: ProjectImageType[];
  status: string[];
  teamSize: number | string;
  note?: string;
};

export type TechType = {
  icon?: string | IconType | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
};

export type projectHrefType = {
  type: string;
  href: string;
};

export type ProjectImageType = {
  type: string;
  images: string[];
};
