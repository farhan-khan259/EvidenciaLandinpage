import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navbarlogo from "../../Assets/pictures/image 1.svg";
import insta from "../../Assets/pictures/Vector (10).svg";
import twitter from "../../Assets/pictures/Vector (11).svg";
import linkedin from "../../Assets/pictures/Vector (12).svg";
import facebook from "../../Assets/pictures/Vector (13).svg";
import dropdown from "../../Assets/pictures/Vector (14).svg";
import globe from "../../Assets/pictures/Vector (9).svg";
import line from "../../Assets/pictures/Vector 1.svg";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`navbarmain ${scrolled ? "scrolled" : ""}`}>
        <div className="sociallinks">
          <img src={insta} alt="" />
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
          <img src={facebook} alt="" />
        </div>
        <div className="navlogo">
          <img className="navlogopic" src={navbarlogo} alt="" />
        </div>
        <div className="contactbtn">
          <img src={globe} alt="" />
          <p>En</p>
          <img src={dropdown} alt="" />
          <img src={line} alt="" />
          <p>Contact</p>
        </div>
      </div>
      <div className="navbarsecond">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">SERVICES</Link>
          </li>
          <li>
            <Link to="/">ABOUT US</Link>
          </li>
          <li>
            <Link to="/">HOW WE DO IT</Link>
          </li>
          <li>
            <Link to="/">CAREERS</Link>
          </li>
          <li>
            <Link to="/">BLOG</Link>
          </li>
          <li>
            <Link to="/">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
