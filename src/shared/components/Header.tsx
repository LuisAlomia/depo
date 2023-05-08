import logo from "../../assets/logo.svg";
import Language from "../../types/Languages";

const languages: Language[] = [
  { id: 1, color: "bg-yellow-300", name: "javascript" },
  { id: 2, color: "bg-yellow-400", name: "java" },
  { id: 3, color: "bg-yellow-500", name: "git" },
  { id: 4, color: "bg-yellow-600", name: "docker" },
  { id: 5, color: "bg-yellow-700", name: "sql" },
];

const Header = () => {
  return (
    <header className="w-full flex flex-wrap-reverse justify-between items-center">
      <div className="w-1/2">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-yellow-900 via-yellow-600 to-yellow-400">
          dePo.
        </h1>
        <p className="text-4xl font-extrabold text-slate-50 my-4">
          Metodos y comandos a un click de tu mouse.
        </p>
        <p>
          {languages.map((language: Language) => (
            <span
              className={`inline-block text-center mr-2 px-2 rounded-3xl min-w-[3.5rem] ${language.color} text-black font-bold text-sm capitalize`}
              key={language.id}
            >
              {language.name}
            </span>
          ))}
        </p>
      </div>
      <div className="w-1/2 relative">
        <div className="w-[18rem] h-[18rem] absolute left-10 rounded-full bg-gradient-to-r from-yellow-200 to-yellow-500 blur-3xl opacity-40"></div>
        <div className="w-[18rem] h-[18rem] rounded-full absolute right-10 bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 blur-3xl opacity-40"></div>
        <div className="w-[18rem] h-[18rem] bg-amber-200 rounded-full absolute bottom-[-3rem] left-1/4 bg-gradient-to-tl from-yellow-900 via-yellow-600 to-yellow-400 blur-3xl opacity-40"></div>
        <img className="addMore-img mx-auto" src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
