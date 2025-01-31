import React, { useState } from "react";
import logo from '../../assets/logo.png';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Education = () => {
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
    navigate("/criminal");
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
                  step === 1||step === 2||step === 3
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
            EDUCATION
            <hr className="mt-4" />
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* SCHOOL Name */}
            <div className="flex flex-col ">
              <label className="font-medium">
                SCHOOL NAME/LOCATION<span className="text-red-500">*</span>
              </label>
              <input
                {...register("School", {
                  required: "School name is required",
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "School name should only contain letters",
                  },
                })}
                type="text"
                placeholder="Enter your School name"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.School && (
                <span className="text-red-500 text-sm">
                  {errors.School.message}
                </span>
              )}
            </div>

            {/* MAJOR STUDIED */}
            <div className="flex flex-col ">
              <label className="font-medium">MAJOR STUDIED<span className="text-red-500">*</span></label>
              <input
                {...register("Major", {
                  required: "MAJOR STUDIED is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Major studied should only contain letters",
                  },
                })}
                type="text"
                placeholder="Enter your Major Studied"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.Major && (
                <span className="text-red-500 text-sm">
                  {errors.Major.message}
                </span>
              )}
            </div>

            {/* NO. YEARS */}
            <div className="flex flex-col ">
              <label className="font-medium">
                NO. YEARS COMPLETED<span className="text-red-500">*</span>
              </label>
              <input
                {...register("noyears", {
                  required: "no years is required",
                 
                })}
                type="text"
                placeholder="Enter your no years"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.noyears && (
                <span className="text-red-500 text-sm">
                  {errors.noyears.message}
                </span>
              )}
            </div>

            {/* Type of degree/certificate */}
            <div className="flex flex-col">
              <label className="font-medium">
                Type of degree/certificate<span className="text-red-500">*</span>
              </label>
              <input
                {...register("degree", {
                  required: "degree name is required",
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "degree name should only contain letters",
                  },
                })}
                type="text"
                placeholder="Enter your degree name"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.degree && (
                <span className="text-red-500 text-sm">
                  {errors.degree.message}
                </span>
              )}
            </div>

            {/* Proficient Computer Skills/Softwares Heading */}
            <div className="col-span-full mt-8">
              <h2 className="text-xl font-bold mb-6">
                Proficient Computer Skills/Softwares
                <hr className="mt-4" />
              </h2>
            </div>

           

             {/* Textarea for Proficient Computer Skills/Softwares */}
             <div className="flex flex-col lg:col-span-2">
              <label className="font-medium">
              List any programming skills you are proficient in (if you dont have knowledge, just put "NONE")<span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("computerSkills", {
                  required: "List any programing knowledge that you are good at is required",
                })}
                placeholder="Enter Your Skills."
                className="w-full mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
                rows={5}
              />
              {errors.computerSkills && (
                <span className="text-red-500 text-sm">
                  {errors.computerSkills.message}
                </span>
              )}
            </div>

             {/* Textarea for Proficient Computer Skills/Softwares */}
             <div className="flex flex-col lg:col-span-2">
              <label className="font-medium">
              List any programming skills you are proficient in (if you dont have knowledge, just put "NONE")<span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("Skills", {
                  required: "List any programing knowledge that you are good at is required",
                })}
                placeholder="Enter Your Skills.."
                className="w-full mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
                rows={5}
              />
              {errors.Skills && (
                <span className="text-red-500 text-sm">
                  {errors.Skills.message}
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

export default Education;