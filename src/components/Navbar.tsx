import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import icoMenu from "../assets/menu.svg";
import { useState } from "react";

type Menu = {
  name: string;
  path: string;
};

const menu: Menu[] = [
  { name: "inicio", path: "/" },
  { name: "arrays", path: "/arrays/javascript" },
  { name: "strings", path: "/strings/javascript" },
  { name: "comandos", path: "/commands/sql" },
];

const Navbar = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleButton = () => setActive(!active);

  return (
    <nav className="h-[5rem] bg-[#1e1e20] sticky top-0 mb-20 z-20 ">
      <div className="flex h-[5rem] max-w-7xl justify-between items-center bg-[#1e1e20] p-6 mx-auto">
        <div className="flex justify-center items-center gap-1">
          <img className="w-10 addMore-img" src={logo} alt="depo" />
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-yellow-900 via-yellow-600 to-yellow-400 cursor-pointer">
            <NavLink to={"/"}>dePo</NavLink>
          </span>
        </div>
        <ul className="flex gap-4 capitalize max-[600px]:hidden">
          {menu.map((item: Menu, index: number) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                !isActive
                  ? "cursor-pointer font-medium text-[#b1b1b1] hover:text-yellow-600"
                  : "text-yellow-600 font-medium"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* MENU RESPONSIVE */}
        <div className="min-[600px]:hidden relative">
          <button onClick={handleButton}>
            <img
              className="w-[1.7rem] hover:fill-yellow-600 hover:cursor-pointer"
              src={icoMenu}
              alt="menu"
            />
          </button>
          {active && (
            <ul className="bg-[#262629] shadow-xl py-3 px-5 rounded-lg flex flex-col gap-2 absolute capitalize right-7">
              {menu.map((item: Menu, index: number) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={handleButton}
                  className={({ isActive }) =>
                    !isActive
                      ? "cursor-pointer font-medium text-[#b1b1b1] hover:text-yellow-600"
                      : "text-yellow-600 font-medium"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
