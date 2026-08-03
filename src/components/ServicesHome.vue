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
        <p data-reveal class="mb-2 font-semibold">[ Our Services ]</p>
        <h2
          data-split
          class="text-[28px] font-semibold capitalize text-black sm:text-[30px] md:text-[35px] lg:text-[46px] xl:text-[60px]"
        >
          What We Offer
        </h2>
        <p data-reveal class="mx-auto mt-4 max-w-2xl text-gray-500">
          We provide comprehensive digital solutions to help your business grow and succeed in the
          modern world.
        </p>
      </div>

      <!-- Service Cards Grid -->
      <div
        v-if="displayServices.length > 0"
        data-reveal-group
        class="service-expand-wrapper mt-12"
      >
        <div
          v-for="(row, rowIndex) in chunkedServices"
          :key="rowIndex"
          class="service-row"
        >
          <router-link
            v-for="(service, index) in row"
            :key="service.id || index"
            :to="`/services/${service.id}`"
            class="service-card group"
          >
            <!-- IMAGE -->
            <div class="service-image">
              <img
                :src="getServiceImage(service.id)"
                :alt="getDisplayTitle(service.title)"
                loading="lazy"
              />
              <div class="service-overlay"></div>
              <div class="service-icon">
                {{ getServiceIcon(service.id) }}
              </div>
            </div>

            <!-- CONTENT -->
            <div class="service-content">
              <h3>
                {{ getDisplayTitle(service.title) }}
              </h3>
              <p>
                {{ getShortDescription(service) }}
              </p>
              <span class="service-button">
                Learn More
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
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
      <h2 data-reveal class="mb-4 text-3xl font-bold text-black lg:text-5xl">
        Performance Metrics
      </h2>
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
        <h3
          class="my-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-b from-blue-400 to-emerald-400 bg-clip-text"
        >
          {{ completedProjectsCount }}+
        </h3>
        <h4 class="text-xl font-semibold">
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
        </h4>
      </div>
      <div class="w-1/2 md:w-1/3 lg:w-1/4">
        <h3
          class="my-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-b from-blue-400 to-emerald-400 bg-clip-text"
        >
          {{ clientSatisfiedCount }}%
        </h3>
        <h4 class="text-xl font-semibold">
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
        </h4>
      </div>
      <div class="w-1/2 md:w-1/3 lg:w-1/4">
        <h3
          class="my-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-b from-blue-400 to-emerald-400 bg-clip-text"
        >
          {{ happyClientsCount }}+
        </h3>
        <h4 class="text-xl font-semibold">
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
        </h4>
      </div>
      <div class="w-1/2 md:w-1/3 lg:w-1/4">
        <h3
          class="my-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-b from-blue-400 to-emerald-400 bg-clip-text"
        >
          {{ yearsExperienceCount }}+
        </h3>
        <h4 class="text-xl font-semibold">
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
        </h4>
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

// Static image imports
import genAiImg from "@/assets/Services/gen-ai.jpg";
import dataAnalyticsImg from "@/assets/Services/data-analytics.jpg";
import businessIntelImg from "@/assets/Services/business-intelegence.jpg";
import designDevImg from "@/assets/Services/design-development.jpg";
import maintenanceImg from "@/assets/it2.jpg";
import automationImg from "@/assets/Services/automation-apps.jpg";
import webDevImg from "@/assets/techsolution.webp";
import appDevImg from "@/assets/it1.webp";
import uxUiImg from "@/assets/Services/ux-design.jpg";

const store = userSearchStore();

const pageRoot = ref(null);
useScrollReveal(pageRoot, { rebuildOn: [() => store.searchQuery] });

