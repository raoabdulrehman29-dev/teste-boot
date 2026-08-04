<template>
  <div ref="canvasHost" class="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  Scene, PerspectiveCamera, WebGLRenderer, Group, Vector3, Color,
  BufferGeometry, BufferAttribute, LineBasicMaterial, LineSegments,
  PointsMaterial, Points, CanvasTexture, NormalBlending, AdditiveBlending,
} from "three";

const canvasHost = ref(null);

let renderer, scene, camera, animationId;
let lineSystem, tipPoints;
let burstGroup;
let targetRotationX = 0;
let targetRotationY = 0;

const COLOR_START = new Color("#edf7ff");
const COLOR_END = new Color("#ede9fe");
const COLOR_TIP = new Color("#faf5ff");

const TOTAL_LINES = 320;

function createGlowDotTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.35, "rgba(138, 116, 206, 0.85)");
  gradient.addColorStop(0.75, "rgba(74, 58, 126, 0.35)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function buildBurstGeometry() {
  const linePositions = new Float32Array(TOTAL_LINES * 6);
  const lineColors = new Float32Array(TOTAL_LINES * 6);
  const tipPositions = new Float32Array(TOTAL_LINES * 3);

  const directions = [];
  const lengths = [];

  // Position origin centered at the bottom horizon
  const origin = new Vector3(0, -6.8, 0);

  for (let i = 0; i < TOTAL_LINES; i++) {
    const phi = (Math.random() - 0.5) * Math.PI * 0.88;
    const theta = Math.PI * 0.12 + Math.random() * Math.PI * 0.76;

    const dir = new Vector3(
      Math.sin(theta) * Math.sin(phi),
      Math.cos(theta),
      Math.sin(theta) * Math.cos(phi) * 0.3
    ).normalize();

    const length = 5.5 + Math.random() * 6.0;

    directions.push(dir);
    lengths.push(length);


    linePositions[i * 6] = origin.x;
    linePositions[i * 6 + 1] = origin.y;
    linePositions[i * 6 + 2] = origin.z;

    lineColors[i * 6] = COLOR_START.r;
    lineColors[i * 6 + 1] = COLOR_START.g;
    lineColors[i * 6 + 2] = COLOR_START.b;


    const tipPos = origin.clone().addScaledVector(dir, length);

    linePositions[i * 6 + 3] = tipPos.x;
    linePositions[i * 6 + 4] = tipPos.y;
    linePositions[i * 6 + 5] = tipPos.z;

    lineColors[i * 6 + 3] = COLOR_END.r;
    lineColors[i * 6 + 4] = COLOR_END.g;
    lineColors[i * 6 + 5] = COLOR_END.b;

    tipPositions[i * 3] = tipPos.x;
    tipPositions[i * 3 + 1] = tipPos.y;
    tipPositions[i * 3 + 2] = tipPos.z;
  }

  const lineGeo = new BufferGeometry();
  lineGeo.setAttribute("position", new BufferAttribute(linePositions, 3));
  lineGeo.setAttribute("color", new BufferAttribute(lineColors, 3));

  const lineMat = new LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    blending: NormalBlending,
  });

  lineSystem = new LineSegments(lineGeo, lineMat);


  const tipGeo = new BufferGeometry();
  tipGeo.setAttribute("position", new BufferAttribute(tipPositions, 3));

  const tipMat = new PointsMaterial({
    size: 0.42,
    map: createGlowDotTexture(),
    transparent: true,
    opacity: 0.95,
    blending: AdditiveBlending,
    depthWrite: false,
  });

  tipPoints = new Points(tipGeo, tipMat);

  burstGroup = new Group();
  burstGroup.add(lineSystem);
  burstGroup.add(tipPoints);
  burstGroup.userData = { directions, lengths, origin };

  scene.add(burstGroup);
}

function buildScene(width, height) {
  scene = new Scene();

  camera = new PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0, 16);

  renderer = new WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  canvasHost.value.appendChild(renderer.domElement);

  buildBurstGeometry();
}

function animate() {
  animationId = requestAnimationFrame(animate);
  const t = performance.now() * 0.0015;

  if (burstGroup) {
    burstGroup.rotation.y += (targetRotationY - burstGroup.rotation.y) * 0.05;
    burstGroup.rotation.x += (targetRotationX - burstGroup.rotation.x) * 0.05;

    const tipPosAttr = tipPoints.geometry.attributes.position;
    const linePosAttr = lineSystem.geometry.attributes.position;
    const { directions, lengths, origin } = burstGroup.userData;

    for (let i = 0; i < TOTAL_LINES; i++) {
      const pulse = Math.sin(t * 2 + i * 0.2) * 0.25;
      const currentLength = lengths[i] + pulse;
      const dir = directions[i];

      const tipX = origin.x + dir.x * currentLength;
      const tipY = origin.y + dir.y * currentLength;
      const tipZ = origin.z + dir.z * currentLength;

      linePosAttr.setXYZ(i * 2 + 1, tipX, tipY, tipZ);
      tipPosAttr.setXYZ(i, tipX, tipY, tipZ);
    }

    linePosAttr.needsUpdate = true;
    tipPosAttr.needsUpdate = true;
  }

  renderer.render(scene, camera);
}

function handleMouseMove(e) {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const mouseX = (e.clientX / windowWidth - 0.5) * 2;
  const mouseY = (e.clientY / windowHeight - 0.5) * 2;

  targetRotationY = mouseX * 0.25;
  targetRotationX = -mouseY * 0.15;
}

function handleResize() {
  if (!canvasHost.value || !renderer || !camera) return;
  const width = canvasHost.value.clientWidth;
  const height = canvasHost.value.clientHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

onMounted(() => {
  if (typeof window !== "undefined" && window.__IS_PRERENDER__) {
    return;
  }
  const width = canvasHost.value.clientWidth;
  const height = canvasHost.value.clientHeight;
  buildScene(width, height);
  animate();

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("resize", handleResize);
  renderer?.dispose();
  if (renderer?.domElement && canvasHost.value?.contains(renderer.domElement)) {
    canvasHost.value.removeChild(renderer.domElement);
  }
});
</script>