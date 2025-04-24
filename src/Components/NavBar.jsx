import { Link } from "react-router-dom";
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
        <Link to="/" className="flex items-center gap-2 ">
          <img src={logo} alt="brand" className="h-10 " />
        </Link>

        {/* Toggle Button for Mobile */}
        {/* <button className="md:hidden flex flex-col gap-1">
          <span className="block h-0.5 w-6 bg-black"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
        </button> */}

        {/* Nav Links */}
        <div className="">
          <ul className="flex gap-8 text-lg">
            <li className="group relative">
              <Link
                to="/"
                className="flex items-center gap-1 hover:text-blue-600 transition"
              >
                <AiOutlineHome /> Home
              </Link>
              <span className="absolute left-0  h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <Link
                to="/about"
                className="flex items-center gap-1 hover:text-blue-600 transition"
              >
                <AiOutlineUser /> About
              </Link>
              <span className="absolute left-0  h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <Link
                to="/projects"
                className="flex items-center gap-1 hover:text-blue-600 transition"
              >
                <AiOutlineFundProjectionScreen /> Projects
              </Link>
              <span className="absolute left-0  h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <Link
                to="/resume"
                className="flex items-center gap-1 hover:text-blue-600 transition"
              >
                <CgFileDocument /> Resume
              </Link>
              <span className="absolute left-0  h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li>
              <a
                href="https://github.com/sharma151"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-700 transition"
              >
                <CgGitFork className="text-lg" />
                <AiFillStar className="text-lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
