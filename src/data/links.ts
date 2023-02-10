import { BsYoutube, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiGithub,
  SiGitlab,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GiSailboat } from "react-icons/gi";
import { FaNodeJs } from "react-icons/fa";

export const socialLinks = [
  {
    name: "youtube",
    url: "https://youtube.com/@ikechukwu1peter",
    Icon: BsYoutube,
  },
  {
    name: "twitter",
    url: "https://twitter.com/pete_iyke",
    Icon: BsTwitter,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/peter-ikechukwu/",
    Icon: BsLinkedin,
  },
  {
    name: "instagram",
    url: "https://instagram.com/pete_iyke",
    Icon: BsInstagram,
  },
];

//LINKS on my header
export const baseLinks = [
  { name: "About", to: "/about" },
  { name: "Works", to: "/works" },
  { name: "Contact", to: "/contact" },
];

export const courseLinks = [
  { name: "Video", to: "https://www.youtube.com/@ikechukwu1peter/videos" },
  { name: "Blog", to: "https://medium.com/@devpete" },
];

export const languages = [
  {
    label: "JavaScript",
    Icon: SiJavascript,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "TypeScript",
    Icon: SiTypescript,
    href: "https://www.typescriptlang.org/",
  },
];

export const frontend = [
  {
    label: "HTML",
    Icon: SiHtml5,
    href: "https://developer.mozilla.org/en-US/docs/Web/html",
  },
  {
    label: "CSS",
    Icon: SiCss3,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },

  {
    label: "React",
    Icon: SiReact,
    href: "https://reactjs.org/",
  },
  {
    label: "Next",
    Icon: TbBrandNextjs,
    href: "https://nextjs.org/",
  },
];

export const backend = [
  {
    label: "NODEJS",
    Icon: FaNodeJs,
    href: "https://nodejs.org",
  },
  {
    label: "EXPRESSJS",
    Icon: SiExpress,
    href: "https://expressjs.com/",
  },

  {
    label: "NESTJS",
    Icon: SiNestjs,
    href: "https://nestjs.com/",
  },
  {
    label: "SAILSJS",
    Icon: GiSailboat,
    href: "https://sailsjs.com/",
  },
];

export const databases = [
  {
    label: "MongoDB",
    Icon: SiMongodb,
    href: "https://mongodb.com/",
  },
  {
    label: "PostgreSQL",
    Icon: SiPostgresql,
    href: "https://postgresql.org/",
  },
  {
    label: "MySQL",
    Icon: SiMysql,
    href: "https://mysql.com/",
  },
  {
    label: "REDIS",
    Icon: SiRedis,
    href: "https://redis.io/",
  },
];

export const others = [
  {
    label: "GraphQL",
    Icon: SiGraphql,
    href: "https://graphql.org/",
  },
  {
    label: "Github",
    Icon: SiGithub,
    href: "https://github.com/",
  },

  {
    label: "Gitlab",
    Icon: SiGitlab,
    href: "https://gitlab.com/",
  },
];
