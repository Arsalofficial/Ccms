import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Component/Hero/Hero";
import FormPhp from "./Component/PhpForm/Formphp";
import Application from "./Component/Applicationinfor/Application";
import Caregiver from "./Component/PhpForm/Caregiver";
import IT from "./Component/PhpForm/IT";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/formphp" element={<FormPhp />} />
        <Route path="/caregiver" element={<Caregiver />} />
        <Route path="/it" element={<IT />} />
        <Route path="/Applicationform" element={<Application />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
