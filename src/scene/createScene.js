import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const backgroundShader = {
  uniforms: {
    time: { value: 0 },
    colorA: { value: new THREE.Color(0xe0f7fa) }, // Light blue
    colorB: { value: new THREE.Color(0xb3e5fc) }, // Lighter blue
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform vec3 colorA;
    uniform vec3 colorB;
    varying vec2 vUv;
    
    void main() {
      // Create a pulsing value using sine function
      float pulse = (sin(time * 0.5) + 1.0) * 0.5;
      
      // Create a gradient based on UV coordinates
      vec3 gradient = mix(colorA, colorB, vUv.y);
      
      // Apply the pulse to the gradient intensity
      vec3 finalColor = mix(gradient, gradient * 1.2, pulse);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
};

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.setZ(5);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  antialias: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// Handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

export { scene, camera, renderer };
