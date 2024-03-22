/* eslint-disable react/prop-types */
import React from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({ booking, date }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="mb-4 h-35 me-2">
      <div className="p-3 bg-white rounded-sm shadow-md">
        <div className="text-center ">
          <h5 className="p-1 text-xl font-semibold text-gray-900">
            {booking.subject}
          </h5>{" "}
          <h6 className="p-1 mb-2 text-lg text-gray-700">
            {booking.visitingHour}
          </h6>
          {/* <p className="text-gray-500">{booking.totalSpace} SPACES AVAILABLE</p> */}
          <button
            onClick={openModal}
            className="px-4 py-2 font-bold text-center text-white rounded bg-cyan-300 hover:bg-blue-100"
          >
            BOOK APPOINTMENT
          </button>
          <AppointmentForm
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            appointmentSub={booking.subject}
            schedule={booking.visitingHour}
            date={date}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
