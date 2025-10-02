import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MovieGallery from "./pages/MovieGallery.jsx";
import Profile from "./pages/Profile.jsx";
import Root from "./pages/Root.jsx";
import Login from "./pages/Login.jsx";
import SignUp from './pages/SignUp.jsx'
import ListsPage from './pages/ListsPage.jsx'

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
        { path: 'signUp', element: <SignUp />},
        { path: 'listspage', element: <ListsPage />},
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
