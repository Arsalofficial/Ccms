import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Component/Hero/Hero";
import FormPhp from "./Component/PhpForm/Formphp";
import Application from "./Component/Applicationinfor/Application";
import Caregiver from "./Component/PhpForm/Caregiver";
import IT from "./Component/PhpForm/IT";
import PositionApply from "./Component/Applicationinfor/PositionApply";
import Education from "./Component/Applicationinfor/Education";
import Criminal from "./Component/Applicationinfor/Criminal";
import Employers from "./Component/Applicationinfor/Employers";
import Statement from "./Component/Applicationinfor/ApplicantStatement";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/formphp" element={<FormPhp />} />
        <Route path="/caregiver" element={<Caregiver />} />
        <Route path="/it" element={<IT />} />
        <Route path="/Applicationform" element={<Application />} />
        <Route path="/positionapply" element={<PositionApply />} />
        <Route path="/education" element={<Education />} />
        <Route path="/criminal" element={<Criminal />} />
        <Route path="/employer" element={<Employers />} />
        <Route path="/applicant" element={<Statement />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*
<div className="flex flex-col">
  <label className="font-medium">
    Apply For Date <span className="text-red-500">*</span>
  </label>
  <DatePicker
    {...register("dob", { required: "Date is required" })}
    selected={selectedDate} // Controlled component
    onChange={(date) => {
      setSelectedDate(date); // Update local state
      setValue("dob", date); // Update React Hook Form value
    }}
    minDate={new Date()} // Restrict past dates
    maxDate={new Date()} // Restrict future dates
    dateFormat="yyyy/MM/dd"
    className="mt-1 focus:border-blue-600 py-4 focus:outline-none border border-black px-4 text-sm w-full"
    placeholderText="Select Date"
  />
  {errors.dob && !selectedDate && ( // Show error only if field is empty
    <span className="text-red-500 text-sm">
      {errors.dob.message}
    </span>
  )}
</div> */