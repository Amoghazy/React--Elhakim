import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Button, CardFooter, Typography } from "@material-tailwind/react";
export default function MYPAtient() {
  const [patients, setPatients] = useState([]);
  const doctorId = "1"; // Replace 123 with the specific doctor's ID
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const numPages = limit > 0 ? Math.ceil(patients.length / limit) : 1;
  const indexOfLastItem = page * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const currentItems = patients.slice(indexOfFirstItem, indexOfLastItem);
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        // Fetch appointments for the specific doctor
        const appointmentsResponse = await axios.get(
          "http://localhost:1563/appointments",
          {
            params: {
              doctorId: doctorId,
            },
          }
        );

        // Extract patient IDs from appointments
        const patientIds = appointmentsResponse.data.map(
          (appointment) => appointment.patientId
        );

        // Fetch patients with IDs matching those in the appointments
        const patientsResponse = await axios.get(
          "http://localhost:1563/patients",
          {
            params: {
              id: patientIds,
            },
          }
        );
        const today = new Date();
        const updatedPatients = patientsResponse.data.map((patient) => {
          const dob = new Date(patient.dateOfBirth);
          let age = today.getFullYear() - dob.getFullYear();
          const monthDiff = today.getMonth() - dob.getMonth();
          if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < dob.getDate())
          ) {
            age--;
          }
          return { ...patient, age: age };
        });

        setPatients(updatedPatients);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPatients();
  }, [doctorId]);
  return (
    <div>
      <div className="grid w-full grid-cols-1 gap-3 p-5 pt-1 sm:grid-cols-2 lg:grid-cols-4">
        {currentItems.map((item, index) => (
          <div
            className="p-5 border-2 border-gray-200 rounded-md shadow-md"
            key={index}
          >
            <div className="border-b-2 border-b-gray-200 pb-7">
              <div className="w-[120px] mx-auto pt-10 border-b-1 border-gray-600 pb-3">
                <img
                  src={item.image}
                  className="w-[120px] h-[120px]  rounded-full  ring-[15px] ring-gray-200"
                />
              </div>
              <h1 className="pt-5 pb-2 font-semibold tracking-widest text-center">
                {item.name}
              </h1>
              <h2 className="font-semibold text-center text-gray-600">
                Patient ID : <span className="font-normal">{item.id}</span>
              </h2>
              <h3 className="text-center text-gray-600">
                <FontAwesomeIcon icon={faLocationDot} className="pr-2" />
                {item.address}
              </h3>
            </div>
            <h3 className="flex justify-between p-5">
              <span>Phone</span>
              <span className="text-gray-600">+20 {item.mobile}</span>
            </h3>
            <h3 className="flex justify-between p-5 pt-0">
              <span>Age</span>
              <span className="text-gray-600">
                {item.age} Years, {item.gender}
              </span>
            </h3>
            <h3 className="flex justify-between p-5 pt-0">
              <span>Blood Group</span>
              <span className="text-gray-600">{item.bloodGroup}</span>
            </h3>
          </div>
        ))}
      </div>
      <CardFooter className="flex items-center justify-between p-4 transition-all duration-1000 border-t border-blue-gray-50">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {page} of {numPages}
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            size="sm"
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              } else {
                setPage(1);
              }
            }}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            size="sm"
            onClick={() => {
              if (page < numPages) {
                setPage(page + 1);
              } else {
                setPage(numPages);
              }
            }}
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </div>
  );
}
