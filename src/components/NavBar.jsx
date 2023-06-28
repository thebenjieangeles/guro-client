import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-orange-500 bg-opacity-90 shadow-md">
      <div className="flex justify-between items-center py-4 px-8">
        <Link to="/" className="text-white text-lg font-bold">
          <span className="text-[#008080] text-3xl font-extrabold">G</span>URO
          <span className="text-[#008080] text-3xl font-extrabold"> A</span>PP
        </Link>
        <div className="md:hidden">
          <button
            className="text-white hover:text-[#32cd32] font-bold text-2xl "
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
        <ul
          className={`${isMenuOpen ? "block" : "hidden"} md:flex md:space-x-4`}
        >
          <li>
            <Link
              to="/"
              className="text-white hover:text-[#36454f] text-lg font-extrabold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-[#36454f] text-lg font-extrabold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-[#36454f] text-lg font-extrabold"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/policies"
              className="text-white hover:text-[#36454f] text-lg font-extrabold"
            >
              Policies
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className="text-white hover:text-[#36454f] text-lg font-extrabold"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="text-white hover:text-[#36454f] text-lg font-extrabold"
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
