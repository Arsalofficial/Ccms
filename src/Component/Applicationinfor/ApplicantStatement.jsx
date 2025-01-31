import React, { useState } from "react";
import logo from '../../assets/logo.png';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Statement = () => {
 
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

 

  function onSubmit(data) {
    console.log("Submitting the Form", data);
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
                  step === 1||step === 2||step === 3||step === 4||step === 5||step === 6
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
        <h2 className="text-lg font-bold mb-6">
            Applicant Statement
            <hr className="mt-4" />
          </h2>
          <p className="font-bold text-[15px] mb-4">
            I certify that this employment application was completed by me and
            that all of the information on this application is true and correct
            to the best of my knowledge. I understand that any falsification,
            misrepresentation, or omission of facts called for herein will
            result in my disqualification from further consideration or
            dismissal from employment if I am hired.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
          >
            <div className="flex flex-col col-span-1">
              <label className="font-medium">
                Print Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("PrintName", {
                  required: "Print Name is required",
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "Only text is allowed, no numbers ",
                  },
                })}
                type="text"
                placeholder="Enter your Print Name"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.PrintName && (
                <span className="text-red-500 text-sm">
                  {errors.PrintName.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="font-medium">
                Signature Date <span className="text-red-500">*</span>
              </label>
              <input
                {...register("Signature", { required: "Signature  date is required" })}
                type="date"
                className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm"
              />
              {errors.Signature && (
                <span className="text-red-500 text-sm">
                  {errors.Signature.message}
                </span>
              )}
            </div>

            <div className="flex flex-col col-span-full">
              <label className="font-medium">
                Attach Resume <span className="text-red-500">*</span>
              </label>
              <input
                {...register("file", {
                  required: "File is required",
                })}
                type="file"
                accept=".png, .jpg, .jpeg, .pdf"
                className="mt-1 focus:outline-none hover:border border-blue-500 px-4 py-6 text-sm"
              />
              {errors.file && (
                <span className="text-red-500 text-sm">
                  {errors.file.message}
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

export default Statement;