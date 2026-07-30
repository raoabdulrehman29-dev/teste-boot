<template>
  <div ref="canvasHost" class="absolute inset-0 z-0 pointer-events-none mx-auto overflow-hidden"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import reactLogo from "@/assets/logos/react.svg?raw";
import vueLogo from "@/assets/logos/vuedotjs.svg?raw";
import htmlLogo from "@/assets/logos/html5.svg?raw";
import cssLogo from "@/assets/logos/css.svg?raw";
import tsLogo from "@/assets/logos/typescript.svg?raw";
import gitLogo from "@/assets/logos/git.svg?raw";
import dockerLogo from "@/assets/logos/docker.svg?raw";
import vscodeLogo from "@/assets/logos/vscodium.svg?raw";
import nodeLogo from "@/assets/logos/nodedotjs.svg?raw";
import tailwindLogo from "@/assets/logos/tailwindcss.svg?raw";

import * as THREE from "three";

const canvasHost = ref(null);

let renderer, scene, camera, animationId;
let mouseX = 0, mouseY = 0;
let rawMouseX = 0, rawMouseY = 0;
let skyParticles;
const meshes = [];
const tempVec = new THREE.Vector3();

// EXACT ORIGINAL COLOR PALETTE
const COLORS = {
  tealDark: 0x185464,
  tealBright: 0x2bb6c4,
  tealSoft: 0x1a7182,
  tealDeep: 0x135561,
  cyanGlow: 0x60a5fa,
  emeraldAccent: 0x34d399,
  slateMuted: 0x1f2937,
};
const SVG_LOGOS = {
  react: reactLogo,
  vue: vueLogo,
  html5: htmlLogo,
  css3: cssLogo,
  tailwind: tailwindLogo,
  typescript: tsLogo,
  nodejs: nodeLogo,
  git: gitLogo,
  docker: dockerLogo,
  vscode: vscodeLogo,
};

const svgLoader = new SVGLoader();

// --- ORIGINAL SHAPE GENERATORS (UNTOUCHED) ---


function extrudeShape(shape, depth, refRadius) {
  const bevelSize = Math.min(refRadius * 0.16, depth * 0.4, 0.22);
  const bevelThickness = bevelSize;

  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness,
    bevelSize,
    bevelSegments: 8,
    curveSegments: 24,
  });
  geo.center();
  geo.computeVertexNormals();
  return geo;
}
function buildMeshFromSVG(svgText, color, depth) {
  return new Promise((resolve, reject) => {
    try {
      const data = svgLoader.parse(svgText);

      const group = new THREE.Group();

      data.paths.forEach((path) => {
        const shapes = SVGLoader.createShapes(path);

        shapes.forEach((shape) => {
          const geometry = new THREE.ExtrudeGeometry(shape, {
            depth: 1.15,
            bevelEnabled: true,
            bevelSize: 0.32,
            bevelThickness: 0.32,
            bevelSegments: 20,
            curveSegments: 32,
          });

          geometry.center();
          geometry.computeVertexNormals();

          const material = new THREE.MeshPhysicalMaterial({
            color,
            roughness: 0.22,
            metalness: 0.15,
            clearcoat: 0.9,
            clearcoatRoughness: 0.1,
            emissive: color,
            emissiveIntensity: 0.2,
          });

          const mesh = new THREE.Mesh(geometry, material);

          mesh.castShadow = true;

          const border = createBlurredBorderOutline(geometry);
          mesh.add(border);

          group.add(mesh);
        });
      });

      const box = new THREE.Box3().setFromObject(group);
      const bounds = new THREE.Vector3();
      box.getSize(bounds);

      const TARGET_SIZE = 2.35;

      const scale =
        TARGET_SIZE /
        Math.max(bounds.x, bounds.y, bounds.z);

      group.scale.setScalar(scale);

      box.setFromObject(group);

      const center = new THREE.Vector3();
      box.getCenter(center);

      group.position.sub(center);

      group.rotation.x = Math.PI;
      group.rotation.z = Math.PI;

      resolve(group);

    } catch (err) {
      reject(err);
    }
  });
}

