import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";  // make sure path matches your folder

const API_URL = import.meta.env.VITE_API_URL;

export default function Authentication() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // 👈 get login function from AuthContext

  function handleUser(e) {
    setUser(e.target.value);
  }

  function handlePassword(e) {
    setPass(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      identifier: user, // username OR email
      password: pass,
    };

    try {
      const res = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("Server response:", data);

      if (data.token) {
        // 👇 call AuthContext login (saves token + updates state)
        login(data.token, data.username);

        alert("Login successful!");
        navigate("/"); // redirect to homepage or profile
      } else {
        alert(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Please try again later.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-20 w-80 bg-white p-6 rounded-xl shadow-lg mx-auto flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium">Username/Email</label>
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
          onChange={handlePassword}
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
    </form>
  );
}
