import { useState, useEffect } from "react";
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
import { MdDarkMode, MdLightMode } from "react-icons/md";
import logo from "../assets/logo.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
  }, []);

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
    <nav className="  z-50 backdrop-blur-md bg-black/10 border border-white/10 text-[var(--text-color)] px-6  rounded-2xl mx-4 mt-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="brand"
              className="h-15 w-15 rounded-lg object-contain"
            />
          </div>{" "}
        </NavLink>

        {/* Links & Actions */}
        <div className="flex items-center gap-4">
          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-6 text-lg">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 transition ${
                      isActive ? "text-purple-500" : "text-[var(--text-color)]"
                    } hover:text-purple-500`
                  }
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Theme Toggler (Always visible) */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="text-2xl hover:text-purple-500"
          >
            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </button>

          {/* GitHub CTA (Hidden on mobile) */}
          <a
            href="https://github.com/sharma151"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 bg-purple-500 px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            <CgGitFork className="text-lg" />
            <AiFillStar className="text-lg" />
          </a>

          {/* Hamburger for Mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 mb-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 rounded transition ${
                  isActive ? "text-purple-500" : "text-[var(--text-color)]"
                } hover:bg-gray-700`
              }
            >
              <div className="flex items-center gap-2 text-lg">
                {item.icon}
                {item.label}
              </div>
            </NavLink>
          ))}
          <a
            href="https://github.com/sharma151"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            <div className="flex items-center gap-2">
              <div className="bg-purple-500 flex px-2 py-1 rounded">
                <CgGitFork />
                <AiFillStar />
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
