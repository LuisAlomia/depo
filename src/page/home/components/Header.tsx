import logo from "../../../assets/logo.svg";
import Language from "../../../types/Languages";
import { DataContext } from "../../../context/DataContext";
import { useContext } from "react";

const Header = () => {
  const { languagesBadges } = useContext(DataContext);

  return (
    <header className="w-full flex flex-wrap-reverse justify-between items-center max-[750px]:gap-8">
      <div className="w-1/2 max-[750px]:w-full">
        <h1 className="text-9xl max-[600px]:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-yellow-900 via-yellow-600 to-yellow-400">
          dePo.
        </h1>
        <p className="text-4xl font-extrabold text-slate-50 my-4">
          Metodos y comandos a un click de tu mouse.
        </p>
        <p className="flex flex-wrap gap-2 items-center">
          {languagesBadges.map((language: Language) => (
            <span
              className={`inline-block text-center px-2 rounded-3xl min-w-[3.5rem] ${language.color} text-black font-bold text-sm capitalize`}
              key={language.id}
            >
              {language.name}
            </span>
          ))}
        </p>
      </div>
      <div className="w-1/2 max-[750px]:w-full relative">
        <div className="w-[18rem] max-[750px]:w-[14rem] h-[18rem] absolute left-10 rounded-full bg-gradient-to-r from-yellow-200 to-yellow-500 blur-3xl opacity-40"></div>
        <div className="w-[18rem] max-[750px]:w-[14rem] h-[18rem] rounded-full absolute right-10 bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 blur-3xl opacity-40"></div>
        <div className="w-[18rem] max-[750px]:w-[14rem] h-[18rem] bg-amber-200 rounded-full absolute bottom-[-3rem] left-1/4 bg-gradient-to-tl from-yellow-900 via-yellow-600 to-yellow-400 blur-3xl opacity-40"></div>
        <img className="addMore-img mx-auto" src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
