import React from "react";
import "./index.css";

const Skills = () => {
  return (
    <div>
      <section class="skills">
        <h1 className="title">Skills</h1>
        <div className="skill">
        <p class="text">
          <i>
            A career is a portfolio of projects that teach you new skills, gain
            you new expertise, develop new capabilities, grow your colleague
            set, and constantly reinvent you as a brand.
          </i>
        </p>
          <div class="row">
            <div class="item">
              <div class="item-text">
                <span>DSA</span>
                <span class="w-80">80%</span>
              </div>
              <div class="progress">
                <div class="progress-bar w-80"></div>
              </div>
            </div>

            <div class="item">
              <div class="item-text">
                <span>CSS</span>
                <span class="w-75">75%</span>
              </div>
              <div class="progress">
                <div class="progress-bar w-75"></div>
              </div>
            </div>

            <div class="item">
              <div class="item-text">
                <span>JAVA</span>
                <span class="w-85">85%</span>
              </div>
              <div class="progress">
                <div class="progress-bar w-85"></div>
              </div>
            </div>

            <div class="item">
            <div class="item-text">
                <span>HTML</span>
                <span class="w-90">90%</span>
              </div>
              <div class="progress">
                <div class="progress-bar w-90"></div>
              </div>
            </div>

            <div class="item">
              <div class="item-text">
                <span>REACT JS</span>
                <span class="w-60">70%</span>
              </div>
              <div class="progress">
                <div class="progress-bar w-60"></div>
              </div>
            </div>

            <div class="item">
              <div class="item-text">
                <span>CRICKET</span>
                <span class="w-68">95%</span>
              </div>
              <div class="progress">
                <div class="progress-bar w-68"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
