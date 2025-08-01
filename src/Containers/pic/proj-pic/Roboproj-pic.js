import React, { useState } from "react";
import '../../../css/style.css';
import proj1 from '../../../assets/proj-pics/RB1.jpg';
import proj2 from '../../../assets/proj-pics/RB2.jpg';
import proj3 from '../../../assets/proj-pics/RB3.jpg';
import proj4 from '../../../assets/proj-pics/RB4.jpg';
import ProjText from "../../text/proj-text/proj-text";

export default function RBProjPic() {
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
                  <h2 className="projtitle">Object avoiding Robot:</h2>
                  A hobby/school project involving an obstacle avoiding robot with three HC-SR04 ultrasonic sensors (front, left, right) for obstacle detection and autonomous navigation with L298n as its motors driver. Built using Arduino, with programmed logic for avoiding obstacles and navigating safely.
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
                  <h2 className="projtitle">Gesture Controlled Robot:</h2>
                  A hobby project involving building a robot model using an ESP32 Wifi microcontroller, controlled via a custom OpenCV-based gesture detection system. Hand gestures are used as control inputs—left hand movements control steering (left or right), while right hand movements control forward motions.
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
                  <h2 className="projtitle">Sumo bot:</h2>
                  A hobby project focused on building a sumobot using a 3-channel line tracking sensor paired with ultrasonic sensor setup for object detection, using Arduino and L298n as its motor driver. The objective was to detect and push opposing objects off a designated ring, with the ring’s floor blacked and edges whiten out to help the IR sensors recognize boundaries and prevent the robot from exiting the arena.
                </>
              }
            />
          </div>

          <div className="proj4-wrapper" style={{ position: "relative" }}>
            <img
              id="proj4-pic"
              src={proj4}
              alt="proj4"
              onClick={() => openFullscreen(proj4)}
              style={{ cursor: "pointer" }}
            />
            <ProjText
              isVisible={true}
              text={
                <>
                  <h2 className="projtitle">Object Avoiding Robot v2:</h2>
                  A hobby/school project involving an obstacle-avoiding robot using a single HC-SR04 ultrasonic sensor mounted on a servo motor to scan multiple directions for obstacle detection. Controlled by an Arduino and L293D motor driver.
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
