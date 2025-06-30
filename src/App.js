import React, { useState, useEffect } from 'react';
import "./css/style.css";
import Navbar from './Containers/nav-bar';
import DescText from "./Containers/text/desc-text";
import ExpText from "./Containers/text/expert-text";
import my1x1 from "../src/assets/my1x1.png";

function App() {
  return (
    <>
      <div id="about" className="container">
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

            <div className="my-sep-line" />

            <section className="expertise-projects-container">

              <div id="expertise&projects"className="tags-container">
                <div className="introducing-tag-box">
                  <div className="intro-tag">Expertise & Projects</div>
                </div>
              </div>

              <div className="exp-container">
                <ExpText />
              </div>

            </section>
             <section className='achievement-container'>
              <div className='achievement-content'>
                Achievement and Certificates
              </div>

            </section>
          </section>
          
        </main>
      </div>
    </>
  );
}

export default App;
