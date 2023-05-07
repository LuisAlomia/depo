const Navbar = () => {
  return (
    <nav className="h-[4rem] bg-[#1e1e20]">
      <div className="h-[5rem] max-w-6xl flex justify-between items-center fixed bg-[#1e1e20] top-0 right-0 left-0 mx-auto mb-10 px-7 z-20">
        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-yellow-900 via-yellow-600 to-yellow-400 cursor-pointer">
          dePo
        </span>
        <ul className="flex gap-4 capitalize">
          <li className="cursor-pointer font-medium hover:text-yellow-600">
            Inicio
          </li>
          <li className="cursor-pointer font-medium hover:text-yellow-600">
            arrays
          </li>
          <li className="cursor-pointer font-medium hover:text-yellow-600">
            strings
          </li>
          <li className="cursor-pointer font-medium hover:text-yellow-600">
            comandos
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
