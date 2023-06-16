import '/style.css';
import * as THREE from "/node_modules/three/build/three.module.js";
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(74, 1, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  preserveDrawingBuffer: true,
  alpha: true,
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize((window.innerHeight * 0.3), (window.innerHeight * 0.3));
camera.position.setZ(13);

renderer.render(scene, camera);

// box

// Surface X
const material = new THREE.MeshBasicMaterial({ color: 0xeeeeee, wireframe: true });
const geometryY = new THREE.BoxGeometry(9, 9, 9, .99);
const surfaceY = new THREE.Mesh(geometryY, material);
// Surface Y
const geometryX = new THREE.BoxGeometry(9, 9, 9, .99);
const surfaceX = new THREE.Mesh(geometryX, material);

surfaceX.rotation.y += 1.549
scene.add(surfaceX, surfaceY);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping
controls.enableZoom = false
controls.enablePan = false

// Animation Loop

function animate() {

  requestAnimationFrame(animate);

  let rotationSpeed = 0.003

  surfaceY.rotation.x += rotationSpeed;
  surfaceY.rotation.y += rotationSpeed;
  surfaceY.rotation.z += rotationSpeed;


  surfaceX.rotation.x -= rotationSpeed;
  surfaceX.rotation.y -= rotationSpeed;
  surfaceX.rotation.z -= rotationSpeed;

  controls.update();

  renderer.render(scene, camera);
}

animate();

// resize
window.addEventListener("resize", () => {
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize((window.innerHeight * 0.3), (window.innerHeight * 0.3));
})
