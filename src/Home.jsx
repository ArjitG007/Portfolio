import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="left">
          <h2>I'm Arjit Gupta</h2>
          <h3>Software Engineer</h3>
          <div className="buttons">
            <a href="./pdf/Arjit's-Resume.pdf" download>
              <button>Resume</button>
            </a>
            {/* <a href="/skills">
              <button>Contact Me</button>
            </a> */}
            {/* <Link to="/contact"><button>Contact Me</button></Link> */}
          </div>
          <div className="links">
            <a href="https://github.com/ArjitG007" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/arjit-gupta-1793ab16a/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.hackerrank.com/ARJITGUPTA?hr_r=1"
              target="_blank"
            >
              <FaHackerrank />
            </a>
            <a href="https://leetcode.com/arjitgupta24/" target="_blank">
              <SiLeetcode />
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/arjitgupta24/profile"
              target="_blank"
            >
              <SiGeeksforgeeks />
            </a>
          </div>
        </div>
        <div className="right">
          <img
            src="https://camo.githubusercontent.com/d5f2bcf97f23f8095e1bd9e51f513c99635d3736/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f65312f66332f34312f65316633343133626635303336303435373133333431333934663631373232352e676966"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
