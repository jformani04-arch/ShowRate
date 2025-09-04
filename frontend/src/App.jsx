import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Profile from "./pages/Profile.jsx";
import Footer from "./components/layout/Footer.jsx";
import Root from "./pages/Root.jsx";
import Authenticate from './pages/Authenticate.jsx'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "gallery", element: <Gallery /> },
        { path: "profile", element: <Profile /> },
        { path: "authenticate", element: <Authenticate /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
