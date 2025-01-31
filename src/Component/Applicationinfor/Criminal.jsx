import React, { useState } from "react";
import logo from '../../assets/logo.png';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Criminal = () => {
 
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
 

  function onSubmit(data) {
    console.log("Submitting the Form", data);
    navigate("/employer");
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
                  step === 1||step === 2||step === 3||step === 4
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
          Criminal History
            <hr className="mt-4" />
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
             <div className="flex flex-col col-span-2">
              <label className="font-medium">
                Have you ever been convicted of a criminal offense? 
                <span className="text-red-500"> *</span>
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
              {/* Buttons */}
           <div className="col-span-full flex flex-col sm:flex-row gap-5 mt-8">
             {/* Back Button */}
             <Link to="/education" className="sm:order-1">
               <button
                 type="button"
                 className="bg-[#61CE70] text-gray-100 py-3 px-6 rounded-md font-medium w-full sm:w-auto"
               >
                 Back
               </button>
             </Link>
           
             {/* Continue Application Button */}
             <button
               type="submit"
               className="bg-[#041970] text-white py-3 px-6 rounded-lg text-base font-medium w-full sm:w-auto sm:order-0"
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

export default Criminal;