const allServices = computed(() => {
  const services = [];

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

// ============================================ -->
// FIXED: CHUNK SERVICES FOR CONSISTENT ROWS
// ============================================ -->
// Add this after your other refs
const windowWidth = ref(window.innerWidth);

// Add resize handler
const handleResize = () => {
  windowWidth.value = window.innerWidth;
};
const chunkedServices = computed(() => {
  const items = displayServices.value;
  const rows = [];
  
  // Use reactive windowWidth
  const width = windowWidth.value;
  
  let itemsPerRow;
  if (width >= 1024) {
    itemsPerRow = 3;
  } else if (width >= 768) {
    itemsPerRow = 2;
  } else {
    itemsPerRow = 1;
  }

  for (let i = 0; i < items.length; i += itemsPerRow) {
    rows.push(items.slice(i, i + itemsPerRow));
  }

  return rows;
});
onMounted(() => {
  // ... existing code ...
  
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  // ... existing code ...
  
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
/* ============================================ */
/* SERVICE EXPAND WRAPPER                      */
/* ============================================ */
.service-expand-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 100%;
  overflow: hidden;
}

.service-row {
  display: flex;
  gap: 20px;
  width: 100%;
}

/* ============================================ */
/* SERVICE CARD - BASE STYLES                  */
/* ============================================ */
.service-card {
  position: relative;
  flex: 1;
  height: 480px;
  overflow: hidden;
  border-radius: 28px;
  background: #fff;
  transition: flex 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 0.4s ease,
    box-shadow 0.4s ease;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  will-change: transform, flex;
}

.service-row:hover .service-card {
  flex: 0.65;
}

.service-row .service-card:hover {
  flex: 2.2;
  z-index: 10;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.18);
  transform: translateY(-4px);
}

/* ============================================ */
/* SERVICE IMAGE                               */
/* ============================================ */
.service-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    filter 0.5s ease;
}

.service-card:hover img {
  transform: scale(1.1);
  filter: brightness(0.75);
}

/* ============================================ */
/* SERVICE OVERLAY                             */
/* ============================================ */
.service-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(8, 17, 31, 0.92) 5%,
    rgba(8, 17, 31, 0.55) 38%,
    rgba(8, 17, 31, 0.15) 70%,
    transparent 100%
  );
  transition: background 0.5s ease;
}

.service-card:hover .service-overlay {
  background: linear-gradient(
    to top,
    rgba(8, 17, 31, 0.95) 5%,
    rgba(8, 17, 31, 0.65) 40%,
    rgba(8, 17, 31, 0.2) 70%,
    transparent 100%
  );
}

/* ============================================ */
/* SERVICE ICON                                */
/* ============================================ */
.service-icon {
  position: absolute;
  top: 28px;
  left: 28px;
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: linear-gradient(135deg, #185464, #2bb6c4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.4s ease;
  box-shadow: 0 8px 24px rgba(43, 182, 196, 0.3);
  z-index: 2;
}

.service-card:hover .service-icon {
  transform: rotate(8deg) scale(1.12);
  box-shadow: 0 12px 32px rgba(43, 182, 196, 0.45);
}

/* ============================================ */
/* SERVICE CONTENT                             */
/* ============================================ */
.service-content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  padding: 32px 28px 28px;
  color: white;
}

.service-content h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: -0.3px;
  transition: transform 0.4s ease;
}

/* ============================================ */
/* FIXED: PARAGRAPH ANIMATION                  */
/* ============================================ */
.service-content p {
  font-size: 14px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 16px;
  max-width: 90%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* FIXED: Hidden by default, slides up on hover */
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* ============================================ */
/* SERVICE BUTTON                              */
/* ============================================ */
.service-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #2bb6c4;
  transition: opacity 0.4s ease 0.2s,
    transform 0.4s ease 0.2s;
  opacity: 0;
  transform: translateY(8px);
}

.service-button svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

/* ============================================ */
/* HOVER EFFECTS                               */
/* ============================================ */
.service-card:hover .service-content h3 {
  transform: translateY(-4px);
}

.service-card:hover .service-content p {
  /* FIXED: Appears from bottom on hover */
  opacity: 1;
  transform: translateY(0);
}

.service-card:hover .service-button {
  opacity: 1;
  transform: translateY(0);
}

.service-card:hover .service-button svg {
  transform: translateX(6px);
}

/* ============================================ */
/* RESPONSIVE BREAKPOINTS                      */
/* ============================================ */

/* Desktop (1280px+) */
@media (min-width: 1280px) {
  .service-row {
    display: flex;
    gap: 20px;
  }
  
  .service-card {
    height: 480px;
  }
}

/* Small Desktop / Large Tablet (1024px - 1279px) */
@media (max-width: 1279px) and (min-width: 1024px) {
  .service-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .service-card {
    height: 420px;
    flex: unset !important;
  }

  .service-row:hover .service-card {
    flex: unset !important;
  }

  .service-row .service-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  }

  .service-content h3 {
    font-size: 20px;
  }

  .service-content p {
    font-size: 13px;
    -webkit-line-clamp: 2;
  }

  .service-icon {
    width: 48px;
    height: 48px;
    font-size: 20px;
    top: 20px;
    left: 20px;
  }

  .service-content {
    padding: 24px 20px 20px;
  }

  .service-button {
    font-size: 13px;
  }
}

