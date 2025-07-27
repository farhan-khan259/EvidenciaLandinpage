import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import rightabout from "../../Assets/pictures/Group 39 (1).svg";
import leftabout from "../../Assets/pictures/Group 39.svg";
import img2 from "../../Assets/pictures/Rectangle 35 (2).svg";
import img1 from "../../Assets/pictures/Rectangle 35 (3).svg";
import {
  default as img3,
  default as img4,
  default as img5,
  default as img6,
} from "../../Assets/pictures/Rectangle 35.svg";

import "./OurServices.css";

export default function OurServices() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    { title: "Project Staffing", image: img1 },
    { title: "Managed Document", image: img2 },
    { title: "Service 3", image: img3 },
    { title: "Service 4", image: img4 },
    { title: "Service 5", image: img5 },
    { title: "Service 6", image: img6 },
  ];

  return (
    <div className="our-services-section">
      <p className="section-subtitle" data-aos="fade-down">
        <span>
          <img src={leftabout} alt="" />
        </span>{" "}
        Our Services{" "}
        <span>
          <img src={rightabout} alt="" />
        </span>
      </p>
      <h2 className="section-title" data-aos="fade-up">
        We Provide Exclusive Legal <br /> Staffing Services
      </h2>

      <div className="services-grid-wrapper">
        <div className="services-row">
          {services.slice(0, 3).map((service, index) => (
            <div
              className="service-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img src={service.image} alt={service.title} />
              <div className="overlay">{service.title}</div>
            </div>
          ))}
        </div>

        <div className="services-row">
          {services.slice(3, 6).map((service, index) => (
            <div
              className="service-card"
              key={index + 3}
              data-aos="zoom-in"
              data-aos-delay={(index + 3) * 100}
            >
              <img src={service.image} alt={service.title} />
              <div className="overlay">{service.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
