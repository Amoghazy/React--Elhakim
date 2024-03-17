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
import LayoutPatient from "./comp/Layout/LayoutPatient.jsx";
import PatientDashboard from "./comp/Patient/patient-dashboard/PatientDashboard.jsx";
import ProfileSitting from "./comp/Patient/ProfileSetting/ProfileSetting.jsx";
import ChangePassword from "./comp/Patient/ChangePassword/ChangePassword.jsx";
import SerarchDR from "./comp/Patient/SearchDr/SerarchDR.jsx";

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
            path: "profile-settings",
            element: <div>profile dr</div>,
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
            path: "dashboard",
            element: <DashBoardDR />,
          },
          {
            path: "change-password",
            element: <h3>doctor change password</h3>,
          },
        ],
      },
      {
        path: "search-doctor",
        element: <SerarchDR />,
      },
      {
        path: "/patient",
        element: <LayoutPatient />,
        children: [
          {
            path: "dashboard",
            element: <PatientDashboard />,
          },

          {
            path: "profile-settings",
            element: <ProfileSitting />,
          },

          {
            path: "change-password",
            element: <ChangePassword />,
          },
        ],
      },
    ],
  },
]);
