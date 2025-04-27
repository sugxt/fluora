import * as THREE from "three";
import { scene } from "./createScene";
import ArtOne from "../assets/images/art1.jpg"

const texture = new THREE.TextureLoader().load(ArtOne)
texture.colorSpace = THREE.SRGBColorSpace

const material = new THREE.MeshBasicMaterial({
    map:texture,
    transparent: true
});

const geometry = new THREE.PlaneGeometry(3.5,3.5);

export const planeOne = new THREE.Mesh(geometry, material);

planeOne.position.set(3.64, -6.56, -5);

scene.add(planeOne)

