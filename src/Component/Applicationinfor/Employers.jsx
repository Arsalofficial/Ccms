import React, { useState } from "react";
import logo from '../../assets/logo.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Employers = () => {
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
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const cityValue = watch("city");

  const onSubmit = (data) => {
    console.log("Submitting the Form", data);
    navigate('/applicant'); // Navigate to the next page
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
        <div className="flex justify-center items-center my-8">
          {[1, 2, 3, 4, 5, 6].map((step, index) => (
            <React.Fragment key={step}>
              <div
                className={`w-8 h-8 flex justify-center items-center rounded-lg ${
                    step === 1||step === 2||step === 3||step === 4||step === 5
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
          EMPLOYERS 
            <hr className="mt-4" />
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* First Name */}
            <div className="flex flex-col lg:col-span-2">
              <label className="font-medium">
              Company Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("Company", {
                  required: "Company name is required",
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "Company should only contain letters",
                  },
                })}
                type="text"
                placeholder="Enter your Company name"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.Company && (
                <span className="text-red-500 text-sm">
                  {errors.Company.message}
                </span>
              )}
            </div>
            

             {/* Textarea for Proficient Computer Skills/Softwares */}
             <div className="flex flex-col lg:col-span-2">
              <label className="font-medium">
              Supervisor Name / Email (Optional)
              </label>
              <textarea
                {...register("computerSkills", {
                  required: "Supervisor Name / Email (Optional) is required",
                })}
                placeholder="Supervisor Name / Email (Optional)."
                className="w-full mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
                rows={1}
              />
              {errors.computerSkills && (
                <span className="text-red-500 text-sm">
                  {errors.computerSkills.message}
                </span>
              )}
            </div>


            {/* Address Name */}
            <div className="flex flex-col">
              <label className="font-medium">Address <span className="text-red-500">*</span></label> 
              <input
                {...register("Address", {
                    required: "Address name is required",
                 
                })}
                type="text"
                placeholder="Enter your Address name"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.Address && (
                <span className="text-red-500 text-sm">
                  {errors.Address.message}
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


            {/* City name */}
            <div className="flex flex-col">
              <label className="font-medium">
              City<span className="text-red-500">*</span>
              </label>
              <input
                {...register("CityName", {
                  required: "City name is required",
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "City name should only contain letters",
                  },
                })}
                type="text"
                placeholder="Enter your City name"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.CityName && (
                <span className="text-red-500 text-sm">
                  {errors.CityName.message}
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

          {/* Position Held */}
         <div className="flex flex-col">
              <label className="font-medium">
              Position Held <span className="text-red-500">*</span>
              </label>
              <input
                {...register("PositionHeld", {
                  required: "Position Held is required",
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "Position Held should only contain letters",
                  },
                })}
                type="text"
                placeholder="Enter your position held"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.PositionHeld && (
                <span className="text-red-500 text-sm">
                  {errors.PositionHeld.message}
                </span>
              )}
            </div>

 {/* From */}
 <div className="flex flex-col">
              <label className="font-medium">
                From <span className="text-red-500">*</span>
              </label>
              <input
                {...register("fromDate", { required: "From date is required" })}
                type="date"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.fromDate && (
                <span className="text-red-500 text-sm">{errors.fromDate.message}</span>
              )}
            </div>

            {/* To */}
            <div className="flex flex-col">
              <label className="font-medium">
                To <span className="text-red-500">*</span>
              </label>
              <input
                {...register("toDate", { required: "To date is required" })}
                type="date"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.toDate && (
                <span className="text-red-500 text-sm">{errors.toDate.message}</span>
              )}
            </div>

            {/* Company 1 Heading */}
            <div className="col-span-full mt-8">
              <h2 className="text-xl font-bold mb-6">
                Company 1
                <hr className="mt-4" />
              </h2>
            </div>
{/*  Name */}
<div className="flex flex-col">
              <label className="font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("namerefernce", {
                  required: "Name refernce is required",
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "Name should only contain letters",
                  },
                })}
                type="text"
                placeholder="Enter your first refernce"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.namerefernce && (
                <span className="text-red-500 text-sm">
                  {errors.namerefernce.message}
                </span>
              )}
            </div>
 {/* Address Name */}
 <div className="flex flex-col">
              <label className="font-medium">Address <span className="text-red-500">*</span></label> 
              <input
                {...register("Addresscompany", {
                    required: "Address name is required",
                  
                })}
                type="text"
                placeholder="Enter your Address name"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.Addresscompany && (
                <span className="text-red-500 text-sm">
                  {errors.Addresscompany.message}
                </span>
              )}
            </div>
{/* Phone Number */}
<div className="flex flex-col ">
              <label className="font-medium">
               Telephone <span className="text-red-500">*</span>
              </label>
              <input
                {...register("telephonecompany", {
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
              {errors.telephonecompany && (
                <span className="text-red-500 text-sm">{errors.telephonecompany.message}</span>
              )}
            </div>

            {/* Occupation Name */}
            <div className="flex flex-col">
              <label className="font-medium">Occupation <span className="text-red-500">*</span></label> 
              <input
                {...register("occupation", {
                    required: "occupation name is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "occupation name should only contain letters",
                  },
                })}
                type="text"
                placeholder="Enter your occupation name"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.occupation && (
                <span className="text-red-500 text-sm">
                  {errors.occupation.message}
                </span>
              )}
            </div>

  
            {/* Company 1 Heading */}
            <div className="col-span-full mt-8">
              <h2 className="text-xl font-bold mb-6">
                Company 2
                <hr className="mt-4" />
              </h2>
            </div>
{/*  Name */}
<div className="flex flex-col">
              <label className="font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("namereferncec", {
                  required: "Name refernce is required",
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "Name should only contain letters",
                  },
                })}
                type="text"
                placeholder="Enter your first refernce"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.namereferncec && (
                <span className="text-red-500 text-sm">
                  {errors.namereferncec.message}
                </span>
              )}
            </div>
 {/* Address Name */}
 <div className="flex flex-col">
              <label className="font-medium">Address <span className="text-red-500">*</span></label> 
              <input
                {...register("Addresscompanyc", {
                    required: "Address name is required",
                 
                })}
                type="text"
                placeholder="Enter your Address name"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.Addresscompanyc && (
                <span className="text-red-500 text-sm">
                  {errors.Addresscompanyc.message}
                </span>
              )}
            </div>
{/* Phone Number */}
<div className="flex flex-col ">
              <label className="font-medium">
               Telephone <span className="text-red-500">*</span>
              </label>
              <input
                {...register("telephonecompanyc", {
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
              {errors.telephonecompanyc && (
                <span className="text-red-500 text-sm">{errors.telephonecompanyc.message}</span>
              )}
            </div>

            {/* Occupation Name */}
            <div className="flex flex-col">
              <label className="font-medium">Occupation <span className="text-red-500">*</span></label> 
              <input
                {...register("occupationc", {
                    required: "occupation name is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "occupation name should only contain letters",
                  },
                })}
                type="text"
                placeholder="Enter your occupation name"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.occupationc && (
                <span className="text-red-500 text-sm">
                  {errors.occupationc.message}
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

export default Employers;