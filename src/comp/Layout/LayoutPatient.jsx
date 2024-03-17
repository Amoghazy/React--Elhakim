import { Outlet } from "react-router-dom";
import { DefaultSidebar } from "../sideBar/SideBarDoctor";
import { Alert } from "@material-tailwind/react";
export default function LayoutPatient() {
  return (
    <>
      <Alert color="cyan" className="mb-4 rounded-none ">
        Patient
      </Alert>
      <div className="flex justify-between w-full p-7">
        <DefaultSidebar />
        <div className="w-full ps-6">
          <Outlet />
        </div>
      </div>
    </>
  );
}
