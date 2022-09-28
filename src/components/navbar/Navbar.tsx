import React from "react";
import Button from "@mui/material/Button";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="emptypart"></div>
      <div className="navbar">
        <nav>
          <h2 className="teamname">
            Team<span>AlyOsman</span>
          </h2>
          <ul>
            <li>
              <a href="#">FITNESS PROGRAMS</a>
            </li>
            <li>
              <a href="#">COACHING</a>
            </li>
            <li>
              <a href="#">SUCCESS STORIES</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
          <button>subscribe</button>
        </nav>
      </div>
    </>
  );
}
