import React from "react";
import logo from "../../assets/logo.png";
import "../PhpForm/Form.css";
import { Link } from "react-router-dom";

const Caregiver = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md p-8 max-w-5xl w-full mt-32 rounded-3xl px-6 md:px-12 lg:px-20">
        {/* Logo and Header */}
        <div className="flex flex-col items-center mb-12 mt-16">
          <img src={logo} alt="logo" className="w-56 mb-2" />
          <p className="text-2xl font-bold">Careers at CCMS</p>
        </div>

        {/* Body Content */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Job description</h1>
          <hr className="mt-4 border-t-2 border-[#D1D5DC]" />
          <p className="text-[16px] font-medium">Care Monitoring System (CCMS) Job Opening</p>
          <p className="text-[16px] font-medium"><b>Position:</b> EMAR System Trainer & Product Collaborator</p>
          <p className="text-[16px] font-medium">
            <b>Location:</b> Mill Creek, Washington
          </p>

          <p className="pt-6 text-lg font-bold">Company Overview:</p>
          <p className="text-lg font-medium">Care Monitoring System (CCMS) is a software development company based in Mill Creek, Washington, specializing in electronic medication administration record (EMAR) systems.</p>

          <p className="text-lg font-bold">Job Description:</p>
          <p className="font-medium">We are in search of an individual who has a background as a caregiver or Med Tech with a minimum of 3 years of hands-on experience using any EMAR system. The ideal candidate should possess a solid understanding of computer systems and be equipped to demonstrate and train other caregivers or providers on our EMAR system.</p>
          
          <p className="text-lg font-bold">Compensation: $*******</p>
          <p className=""><b>Position Type:</b> Full-time or Part-time</p>

          <p className="font-bold text-lg pt-8">Responsibilities:</p>
          <p className="font-medium">
            Training providers on our EMAR system, primarily virtually via Zoom.<br />
            Occasionally visiting provider sites for on-site training as required.<br />
            Collaborating with product developers to enhance the functionality and user experience of the EMAR system.<br />
            Providing valuable feedback from training sessions to further improve the product.<br />
            Undergoing intensive training on our EMAR system to become proficient before instructing others.<br />
            Responding to caregiver inquiries via phone or email.<br />
            Assisting in the testing of new versions of our EMAR system and subsequently training others on updates.<br />
            Note: This role is predominantly office-based and does not involve direct patient care.
          </p>

          <p className="text-lg font-bold">Requirements:</p>
          <p className="font-medium">
            A minimum of 3 years of experience as a caregiver or Med Tech.<br />
            Prior experience with EMAR systems.<br />
            Fluent in English, both in speaking and writing.<br />
            Possession of a Washington driving license.<br />
            Valid work permit for the USA.<br />
            Proficiency in Microsoft Office365 applications (Excel, PowerPoint, etc.).<br />
            Eagerness to learn and understand the nuances of our EMAR system through comprehensive training.
          </p>

          <p className="pt-8 font-bold">Education:</p>
          <p className="font-medium">
            A minimum of an associate degree in any field.<br />
            Certification as a CNA, LPN, or a higher medical qualification.<br />
            Familiarity with basic Microsoft 365 applications.<br />
            Employment Type: Full-time or Part-time<br />
            Interested candidates are encouraged to apply with their updated resume and relevant credentials.<br />
            Thank you for considering a career with Care Monitoring System (CCMS). We look forward to potentially welcoming you to our team!
          </p>
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

export default Caregiver;
