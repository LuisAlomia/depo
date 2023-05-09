import { useState } from "react";
import Language from "../../types/Languages";
import icoPlus from "../../assets/plus.svg";
import icoJavascript from "../../assets/javascript.svg";
import icoJava from "../../assets/java.svg";
import icoPhp from "../../assets/php.svg";
import icoPython from "../../assets/python.svg";
import icoRuby from "../../assets/rubí.svg";
import icoCshare from "../../assets/c-sharp.svg";

const languages: Language[] = [
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

const FlotingButton = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleButton = () => setActive(!active);

  return (
    <div className="m-5">
      <button
        onClick={handleButton}
        className="w-[3rem] h-[3rem] bg-gradient-to-tl from-yellow-900 via-yellow-600 to-yellow-400 rounded-full flex justify-center items-center"
      >
        <img className="w-8" src={icoPlus} alt="button" />
      </button>
      {active && (
        <ul className="absolute z-10 m-3 capitalize">
          {languages.map((language: Language) => (
            <li
              key={language.id}
              onClick={handleButton}
              className="flex items-center gap-1 my-2 hover:text-yellow-600 hover:cursor-pointer"
            >
              <img
                className="rounded-full w-7 bg-yellow-400 p-1"
                src={language.icon}
                alt={language.name}
              />
              {language.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FlotingButton;
