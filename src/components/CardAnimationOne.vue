<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  Scene, PerspectiveCamera, WebGLRenderer, Mesh,
  IcosahedronGeometry, TorusGeometry, MeshStandardMaterial,
  AmbientLight, PointLight, BufferGeometry, BufferAttribute,
  PointsMaterial, Points, Clock,
} from "three";

const container = ref(null);
let renderer, scene, camera, mesh, innerMesh, torusMesh, particlesMesh, animationId, resizeObserver;

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;

const handleMouseMove = (event) => {
  mouseX = event.clientX / window.innerWidth - 0.5;
  mouseY = event.clientY / window.innerHeight - 0.5;
};

onMounted(() => {
  const el = container.value;
  const width = el.clientWidth;
  const height = el.clientHeight;

  scene = new Scene();
  camera = new PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.z = 6;

  renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  el.appendChild(renderer.domElement);

  scene.add(new AmbientLight(0xffffff, 0.7));
  const pointLight = new PointLight(0x2bb6c4, 3);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  // Emissive material replaces the bloom post-processing pass -
  // gives a similar "glowing" look without the heavy multi-pass
  // shader pipeline that was costing 3+ seconds of CPU time
  const geometry = new IcosahedronGeometry(1.4, 1);
  const material = new MeshStandardMaterial({
    color: 0x2bb6c4,
    emissive: 0x2bb6c4,
    emissiveIntensity: 0.6,
    wireframe: true,
    transparent: true,
    opacity: 0.5,
  });
  mesh = new Mesh(geometry, material);
  scene.add(mesh);

  const coreGeometry = new IcosahedronGeometry(0.65, 1);
  const coreMaterial = new MeshStandardMaterial({
    color: 0x185464,
    emissive: 0x185464,
    emissiveIntensity: 0.5,
    transparent: true,
    opacity: 0.3,
  });
  innerMesh = new Mesh(coreGeometry, coreMaterial);
  mesh.add(innerMesh);

  const torusGeometry = new TorusGeometry(2.1, 0.015, 16, 100);
  const torusMaterial = new MeshStandardMaterial({
    color: 0x2bb6c4,
    emissive: 0x2bb6c4,
    emissiveIntensity: 0.4,
    transparent: true,
    opacity: 0.25,
  });
  torusMesh = new Mesh(torusGeometry, torusMaterial);
  scene.add(torusMesh);

  const particlesCount = 120;
  const posArray = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
  }
  const particlesGeometry = new BufferGeometry();
  particlesGeometry.setAttribute("position", new BufferAttribute(posArray, 3));
  const particlesMaterial = new PointsMaterial({
    size: 0.025,
    color: 0x2bb6c4,
    transparent: true,
    opacity: 0.35,
  });
  particlesMesh = new Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  window.addEventListener("mousemove", handleMouseMove);

  const clock = new Clock();
  const animate = () => {
    animationId = requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    if (!prefersReducedMotion) {
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mesh.rotation.x = t * 0.15 + targetY * 1.5;
      mesh.rotation.y = t * 0.22 + targetX * 1.5;
      mesh.position.y = Math.sin(t * 0.6) * 0.15;

      torusMesh.rotation.x = t * 0.1;
      torusMesh.rotation.y = t * -0.15;

      particlesMesh.rotation.y = t * 0.04;
    }

    renderer.render(scene, camera); // direct render, no composer
  };
  animate();

  resizeObserver = new ResizeObserver(() => {
    const w = el.clientWidth;
    const h = el.clientHeight;
    if (w === 0 || h === 0) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
  resizeObserver.observe(el);
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  resizeObserver?.disconnect();
  window.removeEventListener("mousemove", handleMouseMove);

  scene?.traverse((obj) => {
    obj.geometry?.dispose();
    if (obj.material) {
      Array.isArray(obj.material) ? obj.material.forEach((m) => m.dispose()) : obj.material.dispose();
    }
  });

  renderer?.dispose();
  renderer?.domElement.remove();
});
</script>

<template>
  <div ref="container" class="absolute inset-0 -z-10 pointer-events-none opacity-70 overflow-hidden rounded-[inherit]" aria-hidden="true"></div>
</template>