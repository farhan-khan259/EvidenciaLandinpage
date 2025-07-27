import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import rightabout from "../../Assets/pictures/Group 39 (1).svg";
import leftabout from "../../Assets/pictures/Group 39.svg";
import technologyGif from "../../Assets/pictures/wired-outline-1121-iota-internet-of-things-in-reveal.gif";
import peopleGif from "../../Assets/pictures/wired-outline-17-avatar-man-nodding-in-reveal.gif";
import processGif from "../../Assets/pictures/wired-outline-212-arrow-1-rounded-loop-cycle.gif";
import securityGif from "../../Assets/pictures/wired-outline-966-privacy-policy-hover-unfold.gif";

import "./BuisnessModel.css";

export default function BuisnessModel() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="business-model-section">
      <div className="content">
        <p className="subtitle" data-aos="fade-down">
          <span>
            <img src={leftabout} alt="" />
          </span>
          Our Business Model
          <span>
            <img src={rightabout} alt="" />
          </span>
        </p>
        <h1 className="title" data-aos="fade-up">
          Evidenceia’s Business <br />
          Model and Solutions
        </h1>

        <div className="circle-container">
          <div className="circle center">
            <img src={peopleGif} alt="People" />
            <p>People</p>
          </div>

          <div className="circle top-left">
            <img src={securityGif} alt="Security" />
            <p>Security</p>
          </div>

          <div className="circle top-right">
            <img src={processGif} alt="Process" />
            <p>Process</p>
          </div>

          <div className="circle bottom-center">
            <img src={technologyGif} alt="Technology" />
            <p>Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
}
