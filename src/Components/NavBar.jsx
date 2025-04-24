import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import logo from "../Assets/logo.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: <AiOutlineHome /> },
    { path: "/about", label: "About", icon: <AiOutlineUser /> },
    {
      path: "/projects",
      label: "Projects",
      icon: <AiOutlineFundProjectionScreen />,
    },
    { path: "/resume", label: "Resume", icon: <CgFileDocument /> },
  ];

  return (
    <nav className="border-b border-gray-800 px-4 py-3 bg-black text-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="brand" className="h-6" />
        </NavLink>

        {/* Desktop NavLinks */}
        <ul className="hidden md:flex gap-6 text-lg">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative group flex items-center gap-1 duration-300
                   ${
                     isActive ? "text-purple-500" : "text-white"
                   } hover:text-purple-500`
                }
              >
                {item.icon}
                {item.label}
                <span className="absolute -bottom-0.5 rounded left-0 h-0.5 w-0 transition-all !bg-purple-500 duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* GitHub CTA */}
        <div className="hidden md:block ">
          <a
            href="https://github.com/sharma151"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 !bg-purple-500 border-purple-900 px-4 py-2 rounded-md !hover:bg-gray-700 transition"
          >
            <CgGitFork className="!bg-purple-500 text-lg" />
            <AiFillStar className=" !bg-purple-500 text-lg" />
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 rounded transition duration-300 ${
                  isActive ? "text-purple-500" : "text-white"
                } hover:bg-gray-700`
              }
            >
              <div className="flex items-center  text-lg gap-2">
                {item.icon}
                {item.label}
              </div>
            </NavLink>
          ))}
          <a
            href="https://github.com/sharma151"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 transition"
          >
            <div className="flex text-lg items-center gap-2">
              <div className="!bg-purple-500 flex px-2 py-1 rounded">
                <CgGitFork className="!bg-purple-500 text-lg" />
                <AiFillStar className=" !bg-purple-500 text-lg" />
              </div>
              GitHub
            </div>
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
