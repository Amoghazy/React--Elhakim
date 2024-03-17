import { createBrowserRouter } from "react-router-dom";
import Home from "./comp/Home/Home.jsx";
import Layout from "./comp/Layout/Layout.jsx";
import LayoutDR from "./comp/Layout/LayoutDR.jsx";
import MYPAtient from "./comp/DR/MYpatient/MYPAtient.jsx";
import Appointments from "./comp/DR/Appointments/Appointments.jsx";
import Reviews from "./comp/DR/Reviews/Reviews.jsx";
import Invoices from "./comp/DR/Invoices/Invoices.jsx";
import Contact from "./comp/DR/Contact/Contact.jsx";
import DashBoardDR from "./comp/DR/dashboardDR/DashBoardDR.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/doctor",
        element: <LayoutDR />,
        children: [
          {
            path: "patients-list",
            element: <MYPAtient />,
          },
          {
            path: "appointments",
            element: <Appointments />,
          },
          {
            path: "profile",
            element: <div>profile</div>,
          },
          {
            path: "reviews",
            element: <Reviews />,
          },
          {
            path: "invoices",
            element: <Invoices />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "doctor-dashboard",
            element: <DashBoardDR />,
          },
        ],
      },
    ],
  },
]);
