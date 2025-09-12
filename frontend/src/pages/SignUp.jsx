import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;


export default function Authentication() {
  
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [verifyPass, setVerifyPass] = useState("");
  const navigate = useNavigate(); // optional for redirect after signup

  const handleUsername = (e) => setUser(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPass(e.target.value);
  const handleVerifyPass = (e) => setVerifyPass(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pass !== verifyPass) {
      alert("Passwords do not match!");
      return;
    }

    const payload = { username: user, email, password: pass };

    fetch(`${API_URL}/api/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server response:", data);

        if (data.message === "User registered successfully") {
          alert("Signup successful! Please login.");
          navigate("/login"); // redirect to login page if using react-router
        } else {
          alert(data.message || "Signup failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-20 w-100 bg-white p-6 rounded-xl shadow-lg mx-auto flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>

      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium">Username</label>
        <input
          type="text"
          placeholder="Enter username"
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          value={user}
          onChange={handleUsername}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          value={email}
          onChange={handleEmail}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          value={pass}
          onChange={handlePassword}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium">Verify Password</label>
        <input
          type="password"
          placeholder="Re-enter password"
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          value={verifyPass}
          onChange={handleVerifyPass}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Sign Up
      </button>

      <div className="text-center mt-2 text-gray-700">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </div>
    </form>
  );
}
