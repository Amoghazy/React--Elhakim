import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
export default function ChangePasswordDr() {
  const [doctor, setDoctor] = useState({});
  const doctorId = "1";
  async function changePassword(values) {
    let { data } = await axios.put(
      `http://localhost:1563/doctors/${doctorId}`,
      {
        ...doctor,
        ...values,
      }
    );
    console.log(data);
  }
  const validationSchema = Yup.object({
    oldPassword: Yup.string()
      .matches(/^[A-Z][a-z0-9]{3,8}$/, "invalid password")
      .required("required"),

    newPassword: Yup.string()
      .matches(/^[A-Z][a-z0-9]{3,8}$/, "invalid password")
      .required("required"),
  });
  let formData = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema,
    onSubmit: changePassword,
  });
  return (
    <div className="p-5 ml-2 mr-2 border-2 border-gray-200 rounded shadow-md">
      <form onSubmit={formData.handleSubmit}>
        <div className="grid grid-cols-2 gap-8 pt-5 pb-5">
          <div className="w-full">
            <label className="block mb-2">
              old Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="oldPassword"
              className="block w-full p-2 pt-3 pb-3 border-2 border-gray-500 rounded outline-none "
            />
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-2 gap-8 pt-5 pb-5">
          <div className="w-full">
            <label className="block mb-2">
              new password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="newPassword"
              className="block w-full p-2 pt-3 pb-3 border-2 border-gray-500 rounded outline-none "
            />
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-2 gap-8 pt-5 pb-5">
          <div className="w-full">
            <label className="block mb-2">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="CPassword"
              className="block w-full p-2 pt-3 pb-3 border-2 border-gray-500 rounded outline-none "
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 pt-5 pb-5">
          <div>
            <button
              className="p-2 pt-3 pb-3 text-white bg-green-500 rounded outline-none"
              type="submit"
            >
              Save changes
            </button>
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
}
