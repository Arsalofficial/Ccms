import React, { useState } from "react";
import logo from '../../assets/logo.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const  PositionApply = () => {
  const [selectedDate, setSelectedDate] = useState(null); // Default to today
  const [states, setStates] = useState([]);

  const stateOptions = {
    pakistan: ["Punjab", "Sindh", "KPK", "Balochistan"],
    india: ["Delhi", "Maharashtra", "Punjab", "Tamil Nadu"],
    albama: ["Birmingham", "Montgomery", "Huntsville", "Mobile"],
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setStates(stateOptions[selectedCity] || []);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
 

  function onSubmit(data) {
    console.log("Submitting the Form", data);
    navigate("/education");
  }

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md p-4 sm:p-6 md:p-8 max-w-5xl w-full mt-10 sm:mt-16 md:mt-32 rounded-3xl px-4 md:px-20">
        {/* Logo and Header */}
        <div className="text-center">
          <img src={logo} alt="logo" className="mx-auto mb-4 w-56" />
          <h1 className="text-2xl font-bold">Careers at CCMS</h1>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center items-center my-8">
          {[1, 2, 3, 4, 5, 6].map((step, index) => (
            <React.Fragment key={step}>
              <div
                className={`w-8 h-8 flex justify-center items-center rounded-lg ${
                  step === 1||step===2
                    ? "bg-[#041970] text-white"
                    : "bg-gray-300 text-gray-500"
                } text-sm font-medium`}
              >
                {step}
              </div>
              {index < 5 && <div className="flex-1 h-0.5 bg-gray-300"></div>}
            </React.Fragment>
          ))}
        </div>

        {/* Application Information */}
        <div>
          <h2 className="text-xl font-bold mb-6">
          Position Apply For
            <hr className="mt-4" />
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* Work Desired  */}
            <div className="flex flex-col lg:col-span-2">
              <label className="font-medium">
                Types of work Desired
              </label>
              <div className="relative">
                <select
                  {...register("statework", { required: "Work is required" })}
                  className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm appearance-none w-full"
                >
                  <option value="">Select One</option>
                  <option value="Yes">Full Time</option>
                  <option value="No">Part Time</option>
                  <option value="No">Remote</option>

                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  ▼
                </div>
              </div>
              {errors.statework && (
                <span className="text-red-500 text-sm">{errors.statework.message}</span>
              )}
            </div>

            {/* Emergency Notify */}
            <div className="flex flex-col lg:col-span-2">
              <label className="font-medium">In Case of Emergency Notify<span className="text-red-500">*</span></label> 
              <input
                {...register("emergencynotify", {
                    required: "Emergency Notify is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Emergency Notify should only contain letters",
                  },
                })}
                type="text"
                placeholder="Enter your Emergency Notify"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.emergencynotify && (
                <span className="text-red-500 text-sm">
                  {errors.emergencynotify.message}
                </span>
              )}
            </div>

            <div className="flex flex-col lg:col-span-full">
              <label className="font-medium">
              If hired, can you provide evidence that you are authorized and of legal age to work                 <span className="text-red-500"> *</span>
              </label>
              <div className="relative">
                <select
                  {...register("state", { required: "State is required" })}
                  className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm appearance-none w-full"
                >
                  <option value="">Select One</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  ▼
                </div>
              </div>
              {errors.state && (
                <span className="text-red-500 text-sm">{errors.state.message}</span>
              )}
            </div>

           

            {/* Phone Number */}
            <div className="flex flex-col ">
              <label className="font-medium">
               Telephone <span className="text-red-500">*</span>
              </label>
              <input
                {...register("telephone", {
                  required: "Telephone number is required",
                  pattern: {
                    value: /^(03[0-9]{2})[0-9]{7}$/,
                    message: "Enter a valid 11-digit telephone number (e.g., 03X-XXXXXXXX)",
                  },
                })}
                type="text"
                placeholder="03X-XXXXXXXX"
                maxLength="11"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.telephone && (
                <span className="text-red-500 text-sm">{errors.telephone.message}</span>
              )}
            </div>

            {/* Emergency Contact */}
            <div className="flex flex-col">
              <label className="font-medium">
              Emergency Contact Person<span className="text-red-500">*</span>
              </label>
              <input
                {...register("emergencycontact", {
                  required: "Emergency Contact is required",
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "Emergency Contact should only contain letters",
                  },
                })}
                type="text"
                placeholder="Enter your Emergency Contact"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.emergencycontact && (
                <span className="text-red-500 text-sm">
                  {errors.emergencycontact.message}
                </span>
              )}
            </div>

            {/* Nearest Relative  */}
            <div className="flex flex-col">
              <label className="font-medium">
              Name of Nearest Relative <span className="text-red-500">*</span>
              </label>
              <input
                {...register("nearest", {
                  required: "Nearest Relative  is required",
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "Nearest Relative  should only contain letters",
                  },
                })}
                type="text"
                placeholder="Enter your Nearest Relative "
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.nearest  && (
                <span className="text-red-500 text-sm">
                  {errors.nearest.message}
                </span>
              )}
            </div>

            {/* Zip Code */}
            <div className="flex flex-col">
              <label className="font-medium">
                Zip Code <span className="text-red-500">*</span>
              </label>
              <input
                {...register("zip", {
                  required: "Zip code is required",
                  pattern: {
                    value: /^[0-9]{5}$/,
                    message: "Enter a valid 5-digit zip code",
                  },
                })}
                type="number"
                placeholder="Enter your zip code"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.zip && (
                <span className="text-red-500 text-sm">{errors.zip.message}</span>
              )}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col lg:col-span-2">
              <label className="font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^(03[0-9]{2})[0-9]{7}$/,
                    message: "Enter a valid 11-digit phone number (e.g., 03X-XXXXXXXX)",
                  },
                })}
                type="text"
                placeholder="03X-XXXXXXXX"
                maxLength="11"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone.message}</span>
              )}
            </div>

             {/* Address of nearest relative person */}
             <div className="flex flex-col lg:col-span-2">
              <label className="font-medium">
              Address of nearest relative person<span className="text-red-500">*</span>
              </label>
              <input
                {...register("person", {
                  required: "Address of nearest relative person is required",
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "Address of nearest relative person should only contain letters",
                  },
                })}
                type="text"
                placeholder="Enter your Address of nearest relative person"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.person && (
                <span className="text-red-500 text-sm">
                  {errors.person.message}
                </span>
              )}
            </div>

        
 {/* Buttons */}
<div className="col-span-full flex flex-col-reverse sm:flex-row  gap-4 mt-8">
  {/* Back Button */}
  <Link to="/Applicationform" className="w-full sm:w-auto">
    <button
      type="button"
      className="bg-[#61CE70] text-gray-100 py-3 px-6 rounded-md font-medium w-full cursor-pointer"
    >
      Back
    </button>
  </Link>

  {/* Continue Application Button */}
  <button
    type="submit"
    className="bg-[#041970] text-white py-3 px-6 rounded-lg text-base font-medium w-full sm:w-auto cursor-pointer"
  >
    Continue Application
  </button>
</div>
          </form> 
        </div>
      </div>
    </div>
  );
};

export default  PositionApply;