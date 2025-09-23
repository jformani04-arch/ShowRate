import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useState, useEffect } from "react";

export default function Root() {
  const [user, setUser] = useState(null);

  // Check if user is logged in on page load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("http://localhost:3000/api/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // send token in header
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) setUser(data.user);
        else setUser(null);
      })
      .catch(() => setUser(null));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} setUser={setUser} />

      {/* This will grow to fill remaining space */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
