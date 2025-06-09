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

      <div className="container">

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
                <div className="intro-tag">About Me</div>
              </div>
            </div>

            <DescText />

      <div className="my-sep-line"></div>
            <div>
              <ExpText />
              <div className="circle-blur"></div>
            </div>

              <div className="my-proj-container">
                <div className="my-proj-box">
                  <div className="my-proj">My Projects</div>
                </div>
                <div className="my-proj-text">Throughout my journey in computer engineering, I have undertaken a variety of projects that span personal hobbies, commissioned work, and academic assignments.These projects reflect my passion for technology and innovation, as well as the practical skills and experience I have gained by working on real-world challenges, 
                    collaborating with others, and continuously pushing myself to learn and grow.</div>
                <MCProjPic />
              </div>

          </section>
        
        </main>
      </div>
    </>
  );
}

export default App;
