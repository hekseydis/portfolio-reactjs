import React from "react";
import '../css/style.css';


export default function Navbar() {
  return (
    <header className="nav-bar-container">
      <h1 className="nav-bar-main">MY PORTFOLIO</h1>
      <nav className="nav-bar-a-group">
        <a href="#">About Me</a>
        <a href="#">My Expertise</a>
        <a href="#">Projects</a>
        <a href="#">Achievements</a>
      </nav>
    </header>
  );
}
