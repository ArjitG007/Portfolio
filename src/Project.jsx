import { getByTitle } from "@testing-library/dom";
import React from "react";
import Projectdata from "./Projectdata";

const Project = () => {
  return (
    <div>
      <div className="project">
        <h1 className="title">Projects</h1>
        <div class="boxes">
          {/* <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="1 (2).png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div class="flip-card-back">
                <h1>Combined Lesson Plan</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div> */}

         {Projectdata.map((curelem) =>
         {
             return(
                <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src={curelem.img}
                      alt="Avatar"
                      style={{ width: "300px", height: "300px" }}
                    />
                  </div>
                  <div class="flip-card-back">
                   <a href={curelem.link}> <h1>{curelem.title}</h1> </a>
                    <p>{curelem.used}</p>
                  </div>
                </div>
              </div>
             )
         })}

          {/* <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="2 (2).png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div class="flip-card-back">
                <h1>Individual Teachers</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="3 (2).png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div class="flip-card-back">
                <h1>Hesitation Free Classes</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="4 (2).png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div class="flip-card-back">
                <h1>24*7 Doubt Session</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="5 (2).png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div class="flip-card-back">
                <h1>Regular Assignment</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="6 (2).png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div class="flip-card-back">
                <h1>Auto Message Update</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div> */}

          {/* <!-- <script src="https://apps.elfsight.com/p/platform.js" defer></script>
          <div class="elfsight-app-778fd740-bfce-4541-9383-39523c261ccd"></div> --> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
