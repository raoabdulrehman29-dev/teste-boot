<template>
  <div ref="pageRoot">
    <PageBanner title="Case Studies" currentPage="Case Studies" />

    <div
      v-if="isVisible('All Case Studies')"
      class="mx-auto my-10 mt-14 w-full md:my-2 lg:my-8 lg:mt-24 text-center"
    >
      <h3 data-reveal class="mb-2 font-semibold">[ Case Studies ]</h3>
      <h1
        data-split
        class="text-[28px] font-semibold capitalize text-black sm:text-[30px] md:text-[35px] lg:text-[46px] xl:text-[60px]"
      >
        All Case Studies
      </h1>
    </div>

    <div
      v-if="
        isVisible(
          'projects case studies portfolio all projects industry categories showcase work clients solutions',
        )
      "
      :class="store.isSearchEmpty ? '' : 'mb-6'"
      data-reveal
      class="flex justify-center w-full my-10 xl:px-4 lg:w-[73%] mx-auto"
    >
      <div
        class="flex max-w-full gap-2 p-2 overflow-x-auto bg-gray-100 rounded-full shadow-sm whitespace-nowrap scrollbar-hide"
      >
        <button
          v-for="item in categories"
          :key="item"
          @click="activeCategory = item"
          class="px-5 py-2 font-medium transition-all duration-300 rounded-full lg:px-5 lg:py-3"
          :class="
            activeCategory === item
              ? 'bg-gradient-to-r from-[#185464] to-[#2bb6c4] text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-200'
          "
        >
          {{ item }}
        </button>
      </div>
    </div>

    <div
      v-if="isVisible('case studies hospatility medlink neurology plannio trueleads capaMulti')"
      :class="store.isSearchEmpty ? 'pb-20' : 'pb-24 lg:pb-32 mb-8 lg:mb-16'"
      class="mx-auto px-2 md:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:flex-row md:flex-wrap"
    >
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        data-reveal
        class="w-full md:w-[48%] my-4 group"
      >
        <router-link :to="{ name: 'ProjectDetail', params: { slug: project.slug } }">
          <div
            class="flex flex-col justify-center p-4 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <!-- Device Mockup Container -->
            <div
              class="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 relative"
            >
              <div class="relative w-full aspect-[16/9] p-4" preserveAspectRatio="xMidYMid meet">
                <svg viewBox="6 6 514.96 310" class="w-full h-full">
                  <defs>
                    <!-- Gradients -->
                    <linearGradient
                      id="bg-gradient"
                      x1="42.21"
                      y1="128.56"
                      x2="520.44"
                      y2="128.56"
                      gradientTransform="translate(-2.64 23.39)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#109a5c" stop-opacity=".15" />
                      <stop offset=".94" stop-color="#109a5c" />
                    </linearGradient>
                    <linearGradient
                      id="laptop-gradient"
                      x1="261.76"
                      y1="306.92"
                      x2="267.11"
                      y2="3.5"
                      gradientTransform="translate(528.81 314.1) rotate(-180)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#109a5c" stop-opacity=".6" />
                      <stop offset=".99" stop-color="#109a5c" stop-opacity=".3" />
                    </linearGradient>
                  </defs>

                  <rect
                    x="6"
                    y="6"
                    width="515"
                    height="310"
                    rx="12"
                    fill="url(#bg-gradient)"
                    opacity="0.1"
                  />

                  <g transform="translate(10, 10)">
                    <g transform="translate(230, 235)">
                      <path
                        d="M45,28 L55,0 L65,28 Z"
                        fill="#c0c0c0"
                        stroke="#a0a0a0"
                        stroke-width="1"
                      />
                      <rect
                        x="10"
                        y="26"
                        width="90"
                        height="6"
                        rx="3"
                        fill="#d0d0d0"
                        stroke="#b0b0b0"
                        stroke-width="0.5"
                      />
                      <rect
                        x="10"
                        y="26"
                        width="90"
                        height="2"
                        rx="1"
                        fill="#ffffff"
                        opacity="0.2"
                      />
                      <rect
                        x="48"
                        y="-4"
                        width="14"
                        height="8"
                        rx="2"
                        fill="#b0b0b0"
                        stroke="#909090"
                        stroke-width="0.5"
                      />
                    </g>

                    <rect x="240" y="220" width="100" height="12" rx="3" fill="#3a3a3a" />
                    <rect
                      x="120"
                      y="195"
                      width="340"
                      height="35"
                      rx="3"
                      fill="#333"
                      opacity="0.4"
                    />

                    <rect x="85" y="10" width="400" height="215" rx="10" fill="#1a1a1a" />

                    <foreignObject x="90" y="15" width="390" height="205" rx="4">
                      <img
                        :src="getImage(project.images[0] || project.image)"
                        class="w-full h-full object-cover rounded"
                        :alt="project.title"
                        loading="lazy"
                        @error="(e) => (e.target.src = '/images/placeholder.jpg')"
                      />
                    </foreignObject>

                    <rect
                      x="90"
                      y="15"
                      width="390"
                      height="205"
                      rx="4"
                      fill="url(#screen-glare)"
                      opacity="0.3"
                    />
                    <circle cx="285" cy="12" r="2.5" fill="#1a1a1a" />
                    <circle cx="285" cy="12" r="1" fill="#2a6a2a" opacity="0.8" />
                  </g>

                  <g transform="translate(0, 120)">
                    <ellipse cx="96.5" cy="165" rx="65" ry="6" fill="#000000" opacity="0.1" />

                    <rect x="40" y="75" width="113" height="85" rx="6" fill="#000000" />

                    <foreignObject x="43" y="78" width="107" height="79" rx="4">
                      <img
                        :src="getImage(project.images[1] || project.image)"
                        class="w-full h-full object-cover rounded"
                        :alt="project.title"
                        loading="lazy"
                        @error="(e) => (e.target.src = '/images/placeholder.jpg')"
                      />
                    </foreignObject>

                    <rect
                      x="43"
                      y="78"
                      width="107"
                      height="79"
                      rx="4"
                      fill="url(#screen-glare)"
                      opacity="0.3"
                    />
                    <circle cx="96.5" cy="77" r="2" fill="#1a1a1a" />
                    <circle cx="96.5" cy="77" r="1" fill="#2a6a2a" opacity="0.6" />
                  </g>

                  <g transform="translate(370, 70)">
                    <ellipse cx="76.77" cy="200" rx="40" ry="5" fill="#000000" opacity="0.1" />

                    <rect x="43" y="50" width="67.5" height="145" rx="8" fill="#000000" />

                    <foreignObject x="46" y="53" width="61.5" height="139" rx="6">
                      <img
                        :src="getImage(project.images[2] || project.image)"
                        class="w-full h-full object-cover rounded"
                        :alt="project.title"
                        loading="lazy"
                        @error="(e) => (e.target.src = '/images/placeholder.jpg')"
                      />
                    </foreignObject>

                    <rect
                      x="46"
                      y="53"
                      width="61.5"
                      height="139"
                      rx="6"
                      fill="url(#screen-glare)"
                      opacity="0.3"
                    />

                    <g transform="translate(61, 55)">
                      <rect x="0" y="0" width="28" height="7" rx="3.5" fill="#000000" />
                    </g>
                  </g>

                  <rect
                    x="6"
                    y="0"
                    width="515"
                    height="40"
                    rx="6"
                    fill="url(#laptop-gradient)"
                    opacity="0.1"
                  />
                </svg>
              </div>
            </div>

            <h1
              class="mt-6 mb-2 text-xl font-bold text-center text-black group-hover:text-[#185464] transition-colors duration-300"
            >
              {{ project.title }}
            </h1>
            <p class="pb-4 text-sm font-medium tracking-widest text-center text-gray-400 uppercase">
              {{ project.industry }}
            </p>
          </div>
        </router-link>
      </div>
    </div>

    <!-- TRACKED RECORDS -->
    <div
      v-if="
        isVisible(
          'Numbers our commitment delivering exceptional results Projects Completed Client Satisfied Happy Clients Years Experience Our Tracked Records',
        )
      "
      class="mx-auto my-10 mt-14 w-full lg:mt-24 text-center max-w-[1450px]"
    >
      <h1 data-reveal class="mb-4 text-3xl font-bold text-black lg:text-5xl">
        Our Tracked Records
      </h1>
      <p data-reveal class="max-w-2xl mx-auto mb-12 text-gray-500">
        Numbers that speak for our commitment to delivering exceptional results.
      </p>
    </div>

    <div
      v-if="
        isVisible(
          'tracked records stats metrics projects completed client satisfied happy clients years experience results numbers',
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
          Years of Experience
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import PageBanner from "@/components/PageBanner.vue";
import { userSearchStore } from "@/stores/SearchStore";
import projectsData from "@/stores/projects.json";
import { useScrollReveal } from "@/composables/useScrollReveal";

const store = userSearchStore();

// Core State
const projects = ref([]);
const activeCategory = ref("All Projects");

const pageRoot = ref(null);
useScrollReveal(pageRoot, {
  rebuildOn: [() => store.searchQuery, () => activeCategory.value],
});
const completedProjectsCount = ref(0);
const clientSatisfiedCount = ref(0);
const happyClientsCount = ref(0);
const yearsExperienceCount = ref(0);
const funFactsElement = ref(null);
let funFactsObserver = null;

const isVisible = (tags) => {
  const query = store.searchQuery.toLowerCase().trim();
  if (!query) return true;
  const keyword = query.split(/\s+/).filter(Boolean);
  const content = tags.toLowerCase();
  return keyword.every((word) => content.includes(word));
};

const categories = [
  "All Projects",
  "Career Platforms",
  "Medical Platforms",
  "Construction Management",
  "Lead Generation",
  "Data Analytics",
];

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

const filteredProjects = computed(() => {
  const categoryFiltered =
    activeCategory.value === "All Projects"
      ? projects.value
      : projects.value.filter(
          (p) => p.category?.toLowerCase() === activeCategory.value.toLowerCase(),
        );

  if (store.isSearchEmpty) {
    return categoryFiltered;
  }

  const keywords = store.searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);

  return categoryFiltered.filter((project) => {
    const haystack = [
      project.title,
      project.industry,
      project.category,
      project.description,
      ...(project.technologies || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return keywords.every((word) => haystack.includes(word));
  });
});

const getImage = (imgName) => {
  return new URL(`../assets/${imgName}`, import.meta.url).href;
};

onMounted(async () => {
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
  projects.value = projectsData || [];
  if (!projects.value.length) {
    console.warn("No projects found in projects.json");
  }
});

onBeforeUnmount(() => {
  if (funFactsObserver) {
    funFactsObserver.disconnect();
  }
});
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

@keyframes spin988 {
  0% {
    transform: scale(1) rotate(0);
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
