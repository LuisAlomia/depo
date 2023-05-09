import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

import icoPlus from "../assets/plus.svg";
import Language from "../types/Languages";

const FlotingButton = () => {
  const [active, setActive] = useState<boolean>(false);
  const { languagesButtons } = useContext(DataContext);
  const navigate = useNavigate();

  const handleButton = (name?: string) => {
    navigate(`/arrays/${name}`);
    setActive(!active);
  };

  return (
    <div className="m-5 relative">
      <button
        onClick={() => handleButton()}
        className=" w-[3rem] h-[3rem] bg-gradient-to-tl from-yellow-900 via-yellow-600 to-yellow-400 rounded-full flex justify-center items-center hover:bg-gradient-to-tl hover:from-yellow-400 hover:via-yellow-600"
        role="floting"
      >
        <img className="w-8" src={icoPlus} alt="button" />
      </button>
      {active && (
        <>
          <div className="w-[8rem] h-[20rem] rounded-3xl blur-3xl bg-gray-400 opacity-70 absolute left-[-1rem] z-0"></div>

          <ul role="children" className="absolute z-10 m-3 capitalize">
            {languagesButtons.map((language: Language) => (
              <li
                key={language.id}
                onClick={() => handleButton(language.name)}
                className="flex items-center gap-1 my-2 hover:text-yellow-600 hover:cursor-pointer font-semibold"
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
        </>
      )}
    </div>
  );
};

export default FlotingButton;
