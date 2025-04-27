import controls from "../controls/orbitControls.js";
import { renderer, scene, camera } from "../scene/createScene.js";
import { planeOne } from "../scene/imageLoader.js";
import { animateLeaves } from "../scene/stars.js";

let time = 0;
const swaySpeed = 0.0025; // Controls how fast it sways
const swayAmount = 0.05; // Controls how much it sways (keep small for subtle effect)

function animate() {
  requestAnimationFrame(animate);
  // controls.update(); // Uncomment if using controls
  animateLeaves(); // Call the function to animate leaves

  if (planeOne) {
    time += swaySpeed;
    planeOne.rotation.z = Math.sin(time) * swayAmount;
    planeOne.position.x = 3.64 + Math.sin(time * 1.5) * swayAmount * 0.5;
    planeOne.position.y = -6.56 + Math.cos(time * 2) * swayAmount * 0.5;
  }

  renderer.render(scene, camera);
}

export default animate;
