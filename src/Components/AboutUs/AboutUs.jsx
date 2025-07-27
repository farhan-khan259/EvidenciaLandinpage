import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import rightabout from "../../Assets/pictures/Group 39 (1).svg";
import leftabout from "../../Assets/pictures/Group 39.svg";
import placeholder from "../../Assets/pictures/Image Placeholder.svg";

import "./AboutUs.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="aboutus-section">
      <div className="aboutus-content">
        <div className="text-content">
          <h4 className="section-title2" data-aos="fade-down">
            <span>
              <img src={leftabout} alt="" />
            </span>{" "}
            About Us{" "}
            <span>
              <img src={rightabout} alt="" />
            </span>
          </h4>

          <h2 className="main-heading" data-aos="fade-right">
            Navigating Challenges,
            <br /> Delivering Solutions
          </h2>

          <p className="description" data-aos="fade-up">
            Evidenceia is an alternative legal services provider that focuses on
            managed <br /> document review services and project staffing. Our
            model is a collaboration <br /> between USA and Pakistan offices to
            provide offshore legal services to a <br /> variety of legal and
            corporate clients. Our clients count on secure services, <br />
            transparent processes and value-added people solutions that resolve
            staffing <br />
            challenges, optimize quality and efficiency, but most of all manage
            and keep <br /> cost down.
          </p>
        </div>

        <div className="image-wrapper" data-aos="zoom-in">
          <img src={placeholder} alt="About Us Visual" />
        </div>
      </div>
    </section>
  );
}
