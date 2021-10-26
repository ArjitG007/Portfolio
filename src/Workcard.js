import React from 'react'
import logo from "./Logo.png";
import { Link } from 'react-router-dom';

const Workcard = (props) => {
    return (
       <>
       <div className="boxes">
          <div className="box">
            <img src={logo} alt="" />
            <div className="info">
                <h2>{props.position}</h2>
              <h3>{props.company}</h3>
              <h4>{props.duration}</h4>
              <p>
               <ul>
                 <li>
                 My role was to Developed user interfaces with modern JavaScript, HTML5 and CSS3.
                 </li>
                 <li>
                 Prepared and submitted reports and other documentation to assist development team members.
                 </li>
                 <li>
                 Analyzed source code to identify and rectify potential functionality issues.
                 </li>
                 <li>
                 Troubleshot and debugged code ensuring compatibility with devices, browsers, and operating systems.
                 </li>
               </ul>
              </p>
            </div>
          </div>
        </div>
       </>
    )
}

export default Workcard
