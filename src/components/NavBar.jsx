import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-blue-700 bg-opacity-50 shadow-md">
      <ul className="flex justify-end space-x-4 py-4 px-8">
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
      </ul>
    </nav>
  );
}

export default NavBar;
