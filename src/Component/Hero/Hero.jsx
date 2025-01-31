import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [selectedJob, setSelectedJob] = useState(""); // State to track the selected job
  const navigate = useNavigate(); // Hook for navigation

  const handleContinue = () => {
    // Check which job is selected and navigate accordingly
    if (selectedJob === "php-laravel-developer") {
      navigate("/formphp");
    } else if (selectedJob === "caregiver-position") {
      navigate("/caregiver");
    } else if (selectedJob === "it-support-specialist") {
      navigate("/it");
    } else {
      alert("Please select a job before continuing.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md p-8 max-w-5xl w-full mt-32 rounded-3xl px-6 sm:px-12 lg:px-20">
        {/* Logo and Header */}
        <div className="flex flex-col items-center mb-12 mt-16">
          <img src={logo} alt="logo img" className="w-56 mb-2" />
          <p className="text-2xl font-bold text-center">Careers at CCMS</p>
        </div>

        {/* Body Content */}
        <div className="space-y-4">
          <p className="text-start text-[18px] text-black font-semibold">
            Thank you for your interest in CCMS employment.<br />
            We are a software build company located in Mill Creek, Washington, looking for experienced candidates in
            the following fields. Our work schedule will be hybrid: some days in the office, other days virtual. You
            may be working in the office until you finish your training.<br />
            <b>PLEASE NOTE:</b> It is important that you complete all parts of the application and click on the
            “Final Submit” button. An incomplete application may not be processed.<br />
            You will be contacted only if your application has been reviewed and invited for an interview. Your
            application may be removed from our database after 90 days.<br />
            Before you start your application, make sure you have the following information handy:<br />
            – Your current and previous work location and information<br />
            – Your resume to be uploaded.
          </p>
        </div>

       {/* Job Options */}
<div className="mt-6 bg-[#F0F0F0] p-4 rounded-lg shadow-inner w-full sm:w-2/3 lg:w-1/2">
  <form className="space-y-6 mb-8 mt-6 font-semibold px-4">
    {/* PHP Laravel Developer */}
    <label className="flex items-center">
      <input
        type="radio"
        name="job"
        value="php-laravel-developer"
        className="hidden peer"
        onChange={(e) => setSelectedJob(e.target.value)} // Update state
      />
      <span className="min-w-[20px] h-5 border-2 border-blue-600 rounded-full flex justify-center items-center peer-checked:bg-blue-600">
        <span className="w-2.5 h-2.5 bg-white rounded-full hidden peer-checked:block"></span>
      </span>
      <span className="ml-2 text-sm sm:text-base break-words">
        PHP with Laravel Developer – Job#1431
      </span>
    </label>

    {/* Caregiver Position */}
    <label className="flex items-center">
      <input
        type="radio"
        name="job"
        value="caregiver-position"
        className="hidden peer"
        onChange={(e) => setSelectedJob(e.target.value)} // Update state
      />
      <span className="min-w-[20px] h-5 border-2 border-blue-600 rounded-full flex justify-center items-center peer-checked:bg-blue-600">
        <span className="w-2.5 h-2.5 bg-white rounded-full hidden peer-checked:block"></span>
      </span>
      <span className="ml-2 text-sm sm:text-base break-words">
        Caregiver Position – Job#1430
      </span>
    </label>

    {/* IT Support Specialist */}
    <label className="flex items-center">
      <input
        type="radio"
        name="job"
        value="it-support-specialist"
        className="hidden peer"
        onChange={(e) => setSelectedJob(e.target.value)} // Update state
      />
      <span className="min-w-[20px] h-5 border-2 border-blue-600 rounded-full flex justify-center items-center peer-checked:bg-blue-600">
        <span className="w-2.5 h-2.5 bg-white rounded-full hidden peer-checked:block"></span>
      </span>
      <span className="ml-2 text-sm sm:text-base break-words">
        IT Support Specialist – Job#1429
      </span>
    </label>
  </form>
</div>
        {/* Continue Application Button */}
        <div className="mt-6 flex justify-center sm:justify-start">
          <button
            onClick={handleContinue}
            className="bg-[#3D4B9A] text-white px-6 py-3 rounded-md transition font-bold w-full sm:w-auto cursor-pointer"
          >
            Continue Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
