import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";


export default function Root() {
  return (
    <>
    <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
      
    
  );
}
