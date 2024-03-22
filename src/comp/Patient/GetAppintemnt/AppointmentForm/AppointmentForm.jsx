/* eslint-disable react/prop-types */
import "./AppointmentForm.css";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AppointmentForm = ({
  modalIsOpen,
  closeModal,
  appointmentSub,

  date,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    data.service = appointmentSub;
    data.date = date.toDateString();
    data.created = new Date();
    data.action = "pending";
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="mt-3 text-2xl text-center"> {appointmentSub} </h2>
        <p className="mb-0 text-center text-cyan-200">
          {" "}
          On {date.toDateString()}{" "}
        </p>

        <form className="w-[30rem] py-5 px-9" onSubmit={handleSubmit(onSubmit)}>
          <input
            // {...register("urname", { required: true })}
            className="bg-gray-500 form-control form-control-lg"
            type="text"
            value={appointmentSub}
            readOnly
          />

          <input
            {...register("urname", { required: true })}
            className="mt-2 form-control form-control-lg"
            type="text"
            name="urname"
            placeholder="Your Name"
          />
          {errors.urname && (
            <span className="text-red-500"> This field is required </span>
          )}
          <input
            {...register("phone", { required: true })}
            className="mt-2 form-control form-control-lg"
            type="text"
            name="phone"
            placeholder="Phone Number"
          />
          {errors.phone && (
            <span className="text-red-500"> This field is required </span>
          )}
          <input
            {...register("email", { required: true })}
            className="mt-2 mb-2 form-control form-control-lg"
            type="text"
            name="email"
            placeholder="Email "
          />
          {errors.email && (
            <span className="text-red-500"> This field is required </span>
          )}

          <div className="py-2 mb-3">
            <select
              className="form-control"
              name="schedule"
              //   ref={register({ required: true })}
              {...register("schedule", { required: true })}
            >
              <option disabled={true} value="Not Selected">
                Select Time
              </option>
              <option value="8:00 AM - 9:00 PM">8:00 AM - 9:00 PM</option>
              <option value="10:00 AM - 1:00 PM">10:00 AM - 1:00 PM</option>
              <option value="4:00 PM - 7:00 PM">4:00 PM - 7:00 PM</option>
              <option value="7:00 PM - 9:00 PM">7:00 PM - 9:00 PM</option>
              <option value="5:00 AM - 9:00 PM">5:00 AM - 9:00 PM</option>
              <option value="11:00 AM - 5:00 PM">11:00 AM - 5:00 PM</option>
            </select>
            {errors.date && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/3">
              <select
                {...register("gender", { required: true })}
                name="gender"
                className="py-2 mt-1 form-control"
                // className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                id="gender"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && (
                <span className="text-xs italic text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="w-full px-3 mb-6 md:w-1/3">
              <input
                {...register("age", { required: true })}
                type="text"
                name="age"
                className="mt-1 form-control"
                placeholder="Age"
              />
              {errors.age && (
                <span className="text-xs italic text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="w-full px-3 mb-6 md:w-1/3">
              <input
                {...register("weight", { required: true })}
                type="text"
                name="weight"
                className="mt-1 form-control"
                placeholder="Weight"
              />
              {errors.weight && (
                <span className="text-xs italic text-red-500">
                  This field is required
                </span>
              )}
            </div>
          </div>

          {errors.exampleRequired && <span>This field is required</span>}
          <div className="flex justify-end ">
            <input
              className="flex justify-end mt-2 bg-cyan-500 submit-appointement-btn"
              type="submit"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
