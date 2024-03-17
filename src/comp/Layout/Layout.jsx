import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../navbar/NavBar.jsx";
import { NavbarWithMegaMenu } from "../navbar/Navbar-doctor.jsx";
import { NavbarPatient } from "../navbar/NavbarPatient.jsx";

export default function Layout() {
  return (
    <>
      <StickyNavbar />
      {/* <NavbarWithMegaMenu /> */}
      <NavbarPatient />

      <Outlet />
    </>
  );
}
