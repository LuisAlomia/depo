import Language from "../types/Languages";
import icoSql from "../assets/sql.png";
import icogit from "../assets/git.svg";
import icoDocker from "../assets/docker.svg";

export const commandsLanguageButton: Language[] = [
  {
    id: 1,
    name: "sql",
    icon: icoSql,
  },
  {
    id: 2,
    name: "git",
    icon: icogit,
  },
  {
    id: 3,
    name: "docker",
    icon: icoDocker,
  },
];
