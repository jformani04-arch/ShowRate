import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import tv from "../assets/tv.png";

const API_URL = import.meta.env.VITE_API_URL;

export default function Authentication() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleUser(e) {
    setUser(e.target.value);
  }

  function handlePassword(e) {
    setPass(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      identifier: user,
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
        login(data.token, data.username);

        alert("Login successful!");
        navigate("/");
      } else {
        alert(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Please try again later.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-5xl flex flex-col md:flex-row rounded-2xl shadow-xl overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="w-full my-12 md:my-0 md:w-1/2 p-10 flex flex-col gap-6 bg-white rounded-xl shadow-lg"
        >
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-gray-800 leading-snug">
              Welcome to <span className="text-blue-500">ShowRate</span>
            </h2>
            <p className="text-gray-500 mt-1">Login to your account</p>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600 font-medium">
              Username / Email
            </label>
            <input
              onChange={handleUser}
              type="text"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              placeholder="Enter username or email"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600 font-medium">
              Password
            </label>
            <input
              onChange={handlePassword}
              type="password"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors shadow-md"
          >
            Login
          </button>

          <div className="flex items-center gap-2 my-2">
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className="text-xs text-gray-400">or</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <p className="text-center text-sm text-gray-600">
            No account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>

        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-6">
          <img
            src={tv}
            alt="Login Illustration"
            className="max-h-80 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
