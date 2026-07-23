<template>
  <!-- MOBILE MENU - teleported to body so position:fixed escapes the transformed #smooth-content -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      leave-active-class="transition-all duration-400 ease-in"
      enter-from-class="-translate-y-full opacity-0"
      leave-to-class="-translate-y-full opacity-0"
    >
      <div
        v-if="ismenuopen"
        class="fixed inset-0 z-[999] w-screen h-screen bg-[#185464] text-white xl:hidden overflow-y-auto"
      >
        <div class="flex items-center justify-between px-4 pt-4 mb-10 md:mb-16 lg:mb-2">
          <div>
            <img
              class="h-12 md:h-[4rem] lg:h-[6rem]"
              src="../assets/logoji.png"
              alt="Invictus Hub"
            />
          </div>

          <div class="flex items-center gap-4 sm:gap-6 text-2xl leading-[1rem]">
            <button @click="ismenuopen = false" class="text-3xl sm:text-5xl">X</button>
          </div>
        </div>

        <div
          class="grid w-full grid-cols-2 lg:grid-cols-3 border border-white/30 text-center min-h-[70vh] min-[425px]:min-h-[90vh] lg:min-h-[70vh]"
        >
          <router-link
            v-for="(item, index) in menuItems"
            :key="item.path"
            :to="item.path"
            @click="ismenuopen = false"
            class="flex items-center justify-center border border-white/30 p-8 text-2xl transition-all duration-300 hover:text-green min-[425px]:p-10 sm:p-36 sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
            :style="{ animationDelay: `${index * 50}ms` }"
          >
            {{ item.label }}
          </router-link>
        </div>

        <div class="flex items-end justify-center gap-8 my-8 lg:mt-4">
          <a
            href="https://www.linkedin.com/company/invictus-hub/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Invictus Hub on LinkedIn"
            class="transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <svg class="h-6 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="white"
                d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"
              />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/p/Invictus-Hub-100086688422372"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Invictus Hub on Facebook"
            class="transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <svg class="h-6 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="white"
                d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"
              />
            </svg>
          </a>
        </div>
      </div>
    </Transition>
  </Teleport>

  <!-- SIDEBAR - teleported to body so position:fixed escapes the transformed #smooth-content -->
  <Teleport to="body">
    <div
      v-if="sidenavopen"
      class="fixed inset-0 z-[999] flex w-screen h-screen gap-4 py-10 bg-gray-700/70 animate-left"
    >
      <div
        class="flex flex-col items-center justify-between h-full bg-gray-700 rounded-3xl w-[21%]"
      >
        <div class="mx-4 my-12">
          <img
            class="md:h-[10rem] w-auto mx-auto opacity-[90%]"
            src="../assets/logoji.png"
            alt="Invictus Hub"
          />
        </div>
        <div>
          <div
            class="flex flex-col gap-4 mx-10 font-semibold text-white items-start justify-center"
          >
            <h1 class="text-lg">Contact</h1>
            <h1>
              Plaza no 5, Block D Commercial Basement, Architects Engineers Housing Society, Lahore,
              54000
            </h1>
            <a
              href="https://wa.me/923394025020"
              target="_blank"
              rel="noopener noreferrer"
              class="block"
            >
              +92 (339) 4025020
            </a>
            <a href="mailto:info@invictushub.com" class="block"> info@invictushub.com </a>
          </div>
          <div class="mx-10 my-4">
            <router-link to="/contact">
              <button
                @click="sidenavopen = false"
                class="flex items-center gap-2 rounded-3xl border border-[#2bb6c4] text-white bg-transparent px-3 sm:px-5 py-3 sm:py-4 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)] transition-all duration-300"
              >
                Get In Touch
              </button>
            </router-link>
          </div>
        </div>
        <div class="flex gap-4 my-6 mt-2">
          <a
            href="https://www.linkedin.com/company/invictus-hub/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Invictus Hub on LinkedIn"
            class="group transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 inline-block"
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
            class="group transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 inline-block"
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

      <div
        class="flex items-start justify-center w-[3%] h-full bg-gradient-to-r from-[#185464] to-[#13404c] rounded-2xl"
      >
        <button @click="sidenavopen = !sidenavopen">
          <h1 class="w-full my-16 text-lg font-semibold text-white rotate-90">Close</h1>
        </button>
      </div>
    </div>
  </Teleport>
  <!-- Nav teleports to body only in its fixed (scrolled) state; inline otherwise so it scrolls with #smooth-content -->
  <Teleport to="body" :disabled="!showNavBar">
    <nav
      class="w-full"
      :class="[showNavBar ? 'fixed top-2 left-0 right-0 z-50 animate-navbar' : 'relative mt-4']"
    >
      <div class="mx-auto w-full max-w-[2000px] px-2 sm:px-4 md:px-8">
        <div
          :class="
            showNavBar
              ? 'scale-y-[1.02] shadow-[0_18px_45px_-28px_rgba(17,24,39,0.45)]'
              : 'shadow-sm'
          "
          class="flex min-h-[5.5rem] w-full origin-top items-center justify-between rounded-3xl border border-gray-300 bg-white px-4 text-black transition-all duration-300 lg:min-h-[6.5rem]"
        >
          <div class="flex items-start justify-start gap-2 xl:flex-1">
            <div class="relative">
              <button @click="sidenavopen = !sidenavopen" class="group">
                <div class="hidden xl:grid grid-cols-2 gap-[3px]">
                  <div
                    class="h-3 w-3 border-2 border-gray-900 rounded-[4px] transition-all duration-300 group-hover:bg-gray-900"
                  ></div>
                  <div
                    class="h-3 w-3 border-2 border-gray-900 rounded-[4px] transition-all duration-300 group-hover:bg-gray-900"
                  ></div>
                  <div
                    class="h-3 w-3 border-2 border-gray-900 rounded-[4px] transition-all duration-300 group-hover:bg-gray-900"
                  ></div>
                  <div
                    class="h-3 w-3 border-2 border-gray-900 rounded-[4px] transition-all duration-300 group-hover:bg-gray-900"
                  ></div>
                </div>
              </button>
            </div>
            <router-link to="/" aria-label="Go to home page">
              <img
                class="h-8 md:h-[2.5rem] p-0 mx-[3px] my-auto cursor-pointer"
                src="../assets/Logo.png"
                alt="Invictus Hub"
              />
            </router-link>
          </div>

          <!-- mobile view -->
          <button @click="ismenuopen = !ismenuopen" class="my-auto xl:hidden">
            <div class="relative">
              <div class="h-[3px] rounded-full w-8 bg-gray-900 my-[6px]"></div>
              <div class="h-[3px] rounded-full w-8 bg-gray-900 my-[6px]"></div>
              <div class="h-[3px] rounded-full w-4 items-left bg-gray-900 my-[6px]"></div>
            </div>
          </button>

          <!-- DESKTOP NAV LINKS -->

          <div
            ref="desktopNav"
            class="items-center justify-center flex-1 hidden xl:flex whitespace-nowrap"
          >
            <div class="space-x-2 xl:space-x-3">
              <router-link
                to="/"
                @click="setActiveNav('/')"
                :class="navLinkClass('/')"
                class="px-2 py-1 text-[14px] font-semibold transition-colors rounded-lg nav-tab"
                >HOME</router-link
              >
              <router-link
                to="/about"
                @click="setActiveNav('/about')"
                :class="navLinkClass('/about')"
                class="px-2 py-1 text-[14px] font-semibold transition-colors rounded-lg nav-tab"
                >ABOUT</router-link
              >
              <div ref="servicesDropdown" class="relative inline-block">
                <button
                  @click="toggleServicesMenu"
                  :class="[
                    'px-2 py-1 text-[14px] font-semibold transition-colors rounded-lg nav-tab flex items-center justify-center',
                    isServicesActive
                      ? 'bg-black text-white border border-black'
                      : 'text-black border border-transparent hover:bg-gray-200',
                  ]"
                >
                  <span class="relative inline-flex items-center">
                    SERVICES
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-2 h-2 rotate-[-135deg] ml-2"
                      style="margin-top: 4px"
                      viewBox="0 0 123.959 123.959"
                      fill="currentColor"
                    >
                      <g>
                        <path
                          d="M85.742,1.779l-56,56c-2.3,2.3-2.3,6.1,0,8.401l56,56c3.801,3.8,10.2,1.1,10.2-4.2v-112C95.942,0.679,89.543-2.021,85.742,1.779z"
                        />
                      </g>
                    </svg>
                  </span>
                </button>
                <div
                  v-if="isServicesOpen"
                  class="absolute left-1/2 top-full z-50 mt-4 w-[54rem] max-w-[92vw] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_28px_70px_-20px_rgba(15,23,42,0.30)]"
                >
                  <!-- Header -->
                  <div class="border-b border-slate-100 px-7 pt-6 pb-5">
                    <p class="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2bb6c4]">
                      Our Services
                    </p>
                    <h2 class="mt-1.5 text-lg font-bold leading-tight text-slate-900">
                      Comprehensive Digital Solutions
                    </h2>
                    <p class="mt-1.5 max-w-xl text-sm leading-6 text-slate-500">
                      Innovative technology that helps businesses grow, automate and scale for the
                      future.
                    </p>
                  </div>

                  <!-- Columns -->
                  <div class="grid grid-cols-1 gap-x-8 gap-y-7 px-7 py-7 sm:grid-cols-3">
                    <div v-for="category in serviceCategories" :key="category.title">
                      <!-- Category header -->
                      <div class="mb-4 flex items-center gap-3">
                        <div
                          class="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-[#185464] to-[#2bb6c4] text-white shadow-sm"
                        >
                          <!-- AI -->
                          <svg
                            v-if="category.icon === 'ai'"
                            class="h-[18px] w-[18px]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                            />
                          </svg>
                          <!-- Commerce -->
                          <svg
                            v-else-if="category.icon === 'commerce'"
                            class="h-[18px] w-[18px]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>
                          <!-- Digital -->
                          <svg
                            v-else
                            class="h-[18px] w-[18px]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                            />
                          </svg>
                        </div>
                        <div class="min-w-0">
                          <h3 class="text-sm font-bold leading-tight text-slate-900">
                            {{ category.title }}
                          </h3>
                          <p class="text-[11px] text-slate-400">{{ category.subtitle }}</p>
                        </div>
                      </div>

                      <!-- Services -->
                      <div class="space-y-0.5">
                        <router-link
                          v-for="service in category.services"
                          :key="service.tab"
                          :to="`/services/${service.tab}`"
                          @click="handleServiceClick"
                          class="group/item flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-slate-50"
                        >
                          <span
                            class="h-1.5 w-1.5 flex-none rounded-full bg-slate-300 transition-colors duration-200 group-hover/item:bg-[#2bb6c4]"
                          ></span>
                          <div class="min-w-0 flex-1">
                            <p
                              class="truncate text-sm font-semibold text-slate-700 transition-colors duration-200 group-hover/item:text-[#185464]"
                            >
                              {{ service.title }}
                            </p>
                            <p class="truncate text-[11px] text-slate-400">
                              {{ service.subtitle }}
                            </p>
                          </div>
                          <svg
                            class="h-4 w-4 flex-none text-slate-300 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:text-[#185464]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </router-link>
                      </div>
                    </div>
                  </div>

                  <!-- Footer -->
                  <div
                    class="flex items-center justify-between gap-4 border-t border-slate-100 bg-slate-50/70 px-7 py-4"
                  >
                    <p class="hidden text-sm text-slate-500 sm:block">
                      Not sure what fits? Let's find the right solution together.
                    </p>
                    <div class="flex items-center gap-5">
                      <router-link
                        to="/contact"
                        @click="setActiveNav('/contact')"
                        class="text-sm font-semibold text-slate-600 transition-colors hover:text-[#185464]"
                      >
                        Contact us
                      </router-link>
                      <router-link
                        to="/services"
                        @click="handleAllServicesClick"
                        class="group/cta inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#185464] to-[#2bb6c4] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md"
                      >
                        View All Services
                        <svg
                          class="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
              <router-link
                to="/projects"
                @click="setActiveNav('/projects')"
                :class="navLinkClass('/projects')"
                class="px-2 py-1 text-[14px] font-semibold transition-colors rounded-lg nav-tab"
                >CASE STUDIES
              </router-link>
              <router-link
                to="/career"
                @click="setActiveNav('/career')"
                :class="navLinkClass('/career')"
                class="px-2 py-1 text-[14px] font-semibold transition-colors rounded-lg nav-tab"
                >CAREERS
              </router-link>
              <router-link
                to="/contact"
                @click="setActiveNav('/contact')"
                :class="navLinkClass('/contact')"
                class="px-2 py-2 text-[14px] font-semibold transition-colors rounded-lg nav-tab"
                >CONTACT
              </router-link>
            </div>
          </div>

          <div class="items-center justify-end flex-1 hidden gap-5 xl:flex">
            <router-link to="/contact">
              <button
                class="px-6 py-3 xl:px-10 h-14 rounded-full border-[2px] font-medium border-[#185464] text-[#185464] bg-transparent hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </Teleport>
  <div v-if="showNavBar" class="h-[72px] lg:h-28"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRoute } from "vue-router";
