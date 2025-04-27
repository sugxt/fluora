import * as THREE from "three";
import { scene } from "./createScene.js";

// Array to store all leaf objects for animation
const leaves = [];

function addStar() {

  const leafShape = new THREE.Shape();

  // Define the leaf shape path (a simple ellipse with a pointed tip)
  leafShape.moveTo(0, 0); // Start at the center of the leaf

  // Create a simple elliptical path for the leaf
  leafShape.quadraticCurveTo(5, 10, 0, 15); // Right side curve (pointing to top)
  leafShape.quadraticCurveTo(-5, 10, 0, 0); // Left side curve (pointing to bottom)

  const leafGeometry = new THREE.ShapeGeometry(leafShape);

  // Create a white material for the leaf
  const leafMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff, // Dark pink (like DarkMagenta)
    emissive: 0xffb8e0, // Emit same dark pink light
    emissiveIntensity: 1, // Increase brightness if needed
    metalness: 0.3,
    roughness: 0.4,
  });

  // Create the mesh using the geometry and material
  const leafMesh = new THREE.Mesh(leafGeometry, leafMaterial);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(200));
  leafMesh.scale.set(0.3, 0.3, 0.3); // Scale the leaf mesh to make it smaller
  leafMesh.position.set(x, y, z);
  leafMesh.rotation.z = Math.random() * Math.PI; // Random rotation

  // Add random rotation speeds for each axis
  leafMesh.userData = {
    rotationSpeed: {
      x: THREE.MathUtils.randFloatSpread(0.005),
      y: THREE.MathUtils.randFloatSpread(0.005),
      z: THREE.MathUtils.randFloatSpread(0.005),
    },
  };

  scene.add(leafMesh);
  leaves.push(leafMesh); // Store the leaf for animation
}

// Create the leaves
Array(200).fill().forEach(addStar);

// Animation function to be called in your animation loop
export function animateLeaves() {
  leaves.forEach((leaf) => {
    // Apply the rotation based on the stored speed values
    leaf.rotation.x += leaf.userData.rotationSpeed.x;
    leaf.rotation.y += leaf.userData.rotationSpeed.y;
    leaf.rotation.z += leaf.userData.rotationSpeed.z;
  });
}
