import { IPROJECT } from "./../types/projects.d";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiApollographql,
  SiGraphql,
  SiNestjs,
  SiGit,
  SiGithub,
  SiExpo,
  SiNodedotjs,
} from "react-icons/si";

export const projects: IPROJECT[] = [
  {
    title: "Foodie",
    imgSrc: "/foodie.jpg",
    url: "https://foodie-beta-eight.vercel.app/",
    skills: [
      {
        techTitle: "TypeScript",
        Icon: SiTypescript,
        color: "#3178C6",
      },
      {
        techTitle: "Reactjs",
        Icon: SiReact,
        color: "#61DAFB",
      },
    ],
  },
  {
    title: "Webzerve",
    imgSrc: "/webzerve.jpg",
    url: "https://webzerve.vercel.app",
    skills: [
      {
        techTitle: "TypeScript",
        Icon: SiTypescript,
        color: "#3178C6",
      },
      {
        techTitle: "Nextjs",
        Icon: SiNextdotjs,
        color: "#000000",
      },
      {
        techTitle: "Nestjs",
        Icon: SiNestjs,
        color: "#E10098",
      },
    ],
  },
  {
    title: "HQIStore",
    imgSrc: "/hqistore.jpg",
    url: "https://hqistore.com",
    skills: [
      {
        techTitle: "JavaScript",
        Icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        techTitle: "React",
        Icon: SiReact,
        color: "#61DAFB",
      },
      {
        techTitle: "Nodejs",
        Icon: SiNodedotjs,
        color: "#339933",
      },
    ],
  },
];