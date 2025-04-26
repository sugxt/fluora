import "./style.css";
import { scene, camera, renderer } from "./scene/createScene.js";
import "./scene/lighting.js";
// import './scene/modelLoader.js';
import "./scene/titleText.js";
import "./scene/stars.js"; // Uncomment if needed
import animate from "./animation/animate.js";
// import './controls/orbitControls.js'; // Uncomment if needed

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.y = t * 0.02;
  camera.position.z = t * 0.01;
  camera.position.x = t * -0.005;
}
document.body.onscroll = moveCamera;

animate();
