<template>
  <div ref="bannerRoot" class="overflow-hidden">
    <div
      class="banner relative isolate rounded-3xl rounded-bl-[2rem] rounded-br-[2rem] mt-3 mb-10 xl:mb-10 h-[280px] md:h-[400px] lg:h-[540px] lg:w-full"
    >
      <!-- Top Left Decoration -->
      <div class="absolute left-0 top-0 z-20 hidden lg:block rounded-3xl">
        <div class="relative">
          <div class="h-[66px] w-[100px] bg-white rounded-br-3xl"></div>
          <div
            class="absolute -right-[19px] top-0 h-[40px] w-[19px] bg-transparent rounded-tl-3xl"
            style="box-shadow: -19px -21px 0 18px #fff; z-index: 30"
          ></div>
          <div
            class="absolute -bottom-[19px] left-0 h-[19px] w-[40px] bg-transparent rounded-tl-3xl"
            style="box-shadow: -19px -19px 0 18px #fff; z-index: 30"
          ></div>
        </div>
      </div>

      <!-- Center Content -->
      <div
        class="flex items-center justify-center xl:justify-left h-full w-full lg:w-[100%] mx-auto"
      >
        <h1
          class="banner-title text-[30px] sm:text-[45px] md:text-[50px] lg:text-[60px] xl:text-[80px] font-normal text-white text-center mx-4"
        >
          / {{ title }} /
        </h1>
      </div>

      <!-- Side Text -->
      <h1
        class="banner-side hidden xl:block absolute top-1/2 -right-10 -translate-y-1/2 -rotate-90 font-extrabold capitalize text-transparent [-webkit-text-stroke:1px_white] text-[60px] 2xl:text-[70px]"
      >
        {{ sideText }}
      </h1>

      <!-- Bottom Left Breadcrumb -->
      <div class="absolute left-0 bottom-0 z-20">
        <div class="relative inline-block">
          <div
            class="absolute -top-[20px] left-0 h-[20px] w-[40px] bg-transparent rounded-bl-3xl"
            style="box-shadow: -21px 15px 0 14px #fff; z-index: 30"
          ></div>
          <div class="relative z-40">
            <div
              class="banner-crumb flex items-center gap-2 rounded-3xl bg-white px-5 py-3 md:px-8 md:py-5 text-base font-normal md:text-base lg:px-20 lg:py-8"
            >
              <router-link to="/" class="underline">Home</router-link>
              <span>/</span>
              <span class="page-title">{{
                currentPage === currentPage.toUpperCase()
                  ? currentPage
                      .toLowerCase()
                      .split(" ")
                      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                      .join(" ")
                  : currentPage
              }}</span>
            </div>
          </div>
          <div
            class="absolute bottom-0 -right-[20px] h-[36px] w-[20px] bg-transparent rounded-bl-3xl"
            style="box-shadow: -19px 30px 0 18px #fff; z-index: 30"
          ></div>
        </div>
      </div>

      <!-- Bottom Right Decoration -->
      <div class="absolute right-0 bottom-0 z-20 hidden lg:block">
        <div class="relative">
          <div class="h-[14.21vw] w-[90px] bg-white rounded-br-3xl rounded-tl-3xl"></div>
          <div
            class="absolute -top-[18px] right-0 h-[18px] w-[36px] bg-transparent rounded-br-3xl"
            style="box-shadow: 6px 7px 0 6px #fff; z-index: 30"
          ></div>
          <div
            class="absolute bottom-0 -left-[18px] h-[36px] w-[18px] bg-transparent rounded-br-3xl"
            style="box-shadow: 6px 7px 0 5px #fff; z-index: 30"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "@/lib/gsap";

defineProps({
  title: {
    type: String,
    required: true,
    default: "Page Title",
  },
  currentPage: {
    type: String,
    required: true,
    default: "Page",
  },
  sideText: {
    type: String,
    default: "Invictus Hub",
  },
});

const bannerRoot = ref(null);
let mm;

onMounted(() => {
  if (!bannerRoot.value) return;
  mm = gsap.matchMedia(bannerRoot.value);
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .from(".banner-title", { autoAlpha: 0, y: 40, duration: 0.8, delay: 0.1 })
      .from(".banner-side", { autoAlpha: 0, x: 40, duration: 0.7 }, "-=0.5")
      .from(".banner-crumb", { autoAlpha: 0, y: 24, duration: 0.6 }, "-=0.45");
  });
});

onUnmounted(() => {
  mm?.revert();
});
</script>

<style scoped>
.banner {
  background:
    linear-gradient(to right, rgba(24, 84, 100, 0.45), rgba(19, 64, 76, 0.45)),
    url("@/assets/page-banner.webp");
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.page-title {
  display: inline-block;
  max-width: 200px; /* Adjust based on your design */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* Responsive - different max-width for different screen sizes */
@media (max-width: 640px) {
  .page-title {
    max-width: 200px;
  }
}

@media (max-width: 380px) {
  .page-title {
    max-width: 60px;
  }
}
</style>
