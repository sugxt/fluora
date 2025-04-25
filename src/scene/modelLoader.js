import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { scene } from './createScene.js';

const loader = new GLTFLoader();
loader.load(
  "/src/assets/models/flower_arch/scene.gltf",
  (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.position.set(0, -4, 4);
  },
  undefined,
  (error) => {
    console.error(error);
  }
);
