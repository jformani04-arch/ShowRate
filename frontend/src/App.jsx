import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import MovieGallery from "./pages/MovieGallery.jsx";
import Profile from "./pages/Profile.jsx";
import Root from "./pages/Root.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import ListsPage from "./pages/ListsPage.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import Policy from "./pages/Policy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "moviegallery", element: <MovieGallery /> },
        { path: "profile", element: <Profile /> },
        { path: "login", element: <Login /> },
        { path: "signUp", element: <SignUp /> },
        { path: "listspage", element: <ListsPage /> },
        { path: "contact", element: <Contact /> },
        { path: "faq", element: <FAQ /> },
        { path: "policy", element: <Policy /> },
        { path: "terms", element: <TermsOfService /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
