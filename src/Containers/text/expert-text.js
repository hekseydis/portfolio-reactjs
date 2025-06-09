import React from "react";
import '../../css/style.css';
import ThreeScene from '../ThreeScene';

export default function ExpText() {
  return (
    <section className="my-experties-content">
      <div className="box-container">
        <h1 className="my-expertise">MY EXPERTISE</h1>
        <h2 className="my-expertise-sub">As a computer engineer</h2>
        <section className="threejs-app">
          <ThreeScene className="my-3d-model" />
          
        </section>
      </div>
    </section>
  );
}
