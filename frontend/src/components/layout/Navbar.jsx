import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 w-full h-15 bg-[#697565]/40 backdrop-blur-sm flex items-center px-8 text-xl">
      <h1 className="text-white text-3xl font-bold mr-10">🎬 FilmRate</h1>

      {/* Left side links */}
      <div className="flex space-x-6 ">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/moviegallery" className="text-white">
          Gallery
        </Link>
      </div>

      {/* Right side link */}
      <div className="ml-auto">
        <Link to="/login" className="text-white">
          Login
        </Link>
      </div>
    </nav>
  );
}
