import { NavLink } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import logo from "../Assets/logo.png";

function NavBar() {
  return (
    <nav className="border p-3 items-center">
      <div className="flex justify-between">
        <NavLink to="/" className="flex items-center gap-2 ">
          <img src={logo} alt="brand" className="h-6 " />
        </NavLink>

        {/* Toggle Button for Mobile */}
        {/* <button className="md:hidden flex flex-col gap-1">
          <span className="block h-0.5 w-6 bg-black"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
        </button> */}

        {/* Nav NavLinks */}
        <div className="w-[35%]">
          <ul className="flex justify-between text-lg">
            <li className="group relative">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-1 hover:text-blue-600 transition ${
                    isActive ? "text-red-500" : ""
                  }`
                }
              >
                <AiOutlineHome /> Home
              </NavLink>
              <span className="absolute left-0  h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center gap-1 hover:text-blue-600 transition ${
                    isActive ? "text-red-500" : ""
                  }`
                }
              >
                <AiOutlineUser /> About
              </NavLink>
              <span className="absolute left-0  h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `flex items-center gap-1 hover:text-blue-600 transition ${
                    isActive ? "text-red-500" : ""
                  }`
                }
              >
                <AiOutlineFundProjectionScreen /> Projects
              </NavLink>
              <span className="absolute left-0  h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `flex items-center gap-1 hover:text-blue-600 transition ${
                    isActive ? "text-red-500" : ""
                  }`
                }
              >
                <CgFileDocument /> Resume
              </NavLink>
              <span className="absolute left-0  h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
        <div>
          <a
            href="https://github.com/sharma151"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-700 transition"
          >
            <CgGitFork className="text-lg" />
            <AiFillStar className="text-lg" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
