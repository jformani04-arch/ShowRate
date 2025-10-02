import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setMenuOpen(false); // close menu after logout
  };

  return (
    <nav className="fixed top-0 w-full bg-[#697565]/40 backdrop-blur-sm z-50">
      <div className="flex items-center justify-between px-6 py-3">
        <Link to="/" className="text-white text-3xl font-bold">
            🎬 FilmRate
          </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-xl">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/moviegallery" className="text-white">
            Gallery
          </Link>
          {user && (
            <Link to="/listspage" className="text-white">
              MyList
            </Link>
          )}
        </div>

        {/* Right Side Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <img
                src={`http://localhost:3000${
                  user?.profilePhoto || "/uploads/default-avatar.png"
                }`}
                alt={user ? `${user.username}'s profile` : "Default profile"}
                className="w-10 rounded-full"
              />
              <span className="text-white font-bold">{user.username}</span>
              <Link
                to="/profile"
                className="text-white bg-[#697565]/70 backdrop-blur-sm px-3 py-1 rounded"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="text-white bg-red-600/80 backdrop-blur-sm px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white">
                Login
              </Link>
              <Link to="/signup" className="text-white">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#697565]/70 backdrop-blur-md text-white text-lg flex flex-col space-y-4 px-6 py-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/moviegallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
          {user && (
            <Link to="/listspage" onClick={() => setMenuOpen(false)}>
              MyList
            </Link>
          )}

          <div className="border-t border-gray-400 my-2"></div>

          {user ? (
            <>
              <span className="font-bold">{user.username}</span>
              <Link to="/profile" onClick={() => setMenuOpen(false)}>
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600/80 backdrop-blur-sm px-3 py-1 rounded text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}