/* ============================================ */
/* FIXED: TABLET (768px - 1023px)              */
/* ALWAYS 2 CARDS PER ROW                      */
/* ============================================ */
@media (max-width: 1023px) and (min-width: 768px) {
  .service-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 16px;
  }

  .service-card {
    height: 380px;
    flex: unset !important;
  }

  .service-row:hover .service-card {
    flex: unset !important;
  }

  .service-row .service-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
    flex: unset !important;
  }

  .service-content h3 {
    font-size: 18px;
  }

  .service-content p {
    font-size: 13px;
    -webkit-line-clamp: 2;
  }

  .service-icon {
    width: 44px;
    height: 44px;
    font-size: 18px;
    top: 18px;
    left: 18px;
  }

  .service-content {
    padding: 20px 18px 18px;
  }

  .service-button {
    font-size: 12px;
    opacity: 0;
    transform: translateY(8px);
  }

  /* Keep hover effect on tablet */
  .service-card:hover .service-button {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ============================================ */
/* MOBILE (320px - 767px)                      */
/* ============================================ */
@media (max-width: 767px) {
  .service-expand-wrapper {
    gap: 16px;
  }

  .service-row {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .service-card {
    height: 320px;
    flex: unset !important;
    border-radius: 20px;
  }

  .service-row:hover .service-card {
    flex: unset !important;
  }

  .service-row .service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
  }

  .service-image img {
    transform: scale(1.05);
  }

  .service-card:hover img {
    transform: scale(1.08);
  }

  .service-content h3 {
    font-size: 17px;
    margin-bottom: 4px;
  }

  .service-content p {
    font-size: 13px;
    -webkit-line-clamp: 2;
    margin-bottom: 12px;
    max-width: 100%;
    /* Mobile: always visible */
    opacity: 0.85;
    transform: translateY(0);
  }

  .service-icon {
    width: 40px;
    height: 40px;
    font-size: 16px;
    top: 16px;
    left: 16px;
    border-radius: 14px;
  }

  .service-content {
    padding: 16px 16px 16px;
  }

  .service-button {
    font-size: 12px;
    opacity: 1;
    transform: translateY(0);
    color: #2bb6c4;
  }

  /* Disable hover animations on mobile */
  .service-card:hover .service-content h3 {
    transform: translateY(0);
  }

  .service-card:hover .service-content p {
    opacity: 0.85;
    transform: translateY(0);
  }

  .service-card:hover .service-button {
    opacity: 1;
    transform: translateY(0);
  }

  .service-card:hover .service-icon {
    transform: rotate(6deg) scale(1.08);
  }
}

/* Very Small Mobile (320px - 400px) */
@media (max-width: 400px) {
  .service-card {
    height: 280px;
    border-radius: 16px;
  }

  .service-content h3 {
    font-size: 15px;
  }

  .service-content p {
    font-size: 12px;
    -webkit-line-clamp: 2;
  }

  .service-icon {
    width: 36px;
    height: 36px;
    font-size: 14px;
    top: 14px;
    left: 14px;
    border-radius: 12px;
  }

  .service-content {
    padding: 14px 14px 14px;
  }

  .service-button {
    font-size: 11px;
    gap: 4px;
  }

  .service-button svg {
    width: 14px;
    height: 14px;
  }
}

/* ============================================ */
/* REDUCED MOTION                             */
/* ============================================ */
@media (prefers-reduced-motion: reduce) {
  .service-card,
  .service-image img,
  .service-overlay,
  .service-icon,
  .service-content h3,
  .service-content p,
  .service-button,
  .service-button svg {
    transition: none !important;
    animation: none !important;
  }

  .service-card:hover {
    transform: none !important;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06) !important;
  }

  .service-card:hover img {
    transform: none !important;
    filter: brightness(0.85) !important;
  }

  .service-icon {
    transform: none !important;
  }

  .service-card:hover .service-icon {
    transform: none !important;
  }

  .service-content h3 {
    transform: none !important;
  }

  .service-content p {
    opacity: 0.85 !important;
    transform: none !important;
  }

  .service-button {
    opacity: 1 !important;
    transform: none !important;
  }

  .service-row:hover .service-card {
    flex: unset !important;
  }

  .service-row .service-card:hover {
    flex: unset !important;
  }
}
</style>