import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import constants from "../../constants";
import { CanvasContainer } from "./styles";

const CanvasScene = () => {
  const mountRef = useRef(document.createElement("div"));

  const getMaterials = () => {
    return {
      water: new THREE.MeshBasicMaterial({
        color: constants.colors.surfaces.water,
      }),
      land: new THREE.MeshBasicMaterial({
        color: constants.colors.surfaces.land,
      }),
      mountains: new THREE.MeshBasicMaterial({
        color: constants.colors.surfaces.mountains,
      }),
      snow: new THREE.MeshBasicMaterial({
        color: constants.colors.surfaces.snow,
      }),
    };
  };

  const getSphere = () => {
    const geometry = new THREE.SphereGeometry(15, 30, 30);
    const material = getMaterials().water;
    return new THREE.Mesh(geometry, material);
  };

  useEffect((): any => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    mountRef.current.appendChild(renderer.domElement);

    const sphere = getSphere();
    scene.add(sphere);
    camera.position.z = 30;

    const animate = function () {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return <CanvasContainer ref={mountRef}></CanvasContainer>;
};

export default CanvasScene;
