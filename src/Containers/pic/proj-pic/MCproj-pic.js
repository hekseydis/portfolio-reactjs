import React, { useState } from "react";
import '../../../css/style.css';
import MC1 from '../../../assets/proj-pics/MC1.jpg';
import MC2 from '../../../assets/proj-pics/MC2.jpg';
import MC3 from '../../../assets/proj-pics/MC3.jpg';
import MCProjText from "../../text/proj-text/MCproj-text";

export default function MCProjPic() {
  const [hovered, setHovered] = useState(null); // null | "mc1" | "mc2" | "mc3"

  return (
    <section>

      <div className="mc-header-box">
        <div className="mc-header">Microcontrollers</div>
      </div>
      <div className="mc-container">
        

        <div className="mc-container-pic">
          <div
            className="mc1-wrapper"
            onMouseEnter={() => setHovered("mc1")}
            onMouseLeave={() => setHovered(null)}
            style={{ position: "relative" }}
          >
            <img id="mc1-pic" src={MC1} alt="mc1" />
            <MCProjText
            isVisible={hovered === "mc1"}
            text={
              <>
                <h2 className="mctitle">Automated Garage Door:</h2>
                A commision project focused on designing and building a small-scale prototype of an automated garage door system. Utilized a servo motor to control the opening and 
                closing mechanism of the door, while an ultrasonic sensor was integrated to detect approaching objects or vehicles.
              </> 
            }
            />
          </div>

          <div
            className="mc2-wrapper"
            onMouseEnter={() => setHovered("mc2")}
            onMouseLeave={() => setHovered(null)}
            style={{ position: "relative" }}
          >
            <img id="mc2-pic" src={MC2} alt="mc2" />
            <MCProjText 
            isVisible={hovered === "mc2"} 
            text={
              <>
                <h2 className="mctitle">DIY Fire Alarm:</h2>
                A commision hobby project focused on designing a system that continuously measures ambient temperature and humidity levels, displaying real-time data through a 
                custom-built software interface.An integrated alarm system activates when readings exceed predefined thresholds.
              </> 
            }
            />
          </div>

          <div
            className="mc3-wrapper"
            onMouseEnter={() => setHovered("mc3")}
            onMouseLeave={() => setHovered(null)}
            style={{ position: "relative" }}
          >
            <img id="mc3-pic" src={MC3} alt="mc3" />
            <MCProjText isVisible={hovered === "mc3"}
            text={
              <>
                <h2 className="mctitle">Data Output Transfer:</h2>
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
