// import{ useState, useEffect } from "react";
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
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY >= 20);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav className="border-red-950 border p-3 items-center">
      <div className="flex justify-between">
        <Link to="/" className="flex items-center gap-2 ">
          <img src={logo} alt="brand" className="h-10 " />
        </Link>

        {/* Toggle Button for Mobile */}
        <button className="md:hidden flex flex-col gap-1">
          <span className="block h-0.5 w-6 bg-black"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
        </button>

        {/* Nav Links */}
        <div className="item-center">
          <ul className=" flex gap-8">
            <li>
              <Link
                to="/"
                className="flex items-center gap-1 hover:text-blue-600 transition"
              >
                <AiOutlineHome /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center gap-1 hover:text-blue-600 transition"
              >
                <AiOutlineUser /> About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="flex items-center gap-1 hover:text-blue-600 transition"
              >
                <AiOutlineFundProjectionScreen /> Projects
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="flex items-center gap-1 hover:text-blue-600 transition"
              >
                <CgFileDocument /> Resume
              </Link>
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
