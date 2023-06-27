import { useState } from "react";
import landingPage from "../assets/landingPage.png";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

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
        style={{ backgroundColor: "#FF8E51" }}
        className="p-8 rounded-lg shadow-md"
      >
        {hasAccount ? (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="email">
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
                <label className="block mb-2" htmlFor="password">
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
                  className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 " htmlFor="name">
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
                <label className="block mb-2" htmlFor="email">
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
                <label className="block mb-2" htmlFor="password">
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
                  className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
            <p className="mt-4 text-center">
              Already have an account?{" "}
              <button
                className="text-blue-500 underline"
                onClick={handleLoginClick}
              >
                Login here
              </button>
            </p>
          </>
        )}
      </div>
      <div></div>
    </div>
  );
}

export default Signup;
