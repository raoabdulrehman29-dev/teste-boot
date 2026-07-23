<template>
  <Analytics />
  <div class="relative w-full bg-white">
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isPageLoading"
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 backdrop-blur-sm"
      >
        <div class="loader">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    </Transition>

    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div class="relative flex min-h-screen w-full max-w-[2000px] mx-auto flex-col bg-white">
          <NavBar />

          <main class="flex-1">
            <div class="mx-auto w-full px-2 sm:px-4 md:px-8">
              <router-view />
            </div>
          </main>

          <Footer class="w-full" />
        </div>
      </div>
    </div>

    <ScrollButton />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import router from "./router";

import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import ScrollButton from "./components/ScrollButton.vue";

import { isPageLoading } from "./router/pageLoader";
import { ScrollSmoother } from "@/lib/gsap";
import { Analytics } from "@vercel/analytics/vue";

let smoother;

onMounted(async () => {
  await router.isReady();

  isPageLoading.value = false;

  smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.2,
    effects: true,
  });
});

onUnmounted(() => {
  smoother?.kill();
});
</script>

<style scoped>
#app {
  font-family:
    "Inter",
    "Poppins",
    system-ui,
    -apple-system,
    sans-serif;
}

.loader {
  --dim: 3rem;
  width: var(--dim);
  height: var(--dim);
  position: relative;
  animation: spin988 2s linear infinite;
}

.loader .circle {
  --color: #185464;
  --dim: 1.2rem;

  width: var(--dim);
  height: var(--dim);

  position: absolute;

  border-radius: 9999px;
  background: var(--color);
}

.loader .circle:nth-child(1) {
  top: 0;
  left: 0;
}

.loader .circle:nth-child(2) {
  top: 0;
  right: 0;
}

.loader .circle:nth-child(3) {
  bottom: 0;
  left: 0;
}

.loader .circle:nth-child(4) {
  bottom: 0;
  right: 0;
}

@keyframes spin988 {
  0% {
    transform: scale(1) rotate(0deg);
  }

  20%,
  25% {
    transform: scale(1.3) rotate(90deg);
  }

  45%,
  50% {
    transform: scale(1) rotate(180deg);
  }

  70%,
  75% {
    transform: scale(1.3) rotate(270deg);
  }

  95%,
  100% {
    transform: scale(1) rotate(360deg);
  }
}
</style>
