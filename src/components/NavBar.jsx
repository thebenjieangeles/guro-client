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
    <nav className="bg-blue-700 bg-opacity-50 shadow-md">
      <div className="flex justify-between items-center py-4 px-8">
        <Link to="/" className="text-white text-lg font-bold">
          <span className="text-amber-500 text-3xl">G</span>URO
          <span className="text-amber-500 text-3xl">A</span>PP
        </Link>
        <div className="md:hidden">
          <button
            className="text-white hover:text-orange-500"
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
              className="text-white hover:text-orange-500 text-lg font-bold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-orange-500 text-lg font-bold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-orange-500 text-lg font-bold"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/policies"
              className="text-white hover:text-orange-500 text-lg font-bold"
            >
              Policies
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className="text-white hover:text-orange-500 text-lg font-bold"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="text-white hover:text-orange-500 text-lg font-bold"
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
