import { IPROJECT } from "./../types/projects.d";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNestjs,
  SiGit,
  SiGithub,
  SiExpo,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

export const projects: IPROJECT[] = [
  {
    title: "Bridge | A fintech app",
    imgSrc: "/brydge.jpg",
    url: "https://brydgehq.co",
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
      {
        techTitle: "Nextjs",
        Icon: SiNextdotjs,
        color: "#000000",
      },
      {
        techTitle: "Nodejs",
        Icon: SiNodedotjs,
        color: "#339933",
      },
      {
        techTitle: "Express",
        Icon: SiExpress,
        color: "#333333",
      },
    ],
  },

  {
    title: "Ridges | A hotel booking app",
    imgSrc: "/ridges.jpg",
    url: "https://ridges-website.vercel.app",
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
        techTitle: "Reactjs",
        Icon: SiReact,
        color: "#61DAFB",
      },
      {
        techTitle: "Nodejs",
        Icon: SiNodedotjs,
        color: "#339933",
      },
      {
        techTitle: "Express",
        Icon: SiExpress,
        color: "#333333",
      },
    ],
  },
  // {
  //   title: "Nip | URL Shortener",
  //   imgSrc: "/short.jpg",
  //   url: "https://nip-psi.vercel.app",
  //   skills: [
  //     {
  //       techTitle: "TypeScript",
  //       Icon: SiTypescript,
  //       color: "#3178C6",
  //     },
  //     {
  //       techTitle: "Reactjs",
  //       Icon: SiReact,
  //       color: "#61DAFB",
  //     },
  //     {
  //       techTitle: "Nodejs",
  //       Icon: SiNodedotjs,
  //       color: "#339933",
  //     },
  //     {
  //       techTitle: "Express",
  //       Icon: SiExpress,
  //       color: "#333333",
  //     },
  //   ],
  // },
  {
    title: "Foodie | A food recipe app",
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
  // {
  //   title: "HQIStore",
  //   imgSrc: "/hqistore.jpg",
  //   url: "https://hqi-store.vercel.app",
  //   skills: [
  //     {
  //       techTitle: "JavaScript",
  //       Icon: SiJavascript,
  //       color: "#F7DF1E",
  //     },
  //     {
  //       techTitle: "React",
  //       Icon: SiReact,
  //       color: "#61DAFB",
  //     },
  //     {
  //       techTitle: "Nodejs",
  //       Icon: SiNodedotjs,
  //       color: "#339933",
  //     },
  //   ],
  // },
];
