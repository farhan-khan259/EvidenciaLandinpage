import AboutUs from "../AboutUs/AboutUs";
import BuisnessModel from "../BuisnessModel/BuisnessModel";
import Navbar from "../Navbar/Navbar";
import OurServices from "../OurServices/OurServices";
import Vedio from "../Vedio/Vedio";
import "./Homepage.css";
export default function Homepage() {
  return (
    <>
      <div className="homepagemain">
        <Navbar />
        <Vedio />
        <AboutUs />
        <BuisnessModel />
        <OurServices />
      </div>
    </>
  );
}
