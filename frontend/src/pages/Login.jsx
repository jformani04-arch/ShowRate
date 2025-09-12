import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

export default function Authentication() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate(); // optional for redirect after login

  function handleUser(e) {
    setUser(e.target.value);
  }

  function handlePassword(e) {
    setPass(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop page reload

    const payload = {
      identifier: user, // username OR email
      password: pass,
    };

    fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server response:", data);

        if (data.token) {
          // Save JWT for future requests
          localStorage.setItem("token", data.token);

          alert("Login successful!");
          // redirect user to dashboard/profile
          navigate("/");
        } else {
          alert(data.message || "Login failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Something went wrong. Please try again later.");
      });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-20 w-90 bg-white p-6 rounded-xl shadow-lg mx-auto flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium">Username/Email</label>
        <input
          type="text"
          value={user}
          onChange={handleUser}
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter username/email"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium">Password</label>
        <input
          type="password"
          value={pass}
          onChange={handlePassword}
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter password"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Login
      </button>
      <div className="text-center mt-2 text-gray-700">
        Need to create an account?{" "}
        <Link to="/signup" className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </div>
    </form>
  );
}
