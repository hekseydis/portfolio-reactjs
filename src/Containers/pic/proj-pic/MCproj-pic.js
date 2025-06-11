  import React, { useState } from "react";
  import '../../../css/style.css';
  import proj1 from '../../../assets/proj-pics/MC1.jpg';
  import proj2 from '../../../assets/proj-pics/MC2.jpg';
  import proj3 from '../../../assets/proj-pics/MC3.jpg';
  import ProjText from "../../text/proj-text/proj-text";

  export default function MCProjPic() {
    const [hovered, setHovered] = useState(null);

    return (
      <section>
        <div className="proj-container">
            <div className="proj-container-pic">
            <div
              className="proj1-wrapper"
              onMouseEnter={() => setHovered("proj1")}
              onMouseLeave={() => setHovered(null)}
              style={{ position: "relative" }}
            >
              <img id="proj1-pic" src={proj1} alt="proj1" />
              <ProjText
              isVisible={hovered === "proj1"}
              text={
                <>
                  <h2 className="projtitle">Automated Garage Door:</h2>
                  A commision project focused on designing and building a small-scale prototype of an automated garage door system. Utilized a servo motor to control the opening and 
                  closing mechanism of the door, while an ultrasonic sensor was integrated to detect approaching objects or vehicles.
                </> 
              }
              />
            </div>

            <div
              className="proj2-wrapper"
              onMouseEnter={() => setHovered("proj2")}
              onMouseLeave={() => setHovered(null)}
              style={{ position: "relative" }}
            >
              <img id="proj2-pic" src={proj2} alt="proj2" />
              <ProjText 
              isVisible={hovered === "proj2"} 
              text={
                <>
                  <h2 className="projtitle">DIY Fire Alarm:</h2>
                  A commision project focused on designing a system that continuously measures ambient temperature and humidity levels, displaying real-time data through a 
                  custom-built software interface.An integrated alarm system activates when readings exceed predefined thresholds.
                </> 
              }
              />
            </div>

            <div
              className="proj3-wrapper"
              onMouseEnter={() => setHovered("proj3")}
              onMouseLeave={() => setHovered(null)}
              style={{ position: "relative" }}
            >
              <img id="proj3-pic" src={proj3} alt="proj3" />
              <ProjText isVisible={hovered === "proj3"}
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
      </section>
    );
  }
