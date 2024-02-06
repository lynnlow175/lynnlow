import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Homescreen";
import Navbar from "./Pages/Home/Navbar";
import "./Home.css";
import School from "./Pages/Education/School";
import MySkills from "./Pages/Portfolio/Work";
import Project from "./Pages/Projects/Project";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/education" element={<School />} />
          <Route path="/work" element={<MySkills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
