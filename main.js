import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  preserveDrawingBuffer: true,
  alpha: true,
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(350, 350);
camera.position.setZ(15);

renderer.render(scene, camera);

// Box

const geometry = new THREE.BoxGeometry(10, 10, 10, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xeeeeee, wireframe: true });
const box = new THREE.Mesh(geometry, material);

scene.add(box);


// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);


function animate() {

  requestAnimationFrame(animate);

  box.rotation.x += 0.01;
  box.rotation.y += 0.01;
  box.rotation.z += 0.01;

  // controls.update();

  renderer.render(scene, camera);
}

animate();
