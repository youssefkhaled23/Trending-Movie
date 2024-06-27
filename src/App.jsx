import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Movie from "./Components/Movie/Movie";
import Tv from "./Components/Tv/Tv";
import Descrption from "./Components/Descrption/Descrption";
export default function App() {
  // Create The React-Router
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "Movie", element: <Movie /> },
        { path: "Tv", element: <Tv /> },
        { path: `About/:type/:id`, element: <Descrption /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
