import { useState } from "react";
import { useNavigate } from "react-router-dom";

import icoPlus from "../assets/plus.svg";
import Language from "../types/Languages";

type Props = {
  type: string;
  data: Language[];
};

const FlotingButton = ({ type, data }: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleButton = () => setActive(!active);

  const handlePhat = (name?: string) => {
    navigate(`/${type}/${name}`);
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
          <div className="w-[8rem] h-[10rem] rounded-3xl blur-xl bg-black opacity-40 absolute left-[-1rem] z-10"></div>

          <ul role="children" className="absolute z-10 m-3 capitalize">
            {data.map((item: Language) => (
              <li
                key={item.id}
                onClick={() => handlePhat(item.name)}
                className="flex items-center gap-1 my-2 hover:text-yellow-600 hover:cursor-pointer font-semibold"
              >
                <img
                  className="rounded-full w-7 bg-yellow-400 p-1"
                  src={item.icon}
                  alt={item.name}
                />
                {item.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default FlotingButton;