import { ScrollSmoother } from "@/lib/gsap";

const route = useRoute();
const showNavBar = ref(false);
const ismenuopen = ref(false);
const isServicesOpen = ref(false);
const pendingActivePath = ref(null);
const sidenavopen = ref(false);
const servicesDropdown = ref(null);
const desktopNav = ref(null);
const isServicesActive = ref(false);
const menuItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Case Studies" },
  { path: "/career", label: "Careers" },
  { path: "/contact", label: "Contact" },
];
const handleServiceClick = () => {
  isServicesActive.value = true;
  pendingActivePath.value = "/services";
  isServicesOpen.value = false;
};
const handleAllServicesClick = () => {
  isServicesActive.value = true;
  pendingActivePath.value = "/services";
  isServicesOpen.value = false;
};
const serviceCategories = [
  {
    title: "Data & AI",
    subtitle: "Smart Intelligence Solutions",
    icon: "ai",
    services: [
      {
        title: "Gen AI",
        subtitle: "Artificial Intelligence",
        tab: "generative-ai-solutions",
      },
      {
        title: "Data Analytics",
        subtitle: "Insights & Reporting",
        tab: "data-analytics-services",
      },
      {
        title: "Business Intelligence",
        subtitle: "Decision Making",
        tab: "business-intelligence",
      },
    ],
  },

  {
    title: "E-Commerce",
    subtitle: "Scale Your Business",
    icon: "commerce",
    services: [
      {
        title: "Design & Development",
        subtitle: "E-commerce Solutions",
        tab: "design-and-development",
      },
      {
        title: "Maintenance & Support",
        subtitle: "Platform Support",
        tab: "maintenance-and-support",
      },
      {
        title: "Automation & Apps",
        subtitle: "Process Automation",
        tab: "automation-and-apps",
      },
    ],
  },

  {
    title: "Digital Transformation",
    subtitle: "Future Ready Solutions",
    icon: "digital",
    services: [
      {
        title: "Web Development",
        subtitle: "Modern Applications",
        tab: "web-development",
      },
      {
        title: "App Development",
        subtitle: "Mobile & Desktop",
        tab: "app-development",
      },
      {
        title: "UX/UI Design",
        subtitle: "User Experience",
        tab: "ux-ui-design",
      },
    ],
  },
];

