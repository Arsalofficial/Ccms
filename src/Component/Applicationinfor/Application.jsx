import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Application = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Default to today
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
    trigger,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // Watch the value of the "city" field
  const cityValue = watch("city");

  // Set default value for the "dob" field on component mount
  useEffect(() => {
    setValue("dob", selectedDate); // Set default value for "dob" field
    trigger("dob"); // Trigger validation to clear any initial errors
  }, [selectedDate, setValue, trigger]);

  const onSubmit = (data) => {
    console.log("Submitting the Form", data);
    navigate("/positionapply"); // Navigate to the next page
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md p-4 sm:p-6 md:p-8 max-w-5xl w-full mt-10 sm:mt-16 md:mt-32 rounded-3xl px-4 md:px-20">
        {/* Logo and Header */}
        <div className="text-center">
          <img src={logo} alt="logo" className="mx-auto mb-4 w-56" />
          <h1 className="text-2xl font-bold">Careers at CCMS</h1>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center items-center my-8 ">
          {[1, 2, 3, 4, 5, 6].map((step, index) => (
            <React.Fragment key={step}>
              <div
                className={`w-8 h-8 flex justify-center items-center rounded-lg  ${
                  step === 1
                    ? "bg-[#041970] text-white"
                    : "bg-gray-300 text-gray-500"
                } text-sm font-medium`}
              >
                {step}
              </div>
              {index < 5 && <div className="flex-1 h-0.5 bg-gray-300 "></div>}
            </React.Fragment>
          ))}
        </div>

        {/* Application Information */}
        <div>
          <h2 className="text-xl font-bold mb-6">
            Application Information
            <hr className="mt-4 border-t-2 border-[#D1D5DC]" />
            </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* First Name */}
            <div className="flex flex-col">
              <label className="font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "First name should only contain letters",
                  },
                })}
                type="text"
                placeholder="Enter your first name"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">
                  {errors.firstName.message}
                </span>
              )}
            </div>

            {/* Middle Name */}
            <div className="flex flex-col">
              <label className="font-medium">
                Middle Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("middleName", {
                  required: "Middle name is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Middle name should only contain letters",
                  },
                })}
                type="text"
                placeholder="Enter your middle name"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.middleName && (
                <span className="text-red-500 text-sm">
                  {errors.middleName.message}
                </span>
              )}
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label className="font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("lastName", {
                  required: "Last name is required",
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "Last name should only contain letters",
                  },
                })}
                type="text"
                placeholder="Enter your last name"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </div>

            {/* Current Address */}
            <div className="flex flex-col lg:col-span-1">
              <label className="font-medium">
                Current Address <span className="text-red-500">*</span>
              </label>
              <input
                {...register("address", { required: "Address is required" })}
                type="text"
                placeholder="Enter your full address"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.address && (
                <span className="text-red-500 text-sm">
                  {errors.address.message}
                </span>
              )}
            </div>

            {/* City */}
            <div className="flex flex-col">
              <label className="font-medium">
                City <span className="text-red-500">*</span>
              </label>
              <select
                {...register("city", { required: "City is required" })}
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm appearance-none w-full"
                onChange={handleCityChange}
              >
                <option value="">Select One</option>
                {Object.keys(stateOptions).map((city) => (
                  <option key={city} value={city}>
                    {city.charAt(0).toUpperCase() + city.slice(1)}
                  </option>
                ))}
              </select>
              {!cityValue && errors.city && ( // Show error only if cityValue is empty
                <span className="text-red-500 text-sm">
                  {errors.city.message}
                </span>
              )}
            </div>

            {/* State (Text Only) */}
            <div className="flex flex-col">
              <label className="font-medium">
                State <span className="text-red-500">*</span>
              </label>
              <select
                {...register("state", { required: "State is required" })}
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm appearance-none w-full"
              >
                <option value="">Select One</option>
                {states.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.state && (
                <span className="text-red-500 text-sm">
                  {errors.state.message}
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

            {/* Apply For Date */}
            <div className="flex flex-col">
              <label className="font-medium">
                Apply For Date <span className="text-red-500">*</span>
              </label>
              <DatePicker
                {...register("dob", { required: "Date is required" })}
                selected={selectedDate} // Controlled component
                onChange={(date) => {
                  setSelectedDate(date); // Update local state
                  setValue("dob", date); // Update form state
                  trigger("dob"); // Trigger validation
                }}
                minDate={new Date()} // Restrict past dates
                maxDate={new Date()} // Restrict future dates
                dateFormat="yyyy/MM/dd"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm w-full"
                placeholderText="Select Date"
              />
              {errors.dob && (
                <span className="text-red-500 text-sm">
                  {errors.dob.message}
                </span>
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
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Email Address */}
            <div className="flex flex-col lg:col-span-2">
              <label className="font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
                type="email"
                placeholder="Enter your email address"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="col-span-full text-start mt-8">
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

export default Application;