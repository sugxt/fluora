import * as THREE from 'three';
import { scene } from './createScene.js';

const pointLight = new THREE.PointLight(0xFF98CE);
pointLight.position.set(0, -2, -5);
pointLight.intensity = 70;
scene.add(pointLight);

// Optional helpers
const lightHelper = new THREE.PointLightHelper(pointLight);
// scene.add(lightHelper);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);
