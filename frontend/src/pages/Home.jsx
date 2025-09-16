import { Link } from "react-router-dom";
import headerBg from "../assets/headerBg.png";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <header
        className="flex flex-col mt-30 mx-20 bg-center h-[600px] text-center justify-center rounded-4xl border-1 border-white items-center"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <p className="text-white text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Start Rating Movies Now!
        </p>{" "}
        <Link
          to="/login"
          className="mt-5 px-6 py-3 bg-black/60 text-white text-lg font-semibold rounded-lg hover:bg-black/80 transition"
        >
          Login / Sign Up
        </Link>
      </header>
      <div>
        
      </div>
    </div>
  )
}
