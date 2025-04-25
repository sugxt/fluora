import './style.css';
import { scene, camera, renderer } from './scene/createScene.js';
import './scene/lighting.js';
// import './scene/modelLoader.js';
import './scene/titleText.js';
import './scene/stars.js'; // Uncomment if needed
import animate from './animation/animate.js';
// import './controls/orbitControls.js'; // Uncomment if needed

animate();
