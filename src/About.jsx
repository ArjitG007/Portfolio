import React from "react";
import dp from "./dp.jpg";
import { Link } from "react-router-dom";
import resume from "./Arjit's-Resume.pdf"
const About = () => {
  return (
    <div>
      <div className="about">
        <h1 className="title">About Me</h1>
        <div className="content">
          <div className="leftone">
            <h3 className="title">Hey 👋 I'm Arjit </h3>
            <p>
              A Hard Working Enthusiast currently pursuing B.tech from Netaji
              Subhas Institute of Technology, West Campus. A believer of excellence, having the zeal to up-skill, being efficient & productive for the company & develop as well as diversify my professional skill-set.Aim is to work in a dynamic environment, to get the best out of my skills which can be productive for the company as well as me. My
              hobbies include playing 🏏, exploring new 📱 and new
              🛕.
            </p>
            <a href={resume} download="Arjit's Resume">
              <button>Resume</button>
            </a>
          </div>
          <div className="rightone">
            <img src={dp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
