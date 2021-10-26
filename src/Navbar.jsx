import React, { useState } from "react";
import "./index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(true);
  return (
    <div>
      <div className="navbar">
        <nav>
          <div className="mobileicons">
          <span className="me">
          <Link to="/Portfolio">Me.</Link>
          </span>

          <div className="hamburger">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
          </div>
          <div className={
            showMediaIcons ? "nav": "mobile"
          }>
            <Link to ="/about">About Me</Link>
            {/* <a href="">About Me</a> */}
            <Link to ="/experience">Experience</Link>
            {/* <a href="">Experience</a> */}
            <span>
              <Link to="/Portfolio">Me.</Link>
              {/* <a href="">Me.</a> */}
            </span>
            <Link to ="/skills">Skills</Link>
            {/* <a href="">Skills</a> */}
            <Link to ="/project">Projects</Link>
            {/* <a href=".project">Projects</a> */}
            <Link to ="/contact">Contact Me</Link>
            {/* <a href="">Contact</a> */}
          </div>

        </nav>
      </div>
    </div>
  );
};

export default Navbar;
