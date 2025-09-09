import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* This will grow to fill remaining space */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
