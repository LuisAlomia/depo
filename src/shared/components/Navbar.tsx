import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[4rem] bg-[#1e1e20]">
      <div className="h-[5rem] max-w-6xl flex justify-between items-center fixed bg-[#1e1e20] top-0 right-0 left-0 mx-auto mb-10 px-7 z-20">
        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-yellow-900 via-yellow-600 to-yellow-400 cursor-pointer">
          <NavLink to={"/"}>dePo</NavLink>
        </span>
        <ul className="flex gap-4 capitalize">
          <NavLink
            to="/"
            className={({ isActive }) =>
              !isActive
                ? "cursor-pointer font-medium text-[#b1b1b1] hover:text-yellow-600"
                : "text-yellow-600"
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to={"/arrays"}
            className={({ isActive }) =>
              !isActive
                ? "cursor-pointer font-medium text-[#b1b1b1] hover:text-yellow-600"
                : "text-yellow-600"
            }
          >
            arrays
          </NavLink>
          <NavLink
            to={"/strings"}
            className={({ isActive }) =>
              !isActive
                ? "cursor-pointer font-medium text-[#b1b1b1] hover:text-yellow-600"
                : "text-yellow-600"
            }
          >
            strings
          </NavLink>
          <NavLink
            to={"/comandos"}
            className={({ isActive }) =>
              !isActive
                ? "cursor-pointer font-medium text-[#b1b1b1] hover:text-yellow-600"
                : "text-yellow-600"
            }
          >
            comandos
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
