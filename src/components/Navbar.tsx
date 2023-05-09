import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="h-[5rem] bg-[#1e1e20] sticky top-0 mb-20 z-20 ">
      <div className="flex h-[5rem] max-w-7xl justify-between items-center bg-[#1e1e20] p-6 mx-auto">
        <div className="flex justify-center items-center gap-1">
          <img className="w-10 addMore-img" src={logo} alt="depo" />
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-yellow-900 via-yellow-600 to-yellow-400 cursor-pointer">
            <NavLink to={"/"}>dePo</NavLink>
          </span>
        </div>
        <ul className="flex gap-4 capitalize">
          <NavLink
            to="/"
            className={({ isActive }) =>
              !isActive
                ? "cursor-pointer font-medium text-[#b1b1b1] hover:text-yellow-600"
                : "text-yellow-600 font-medium"
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to={"/arrays/javascript"}
            className={({ isActive }) =>
              !isActive
                ? "cursor-pointer font-medium text-[#b1b1b1] hover:text-yellow-600"
                : "text-yellow-600 font-medium"
            }
          >
            arrays
          </NavLink>
          <NavLink
            to={"/strings"}
            className={({ isActive }) =>
              !isActive
                ? "cursor-pointer font-medium text-[#b1b1b1] hover:text-yellow-600"
                : "text-yellow-600 font-medium"
            }
          >
            strings
          </NavLink>
          <NavLink
            to={"/comandos"}
            className={({ isActive }) =>
              !isActive
                ? "cursor-pointer font-medium text-[#b1b1b1] hover:text-yellow-600"
                : "text-yellow-600 font-medium"
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
