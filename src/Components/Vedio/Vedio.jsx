import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";

import vedioo from "../../Assets/pictures/edited.mp4";
import "./Vedio.css";

export default function MainVedio() {
  function VideoComponent() {
    const videoRef = useRef(null);

    useEffect(() => {
      AOS.init({ duration: 1000, once: true });

      const video = videoRef.current;
      video.autoplay = true;
      video.muted = true;
      video.loop = true;

      const handleFullscreen = () => {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }
      };

      video.addEventListener("click", handleFullscreen);

      return () => {
        video.removeEventListener("click", handleFullscreen);
      };
    }, []);

    return (
      <div className="video-container">
        <video ref={videoRef} className="background-video" autoPlay muted loop>
          <source src={vedioo} type="video/mp4" />
        </video>

        <div className="overlay-text">
          <h1 data-aos="fade-down">
            Evidence Analysis Through <br /> Intelligent Attorneys
          </h1>
          <p data-aos="fade-up" data-aos-delay="100">
            In the ever-evolving legal landscape, the integration of artificial
            intelligence is revolutionizing how evidence is <br />
            analyzed. Intelligent Attorneys are AI-powered systems designed to
            meticulously examine legal documents,
            <br /> uncover hidden patterns, and provide data-driven insights
            with unparalleled speed and accuracy.
          </p>
        </div>
      </div>
    );
  }

  return <VideoComponent />;
}
