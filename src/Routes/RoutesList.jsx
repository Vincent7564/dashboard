import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import AboutMe from "../Pages/AboutMe";
import Calendar from "../Pages/Calendar";
import Language from "../Pages/Language";
import Project from "../Pages/Project";
import Dashboard from "../Component/Dashboard";
import WorkingExperience from "../Pages/WorkingExperience";
import Certification from "../Pages/Certification";

const RouteList = () => {
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/lang" element={<Language />} />
      <Route path="/project" element={<Project />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/experience" element={<WorkingExperience />} />
      <Route path="/certification" element={<Certification />} />
    </Routes>
  </BrowserRouter>;
  </>
};

export default RouteList;
