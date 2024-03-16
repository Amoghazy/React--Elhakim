import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../navbar/NavBar.jsx";

export default function Layout() {
  return (
    <>
    <StickyNavbar />
      <Outlet />
    </>
  );
}
