import * as THREE from 'three';
import { scene } from './createScene.js';

const pointLight = new THREE.PointLight(0xFF98CE);
pointLight.position.set(0, 5, 3);
pointLight.intensity = 50;
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Optional helpers
const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);
