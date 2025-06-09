import React from "react";
import "./css/style.css";

import Navbar from './Containers/nav-bar';
import DescText from "./Containers/text/desc-text";
import ExpText from "./Containers/text/expert-text";

import MCProjPic from "./Containers/pic/proj-pic/MCproj-pic";


import gradient from './assets/gradient.png';
import my1x1 from './assets/my1x1.png';

function App() {
  return (
    <>
      {/* IMAGES NIGGA*/}


      {/* Main container NIGGA */}
      <div className="container">
        <img className="image-gradient" src={gradient} alt="gradient background" />

        <div className="layer-blur"></div>
        <div className="my1x1-box">
        <img className="my1x1" src={my1x1} alt="1x1" />
        </div>
        <header>
          <Navbar />
        </header>

        <main>
          <section className="content">
            <div className="tags-container">
              <div className="introducing-tag-box">
                <div className="intro-tag">Introducing</div>
              </div>
            </div>

            <DescText />

      <div className="my-sep-line"></div>

          {/* ThreeJS NIGGA */}
            <div>
              <ExpText />
              <div className="circle-blur"></div>
            </div>

              <div className="myproj-container">
                <MCProjPic />
              </div>

          </section>
        
        </main>
      </div>
    </>
  );
}

export default App;
