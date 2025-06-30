import React, { useState } from "react";
import '../../css/style.css';
import ThreeScene from '../ThreeScene';
import MCProjPic from '../pic/proj-pic/MCproj-pic';
import RoboProjPic from '../pic/proj-pic/Roboproj-pic';
import FDProjPic from '../pic/proj-pic/FDproj-pic';
import GDProjPic from '../pic/proj-pic/Gamedevproj-pic';

export default function ExpText() {
  const [showMCProject, setShowMCProject] = useState(false);
  const [showRoboProject, setShowRoboProject] = useState(false);
  const [showFDProject, setShowFDProject] = useState(false);
  const [showGDProject, setShowGDProject] = useState(false);

  const handleShowMCProject = () => {
    setShowMCProject(true);
    setShowRoboProject(false);
    setShowFDProject(false);
    setShowGDProject(false);
  };

  const handleShowRoboProject = () => {
    setShowMCProject(false);
    setShowRoboProject(true);
    setShowFDProject(false);
    setShowGDProject(false);
  };

  const handleShowFDProject = () => {
    setShowMCProject(false);
    setShowRoboProject(false);
    setShowFDProject(true);
    setShowGDProject(false);
  };

  const handleShowGDProject = () => {
    setShowMCProject(false);
    setShowRoboProject(false);
    setShowFDProject(false);
    setShowGDProject(true);
  };

  return (
    <main className="proj-exp-container">
      <div className="my-expertise-text-box">
        <h1 className="my-expertise-title">
          MY EXPERTISE
          <div className="my-expertise-sub">as a computer engineer</div>
        </h1>

        
      </div>
      <div className="my-project-text-box">
        <h1 className="my-project-title">
          MY PROJECTS
        </h1>
        <span>Click to Expand</span>
      </div>

      <section className="my-expertise-content">
        <div className="my-expertise-container">
          <div className="drag-indicator">
            <span className="drag-text">Drag to Rotate</span>
              
          </div>
          <ThreeScene
            onShowMCProject={handleShowMCProject}
            onShowRoboProject={handleShowRoboProject}
            onShowFDProject={handleShowFDProject}
            onShowGDProject={handleShowGDProject}
          />
        </div>
          
      </section>

      <div className="proj-containers">
        
        {showMCProject && <MCProjPic />}
        {showRoboProject && <RoboProjPic />}
        {showFDProject && <FDProjPic />}
        {showGDProject && <GDProjPic />}
      </div>
      
    </main>
  );
}
