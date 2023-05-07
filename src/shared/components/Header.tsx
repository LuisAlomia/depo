type Language = {
  id: number;
  color: string;
  name: string;
};

const languages: Language[] = [
  { id: 1, color: "bg-yellow-300", name: "javascript" },
  { id: 2, color: "bg-yellow-400", name: "java" },
  { id: 3, color: "bg-yellow-500", name: "git" },
  { id: 4, color: "bg-yellow-600", name: "docker" },
  { id: 5, color: "bg-yellow-700", name: "sql" },
];

const Header = () => {
  return (
    <header className="w-1/2 flex cursor-default my-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-yellow-900 via-yellow-600 to-yellow-400">
          dePo.
        </h1>
        <p className="text-3xl font-semibold text-slate-50">
          El repositorio en el que puedes encontrar los comandos, metodos de
          arrays y de strings, mas usados al desarrollar con las tecnologias y
          lenguajes mas famosos del mercado.
        </p>
        <p className="text-2xl">Preparate para navegar entre lenguajes.</p>
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
    </header>
  );
};

export default Header;
