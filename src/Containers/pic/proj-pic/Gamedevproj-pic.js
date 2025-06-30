import React, { useState } from "react";
import '../../../css/style.css';
import proj1 from '../../../assets/proj-pics/GD1.png';
import proj2 from '../../../assets/proj-pics/GD2.png';
import proj3 from '../../../assets/proj-pics/GD3.jpg';
import proj4 from '../../../assets/proj-pics/GD4.png';
import ProjText from "../../text/proj-text/proj-text";

export default function GDProjPic() {
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
                  <h2 className="projtitle">Sanrio x Stardew Valley:</h2>
                  A hobby project developed using C++ and Unity, blending the charm of Sanrio characters with the gameplay mechanics of Stardew Valley. Players grow plants to earn gold, which can be exchanged for equipment and upgrades, combining cozy farming with light adventure elements.
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
                  <h2 className="projtitle">Sekiro Inspired Combat System:</h2>
                  A hobby project involving technical prototype built with C++ and Unreal Engine 5, aiming to replicate the intense, precise combat mechanics of *Sekiro: Shadows Die Twice*. This system is designed as a foundation for future action game projects.
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
                  <h2 className="projtitle">Aottg 2</h2>
                  A community-driven project to revive *Attack on Titan Tribute Game* (AOTTG), a fan-made multiplayer game. I contributed as both animator and programmer over a 6-month period, helping bring the game’s visuals and mechanics to life.
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
                  <h2 className="projtitle">Precise Movement</h2>
                 A hobby project involving technical prototype built using C++ and Unreal Engine 5, aiming to create smooth and interactive movement consisting of stealth movement, collision and dynamic parkour system.
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
