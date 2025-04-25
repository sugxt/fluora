import { renderer, scene, camera } from '../scene/createScene.js';
import { animateLeaves } from '../scene/stars.js';
// import controls from '../controls/orbitControls.js'; // Optional

function animate() {
  requestAnimationFrame(animate);
  // controls.update(); // Uncomment if using controls
  animateLeaves(); // Call the function to animate leaves
  renderer.render(scene, camera);
}

export default animate;
