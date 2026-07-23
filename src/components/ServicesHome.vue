<template>
  <div ref="pageRoot">
    <PageBanner title="Our Services" currentPage="Services" />

    <!-- Services Cards Section -->
    <div
      v-if="isVisible(servicesHomeTags)"
      :class="store.isSearchEmpty ? '' : 'mb-10 md:mb-16 lg:mb-20'"
      class="mx-auto my-10 mt-14 w-full md:my-2 lg:my-8 lg:mt-24"
    >
      <div class="text-center">
        <h3 data-reveal class="mb-2 font-semibold">[ Our Services ]</h3>
        <h1
          data-split
          class="text-[28px] font-semibold capitalize text-black sm:text-[30px] md:text-[35px] lg:text-[46px] xl:text-[60px]"
        >
          What We Offer
        </h1>
        <p data-reveal class="mx-auto mt-4 max-w-2xl text-gray-500">
          We provide comprehensive digital solutions to help your business grow and succeed in the
          modern world.
        </p>
      </div>

      <!-- Service Cards Grid - Loop from JSON -->
      <div
        v-if="displayServices.length > 0"
        data-reveal-group
        class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <router-link
          v-for="(service, index) in displayServices"
          :key="service.id || index"
          :to="`/services/${service.id}`"
          class="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2bb6c4]/50 hover:shadow-xl"
        >
          <!-- Image header -->
          <div class="relative h-44 overflow-hidden">
            <img
              :src="getServiceImage(service.id)"
              :alt="getDisplayTitle(service.title)"
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#13404c]/70 via-[#13404c]/10 to-transparent"
            ></div>
            <!-- Icon badge -->
            <div
              class="absolute bottom-3 left-4 flex h-12 w-12 items-center justify-center rounded-xl border-4 border-white bg-gradient-to-br from-[#185464] to-[#2bb6c4] text-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
            >
              {{ getServiceIcon(service.id) }}
            </div>
          </div>

          <!-- Body -->
          <div class="flex flex-1 flex-col p-6">
            <h3
              class="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#185464]"
            >
              {{ getDisplayTitle(service.title) }}
            </h3>
            <p class="mt-2 flex-1 text-sm leading-6 text-slate-500">
              {{ getShortDescription(service) }}
            </p>
            <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#185464]">
              Learn more
              <svg
                class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </router-link>
      </div>

      <!-- Fallback if no services -->
      <div v-else class="mt-12 text-center text-gray-500">No services available.</div>
    </div>

    <!-- Tracked Records Section -->
    <div
      v-if="
        isVisible(
          'Numbers our commitment delivering exceptional results Project Completed Client Satisfied Happy Clients Years Experience Our Tracked Records',
        )
      "
      class="mx-auto my-10 mt-14 w-full lg:mt-24 text-center max-w-[1450px]"
    >
      <h1 data-reveal class="mb-4 text-3xl font-bold text-black lg:text-5xl">
        Performance Metrics
      </h1>
      <p data-reveal class="max-w-2xl mx-auto mb-12 text-gray-500">
        Numbers that speak for our commitment to delivering exceptional results.
      </p>
    </div>

    <div
      v-if="
        isVisible(
          'tracked records stats metrics project completed client satisfied happy clients years experience results numbers',
        )
      "
      ref="funFactsElement"
      data-reveal-group
      :class="store.isSearchEmpty ? '' : 'mb-12 lg:mb-20'"
      class="mx-auto my-10 flex w-full flex-wrap items-center justify-center px-4 py-2 md:justify-start md:px-6 lg:px-8 lg:mb-14 max-w-[1450px]"
    >
      <div class="w-1/2 md:w-1/3 lg:w-1/4">
        <h1
          class="my-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-b from-blue-400 to-emerald-400 bg-clip-text"
        >
          {{ completedProjectsCount }}+
        </h1>
        <h2 class="text-xl font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-auto h-4 mx-2"
            viewBox="0 0 512 512"
          >
            <path
              d="M133.8 36.3c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 158 47 153L7 113C-2.3 103.6-2.3 88.4 7 79S31.6 69.7 41 79l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zm0 160c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 318 47 313L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM64 376a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"
            />
          </svg>
          Projects Completed
        </h2>
      </div>
      <div class="w-1/2 md:w-1/3 lg:w-1/4">
        <h1
          class="my-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-b from-blue-400 to-emerald-400 bg-clip-text"
        >
          {{ clientSatisfiedCount }}%
        </h1>
        <h2 class="text-xl font-semibold">
          <svg
            class="inline-block w-auto h-4 mx-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              d="M292.9 384c7.3-22.3 21.9-42.5 38.4-59.9 32.7-34.4 52.7-80.9 52.7-132.1 0-106-86-192-192-192S0 86 0 192c0 51.2 20 97.7 52.7 132.1 16.5 17.4 31.2 37.6 38.4 59.9l201.7 0zM288 432l-192 0 0 16c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80l0-16zM184 112c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24z"
            />
          </svg>
          Client Satisfaction
        </h2>
      </div>
      <div class="w-1/2 md:w-1/3 lg:w-1/4">
        <h1
          class="my-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-b from-blue-400 to-emerald-400 bg-clip-text"
        >
          {{ happyClientsCount }}+
        </h1>
        <h2 class="text-xl font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-auto h-4 mx-2"
            viewBox="0 0 512 512"
          >
            <path
              d="M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"
            />
          </svg>
          Happy Clients
        </h2>
      </div>
      <div class="w-1/2 md:w-1/3 lg:w-1/4">
        <h1
          class="my-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-b from-blue-400 to-emerald-400 bg-clip-text"
        >
          {{ yearsExperienceCount }}+
        </h1>
        <h2 class="text-xl font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-auto h-4 mx-2"
            viewBox="0 0 640 512"
          >
            <path
              d="M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"
            />
          </svg>
          Years' Experience
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import PageBanner from "@/components/PageBanner.vue";
import { userSearchStore } from "@/stores/SearchStore";
import servicesData from "@/stores/Services.json";
import { useScrollReveal } from "@/composables/useScrollReveal";

