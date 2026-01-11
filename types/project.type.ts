export type ProjectDataType = {
  name: string;
  types: string[];
  demoHref: projectHrefType[];
  codeHref: projectHrefType[];
  techs: string[];
  startDate: string;
  endDate: string;
  description: string;
  context: string;
  projectImages: ProjectImageType[];
  status: string[];
  teamSize: number | string;
  note?: string;
};

export type TechType = {
  icon: string;
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
