import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx"; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`transition-all duration-300 z-50 
        ${
          scrolled
            ? "fixed top-0 left-0 w-full bg-[#ECDFCC] rounded-none shadow-md"
            : "m-4 rounded-lg bg-[#ECDFCC]"
        } flex items-center justify-evenly p-2 px-4`}
    >
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>

      {user ? (
        <>
          <Link to="/profile">Profile</Link>
        </>
      ) : (
        <Link to="/login">Login / Sign Up</Link>
      )}
    </nav>
  );
}
