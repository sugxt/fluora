import "./style.css";
import { scene, camera, renderer } from "./scene/createScene.js";
import "./scene/lighting.js";
// import "./scene/modelLoader.js";
import "./scene/imageLoader.js"
import "./scene/titleText.js";
import "./scene/stars.js"; // Uncomment if needed
import animate from "./animation/animate.js";
// import './controls/orbitControls.js'; // Uncomment if needed

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.y = t * 0.009;
  camera.position.z = t * 0.001;
  camera.position.x = t * -0.005;
  camera.rotation.y = t * -0.0005;

  console.log(
    `Camera rotation: x=${camera.rotation.x.toFixed(
      2
    )}, y=${camera.rotation.y.toFixed(2)}, z=${camera.rotation.z.toFixed(2)}`
  );
  console.log(
    `Camera position: x=${camera.position.x.toFixed(
      2
    )}, y=${camera.position.y.toFixed(2)}, z=${camera.position.z.toFixed(2)}`
  );
}
document.body.onscroll = moveCamera;

animate();