// Static image imports so Vite bundles subfolder assets correctly
import genAiImg from "@/assets/Services/gen-ai.jpg";
import dataAnalyticsImg from "@/assets/Services/data-analytics.jpg";
import businessIntelImg from "@/assets/Services/business-intelegence.jpg";
import designDevImg from "@/assets/Services/design-development.jpg";
import maintenanceImg from "@/assets/it2.jpg";
import automationImg from "@/assets/Services/automation-apps.jpg";
import webDevImg from "@/assets/techsolution.webp";
import appDevImg from "@/assets/it1.jpg";
import uxUiImg from "@/assets/Services/ux-design.jpg";

const store = userSearchStore();

const pageRoot = ref(null);
useScrollReveal(pageRoot, { rebuildOn: [() => store.searchQuery] });

const allServices = computed(() => {
  const services = [];

  // Check if servicesData exists
  if (!servicesData) {
    console.warn("Services data not found");
    return services;
  }

  const categories = servicesData.categories || servicesData;

  if (Array.isArray(categories)) {
    categories.forEach((category) => {
      if (category.services && Array.isArray(category.services)) {
        category.services.forEach((service) => {
          if (service) {
            services.push({
              ...service,
              // Add search tags for filtering
              searchTags:
                `${service.title || ""} ${service.hero?.tagline || ""} ${service.hero?.description || ""} ${service.intro?.heading || ""}`.toLowerCase(),
            });
          }
        });
      }
    });
  }

  return services;
});

const displayServices = computed(() => {
  return allServices.value;
});

const getDisplayTitle = (title) => {
  if (!title) return "Service";
  return title.replace(/ SOLUTIONS$| SERVICES$/, "");
};

const getShortDescription = (service) => {
  if (!service) return "Professional service for your business needs.";

  if (service.intro?.text && Array.isArray(service.intro.text) && service.intro.text[0]) {
    const text = service.intro.text[0];
    return text.length > 110 ? text.substring(0, 110) + "..." : text;
  }

  if (service.hero?.description) {
    const text = service.hero.description;
    return text.length > 110 ? text.substring(0, 110) + "..." : text;
  }

  return "Professional service for your business needs.";
};

const serviceImageMap = {
  "generative-ai-solutions": genAiImg,
  "data-analytics-services": dataAnalyticsImg,
  "business-intelligence": businessIntelImg,
  "design-and-development": designDevImg,
  "maintenance-and-support": maintenanceImg,
  "automation-and-apps": automationImg,
  "web-development": webDevImg,
  "app-development": appDevImg,
  "ux-ui-design": uxUiImg,
};

const getServiceImage = (id) => serviceImageMap[id] || webDevImg;

const serviceIconMap = {
  "generative-ai-solutions": "🤖",
  "data-analytics-services": "📊",
  "business-intelligence": "📈",
  "design-and-development": "🛒",
  "maintenance-and-support": "🛠️",
  "automation-and-apps": "⚙️",
  "web-development": "🌐",
  "app-development": "📱",
  "ux-ui-design": "🎨",
};

const getServiceIcon = (id) => serviceIconMap[id] || "🚀";

const servicesHomeTags = computed(() => {
  const tags = [
    "services what we offer comprehensive digital solutions business grow modern world",
  ];

  // Add all service titles and descriptions to tags
  allServices.value.forEach((service) => {
    if (service.title) tags.push(service.title);
    if (service.hero?.tagline) tags.push(service.hero.tagline);
    if (service.hero?.description) tags.push(service.hero.description);
    if (service.intro?.heading) tags.push(service.intro.heading);
  });

  return tags.join(" ");
});

const isVisible = (tags) => {
  const query = store.searchQuery.toLowerCase().trim();
  if (!query) return true;
  const keywords = query.split(/\s+/).filter(Boolean);
  const content = tags.toLowerCase();
  return keywords.every((word) => content.includes(word));
};

const completedProjectsCount = ref(0);
const clientSatisfiedCount = ref(0);
const happyClientsCount = ref(0);
const yearsExperienceCount = ref(0);
const funFactsElement = ref(null);
let funFactsObserver = null;

const startCounter = (counterRef, targetNumber, duration = 1000) => {
  const increment = targetNumber / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= targetNumber) {
      counterRef.value = targetNumber;
      clearInterval(timer);
    } else {
      counterRef.value = Math.floor(current);
    }
  }, 16);
};

onMounted(() => {
  funFactsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (entry.target === funFactsElement.value) {
          startCounter(completedProjectsCount, 150);
          startCounter(clientSatisfiedCount, 98);
          startCounter(happyClientsCount, 120);
          startCounter(yearsExperienceCount, 10);
          funFactsObserver.disconnect();
          funFactsObserver = null;
        }
      });
    },
    { threshold: 0.4 },
  );

  if (funFactsElement.value) {
    funFactsObserver.observe(funFactsElement.value);
  }
});

onBeforeUnmount(() => {
  if (funFactsObserver) {
    funFactsObserver.disconnect();
  }
});
</script>
