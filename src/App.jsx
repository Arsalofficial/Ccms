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
