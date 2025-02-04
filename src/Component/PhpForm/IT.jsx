import React from "react";
import logo from "../../assets/logo.png";
import "../PhpForm/Form.css";
import { Link } from "react-router-dom";

const IT = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center px-4 md:px-0">
      <div className="bg-white shadow-md p-8 w-full max-w-5xl mt-8 md:mt-32 rounded-3xl px-6 md:px-20">
        {/* Logo and Header */}
        <div className="flex flex-col items-center mb-8 md:mb-12 mt-8 md:mt-16">
          <img src={logo} alt="logo" className="w-44 md:w-56 mb-2" />
          <p className="text-xl md:text-2xl font-bold">Careers at CCMS</p>
        </div>

        {/* Body Content */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            Job description
            <hr className="mt-4 border-t-2 border-[#D1D5DC]" />
          </h1>

          <p className="font-medium pt-6 text-sm md:text-base">
            Our software development company located in north Seattle, Washington is seeking an IT Support Specialist.
            The chosen candidate will be responsible for ensuring smooth operation of our software and maximizing the
            benefits that clients receive from it. In order to provide sufficient support to clients, the IT Support Specialist
            must complete a series of training sessions on our products and services.
            Candidates must be located in the Seattle, Washington area in Pacific Standard Time, and the job will be a hybrid
            position with the possibility of part-time or contract work leading to full-time work.
          </p>

          <p className="pt-6 text-lg font-bold">Responsibilities of the IT Support Specialist:</p>
          <ul className="list-circle font-medium pl-4 space-y-2">
            <li>Communicate with staff or clients to resolve issues via video conferencing, chat, or phone.</li>
            <li>Set up new user accounts and profiles and deal with login issues.</li>
            <li>Test new or revised applications to ensure an error-free version is released.</li>
            <li>Create step-by-step instruction guides for the new or revised portion of the application.</li>
            <li>Provide tech support across the company (this may be in person or over the phone) and test new</li>
            <li>Ensure seamless integration with third-party applications, managing dependencies and maintaining compatibility.</li>
            <li>Scale and refine projects in response to client feedback and evolving requirements.</li>
          </ul>

          <p className="pt-6 font-bold text-lg">Qualifications for the IT Support Specialist position:</p>
          <ul className="list-circle font-medium pl-4 space-y-2">
            <li>Set up new user accounts and profiles and deal with login issues.</li>
            <li>Test new or revised applications to ensure an error-free version is released.</li>
            <li>Create step-by-step instruction guides for the new or revised portion of the application.</li>
            <li>Ability to troubleshoot complex hardware and software issues.</li>
            <li>Some coding skills would be a plus.</li>
            <li>Scale and refine projects in response to client feedback and evolving requirements.</li>
          </ul>
        </div>

        {/* Button */}
               <div className="col-span-full flex flex-col-reverse sm:flex-row  gap-4 mt-8">
                 <Link to="/Applicationform">
                   <button 
                    className="bg-[#041970] text-white py-3 px-6 rounded-lg text-base font-medium w-full sm:w-auto cursor-pointer">
                     Continue Application
                   </button>
                 </Link>
               </div>
      </div>
    </div>
  );
};

export default IT;
