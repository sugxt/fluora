import "./style.css";
import { scene, camera, renderer } from "./scene/createScene.js";
import "./scene/lighting.js";
import "./scene/imageLoader.js";
import "./scene/titleText.js";
import "./scene/stars.js"; // Optional
import animate from "./animation/animate.js";

function moveCamera() {
  // Scroll progress between 0 and 1
  const scrollProgress =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);

  // Adjust the movement as you like
  camera.position.y = scrollProgress * 6;
  camera.position.z = scrollProgress * -0.2;
  camera.position.x = scrollProgress * -0.1;
  camera.rotation.y = scrollProgress * -0.5;
  
}

animate(); // Starts the animation loop

function LogLocation() {
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
document.body.onscroll = LogLocation();



animate();
export { moveCamera };
