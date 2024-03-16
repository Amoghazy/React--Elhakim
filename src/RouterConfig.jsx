import { createBrowserRouter } from "react-router-dom";
import Home from "./comp/Home/Home.jsx";
import Layout from "./comp/Layout/Layout.jsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
