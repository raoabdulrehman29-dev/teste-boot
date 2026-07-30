<template>
  <div class="w-full" ref="footerRoot">
    <div class="mx-auto mb-2 w-full px-2 md:px-8">
 <!-- Footer Shell Container -->
<div 
  class="footer-shell relative overflow-hidden rounded-2xl bg-gradient-to-tr from-[#507c9e] to-[#4a3a7e] text-white md:px-10 2xl:pt-10"
  @mousemove="handleCanvasMouseMove"
  @mouseleave="handleCanvasMouseLeave"
>
  <!-- Interactive Canvas Background -->
  <canvas ref="bgCanvas" class="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-80"></canvas>

        <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div class="footer-glow footer-glow--one"></div>
          <div class="footer-glow footer-glow--two"></div>
        </div>

        <div class="relative z-10 max-w-[1450px] mx-auto">
          <div
            data-reveal
            class="flex w-full flex-col items-start justify-between gap-10 px-4 py-6 md:pt-[80px] md:pb-[25px] md:px-0 lg:flex-row lg:px-8 min-[1500px]:py-[2rem] 2xl:py-[2rem]"
          >
            <div class="w-full lg:w-1/2">
              <p class="mb-1 text-lg font-semibold sm:mb-2">[ Get In Touch ]</p>
              <h2
                data-split
                class="text-[28px] font-semibold leading-tight md:text-[35px] lg:text-[45px] xl:text-[60px]"
              >
                Reliable Digital Solutions
              </h2>
            </div>

            <div class="grid w-full gap-6 md:grid-cols-2 lg:w-1/2">
              <div>
                <h3 class="font-semibold text-base sm:text-lg xl:my-2">Call Us</h3>
                <a
                  href="https://wa.me/923394025020"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-lg transition-all duration-300 hover:text-[#2bb6c4] hover:scale-105 inline-block"
                >
                  +92 (339) 4025020
                </a>
              </div>

              <div>
                <h3 class="font-semibold text-base sm:text-lg xl:my-2">Our Location</h3>
                <p class="text-lg">
                  Plaza no 5, Block D Commercial Basement, Architects, Engineers Housing Society,
                  Lahore, 54000
                </p>
              </div>

              <div>
                <h3 class="font-semibold text-base sm:text-lg xl:my-2">Email</h3>
                <a
                  href="mailto:info@invictushub.com"
                  class="text-lg underline transition-all duration-300 hover:text-[#2bb6c4] hover:scale-105 inline-block"
                >
                  info@invictushub.com
                </a>
              </div>

              <div>
                <h3 class="font-semibold text-base sm:text-lg xl:my-2">Follow Us</h3>
                <div class="flex gap-4 mt-2">
                  <a
                    href="https://www.linkedin.com/company/invictus-hub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Invictus Hub on LinkedIn"
                    class="magnet-icon group transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 inline-block"
                    @mousemove="handleMagnetMove"
                    @mouseleave="handleMagnetLeave"
                  >
                    <svg
                      class="h-6 p-0 m-0 text-white transition-colors duration-300 group-hover:text-[#0A66C2]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                    >
                      <path
                        d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/p/Invictus-Hub-100086688422372"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Invictus Hub on Facebook"
                    class="magnet-icon group transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 inline-block"
                    @mousemove="handleMagnetMove"
                    @mouseleave="handleMagnetLeave"
                  >
                    <svg
                      class="h-6 p-0 m-0 text-white transition-colors duration-300 group-hover:text-[#1877F2]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                    >
                      <path
                        d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="mx-auto my-1 h-[2px] w-full rounded-full bg-gray-400"></div>

          <div class="footer-marquee" data-reveal>
            <div class="footer-marquee__track">
              <span v-for="n in 2" :key="n" class="footer-marquee__group">
                <span class="footer-marquee__item">Let's Build Something Great</span>
                <span class="footer-marquee__dot">•</span>
                <span class="footer-marquee__item">Web Development</span>
                <span class="footer-marquee__dot">•</span>
                <span class="footer-marquee__item">Mobile Apps</span>
                <span class="footer-marquee__dot">•</span>
                <span class="footer-marquee__item">E-Commerce</span>
                <span class="footer-marquee__dot">•</span>
                <span class="footer-marquee__item">UX/UI Design</span>
                <span class="footer-marquee__dot">•</span>
                <span class="footer-marquee__item">Automation</span>
                <span class="footer-marquee__dot">•</span>
              </span>
            </div>
          </div>

          <div
            data-reveal
            class="flex w-full flex-col gap-8 px-4 py-4 sm:py-[24px] md:px-0 lg:flex-row lg:items-start lg:justify-between lg:px-8 min-[1500px]:py-6"
          >
            <div class="mx-auto my-auto lg:flex lg:w-1/2 lg:justify-start lg:mt-4">
              <router-link to="/" aria-label="Go to home page" class="footer-logo-wrap relative inline-block">
                <span class="footer-logo-glow" aria-hidden="true"></span>
                <img
                  ref="footerLogo"
                  class="footer-logo-img relative mx-auto h-[5rem] w-auto md:h-[7rem] lg:h-[8rem] xl:mx-2 cursor-pointer"
                  src="../assets/image (2).webp"
                  alt="Invictus Hub"
                   width="200"
  height="80"
                />
              </router-link>
            </div>

            <div class="grid w-full grid-cols-2 gap-0 sm:gap-6 lg:w-1/2 lg:items-start">
              <div class="my-1">
                <h3 class="my-2 text-xl lg:text-2xl">Company</h3>
                <router-link class="md:my-1 block" to="/about">
                  <p class="md:my-1 transition-all duration-300 hover:text-[#2bb6c4] hover:scale-105 hover:translate-x-1 inline-block">About</p>
                </router-link>
                <router-link class="md:my-1 block" to="/servicesHome">
                  <p class="my-1 transition-all duration-300 hover:text-[#2bb6c4] hover:scale-105 hover:translate-x-1 inline-block">Services</p>
                </router-link>
                <router-link class="md:my-1 block" to="/projects">
                  <p class="md:my-1 transition-all duration-300 hover:text-[#2bb6c4] hover:scale-105 hover:translate-x-1 inline-block">Projects</p>
                </router-link>
                <router-link class="md:my-1 block" to="/career">
                  <p class="md:my-1 transition-all duration-300 hover:text-[#2bb6c4] hover:scale-105 hover:translate-x-1 inline-block">Careers</p>
                </router-link>
                <router-link class="md:my-1 block" to="/contact">
                  <p class="md:my-1 transition-all duration-300 hover:text-[#2bb6c4] hover:scale-105 hover:translate-x-1 inline-block">Contact Us</p>
                </router-link>
              </div>

              <div class="my-1">
                <h3 class="my-2 text-xl lg:text-2xl">Services</h3>
                <router-link class="my-1 block" to="/services/web-development">
                  <p class="md:my-1 transition-all duration-300 hover:text-[#2bb6c4] hover:scale-105 hover:translate-x-1 inline-block">Website Development</p>
                </router-link>
                <router-link class="my-1 block" to="/services/app-development">
                  <p class="md:my-1 transition-all duration-300 hover:text-[#2bb6c4] hover:scale-105 hover:translate-x-1 inline-block">Mobile Applications</p>
                </router-link>
                <router-link class="my-1 block" to="/services/design-and-development">
                  <p class="md:my-1 transition-all duration-300 hover:text-[#2bb6c4] hover:scale-105 hover:translate-x-1 inline-block">E-Commerce Solutions</p>
                </router-link>
                <router-link class="my-1 block" to="/services/ux-ui-design">
                  <p class="md:my-1 transition-all duration-300 hover:text-[#2bb6c4] hover:scale-105 hover:translate-x-1 inline-block">UX/UI Designs</p>
                </router-link>
                <router-link class="my-1 block" to="/services/automation-and-apps">
                  <p class="md:my-1 transition-all duration-300 hover:text-[#2bb6c4] hover:scale-105 hover:translate-x-1 inline-block">Automation & Apps</p>
                </router-link>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col items-center justify-center w-full gap-2 px-4 py-3 sm:py-4 text-center text-gray-200 md:px-6 md:flex-row md:justify-between lg:px-8 2xl:py-1"
          >
            <div>
              <p class="py-2">Copyright © 2026 Invictus Hub. All rights reserved.</p>
            </div>
            <div><p>Powered by Invictus Hub.</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const footerRoot = ref(null);
const footerLogo = ref(null);
const bgCanvas = ref(null);

useScrollReveal(footerRoot);

// Dynamic Interactive Canvas Particles Engine
let animationFrameId = null;
const mouse = { x: -1000, y: -1000, radius: 140 }; // Interaction radius

const handleCanvasMouseMove = (e) => {
  if (!bgCanvas.value) return;
  const rect = bgCanvas.value.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
};

const handleCanvasMouseLeave = () => {
  mouse.x = -1000;
  mouse.y = -1000;
};

const initCanvasAnimation = () => {
  const canvas = bgCanvas.value;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = canvas.offsetWidth);
  let height = (canvas.height = canvas.offsetHeight);

  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 8000), 70);

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.baseX = this.x;
      this.baseY = this.y;
      this.radius = Math.random() * 2.5 + 2; // Darker/bolder size
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.alpha = Math.random() * 0.4 + 0.6; // High visibility
    }

    update() {
      // Base movement
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off boundaries
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse Interaction Physics (Repel/Push effect)
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouse.radius) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = mouse.radius;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * 5;
        const directionY = forceDirectionY * force * 5;

        this.x -= directionX;
        this.y -= directionY;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      // Bright high-visibility cyan
      ctx.fillStyle = `rgba(43, 220, 240, ${this.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgba(43, 220, 240, 0.8)";
      ctx.fill();
      ctx.shadowBlur = 0; // reset
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  const handleResize = () => {
    if (!canvas) return;
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  };

  window.addEventListener("resize", handleResize);

  const render = () => {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines with enhanced contrast and thickness
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 140) {
          const lineAlpha = (1 - dist / 140) * 0.45; // Darker/more visible opacity
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(180, 240, 255, ${lineAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    }

    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    animationFrameId = requestAnimationFrame(render);
  };

  render();
};

const handleMagnetMove = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const relX = e.clientX - rect.left - rect.width / 2;
  const relY = e.clientY - rect.top - rect.height / 2;
  el.style.transform = `translate(${relX * 0.35}px, ${relY * 0.35}px)`;
};

const handleMagnetLeave = (e) => {
  e.currentTarget.style.transform = "";
};

onMounted(async () => {
  await nextTick();
  initCanvasAnimation();

  if (!footerLogo.value) return;

  gsap.fromTo(
    footerLogo.value,
    { x: -160, opacity: 0, rotate: -18, scale: 0.85 },
    {
      x: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      duration: 1.1,
      ease: "elastic.out(1, 0.55)",
      scrollTrigger: {
        trigger: footerLogo.value,
        start: "top 92%",
        once: true,
      },
    }
  );
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

<style scoped>
.footer-shell {
  isolation: isolate;
}

.footer-glow {
  position: absolute;
  border-radius: 9999px;
  filter: blur(90px);
  opacity: 0.55;
  will-change: transform;
}

.footer-glow--one {
  top: -20%;
  left: -10%;
  width: 420px;
  height: 420px;
  background: radial-gradient(circle at center, #2bb6c4 0%, transparent 70%);
  animation: footer-float-a 14s ease-in-out infinite;
}

.footer-glow--two {
  bottom: -25%;
  right: -10%;
  width: 480px;
  height: 480px;
  background: radial-gradient(circle at center, #185464 0%, transparent 70%);
  animation: footer-float-b 18s ease-in-out infinite;
}

@keyframes footer-float-a {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, 30px) scale(1.1); }
}

@keyframes footer-float-b {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-30px, -25px) scale(1.08); }
}

@media (prefers-reduced-motion: reduce) {
  .footer-glow--one,
  .footer-glow--two {
    animation: none;
  }
}

.footer-marquee {
  overflow: hidden;
  padding: 0.5rem 0;
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}

.footer-marquee__track {
  display: flex;
  width: max-content;
  animation: footer-marquee-scroll 26s linear infinite;
}

.footer-marquee__group {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.footer-marquee__item {
  padding: 0 0.9rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  white-space: nowrap;
  transition: color 0.3s ease;
}

.footer-marquee__item:hover {
  color: #2bb6c4;
}

.footer-marquee__dot {
  color: rgba(43, 182, 196, 0.7);
}

@keyframes footer-marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .footer-marquee__track {
    animation: none;
  }
}

.footer-logo-wrap {
  display: inline-flex;
}

.footer-logo-glow {
  position: absolute;
  inset: -20%;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(43, 182, 196, 0.35) 0%, transparent 70%);
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
  pointer-events: none;
}

.footer-logo-wrap:hover .footer-logo-glow {
  opacity: 1;
}

.footer-logo-img {
  transition: transform 0.2s ease;
}

.footer-logo-wrap:hover .footer-logo-img {
  animation: logo-hover-bounce 0.65s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes logo-hover-bounce {
  0% { transform: scale(1) rotate(0deg); }
  30% { transform: scale(1.14) rotate(-6deg); }
  55% { transform: scale(0.96) rotate(4deg); }
  75% { transform: scale(1.05) rotate(-2deg); }
  100% { transform: scale(1) rotate(0deg); }
}

.magnet-icon {
  transition: transform 0.15s ease-out;
}
</style>