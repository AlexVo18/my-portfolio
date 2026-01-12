import Excel from "@/icons/excel";
import Java from "@/icons/java";
import { ExperienceType } from "@/types/work.type";
import {
  SiReact,
  SiNextdotjs,
  SiAntdesign,
  SiJavascript,
  SiTypescript,
  SiReactquery,
  SiShadcnui,
  SiPostman,
  SiApacheecharts,
} from "@icons-pack/react-simple-icons";

export const mockData: ExperienceType[] = [
  {
    companyName: "GEEK Up",
    isFreelance: false,
    title: "Intern Product Front-end",
    description:
      "In charge of revising old products by creating new Figma UI designs, implementing and integrating them using Microfrontend.",
    techs: [
      {
        icon: SiReact,
        name: "React",
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        icon: SiReactquery,
        name: "Tanstack Query",
      },
      {
        icon: SiAntdesign,
        name: "Ant Design",
      },
      {
        icon: SiApacheecharts,
        name: "Echart",
      },
      {
        name: "UmiJS",
      },
      {
        name: "quiankun",
      },
    ],
    startDate: "Oct 2025",
    endDate: "Dec 2025",
  },
  {
    companyName: "GNhà",
    isFreelance: true,
    title: "Front-end Developer",
    description:
      "In charge of creating UIs based on Figma designs and integrating APIs into the the website.",
    techs: [
      {
        icon: SiReact,
        name: "React ",
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        icon: SiNextdotjs,
        name: "NextJS",
      },
      {
        icon: SiShadcnui,
        name: "ShadCN",
      },
      {
        icon: SiReactquery,
        name: "Tanstack Query",
      },
    ],
    startDate: "Aug 2025",
    endDate: "Dec 2025",
  },
  {
    companyName: "FPT Software",
    isFreelance: false,
    title: "Intern Tester",
    description:
      "In charge of creating and updating APIs test cases and testing them on Postman, unit testing for APIs and integration testing.",
    techs: [
      {
        icon: Java,
        name: "Java",
      },
      {
        icon: SiPostman,
        name: "Postman",
      },
      {
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        icon: Excel,
        name: "Excel",
      },
    ],
    startDate: "Sep 2023",
    endDate: "Dec 2023",
  },
];
