import { useState } from "react";
import { Link } from "react-router-dom";

export default function Authentication() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function handleUser(e) {
    setUser(e.target.value);
  }

  function handlePassword(e) {
    setPass(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop form from refreshing when you submit

    // Build the payload with your state
    const payload = {
      username: user,
      password: pass,
    };

    // Send POST request
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server response:", data);
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Something went wrong.");
      });
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-20 w-80 bg-white p-6 rounded-xl shadow-lg mx-auto flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-600 font-medium">
            Username/Email
          </label>
          <input
            onChange={handleUser}
            type="text"
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter username/email"
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

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Login
        </button>

        <div className="text-xl font-bold text-center text-gray-700">Or</div>
        <Link
          to="/signUp"
          className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors text-center block"
        >
          Sign Up
        </Link>
      </form>
    </>
  );
}