// EXACT ORIGINAL SHAPE LAYOUT
const SHAPE_LAYOUT = [
  {
    kind: "react",
    x: -18,
    y: 4,
    z: 2,
    depth: 0.05,
    colorKey: "react",
  },

  {
    kind: "vue",
    x: -15,
    y: -5,
    z: -1,
    depth: 0.3,
    colorKey: "vue",
  },

  {
    kind: "html5",
    x: -21,
    y: -1,
    z: -4,
    depth: 0.55,
    colorKey: "html5",
  },

  {
    kind: "css3",
    x: -13,
    y: 7,
    z: -6,
    depth: 0.75,
    colorKey: "css3",
  },

  {
    kind: "tailwind",
    x: -19,
    y: -7.5,
    z: -8,
    depth: 0.9,
    colorKey: "tailwind",
  },

  {
    kind: "vscode",
    x: 0,
    y: -2,
    z: -11,
    depth: 1,
    colorKey: "vscode",
  },

  {
    kind: "git",
    x: 18,
    y: 4.5,
    z: 2,
    depth: 0.05,
    colorKey: "git",
  },

  {
    kind: "javascript",
    x: 15,
    y: -4,
    z: -1,
    depth: 0.3,
    colorKey: "javascript",
  },

  {
    kind: "typescript",
    x: 21,
    y: 3,
    z: -4,
    depth: 0.55,
    colorKey: "typescript",
  },

  {
    kind: "nodejs",
    x: 13,
    y: -6,
    z: -6,
    depth: 0.75,
    colorKey: "nodejs",
  },

  {
    kind: "docker",
    x: 19,
    y: 6,
    z: -8,
    depth: 0.9,
    colorKey: "docker",
  },
];



function createBlurredBorderOutline(geometry) {
  const group = new THREE.Group();

  const borderMat = new THREE.MeshBasicMaterial({
    color: 0x2bb6c4,
    side: THREE.BackSide,
    transparent: true,
    opacity: 0.35,
  });
  const borderMesh = new THREE.Mesh(geometry, borderMat);
  borderMesh.scale.setScalar(1.12);
  group.add(borderMesh);

  const innerGlowMat = new THREE.MeshBasicMaterial({
    color: 0x60a5fa,
    side: THREE.BackSide,
    transparent: true,
    opacity: 0.5,
  });
  const innerMesh = new THREE.Mesh(geometry, innerGlowMat);
  innerMesh.scale.setScalar(1.05);
  group.add(innerMesh);

  return group;
}

// --- BACKGROUND EFFECT: Soft Light Sky Dust / Breezy Cloud Particles ---
function createLightSkyEffect() {
  const particleCount = 180;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 65;
    positions[i + 1] = (Math.random() - 0.5) * 35 + 2; // Sky height bias
    positions[i + 2] = (Math.random() - 0.5) * 30 - 8;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  // In-memory Canvas Soft Blur Sprite Texture
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255, 255, 255, 0.9)");
  gradient.addColorStop(0.4, "rgba(43, 182, 196, 0.4)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);

  const material = new THREE.PointsMaterial({
    size: 0.8,
    map: texture,
    transparent: true,
    opacity: 0.45,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  skyParticles = new THREE.Points(geometry, material);
  scene.add(skyParticles);
}
async function buildScene(width, height) {
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xffffff, 18, 55);

  camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
  camera.position.set(0, -1, 14);

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  canvasHost.value.appendChild(renderer.domElement);

  // Lighting
  scene.add(new THREE.HemisphereLight(0xffffff, 0x08242f, 1.3));
  scene.add(new THREE.AmbientLight(0x2bb6c4, 0.45));

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
  keyLight.position.set(6, 14, 16);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(1024, 1024);
  keyLight.shadow.camera.left = -30;
  keyLight.shadow.camera.right = 30;
  keyLight.shadow.camera.top = 30;
  keyLight.shadow.camera.bottom = -30;
  keyLight.shadow.camera.near = 1;
  keyLight.shadow.camera.far = 50;
  scene.add(keyLight);

  const rimLight1 = new THREE.PointLight(0x2bb6c4, 2.2, 70);
  rimLight1.position.set(-16, 6, 8);
  scene.add(rimLight1);

  const rimLight2 = new THREE.PointLight(0x60a5fa, 1.6, 70);
  rimLight2.position.set(16, -6, 8);
  scene.add(rimLight2);

  const shadowCatcher = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 60),
    new THREE.ShadowMaterial({ opacity: 0.35 })
  );
  shadowCatcher.position.set(0, -3.5, -12);
  shadowCatcher.receiveShadow = true;
  scene.add(shadowCatcher);

  // Perspective Floor Grid
  const floorGrid = new THREE.GridHelper(140, 28, 0x185464, 0x113b45);
  floorGrid.position.set(0, -6.5, -8);
  floorGrid.rotation.x = Math.PI / 15;
  scene.add(floorGrid);

  // Sky Dust Background Addition
  createLightSkyEffect();

  // Create Original Extruded Shapes
  for (const def of SHAPE_LAYOUT) {
    const baseColor =
      COLORS[def.colorKey] || COLORS.tealBright;

    const mesh = await buildMeshFromSVG(
      SVG_LOGOS[def.kind],
      baseColor,
      0.9
    );

    mesh.position.set(def.x, def.y, def.z);

    mesh.rotation.set(
      (Math.random() - 0.5) * 0.6,
      (Math.random() - 0.5) * 0.6,
      (Math.random() - 0.5) * 0.4
    );

    const spinSpeed = 0.006 - def.depth * 0.003;

    mesh.userData.spin = {
      x:
        (Math.random() > 0.5 ? 1 : -1) *
        spinSpeed *
        (0.6 + Math.random() * 0.6),

      y:
        (Math.random() > 0.5 ? 1 : -1) *
        spinSpeed *
        (0.6 + Math.random() * 0.6),
    };

    mesh.userData.drift = {
      freqX: 0.1 + Math.random() * 0.12,
      freqY: 0.1 + Math.random() * 0.12,
      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,
      ampX: 0.4 + Math.random() * 0.3,
      ampY: 0.4 + Math.random() * 0.3,
    };

    mesh.userData.basePos = {
      x: def.x,
      y: def.y,
      z: def.z,
    };

    mesh.userData.magnet = {
      x: 0,
      y: 0,
    };

    scene.add(mesh);

    meshes.push(mesh);
  }
}

