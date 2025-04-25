import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { scene } from "./createScene.js";
import { FontLoader } from "three/examples/jsm/Addons.js";

const loader = new FontLoader();

loader.load("/src/assets/fonts/floralFont.json", function (font) {
  console.log(font);
  const textGeometry = new TextGeometry("Fluora", {
    font: font,
    size: 1,
    depth: 0.2,
  });

  const textMaterial = new THREE.MeshStandardMaterial({
    color: 0xFFC0CB,
    emissive: 0xFFC0CB,
    emissiveIntensity: 0.5,
    emissiveColor: 0xFF69B4,
  });

  const textMesh = new THREE.Mesh(textGeometry, textMaterial);

  textMesh.position.set(-1.85, 0, -2);
  scene.add(textMesh);
});
