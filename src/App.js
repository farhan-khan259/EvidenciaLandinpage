import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AboutUs from "./Components/AboutUs/AboutUs";
import BuisnessModel from "./Components/BuisnessModel/BuisnessModel";
import Homepage from "./Components/Homepage/Homepage";
import OurServices from "./Components/OurServices/OurServices";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/BuisnessModel" element={<BuisnessModel />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
