import React from "react";
import '../css/style.css';


export default function Navbar() {
  return (
    <header className="nav-bar-container">
      <h1 className="nav-bar-main">MY PORTFOLIO</h1>
      <nav className="nav-bar-a-group">
        <a href="#about">About Me</a>
        <a href="#expertise&projects">Projects & Expertise</a>
        <a href="#achievement">Achievements</a>
      </nav>
    </header>
  );
}
