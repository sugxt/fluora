import * as THREE from 'three';
import { scene, camera } from './createScene.js';

const pointLight = new THREE.PointLight(0xFF98CE);
pointLight.position.set(0, -2, -5);
pointLight.intensity = 70;
scene.add(pointLight);

const followLight = new THREE.DirectionalLight(0xFFB6C1,20,50,2);
followLight.position.set(-1.0,0,-3);
followLight.castShadow = true
scene.add(followLight)

// // Set up shadow properties for the light
// followLight.shadow.mapSize.width = 1024;
// followLight.shadow.mapSize.height = 1024;
// followLight.shadow.camera.near = 0.5;
// followLight.shadow.camera.far = 500;
// followLight.shadow.bias = -0.000512

function onMouseMove(event) {
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
    // Project a point in front of the camera
    const vector = new THREE.Vector3(mouse.x, mouse.y, 0.8); // z = 0.5 = halfway between near and far planes
    vector.unproject(camera); // convert to world coordinates

  
    // Optional: offset light slightly toward camera
    followLight.position.copy(vector);
  }
  

window.addEventListener('mousemove', onMouseMove);

// Optional helpers
const lightHelper = new THREE.PointLightHelper(pointLight);
// scene.add(lightHelper);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);
