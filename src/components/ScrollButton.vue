<template>
  <!-- Added transition and centering classes -->
  <div
    v-if="Showbutton"
    class="fade-in-element fixed bottom-6 right-6 z-40 h-14 w-14 md:h-16 md:w-16 bg-gradient-to-r from-[#185464] to-[#13404c] hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)] rounded-2xl cursor-pointer shadow-lg transition-colors duration-300"
  >
    <!-- Use flex h-full to center the button content -->
    <button
      @click="ScrollTotop"
      class="flex h-full w-full items-center justify-center focus:outline-none"
    >
      <svg
        class="h-8 w-8 md:h-12 md:w-12 text-white"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 15L12 9L6 15"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { ScrollSmoother } from "@/lib/gsap";
const Showbutton = ref(true);
const ScrollTotop = () => {
  const smoother = ScrollSmoother.get();
  if (smoother) {
    smoother.scrollTo(0, true);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const handleScroll = () => {
  const scrollY = window.scrollY;
  const trigerpoint = window.innerHeight * 0.5;
  if (scrollY > trigerpoint) {
    Showbutton.value = true;
  } else {
    Showbutton.value = false;
  }
};
</script>
