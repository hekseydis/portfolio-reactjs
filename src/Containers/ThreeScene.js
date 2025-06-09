import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const modelStates = [
  {
    title: "Cybersecurity",
    description:
      "Intermediate knowledge in network protection, encryption methods, and basic threat detection techniques. Continuing to build practical experience securing systems.",
  },
  {
    title: "FrontEnd Development",
    description:
      "Comfortable building responsive and user-friendly interfaces using modern frontend tools. Solid understanding of layout, interactivity, and design principles.",
  },
  {
    title: "Automation and Robotics",
    description:
      "Has a solid intermediate foundation in robotics by applying automation techniques, programming robotic controllers, and working with sensors to execute precise tasks.",
  },
  {
    title: "Micro Controllers",
    description:
      "Capable of programming microcontrollers for real-time tasks, integrating basic sensors and actuators. Actively developing projects to improve embedded system skills.",
  },
];

export default function ThreeScene() {
  const containerRef = useRef();
  const descriptionRef = useRef();

  useEffect(() => {
    // Clean previous canvas if any
    if (containerRef.current.children.length > 0) {
      containerRef.current.innerHTML = "";
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const lights = [
      [50, 100, 50, 0.8],
      [-50, 50, -50, 0.3],
      [0, 50, -100, 0.2],
    ];
    lights.forEach(([x, y, z, i]) => {
      const light = new THREE.DirectionalLight(0xffffff, i);
      light.position.set(x, y, z);
      scene.add(light);
    });
    scene.add(new THREE.HemisphereLight(0xaaaaaa, 0x444444, 0.5));

    let object = null;
    const loader = new GLTFLoader();
    loader.load(
      "/models/dino/eeee.glb",
      (gltf) => {
        object = gltf.scene;
        scene.add(object);

        // Add mousemove listener only AFTER model loaded
        renderer.domElement.addEventListener("mousemove", onMouseMove);
      },
      undefined,
      (error) => console.error("GLTF error:", error)
    );

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onMouseMove(event) {
      if (!object) return;

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // Recursively check all child meshes for intersection
      const intersects = raycaster.intersectObjects(object.children, true);

      if (intersects.length > 0) {
        renderer.domElement.style.cursor = "pointer";
      } else {
        renderer.domElement.style.cursor = "default";
      }
    }

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    let isDragging = false;
    let previousMouseX = 0;
    let accumulatedRotation = 0;
    let currentStateIndex = 0;

    const updateDescription = (direction = "left") => {
      const state = modelStates[currentStateIndex];
      const container = descriptionRef.current;
      container.innerHTML = `
        <h3 class="model-title ${
          direction === "right" ? "slide-right" : "slide-left"
        }">${state.title}</h3>
        <p class="model-description">${state.description}</p>
      `;
    };

    const handleInteraction = (deltaX) => {
      if (!object) return;
      const speed = 0.005;
      object.rotation.y += deltaX * speed;
      accumulatedRotation = (accumulatedRotation + deltaX * speed) % (2 * Math.PI);

      let index = Math.round(accumulatedRotation / (Math.PI / 2));
      index = (index + modelStates.length) % modelStates.length;

      if (index !== currentStateIndex) {
        const direction = deltaX > 0 ? "right" : "left";
        currentStateIndex = index;
        updateDescription(direction);
      }
    };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMouseX = e.clientX;
    };
    const onMouseUp = () => (isDragging = false);
    const onMouseMoveDrag = (e) => {
      if (!isDragging) return;
      handleInteraction(e.clientX - previousMouseX);
      previousMouseX = e.clientX;
    };

    // Add drag listeners on renderer.domElement
    renderer.domElement.addEventListener("mousedown", onMouseDown);
    renderer.domElement.addEventListener("mouseup", onMouseUp);
    renderer.domElement.addEventListener("mouseleave", onMouseUp);
    renderer.domElement.addEventListener("mousemove", onMouseMoveDrag);

    // Touch events for mobile
    renderer.domElement.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMouseX = e.touches[0].clientX;
      }
    });
    renderer.domElement.addEventListener("touchmove", (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      handleInteraction(e.touches[0].clientX - previousMouseX);
      previousMouseX = e.touches[0].clientX;
    });
    renderer.domElement.addEventListener("touchend", () => (isDragging = false));

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    updateDescription();

    return () => {
      window.removeEventListener("resize", onResize);
      if (renderer.domElement) {
        renderer.domElement.removeEventListener("mousemove", onMouseMove);
        renderer.domElement.removeEventListener("mousedown", onMouseDown);
        renderer.domElement.removeEventListener("mouseup", onMouseUp);
        renderer.domElement.removeEventListener("mouseleave", onMouseUp);
        renderer.domElement.removeEventListener("mousemove", onMouseMoveDrag);
        renderer.domElement.removeEventListener("touchstart", () => {});
        renderer.domElement.removeEventListener("touchmove", () => {});
        renderer.domElement.removeEventListener("touchend", () => {});
        renderer.domElement.remove(); // Remove canvas from DOM
      }
      renderer.dispose(); // Clean up memory
    };
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        id="container3D"
        style={{ width: "100vw", height: "100vh" }}
      />
      <div
        ref={descriptionRef}
        id="modelDescription"
        className="description-overlay"
      />
    </div>
  );
}
