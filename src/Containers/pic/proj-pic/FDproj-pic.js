import React, { useState } from "react";
import '../../../css/style.css';
import proj1 from '../../../assets/proj-pics/FD1.jpg';
import proj2 from '../../../assets/proj-pics/FD2.jpg';
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
                  <h2 className="projtitle">hanAPP:</h2>
                  A school project focused on designing and building a booking website for the Math and Physics departments’ SGT Tutorial Room using React.js. 
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
                  <h2 className="projtitle">Portfolio</h2>
                  A personal portfolio project showcasing my skills, experience, and projects, built with React.js.
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
