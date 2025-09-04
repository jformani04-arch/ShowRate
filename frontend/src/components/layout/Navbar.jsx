import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex bg-[#ECDFCC] top-0 p-2 m-4 rounded-lg
     flex items-center px-4 space-between justify-evenly">
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      {/* <Link to='/mylist'>MyList</Link> */}
      {/* <Link to="/profile">Profile</Link> */}
      <Link to="/authenticate">Login/Sign Up</Link>
    </nav>
  );
}
