import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="fixed top-0 w-full h-15 bg-[#697565]/40 backdrop-blur-sm flex items-center px-8 text-xl">
      <h1 className="text-white text-3xl font-bold mr-10">🎬 FilmRate</h1>

      {/* Left side links */}
      <div className="flex space-x-6">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/moviegallery" className="text-white">
          Gallery
        </Link>
      </div>

      {/* Right side */}
      <div className="ml-auto">
        {user ? (
          <div className="flex items-center space-x-4">
            <span className='text-white'>{user.username}</span>
            <button
              onClick={handleLogout}
              className="text-white bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-white">
              Login
            </Link>
            <Link to="/signup" className="text-white">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
