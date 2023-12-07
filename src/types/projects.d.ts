import { IconType } from "react-icons";
export interface IPROJECT {
  title: string;
  // description: string;
  imgSrc: string;
  url: string;
  skills: ISKILLS[];
}

interface ISKILLS {
  techTitle: string;
  Icon: IconType;
  color: string;
}
