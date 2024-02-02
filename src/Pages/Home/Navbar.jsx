import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [activelink, setActiveLink] = useState("");
  function handleClick(link) {
    setActiveLink(link);
  }
  useEffect(() => {
    // Set initial active link based on the current location
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <img src="./logo.svg" />
      <div>
        <ul className="titles">
          <li onClick={() => handleClick("/home")}>
            <Link
              to="/home"
              className={activelink === "/home" ? "activeNavTitle" : "navTitle"}
            >
              Home
            </Link>
          </li>
          <li onClick={() => handleClick("/education")}>
            <Link
              to="/education"
              className={
                activelink === "/education" ? "activeNavTitle" : "navTitle"
              }
            >
              Education
            </Link>
          </li>
          <li onClick={() => handleClick("/work")}>
            <Link
              to="/work"
              className={activelink === "/work" ? "activeNavTitle" : "navTitle"}
            >
              Work Experience
            </Link>
          </li>
          <li onClick={() => handleClick("/projects")}>
            <Link
              to="/projects"
              className={
                activelink === "/projects" ? "activeNavTitle" : "navTitle"
              }
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
