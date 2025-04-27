import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { scene } from './createScene.js';

const loader = new GLTFLoader();
loader.load(
  "/src/assets/models/flower_ring/scene.gltf",
  (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.position.set(0, 0, -7);
    gltf.scene.scale.set(200,200,200)
    gltf.scene.rotateY(45)
  },
  undefined,
  (error) => {
    console.error(error);
  }
);
