import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import landingPage from "../assets/landingPage.png";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  const handleLoginClick = () => {
    setHasAccount(true);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${landingPage})`,
        backGroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "#FFFBE0",
      }}
      className="h-screen flex justify-center items-center"
    >
      <div
        style={{ backgroundColor: "#2A4674" }}
        className="p-8 rounded-lg shadow-md"
      >
        {hasAccount ? (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">
              Login
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-white" htmlFor="email">
                  Email:
                </label>
                <input
                  className="border border-gray-300 px-3 py-2 rounded w-64"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-white" htmlFor="password">
                  Password:
                </label>
                <input
                  className="border border-gray-300 px-3 py-2 rounded w-64"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-[#008080]"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center text-[#FFFBE0]">
              Sign Up
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-[#FFFBE0]" htmlFor="name">
                  Name:
                </label>
                <input
                  className="border border-gray-300 px-3 py-2 rounded w-80"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-[#FFFBE0]" htmlFor="email">
                  Email:
                </label>
                <input
                  className="border border-gray-300 px-3 py-2 rounded w-80"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-[#FFFBE0]" htmlFor="password">
                  Password:
                </label>
                <input
                  className="border border-gray-300 px-3 py-2 rounded w-80"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-[#008080]"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
            <p className="mt-4 text-center text-[#FFFBE0]">
              Already have an account?{" "}

              <button
                className="text-orange-500 underline decoration-[#008080] decoration-2 font-bold hover:text-white"
                onClick={handleLoginClick}
              >

                Login here
              </Link>
            </p>
          </>
        )}
      </div>
      <div></div>
    </div>
  );
}

export default Signup;
