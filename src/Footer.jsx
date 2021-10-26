import React from "react";
import { MdLocationOn } from "react-icons/md";
import { AiFillPhone, AiFillFacebook } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaGithub ,FaLinkedin, FaHackerrank,FaFacebookF} from "react-icons/fa";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { Link } from "react-router-dom";
import portfolioimg from "./portfolioimg.png"



const Footer = () => {
  return (
    <div>
      <div className="footer">
        <footer class="footer-distributed">
          <div class="footer-left">
            <img src= {portfolioimg} />
            <h3>
              Arjit<span>Gupta</span>
            </h3>

            <p class="footer-links">
            <Link to="/Portfolio">Home</Link> | <Link to="/experience">Work</Link> | <Link to ="/skills">Skills</Link> | <Link to="/project">Projects</Link> | <Link to="/contact">Contact Me</Link>
            </p>

            <p class="footer-company-name">© 2021 Arjit Gupta Creations.</p>
          </div>

          <div class="footer-center">
            <div className="infor">
             <MdLocationOn 
             style= {{fontSize:"30px", margin:"0"}}/>
              <p>
                <span>Vikaspuri</span>
                New Delhi, Delhi - 110018
              </p>
            </div>

            <div className="infor">
             <AiFillPhone 
             style= {{fontSize:"30px", margin:"0"}}/>
              <p>+91 6387125220</p>
            </div>
            <div className="infor">
              <MdEmail 
              style= {{fontSize:"30px", margin:"0"}}/>
              <p>
                <a href="mailto:support@eduonix.com">arjitgupta24@gmail.com</a>
              </p>
            </div>
          </div>
          <div class="footer-right">
            <p class="footer-company-about">
              <span>Favourite Quote-</span>
              <ImQuotesLeft />
              If you don't sacrifice for what you want, what you want becomes the sacrifice.
              <ImQuotesRight />
            </p>
            <div class="footer-icons">
              <a href="https://www.facebook.com/arjitg3" target="_blank">
                <FaFacebookF style= {{margin: "7px"}}/>
              </a>
              <a href="https://github.com/ArjitG007" target="_blank">
                <FaGithub style= {{margin: "7px"}}/>
              </a>

              <a href="https://www.linkedin.com/in/arjit-gupta-1793ab16a/" target="_blank">
                <FaLinkedin style= {{margin: "7px"}}/>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
