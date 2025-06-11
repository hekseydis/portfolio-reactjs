import React, { useState } from "react";
import '../../css/style.css';
import ThreeScene from '../ThreeScene';
import MCProjPic from '../pic/proj-pic/MCproj-pic';
import RoboProjPic from '../pic/proj-pic/Roboproj-pic';




export default function ExpText() {
  const [showMCProject, setShowMCProject] = useState(false);
  const [showRoboProject, setShowRoboProject] = useState(false);
  return (
    <section>
      <div className="my-expertise-text-box">
        <h1 className="my-expertise-title">
          MY EXPERTISE
          <div className="my-expertise-sub">as a computer engineer</div>
        </h1>
      </div>

      <section className="my-expertise-content">
        <div className="my-expertise-container">
          <ThreeScene 
            onShowMCProject={() => setShowMCProject(true)} 
            onShowRoboProject={() => setShowRoboProject(true)} 
          />

        </div>
        
      </section>
      <div className="proj-containers"> 
          {showMCProject && <MCProjPic />}
          {showRoboProject && <RoboProjPic />}
        </div>
    </section>
  );
}
