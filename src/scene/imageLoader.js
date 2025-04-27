import * as THREE from "three";
import { scene } from "./createScene";
import ArtOne from "../assets/images/art1.jpg";
import ArtTwo from "../assets/images/art2.png";

// Helper to create a plane from an image
function createArtPlane(image, desiredHeight = 5) {
  const texture = new THREE.TextureLoader().load(image);
  texture.colorSpace = THREE.SRGBColorSpace;

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
  });

  // Set size based on image aspect ratio
  const img = new Image();
  img.src = image;
  
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material); // temp geometry
  
  img.onload = () => {
    const aspect = img.width / img.height;
    const width = desiredHeight * aspect;
    const geometry = new THREE.PlaneGeometry(width, desiredHeight);
    plane.geometry.dispose();
    plane.geometry = geometry;
  };

  return plane;
}

// Create planes
export const planeOne = createArtPlane(ArtOne, 3.5); // Height 3.5
export const planeTwo = createArtPlane(ArtTwo, 5);   // Height 5

// Set initial positions
planeOne.position.set(-1, -5.92, -3);
planeTwo.position.set(-3, -11.92, -2);
planeTwo.rotateY(0.6)

// Add to scene
scene.add(planeOne);
scene.add(planeTwo);
