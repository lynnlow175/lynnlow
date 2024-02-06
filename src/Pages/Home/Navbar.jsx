import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [activelink, setActiveLink] = useState("");

  useEffect(() => {
    // Set initial active link based on the current location
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <img src="./logo2.png" />
      <div>
        <ul className="titles">
          <li>
            <Link
              to=""
              className={activelink === "" ? "activeNavTitle" : "navTitle"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/education"
              className={
                activelink === "/education" ? "activeNavTitle" : "navTitle"
              }
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className={activelink === "/work" ? "activeNavTitle" : "navTitle"}
            >
              Work Experience
            </Link>
          </li>
          <li>
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
