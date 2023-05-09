import Language from "../types/Languages";

import icoJavascript from "../assets/javascript.svg";
import icoJava from "../assets/java.svg";
import icoPhp from "../assets/php.svg";
import icoPython from "../assets/python.svg";
import icoRuby from "../assets/rubí.svg";
import icoCshare from "../assets/c-sharp.svg";

export const languagesButtons: Language[] = [
  {
    id: 1,
    name: "javascript",
    icon: icoJavascript,
  },
  {
    id: 2,
    name: "java",
    icon: icoJava,
  },
  {
    id: 3,
    name: "c#",
    icon: icoCshare,
  },
  {
    id: 4,
    name: "python",
    icon: icoPython,
  },
  {
    id: 5,
    name: "ruby",
    icon: icoRuby,
  },
  {
    id: 6,
    name: "php",
    icon: icoPhp,
  },
];