const handleClickOutside = (event) => {
  if (
    isServicesOpen.value &&
    servicesDropdown.value &&
    !servicesDropdown.value.contains(event.target) &&
    !desktopNav.value?.contains(event.target)
  ) {
    isServicesOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("mousedown", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("mousedown", handleClickOutside);
});

const handleScroll = () => {
  const scrollY = window.scrollY;
  const trigerpoint = window.innerHeight * 0.2;
  if (scrollY > trigerpoint) {
    showNavBar.value = true;
  } else {
    showNavBar.value = false;
  }
};

const setActiveNav = (path) => {
  pendingActivePath.value = path;
  isServicesOpen.value = false;
  if (path !== "/services" && !path.startsWith("/services/")) {
    isServicesActive.value = false;
  }
};

const toggleServicesMenu = () => {
  isServicesOpen.value = !isServicesOpen.value;
  if (!isServicesOpen.value) {
    isServicesActive.value = false;
  }
};

const isActiveNavPath = (path) => {
  const activePath = pendingActivePath.value || route.path;
  return activePath === path;
};

const navLinkClass = (path) =>
  !isServicesOpen.value && isActiveNavPath(path)
    ? "bg-black text-white border border-black"
    : "text-black border border-transparent hover:bg-gray-200";

watch([ismenuopen, sidenavopen], ([menu, side]) => {
  const overlayOpen = menu || side;
  document.body.style.overflow = overlayOpen ? "hidden" : "auto";
  ScrollSmoother.get()?.paused(overlayOpen);
});

watch(
  () => route.fullPath,
  (newPath) => {
    // Check if we're on a services page
    if (newPath === "/services" || newPath.startsWith("/services/")) {
      pendingActivePath.value = "/services";
      isServicesActive.value = true;
    } else {
      pendingActivePath.value = null;
      isServicesActive.value = false;
      isServicesOpen.value = false;
    }
  },
);
</script>

<style scoped>
.router-link-active,
.router-link-exact-active {
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.menu-enter-active {
  animation: slideDown 0.5s ease-out;
}

.menu-leave-active {
  animation: slideUp 0.4s ease-in;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
}
.animate-navbar {
  transform: translateY(-100%);
  animation: slideDown 0.3s ease forwards;
}
.animate-menu {
  transform: translateY(-100%);
  animation: slideDown 0.3s ease forwards;
}
@keyframes slideDown {
  to {
    transform: translateY(0);
  }
}
.animate-left {
  transform: translateX(-100%);
  animation: slideleft 0.3s ease forwards;
}
@keyframes slideleft {
  to {
    transform: translateX(0);
  }
}
</style>
