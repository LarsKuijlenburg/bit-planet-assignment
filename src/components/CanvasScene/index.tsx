import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { getImageFromCanvas } from "../../surfaceGenerator";
import { CanvasContainer } from "./styles";

const CanvasScene: React.FC<{ onFinishLoading: () => void }> = ({
  onFinishLoading,
}) => {
  const mountRef = useRef(document.createElement("div"));

  useEffect((): any => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    const controls = new OrbitControls(camera, renderer.domElement);

    renderer.setSize(window.innerWidth, window.innerHeight);

    mountRef.current.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    const geometry = new THREE.SphereGeometry(5, 20, 20);
    const texture = loader.load(getImageFromCanvas());
    const materials = new THREE.MeshBasicMaterial({
      map: texture,
    });

    const sphere = new THREE.Mesh(geometry, materials);
    scene.add(sphere);
    camera.position.z = 10;
    controls.update();

    const animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return <CanvasContainer ref={mountRef} />;
};

export default CanvasScene;
