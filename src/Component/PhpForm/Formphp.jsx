import React from "react";
import logo from "../../assets/logo.png";
import "../PhpForm/Form.css";
import { Link } from "react-router-dom";

const FormPhp = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md p-8 max-w-5xl w-full mt-16 md:mt-32 rounded-3xl px-4 sm:px-8 md:px-20">
        {/* Logo and Header */}
        <div className="flex flex-col items-center mb-12 mt-16">
          <img src={logo} alt="logo" className="w-48 sm:w-56 mb-2" />
          <p className="text-xl sm:text-2xl font-bold">Careers at CCMS</p>
        </div>

        {/* Body Content */}
        <div className="space-y-4 md:space-y-6">
          <p className="text-md sm:text-md font-bold">You are Applying for</p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            PHP with Laravel Developer – Job#1431
            <hr className="mt-4 border-t-2 border-[#D1D5DC]" />
          </h1>
          <p className="text-md sm:text-md font-bold">Job description</p>
          <p className="text-md sm:text-md font-bold">PHP with Laravel Developer</p>
          <p className="text-sm sm:text-md md:text-lg font-semibold">
            At <b>Computerized Care Monitoring System (CCMS),</b> a software
            development company located in Millcreek, WA, we are seeking a
            skilled Laravel developer with PHP expertise to join our team. This
            position involves maintaining and enhancing our existing
            application, creating new modules, and optimizing our project built
            in Laravel and PHP. The ideal candidate will have both front-end
            and back-end experience within the Laravel framework, along with a
            strong command of PHP and SQL. Knowledge of cloud technologies is
            essential, as is experience with version control (Git) and CI/CD
            deployment tools. Candidates should have excellent problem-solving
            abilities, be capable of debugging and resolving issues
            efficiently, and deliver complete, high-quality solutions within
            tight timeframes. This is a hybrid role that includes both virtual
            work and in-office requirements.
          </p>
          <p className="pt-6 text-lg md:text-xl font-bold">Responsibilities</p>
          <ul className="list-disc pl-4 space-y-2 text-md sm:text-md md:text-lg font-semibold">
            <li>
              Maintain, optimize, and troubleshoot existing web applications
              developed in Laravel, ensuring high performance and scalability.
            </li>
            <li>
              Implement and manage Stripe payment processing, ensuring secure
              and efficient transaction handling within the application.
            </li>
            <li>
              Debug and resolve implementation issues effectively, ensuring
              timely project updates and release.
            </li>
            <li>
              Collaborate closely with other developers to support seamless
              application development and integration.
            </li>
            <li>
              Conduct thorough testing of both user-facing and backend
              functionality to ensure optimal performance and user experience.
            </li>
            <li>
              Ensure seamless integration with third-party applications,
              managing dependencies and maintaining compatibility.
            </li>
            <li>
              Scale and refine projects in response to client feedback and
              evolving requirements.
            </li>
            <li>
              Record and report work completed in Laravel, documenting processes
              for team visibility and project tracking.
            </li>
            <li>
              Utilize Bitbucket for version control, code management, and
              collaborative development within the team.
            </li>
            <li>
              Present project updates and completed work in meetings with
              clients and internal stakeholders to align on progress and
              expectations.
            </li>
          </ul>
          <p className="pt-6 text-lg md:text-xl font-bold">Requirements:</p>
          <ul className="list-disc pl-4 space-y-2 text-md font-semibold sm:text-md md:text-lg">
            <li>A degree in computer science or a related technical field.</li>
            <li>
              Proven experience with Laravel and PHP, including unit testing and
              managing APIs such as RESTful services.
            </li>
            <li>Experience with Stripe payment processing integration.</li>
            <li>
              Strong understanding of application design principles,
              specifically within the Laravel framework.
            </li>
            <li>
              Ability to work collaboratively with designers and developers to
              deliver cohesive applications.
            </li>
            <li>
              Proficient in SQL for database design and querying, ensuring
              efficient data management.
            </li>
            <li>
              Solid knowledge of HTML, JavaScript, and experience with front-end
              technologies.
            </li>
            <li>
              Practical experience in implementing the MVC architecture for
              scalable, maintainable code.
            </li>
            <li>
              A portfolio showcasing applications and projects that demonstrate
              your expertise.
            </li>
            <li>
              Strong problem-solving skills, critical thinking, and attention to
              detail.
            </li>
            <li>
              Excellent communication skills, with the ability to convey
              technical concepts clearly.
            </li>
            <li>
              A strong desire and ability to learn, staying current with
              industry best practices and new technologies.
            </li>
          </ul>
          <p className="text-lg md:text-xl font-bold">Job Types:</p>
          <p className="text-md font-semibold">Full-time, Part-time, or Contract</p>
          <p className="text-lg md:text-xl font-bold">Schedule:</p>
          <ul className="list-disc pl-4 space-y-2 text-md font-semibold sm:text-md md:text-lg">
            <li>Monday to Friday</li>
          </ul>
          <p className="text-lg md:text-xl font-bold">Experience Required:</p>
          <ul className="list-disc pl-4 space-y-2 text-md font-semibold sm:text-md md:text-lg">
            <li>Laravel: 6 years</li>
            <li>PHP: 7 years</li>
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

export default FormPhp;
