import { renderer, scene, camera, composer } from "../scene/createScene.js";
import { moveCamera } from "../main.js";
import { animateLeaves } from "../scene/stars.js";
import {
  planeOne,
  planeTwo,
  planeThree,
  planeFour,
} from "../scene/imageLoader.js";
import { textMesh } from "../scene/titleText.js";
// Collect all planes you want to sway
const swayingPlanes = [planeOne, planeTwo, planeThree, planeFour, textMesh];

function animate() {
  requestAnimationFrame(animate);

  const time = Date.now() * 0.001; // seconds

  // Animate swaying for all planes
  swayingPlanes.forEach((plane, index) => {
    if (!plane) return; // in case a plane isn't loaded yet
    plane.rotation.z = Math.sin(time * (0.5 + index * 0.1)) * 0.05;
    plane.rotation.x = Math.sin(time * (0.3 + index * 0.1)) * 0.015;
    if (!textMesh) return;
    textMesh.rotation.z = Math.sin(time * (0.5 + index * 0.1)) * 0.035;
    textMesh.rotation.y = Math.sin(time * (0.3 + index * 0.1)) * 0.06;
    // textMesh.rotation.x = Math.sin(time * (0.3 + index * 0.1)) * 0.015;
  });
  moveCamera(); // Move camera based on scroll progress
  animateLeaves(); // Animate the floating leaves
  composer.render();
}

export default animate;
