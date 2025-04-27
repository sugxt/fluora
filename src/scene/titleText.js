import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { scene } from "./createScene.js";
import { FontLoader } from "three/examples/jsm/Addons.js";

const loader = new FontLoader();

loader.load("/src/assets/fonts/BoldFloral.json", function (font) {
  const textGeometry = new TextGeometry("Fluora", {
    font: font,
    size: 1,
    depth: 0.2,
  });

  const textMaterial = new THREE.MeshStandardMaterial({
    color: 0xffc0cb,
    emissive: 0xffc0cb,
    emissiveIntensity: 0.5,
  });

  const textMesh = new THREE.Mesh(textGeometry, textMaterial);

  textMesh.position.set(-2.4, 0, -7);
  scene.add(textMesh);
});
