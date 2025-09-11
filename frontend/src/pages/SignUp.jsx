import { useState } from "react";
import { Link } from "react-router-dom";

export default function Autrhentication() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  function handleUsername(e) {
    setUser(e.target.value);
  }

  function handlePassword(e) {
    setPass(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit() {}

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-20 w-80 bg-white p-6 rounded-xl shadow-lg mx-auto flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-600 font-medium">Username</label>
          <input
            onChange={handleUsername}
            type="text"
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter username"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-600 font-medium">Email</label>
          <input
            onChange={handleEmail}
            type="text"
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter email"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-600 font-medium">Password</label>
          <input
            type="password"
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter password"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-600 font-medium">Verify Password</label>
          <input
            type="password"
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            placeholder="Re-enter password"
          />
        </div>
        <Link
          to="/signUp"
          className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors text-center block"
        >Sign Up</Link>
      </form>
    </>
  );
}
