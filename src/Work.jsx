import React from "react";
import logo from "./Logo.png";
import Workdata from "./Workdata";
import Workcard from "./Workcard";

const Work = () => {
  return (
    <div>
      <div className="work">
        <h1 className="title">Work Experience</h1>
        {/* <div className="boxes">
          <div className="box">
            <img src={logo} alt="" />
            <div className="info">
                <h2>Software Engineer Intern</h2>
              <h3>Ekal Shiksha</h3>
              <h4>Aug. 2021 - Sept. 2021</h4>
              <p>
                My role was to Developed user interfaces with modern JavaScript
                , HTML5 and CSS3. Prepared and submitted reports and other
                documentation to assist development team members. Analyzed
                source code to identify and rectify potential functionality
                issues. Troubleshot and debugged code ensuring compatibility
                with devices, browsers, and operating systems.
              </p>
            </div>
          </div>
        </div> */}

        {Workdata.map((ncard) => {
          return (
            <Workcard 
            position={ncard.position}
            company={ncard.company}
            duration={ncard.duration}
            role={ncard.role}
            logo={ncard.logo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
