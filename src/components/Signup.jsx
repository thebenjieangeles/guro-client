import { useState } from "react";

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
    <div className="bg-blue-900 h-screen flex justify-center items-center">
      <div className="bg-blue-200 p-8 rounded shadow-md">
        {hasAccount ? (
          <>
            <h2 className="text-2xl font-semibold mb-6">Login</h2>
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
              <button
                className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600"
                type="submit"
              >
                Login
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="name">
                  Name:
                </label>
                <input
                  className="border border-gray-300 px-3 py-2 rounded w-64"
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
              <button
                className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600"
                type="submit"
              >
                Register
              </button>
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
    </div>
  );
}

export default Signup;
