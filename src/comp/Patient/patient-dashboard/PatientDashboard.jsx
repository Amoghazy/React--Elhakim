/* eslint-disable react/prop-types */
import { useState } from "react";
import { useGetAllAppointementsPatientQuery } from "../../../ReduxTK/api/appointement-api.js";
import Spinner from "../../Spinner.jsx";
import Modal from "react-modal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PatientDashboard = () => {
  const [currentItem, setCurrentItem] = useState({});
  const [activeTab, setActiveTab] = useState("appointments");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  Modal.setAppElement("#root");
  const TabContent = ({ children }) => {
    return <div className="py-4">{children}</div>;
  };
  const user_id = sessionStorage.getItem("id_user");
  console.log(user_id);
  const { data, isLoading, isSuccess } =
    useGetAllAppointementsPatientQuery(user_id);
  if (isLoading) return <Spinner />;
  if (isSuccess) {
    console.log(data.data.data);
  }

  const appointmentsarr = data.data.data;
  const Prescriptionsarr = [1, 2, 3, 4];
  const MedicalRecordsarr = [1, 2, 3, 4, 5];
  const Billingarr = [1, 2, 3, 4];

  return (
    <div className="container mx-auto">
      <h1 className="mb-6 text-3xl font-semibold">Patient Dashboard</h1>
      <div className="my-6 bg-white rounded shadow-md">
        {/* Tab Menu */}
        <ul className="flex border-b">
          <li className="mr-1 -mb-px">
            <button
              className={`bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold ${
                activeTab === "appointments" ? "border-b-0" : ""
              }`}
              onClick={() => setActiveTab("appointments")}
            >
              Appointments
            </button>
          </li>
          <li className="mr-1">
            <button
              className={`bg-white inline-block border-l border-t border-r rounded-t  py-2 px-4 text-blue-500 font-semibold ${
                activeTab === "prescriptions" ? "border-b-0" : ""
              }`}
              onClick={() => setActiveTab("prescriptions")}
            >
              Prescriptions
            </button>
          </li>
          <li className="mr-1">
            <button
              className={`bg-white inline-block border-l border-t border-r rounded-t  py-2 px-4 text-blue-500 font-semibold ${
                activeTab === "medicalRecords" ? "border-b-0" : ""
              }`}
              onClick={() => setActiveTab("medicalRecords")}
            >
              Medical Records
            </button>
          </li>
          <li className="mr-1">
            <button
              className={`bg-white inline-block border-l border-t border-r rounded-t  py-2 px-4 text-blue-500 font-semibold ${
                activeTab === "billing" ? "border-b-0" : ""
              }`}
              onClick={() => setActiveTab("billing")}
            >
              Billing
            </button>
          </li>
        </ul>

        {/* Tab Contents */}
        <div className="p-6">
          {activeTab === "appointments" && (
            <TabContent>
              <h2 className="mb-4 text-xl font-semibold">Appointments</h2>
              {/* Appointment Table */}
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="font-semibold text-center text-white uppercase bg-blue-600 text-s">
                    <th className="py-3 pr-5 border-b border-gray-200">
                      Doctor
                    </th>
                    <th className="py-3 pr-5 border-b border-gray-200">
                      Appt Date
                    </th>
                    <th className="py-3 pr-5 border-b border-gray-200">
                      Booking Date
                    </th>
                    <th className="py-3 pr-5 border-b border-gray-200">
                      Amount
                    </th>
                    <th className="py-3 pr-5 border-b border-gray-200">
                      Status
                    </th>
                    <th className="py-3 pr-5 border-b border-gray-200"></th>
                  </tr>
                </thead>
                <tbody className="content-center text-gray-700">
                  {appointmentsarr.map((item) => (
                    <tr key={item} className="">
                      <td className="py-3 pl-5 border-b border-gray-200">
                        <h2 className="flex items-center">
                          <a
                            href="doctor-profile.html"
                            className="mr-2 avatar avatar-sm"
                          >
                            <img
                              className="w-10 h-10 rounded-full"
                              src={`http://localhost:3000/upload/${item.doctor.photo}`}
                              alt="User Image"
                            />
                          </a>
                          <a
                            href="doctor-profile.html"
                            className="text-blue-500"
                          >
                            Dr. {item.doctor.name}
                            <span className="block text-gray-500 ">Dental</span>
                          </a>
                        </h2>
                      </td>
                      <td className="py-3 pl-4 border-b border-gray-200">
                        {item.date}
                      </td>
                      <td className="py-3 pl-4 border-b border-gray-200">
                        {item.createdAt.split("T")[0]}
                      </td>
                      <td className="py-3 pl-4 border-b border-gray-200">
                        {item.doctor.price}EGP
                      </td>

                      <td className="py-3 pl-4 border-b border-gray-200">
                        {item.status == "pending" ? (
                          <span className="px-2 py-1 text-white bg-yellow-700 rounded badge">
                            {item.status}
                          </span>
                        ) : item.status == "confirmed" ? (
                          <span className="px-2 py-1 text-white bg-green-300 rounded badge">
                            {item.status}
                          </span>
                        ) : (
                          <span className="px-2 py-1 text-white bg-red-500 rounded badge">
                            {item.status}
                          </span>
                        )}
                      </td>

                      <td className="py-3 pl-4 text-right border-b border-gray-200">
                        <div className="flex">
                          <span
                            onClick={() => {
                              setModalIsOpen(true);
                              setCurrentItem(item);
                            }}
                            className="px-2 py-1 text-green-900 bg-green-100 rounded btn"
                          >
                            <i className="far fa-eye"></i> View
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TabContent>
          )}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
              content: {
                width: "400px",
                top: "15%",
                left: "35%",
                bottom: "30%",
                borderRadius: "15px",
              },
            }}
          >
            <div className="flex items-center justify-between p-2 pt-3 pb-5 border-b-2 border-gray-500">
              <h1 className="text-2xl font-semibold">Appointment Details</h1>
              <button
                onClick={() => setModalIsOpen(false)}
                className="w-8 h-8 text-2xl font-extrabold text-white bg-gray-500 rounded-full"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="pt-5 pb-5">
              <div className="flex justify-between">
                <h1 className="text-lg"># APT {currentItem._id} </h1>
                <button
                  disabled
                  className="p-1 pl-4 pr-4 text-green-500 bg-green-100 rounded-xl"
                ></button>
              </div>
              <h1 className="text-lg text-gray-700"></h1>
              <h1 className="text-lg">Status : {currentItem.status}</h1>
              <h1 className="text-lg text-gray-700"></h1>

              <h1 className="text-lg text-gray-700"></h1>
              <h1 className="text-lg">Service : {currentItem.service}</h1>
              <h1 className="text-lg text-gray-700">
                DateAppt : {currentItem.date}
              </h1>
            </div>
          </Modal>
          {activeTab === "prescriptions" && (
            <TabContent>
              <h2 className="mb-4 text-xl font-semibold">Prescriptions</h2>
              {/* Prescription Table */}
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="font-semibold text-white uppercase bg-blue-600 text-s">
                    <th className="py-3 pr-5 border-b border-gray-200">Date</th>
                    <th className="py-3 pr-5 border-b border-gray-200">Name</th>
                    <th className="py-3 pr-5 border-b border-gray-200">
                      Created By
                    </th>
                    <th className="py-3 pr-5 border-b border-gray-200"></th>
                  </tr>
                </thead>
                <tbody className="text-center text-gray-700">
                  {Prescriptionsarr.map((item) => (
                    <tr key={item} className="text-center">
                      <td className="py-3">14 Nov 2019</td>
                      <td className="py-3">Prescription 1</td>
                      <td className="py-3">
                        <div className="flex items-center text-center ">
                          <a
                            href="doctor-profile.html"
                            className="mr-2 avatar avatar-sm"
                          >
                            <img
                              className="w-10 h-10 rounded-full "
                              src="../assets/img/doctors/doctor-thumb-01.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a href="doctor-profile.html">
                            Dr. Ruby Perrin{" "}
                            <span className="block text-sm text-gray-500">
                              Dental
                            </span>
                          </a>
                        </div>
                      </td>
                      <td className="py-3 pl-4 text-center border-b border-gray-200">
                        <div className="flex">
                          <a
                            href="javascript:void(0);"
                            className="px-2 py-1 mr-2 text-blue-900 bg-blue-100 rounded btn"
                          >
                            <i className="fas fa-print"></i> Print
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="px-2 py-1 text-green-900 bg-green-100 rounded btn"
                          >
                            <i className="far fa-eye"></i> View
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {/* Populate with prescription data */}
                </tbody>
              </table>
            </TabContent>
          )}

          {activeTab === "medicalRecords" && (
            <TabContent>
              <h2 className="mb-4 text-xl font-semibold">Medical Records</h2>
              {/* Medical Records Table */}
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="font-semibold text-white uppercase bg-blue-600 text-s">
                    <th className="py-3 pr-5 border-b border-gray-200">ID</th>
                    <th className="py-3 pr-5 border-b border-gray-200">Date</th>
                    <th className="py-3 pr-5 border-b border-gray-200">
                      Description
                    </th>
                    <th className="py-3 pr-5 border-b border-gray-200">
                      Attachment
                    </th>
                    <th className="py-3 pr-5 border-b border-gray-200">
                      Created
                    </th>
                    <th className="py-3 pr-5 border-b border-gray-200"></th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {MedicalRecordsarr.map((item) => (
                    <tr key={item} className="text-center">
                      <td className="py-3">
                        <a href="javascript:void(0);" className="text-blue-500">
                          #MR-0010
                        </a>
                      </td>
                      <td className="py-3">14 Nov 2019</td>
                      <td className="py-3">Dental Filling</td>
                      <td className="py-3">
                        <a href="#" className="text-blue-500">
                          dental-test.pdf
                        </a>
                      </td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <a
                            href="doctor-profile.html"
                            className="mr-2 avatar avatar-sm"
                          >
                            <img
                              className="w-10 h-10 rounded-full avatar-img"
                              src="../assets/img/doctors/doctor-thumb-01.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a href="doctor-profile.html">
                            Dr. Ruby Perrin{" "}
                            <span className="block text-sm text-gray-500">
                              Dental
                            </span>
                          </a>
                        </div>
                      </td>
                      <td className="py-3 pl-4 text-center border-b border-gray-200">
                        <div className="flex">
                          <a
                            href="javascript:void(0);"
                            className="px-2 py-1 mr-2 text-blue-900 bg-blue-100 rounded btn"
                          >
                            <i className="fas fa-print"></i> Print
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="px-2 py-1 text-green-900 bg-green-100 rounded btn"
                          >
                            <i className="far fa-eye"></i> View
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {/* Populate with medical records data */}
                </tbody>
              </table>
            </TabContent>
          )}

          {activeTab === "billing" && (
            <TabContent>
              <h2 className="mb-4 text-xl font-semibold">Billing</h2>
              {/* Billing Table */}
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="font-semibold text-center bg-blue-600 text-whiteuppercase text-s">
                    <th className="py-3 pr-5 border-b border-gray-200">
                      Invoice No
                    </th>
                    <th className="py-3 pr-5 border-b border-gray-200">
                      Doctor
                    </th>
                    <th className="py-3 pr-5 border-b border-gray-200">
                      Amount
                    </th>
                    <th className="py-3 pr-5 border-b border-gray-200">
                      Paid On
                    </th>
                    <th className="py-3 pr-5 border-b border-gray-200"></th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {Billingarr.map((item) => (
                    <tr key={item} className="text-center">
                      <td className="py-3">
                        <a href="invoice-view.html" className="text-blue-500">
                          #INV-0010
                        </a>
                      </td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <a
                            href="doctor-profile.html"
                            className="mr-2 avatar avatar-sm"
                          >
                            <img
                              className="w-10 h-10 rounded-full avatar-img"
                              src="../assets/img/doctors/doctor-thumb-01.jpg"
                              alt="User Image"
                            />
                          </a>
                          <div>
                            <h2 className="text-sm font-medium">Ruby Perrin</h2>
                            <span className="text-sm text-gray-500">
                              Dental
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3">$450</td>
                      <td className="py-3">14 Nov 2019</td>
                      <td className="py-3 pl-4 text-center border-b border-gray-200">
                        <div className="flex">
                          <a
                            href="javascript:void(0);"
                            className="px-2 py-1 mr-2 text-blue-900 bg-blue-100 rounded btn"
                          >
                            <i className="fas fa-print"></i> Print
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="px-2 py-1 text-green-900 bg-green-100 rounded btn"
                          >
                            <i className="far fa-eye"></i> View
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TabContent>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
