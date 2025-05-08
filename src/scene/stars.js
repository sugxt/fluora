import * as THREE from "three";
import { scene } from "./createScene.js";

// Array to store all leaf objects for animation
const leaves = [];

function addStar() {
  const leafShape = new THREE.Shape();
  leafShape.moveTo(0, 0);
  leafShape.quadraticCurveTo(5, 10, 0, 15);
  leafShape.quadraticCurveTo(-5, 10, 0, 0);

  const leafGeometry = new THREE.ShapeGeometry(leafShape);

  const leafMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffb8e0,
    emissiveIntensity: 1,
    metalness: 0.3,
    roughness: 0.4,
  });

  const leafMesh = new THREE.Mesh(leafGeometry, leafMaterial);

  // Spherical placement
  const radius = 80 + Math.random() * 120;
  const theta = Math.random() * 2 * Math.PI;
  const phi = Math.acos(2 * Math.random() - 1);

  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);

  leafMesh.scale.set(0.3, 0.3, 0.3);
  leafMesh.position.set(x, y, z);
  leafMesh.rotation.z = Math.random() * Math.PI;

  leafMesh.userData = {
    rotationSpeed: {
      x: THREE.MathUtils.randFloatSpread(0.005),
      y: THREE.MathUtils.randFloatSpread(0.005),
      z: THREE.MathUtils.randFloatSpread(0.005),
    },
  };

  scene.add(leafMesh);
  leaves.push(leafMesh);
}

// Create the leaves
Array(500).fill().forEach(addStar);

// Animation function to be called in your animation loop
export function animateLeaves() {
  leaves.forEach((leaf) => {
    // Apply the rotation based on the stored speed values
    leaf.rotation.x += leaf.userData.rotationSpeed.x;
    leaf.rotation.y += leaf.userData.rotationSpeed.y;
    leaf.rotation.z += leaf.userData.rotationSpeed.z;
  });
}
