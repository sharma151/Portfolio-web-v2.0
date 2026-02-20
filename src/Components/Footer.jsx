import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full text-(--text-color) py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h3 className="text-sm font-semibold">Designed and Developed by Saurav sharma</h3>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-sm">© {year} SS</h3>
        </div>
        <div>
          <ul className="flex justify-center md:justify-end gap-4">
            <li>
              <a
                href="https://github.com/sharma151"
                target="_blank"
                className="text-(--text-color) hover:text-purple-400 transition duration-300"
              >
                <AiFillGithub size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/connect2saurav"
                target="_blank"
                className="text-(--text-color) hover:text-purple-400  transition duration-300"
              >
                <AiOutlineTwitter size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/saurav0402/"
                target="_blank"
                className="text-(--text-color) hover:text-purple-400  transition duration-300"
              >
                <FaLinkedinIn size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sharma_saurav_1303/"
                target="_blank"
                className="text-(--text-color) hover:text-purple-400 transition duration-300"
              >
                <AiFillInstagram size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
