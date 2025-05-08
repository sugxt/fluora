import * as THREE from "three";
import {
  EffectComposer,
  FilmPass,
  FXAAShader,
  RenderPass,
} from "three/examples/jsm/Addons.js";
const scene = new THREE.Scene();
const loadingManager = new THREE.LoadingManager();
scene.background = new THREE.Color(0xffffff);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  antialias: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.render(scene, camera);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
// Handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

export { scene, camera, renderer, composer };