const PROXIMITY_RADIUS = 0.85;
const MAX_PULL = 3.8;

function animate() {
  animationId = requestAnimationFrame(animate);
  const t = performance.now() * 0.001;
  const ndcMouseY = -mouseY;

  if (camera) {
    camera.position.x += (rawMouseX * 1.8 - camera.position.x) * 0.05;
    camera.position.y += (-rawMouseY * 1.4 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  }

  // Animate Background Sky Dust Breeze
  if (skyParticles) {
    skyParticles.rotation.y = t * 0.02;
    skyParticles.position.y = Math.sin(t * 0.5) * 0.6;
  }

  // Animate Original Shapes
  meshes.forEach((mesh) => {
    const d = mesh.userData.drift;
    const driftX = Math.sin(t * d.freqX + d.phaseX) * d.ampX;
    const driftY = Math.cos(t * d.freqY + d.phaseY) * d.ampY;

    tempVec.set(
      mesh.userData.basePos.x + driftX,
      mesh.userData.basePos.y + driftY,
      mesh.userData.basePos.z
    );
    tempVec.project(camera);

    const dx = mouseX - tempVec.x;
    const dy = ndcMouseY - tempVec.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    let influence = Math.max(0, 1 - dist / PROXIMITY_RADIUS);
    influence = influence * influence * (3 - 2 * influence);

    const targetMagnetX = dx * influence * MAX_PULL;
    const targetMagnetY = dy * influence * MAX_PULL;

    mesh.userData.magnet.x += (targetMagnetX - mesh.userData.magnet.x) * 0.08;
    mesh.userData.magnet.y += (targetMagnetY - mesh.userData.magnet.y) * 0.08;

    mesh.position.x = mesh.userData.basePos.x + driftX + mesh.userData.magnet.x;
    mesh.position.y = mesh.userData.basePos.y + driftY + mesh.userData.magnet.y;

    const spinBoost = 1 + influence * 7.5;
    mesh.rotation.x += mesh.userData.spin.x * spinBoost;
    mesh.rotation.y += mesh.userData.spin.y * spinBoost;
  });

  renderer.render(scene, camera);
}

function handleMouseMove(e) {
  const host = canvasHost.value;
  if (!host) return;
  const rect = host.getBoundingClientRect();
  mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
  mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

  rawMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  rawMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
}

function handleResize() {
  if (!canvasHost.value || !renderer || !camera) return;
  const width = canvasHost.value.clientWidth;
  const height = canvasHost.value.clientHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

onMounted(async () => {
  if (typeof window === "undefined") return;

  const width = canvasHost.value.clientWidth;
  const height = canvasHost.value.clientHeight;

  await buildScene(width, height);

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