import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { camera, renderer } from '../scene/createScene.js';

const controls = new OrbitControls(camera, renderer.domElement);
export default controls;
