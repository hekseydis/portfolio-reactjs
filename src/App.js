import React, { useState, useEffect } from 'react';



import "./css/style.css";

import Navbar from './Containers/nav-bar';
import DescText from "./Containers/text/desc-text";
import ExpText from "./Containers/text/expert-text";
import MCProjPic from "./Containers/pic/proj-pic/MCproj-pic";
import ThreeScene from './Containers/ThreeScene';

import gradient from './assets/gradient.png';
import my1x1 from './assets/my1x1.png';

function App() {
  const [showMCProject, setShowMCProject] = useState(false);


  return (
    <>

      <div className="container">

        <div className="layer-blur"></div>
        <div className="my1x1-box">
        {/*<img className="my1x1" src={my1x1} alt="1x1" />*/}
        </div>
        <header>
          <Navbar />
        </header>

        <main>
          <section className="content">
            <div className="tags-container">
              <div className="introducing-tag-box">
                <div className="intro-tag">About Me</div>
              </div>
            </div>

            <DescText />
            <div>
              <ExpText />
            </div>

              <div className="my-proj-container">
              </div>

          </section>
        
        </main>
      </div>
    </>
  );
}

export default App;
