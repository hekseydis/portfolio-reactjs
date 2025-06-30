import React, { useState } from "react";
import '../../../css/style.css';
import proj1 from '../../../assets/proj-pics/MC1.jpg';
import proj2 from '../../../assets/proj-pics/MC2.jpg';
import proj3 from '../../../assets/proj-pics/MC3.jpg';
import ProjText from "../../text/proj-text/proj-text";

export default function FDProjPic() {
  const [fullscreenImg, setFullscreenImg] = useState(null);

  const openFullscreen = (img) => {
    setFullscreenImg(img);
  };

  const closeFullscreen = () => {
    setFullscreenImg(null);
  };

  return (
    <section>
      <div className="proj-container">
        <div className="proj-container-pic">

          <div className="proj1-wrapper" style={{ position: "relative" }}>
            <img
              id="proj1-pic"
              src={proj1}
              alt="proj1"
              onClick={() => openFullscreen(proj1)}
              style={{ cursor: "pointer" }}
            />
            <ProjText
              isVisible={true}
              text={
                <>
                  <h2 className="projtitle">Automated Garage Door:</h2>
                  A commission project focused on designing and building a small-scale prototype of an automated garage door system. Utilized a servo motor to control the opening and closing mechanism of the door, while an ultrasonic sensor was integrated to detect approaching objects or vehicles.
                </>
              }
            />
          </div>

          <div className="proj2-wrapper" style={{ position: "relative" }}>
            <img
              id="proj2-pic"
              src={proj2}
              alt="proj2"
              onClick={() => openFullscreen(proj2)}
              style={{ cursor: "pointer" }}
            />
            <ProjText
              isVisible={true}
              text={
                <>
                  <h2 className="projtitle">DIY Fire Alarm:</h2>
                  A commission project focused on designing a system that continuously measures ambient temperature and humidity levels, displaying real-time data through a custom-built software interface. An integrated alarm system activates when readings exceed predefined thresholds.
                </>
              }
            />
          </div>

          <div className="proj3-wrapper" style={{ position: "relative" }}>
            <img
              id="proj3-pic"
              src={proj3}
              alt="proj3"
              onClick={() => openFullscreen(proj3)}
              style={{ cursor: "pointer" }}
            />
            <ProjText
              isVisible={true}
              text={
                <>
                  <h2 className="projtitle">Data Output Transfer:</h2>
                  A personal hobby project focused on utilizing the ESP32 microcontroller for efficient data output transfer. The objective was to collect data, process it locally on the ESP32, and communicate the output to each other.
                </>
              }
            />
          </div>

        </div>
      </div>

      {fullscreenImg && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <img className="fullscreen-img" src={fullscreenImg} alt="fullscreen" />
        </div>
      )}
    </section>
  );
}
