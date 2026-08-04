<template>
  <div ref="pageRoot">
    <PageBanner title="Careers" currentPage="Careers" />

    <div v-if="
      isVisible(
        'join our innovative team future technology digital landscape open positions culture careers',
      )
    "
      class="mx-2 mt-8 overflow-hidden rounded-3xl py-2 bg-gradient-to-r from-white via-[#A9C8DA]/50 to-white sm:py-12 md:mt-10 md:px-12 lg:mt-20 xl:mt-20 2xl:py-24 max-w-[1450px] lg:mx-auto">
      <div class="flex flex-col items-center text-center">
        <h2 data-split
          class="mx-4 my-4 text-[33px] font-bold leading-tight text-gray-900 md:text-[35px] lg:text-[44px] xl:text-[55px] 2xl:text-[60px]">
          Join Our Innovative Team
        </h2>
        <p data-reveal
          class="max-w-3xl mx-4 my-2 text-base font-medium leading-7 text-gray-700 md:text-lg md:leading-8">
          Build the future of technology with passionate professionals who are shaping tomorrow's
          digital landscape.
        </p>
      </div>

      <div data-reveal class="flex flex-col items-center justify-center gap-2 mt-8 sm:flex-row lg:gap-4">
        <router-link :to="{ path: '/career', hash: '#positions' }" class="group w-full sm:w-auto">
          <button
            class="flex items-center justify-center gap-2 rounded-2xl border border-[#185464] bg-transparent px-5 py-4 text-[#185464] shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-lg w-full">
            View Open Positions
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </router-link>

        <router-link :to="{ path: '/career', hash: '#culture' }" class="group w-full sm:w-auto">
          <button
            class="flex items-center justify-center gap-2 rounded-2xl border border-transparent bg-gray-800 px-5 py-4 text-white shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:shadow-lg w-full">
            Learn About Our Culture
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </router-link>
      </div>
    </div>

  <div v-if="
    isVisible(
      'culture our core values opportunities innovation collaboration growth excellence workplace principles careers',
    )
  " id="culture" :class="store.isSearchEmpty ? '' : 'mb-12 lg:mb-20'"
    class="mx-auto mt-14 w-full px-4 text-center md:px-6 lg:mt-24 lg:px-8 max-w-[1450px]">
  <h2 data-reveal class="mb-4 text-xl font-bold leading-tight text-black lg:text-3xl xl:text-4xl">
    Our Core Values
  </h2>
  <p data-reveal class="max-w-2xl mx-auto mb-12 text-sm leading-7 text-gray-500 md:text-base">
    Explore opportunities to grow with us
  </p>

  <div
    data-reveal
    class="values-tabs-shell mx-auto flex w-full max-w-[1100px] flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-gray-50 p-3 text-left shadow-[0_14px_40px_-28px_rgba(17,24,39,0.28)] lg:h-[434px] lg:flex-row lg:gap-3 lg:p-3"
    @mouseleave="restartValueAutoplay"
  >
    <!-- Tabs -->
    <div class="flex w-full flex-col gap-2 lg:w-[38%]">
      <button
        v-for="(value, index) in careers.core_values"
        :key="index"
        type="button"
        class="values-tab group flex w-full flex-col rounded-2xl border px-5 py-4 text-left transition-all duration-300"
        :class="activeValueIndex === index
          ? 'border-transparent bg-gradient-to-r from-[#185464] to-[#2bb6c4] text-white shadow-[0_16px_36px_-18px_rgba(24,84,100,0.55)]'
          : 'border-gray-100 bg-white text-gray-700 hover:border-[#2bb6c4]/40'"
        @mouseenter="setActiveValue(index)"
        @focus="setActiveValue(index)"
        @click="setActiveValue(index)"
      >
        <div class="flex items-center gap-3">
          <span
            class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-lg transition-colors duration-300"
            :class="activeValueIndex === index ? 'bg-white/15' : 'bg-gray-50'"
          >
            <span v-if="index === 0">🚀</span>
            <span v-else-if="index === 1">⚡</span>
            <span v-else-if="index === 2">🎯</span>
            <span v-else>✨</span>
          </span>
          <h3 class="text-lg font-bold leading-tight">
            {{ value.split(" ")[0] }}
          </h3>
        </div>

        <div
          class="grid transition-all duration-500 ease-out"
          :style="activeValueIndex === index
            ? 'grid-template-rows: 1fr; opacity: 1; margin-top: 0.6rem;'
            : 'grid-template-rows: 0fr; opacity: 0; margin-top: 0;'"
        >
          <p
            class="overflow-hidden text-sm leading-6"
            :class="activeValueIndex === index ? 'text-white/85' : 'text-gray-500'"
          >
            {{ value.split(" ").slice(1).join(" ") }}
          </p>
        </div>
      </button>
    </div>

    <!-- Image panel: crossfades to match whichever tab is active -->
    <div class="relative mt-3 h-[220px] w-full overflow-hidden rounded-2xl bg-gray-200 lg:mt-0 lg:h-full lg:flex-1">
      <img
        v-for="(value, index) in careers.core_values"
        :key="'value-image-' + index"
        :src="coreValueImages[index % coreValueImages.length]"
        :alt="value.split(' ')[0]"
        loading="lazy"
        class="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out"
        :class="activeValueIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
      />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
    </div>
  </div>
</div>

    <div v-if="
      isVisible(
        'all open positions careers roles engineering design product marketing sales operations jobs vacancies',
      )
    " id="positions" class="mx-auto mb-10 mt-24 w-full px-4 text-center md:px-6 lg:px-8">
      <h2 data-reveal class="mb-4 text-xl font-bold leading-tight text-black lg:text-3xl xl:text-4xl">
        All Open Positions
      </h2>
      <p data-reveal class="max-w-2xl mx-auto mb-12 text-sm leading-7 text-gray-500 md:text-base">
        The principles that guide our work and our community.
      </p>
    </div>

    <div v-if="
      isVisible(
        'open positions career listing engineering design product marketing sales operations technology jobs hiring',
      )
    " :class="store.isSearchEmpty ? '' : 'mb-12 lg:mb-20'" class="mx-auto my-20 w-full px-4 md:px-6 lg:px-8">
      <div class="flex justify-center px-4 mb-12">
        <div class="inline-flex flex-wrap justify-center gap-3 rounded-[2.5rem] border border-gray-100 bg-gray-50 p-1">
          <button v-for="tab in [
            'All Positions',
            'Engineering',
            'Design',
            'Product',
            'Marketing',
            'Operations',
          ]" :key="tab" @click="currentTab = tab" :class="[
            'rounded-[2rem] px-10 py-1 text-sm font-semibold leading-5 transition-all duration-300',
            'basis-full md:basis-[calc(50%-0.375rem)] lg:basis-[calc(20.333%-0.5rem)] xl:basis-[calc(15%-0.5rem)]',
            currentTab === tab
              ? 'bg-gradient-to-r from-[#185464] to-[#2bb6c4] text-white shadow-md'
              : 'text-gray-400 hover:text-[#185464]',
          ]">
            {{ tab }}
          </button>
        </div>
      </div>
      <div data-reveal-group class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div v-for="job in filteredJobs" :key="job.id"
          class="group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_14px_40px_-24px_rgba(17,24,39,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c7e3ea] hover:shadow-[0_24px_60px_-24px_rgba(24,84,100,0.35)]">
          <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#185464] to-[#2bb6c4] opacity-80"></div>

          <div class="flex flex-wrap items-center gap-2 pt-2 mb-5">
            <span
              class="rounded-full bg-[#185464]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#185464]">
              {{ job.department }}
            </span>
            <span
              class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              {{ job.status }}
            </span>
          </div>

          <h3
            class="mb-3 text-xl font-semibold leading-8 text-gray-900 transition-colors duration-300 group-hover:text-[#185464]">
            {{ job.title }}
          </h3>

          <p class="mb-6 min-h-[72px] text-sm leading-7 text-gray-500">
            {{ job.short_description }}
          </p>

          <div class="mb-6 space-y-3 text-sm leading-6 text-gray-600">
            <div class="flex items-center justify-between px-4 py-3 rounded-2xl bg-gray-50">
              <span class="font-medium text-gray-400">Location</span>
              <span class="font-semibold text-gray-800">{{ job.location }}</span>
            </div>
            <div class="flex items-center justify-between px-4 py-3 rounded-2xl bg-gray-50">
              <span class="font-medium text-gray-400">Type</span>
              <span class="font-semibold text-gray-800">{{ job.type }}</span>
            </div>
            <div class="flex items-center justify-between px-4 py-3 rounded-2xl bg-gray-50">
              <span class="font-medium text-gray-400">Experience</span>
              <span class="font-semibold text-gray-800">{{ job.experience }}</span>
            </div>
          </div>

          <router-link :to="`/careers/${job.slug}`"
            class="inline-flex items-center gap-2 rounded-2xl border border-[#185464] px-5 py-3 text-sm font-semibold leading-5 text-[#185464] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_12px_30px_-16px_rgba(24,84,100,0.9)]">
            View Job
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Why work with us section  -->
    <div v-if="
      isVisible(
        'why work with us benefits Competitive compensation flexible work learning development health wellness time off team culture',
      )
    " id="why-work" :class="store.isSearchEmpty ? '' : 'mb-12 lg:mb-20'"
      class="mx-auto mt-14 w-full px-4 text-center md:px-6 lg:mt-24 lg:px-8 max-w-[1450px]">
      <h2 data-reveal class="mb-4 text-xl font-bold leading-tight text-black lg:text-3xl xl:text-4xl">
        Why Work With Us?
      </h2>
      <p data-reveal class="max-w-2xl mx-auto mb-12 text-sm leading-7 text-gray-500 md:text-base">
        We offer comprehensive benefits and a supportive environment to help you thrive both
        personally and professionally.
      </p>

      <div data-reveal-group class="flex flex-col flex-wrap justify-center gap-6 my-10 text-left md:flex-row">
        <div
          class="group flex w-full flex-col justify-between overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_14px_35px_-24px_rgba(17,24,39,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_-24px_rgba(24,84,100,0.28)] md:w-[45%] lg:w-[30%]">
          <div class="flex flex-col items-start justify-start">
            <div class="flex flex-col items-start w-full gap-4">
              <img src="../assets/career6.png" alt="Competitive Compensation"
                class="w-8 h-8 transition-transform duration-300 group-hover:-translate-x-2" loading="lazy"
                decoding="async" />
              <div
                class="h-[2px] w-0 bg-[#185464] opacity-0 transition-all duration-300 group-hover:w-6 group-hover:opacity-100">
              </div>
            </div>

            <div class="flex flex-col items-start justify-start mt-6">
              <h3
                class="mb-2 bg-gradient-to-b from-[#185464] to-[#2a8ba3] bg-clip-text text-xl font-bold leading-tight text-transparent md:text-2xl">
                Competitive Compensation
              </h3>
              <p class="text-sm font-medium leading-7 text-gray-500 md:text-[15px]">
                Attractive salary packages with performance-based bonuses and equity options.
              </p>
            </div>
          </div>
        </div>
        <!-- card2  -->
        <div
          class="group flex w-full flex-col justify-between overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_14px_35px_-24px_rgba(17,24,39,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_-24px_rgba(24,84,100,0.28)] md:w-[45%] lg:w-[30%]">
          <div class="flex flex-col items-start justify-start">
            <div class="flex flex-col items-start w-full gap-4">
              <img src="../assets/career1.png" alt="Flexible Work"
                class="w-8 h-8 transition-transform duration-300 group-hover:-translate-x-2" loading="lazy"
                decoding="async" />
              <div
                class="h-[2px] w-0 bg-[#185464] opacity-0 transition-all duration-300 group-hover:w-6 group-hover:opacity-100">
              </div>
            </div>

            <div class="flex flex-col items-start justify-start mt-6">
              <h3
                class="mb-2 bg-gradient-to-b from-[#185464] to-[#2a8ba3] bg-clip-text text-xl font-bold leading-tight text-transparent md:text-2xl">
                Flexible Work
              </h3>
              <p class="text-sm font-medium leading-7 text-gray-500 md:text-[15px]">
                Remote work options and flexible hours to maintain work-life balance.
              </p>
            </div>
          </div>
        </div>

        <!-- card3  -->
        <div
          class="group flex w-full flex-col justify-between overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_14px_35px_-24px_rgba(17,24,39,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_-24px_rgba(24,84,100,0.28)] md:w-[45%] lg:w-[30%]">
          <div class="flex flex-col items-start justify-start">
            <div class="flex flex-col items-start w-full gap-4">
              <img src="../assets/career2.png" alt="Learning & Development"
                class="w-8 h-8 transition-transform duration-300 group-hover:-translate-x-2" loading="lazy"
                decoding="async" />
              <div
                class="h-[2px] w-0 bg-[#185464] opacity-0 transition-all duration-300 group-hover:w-6 group-hover:opacity-100">
              </div>
            </div>

            <div class="flex flex-col items-start justify-start mt-6">
              <h3
                class="mb-2 bg-gradient-to-b from-[#185464] to-[#2a8ba3] bg-clip-text text-xl font-bold leading-tight text-transparent md:text-2xl">
                Learning & Development
              </h3>
              <p class="text-sm font-medium leading-7 text-gray-500 md:text-[15px]">
                Professional development budget, training programs, and conference attendance.
              </p>
            </div>
          </div>
        </div>
        <!-- card 4  -->
        <div
          class="group flex w-full flex-col justify-between overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_14px_35px_-24px_rgba(17,24,39,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_-24px_rgba(24,84,100,0.28)] md:w-[45%] lg:w-[30%]">
          <div class="flex flex-col items-start justify-start">
            <div class="flex items-start w-full gap-4 iflex-col">
              <img src="../assets/career3.png" alt="Health & Wellness"
                class="w-8 h-8 transition-transform duration-300 group-hover:-translate-x-2" loading="lazy"
                decoding="async" />
              <div
                class="h-[2px] w-0 bg-[#185464] opacity-0 transition-all duration-300 group-hover:w-6 group-hover:opacity-100">
              </div>
            </div>

            <div class="flex flex-col items-start justify-start mt-6">
              <h3
                class="mb-2 bg-gradient-to-b from-[#185464] to-[#2a8ba3] bg-clip-text text-xl font-bold leading-tight text-transparent md:text-2xl">
                Health & Wellness
              </h3>
              <p class="text-sm font-medium leading-7 text-gray-500 md:text-[15px]">
                Comprehensive health insurance and wellness programs for you and your family.
              </p>
            </div>
          </div>
        </div>
        <!-- card 5  -->
        <div
          class="group flex w-full flex-col justify-between overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_14px_35px_-24px_rgba(17,24,39,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_-24px_rgba(24,84,100,0.28)] md:w-[45%] lg:w-[30%]">
          <div class="flex flex-col items-start justify-start">
            <div class="flex flex-col items-start w-full gap-4">
              <img src="../assets/career4.png" alt="Time Off"
                class="w-8 h-8 transition-transform duration-300 group-hover:-translate-x-2" loading="lazy"
                decoding="async" />
              <div
                class="h-[2px] w-0 bg-[#185464] opacity-0 transition-all duration-300 group-hover:w-6 group-hover:opacity-100">
              </div>
            </div>

            <div class="flex flex-col items-start justify-start mt-6">
              <h3
                class="mb-2 bg-gradient-to-b from-[#185464] to-[#2a8ba3] bg-clip-text text-xl font-bold leading-tight text-transparent md:text-2xl">
                Time Off
              </h3>
              <p class="text-sm font-medium leading-7 text-gray-500 md:text-[15px]">
                Generous vacation policy and paid time off for personal and family needs.
              </p>
            </div>
          </div>
        </div>
        <!-- card 6  -->
        <div
          class="group flex w-full flex-col justify-between overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_14px_35px_-24px_rgba(17,24,39,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_-24px_rgba(24,84,100,0.28)] md:w-[45%] lg:w-[30%]">
          <div class="flex flex-col items-start justify-start">
            <div class="flex flex-col items-start w-full gap-4">
              <img src="../assets/career5.png" alt="Team Culture"
                class="w-8 h-8 transition-transform duration-300 group-hover:-translate-x-2" loading="lazy"
                decoding="async" />
              <div
                class="h-[2px] w-0 bg-[#185464] opacity-0 transition-all duration-300 group-hover:w-6 group-hover:opacity-100">
              </div>
            </div>

            <div class="flex flex-col items-start justify-start mt-6">
              <h3
                class="mb-2 bg-gradient-to-b from-[#185464] to-[#2a8ba3] bg-clip-text text-xl font-bold leading-tight text-transparent md:text-2xl">
                Team Culture
              </h3>
              <p class="text-sm font-medium leading-7 text-gray-500 md:text-[15px]">
                Regular team events, celebrations, and a collaborative work environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed,onBeforeUnmount } from "vue";
import { userSearchStore } from "@/stores/SearchStore";
import PageBanner from "@/components/PageBanner.vue";
import careerData from "@/stores/career.json";
import { useScrollReveal } from "@/composables/useScrollReveal";

const currentTab = ref("All Positions");
const career = ref(null);
const store = userSearchStore();

const pageRoot = ref(null);
useScrollReveal(pageRoot, {
  rebuildOn: [() => store.searchQuery],
});
const careers = ref({
  core_values: [
    "Innovation We embrace new technologies and creative solutions to solve complex problems.",
    "Collaboration We believe in the power of teamwork and open communication.",
    "Growth We invest in our people and provide opportunities for continuous learning.",
    "Excellence We strive for excellence in everything we do and deliver exceptional results.",
  ],
});

const isVisible = (tags) => {
  const query = store.searchQuery.toLowerCase().trim();

  if (!query) {
    return true;
  }

  const keywords = query.split(/\s+/).filter(Boolean);
  const content = tags.toLowerCase();

  return keywords.every((word) => content.includes(word));
};

const filteredJobs = computed(() => {
  const jobs = Array.isArray(career.value) ? career.value : [];

  const searchFiltered = jobs.filter((job) => {
    if (store.isSearchEmpty) {
      return true;
    }

    const haystack = [
      job.title,
      job.department,
      job.short_description,
      job.location,
      job.type,
      job.experience,
      ...(job.technologies || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return store.searchQuery
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .every((word) => haystack.includes(word));
  });

  if (currentTab.value === "All Positions") {
    return searchFiltered;
  }
  return searchFiltered.filter((job) => job.department === currentTab.value);
});

const loadCareers = async () => {
  try {
    // Directly assign the imported data
    career.value = careerData;
  } catch {
    console.warn("Note: careers.json not found, using default data.");
  }
};

onMounted(() => {
  loadCareers();
});
// --- Core values: hover-driven tabs + crossfading image panel ---
const activeValueIndex = ref(0);

// TEMP placeholder images — swap these for your own once downloaded
const coreValueImages = ref([
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80&auto=format&fit=crop",
]);

let valueAutoplayTimer = null;

const setActiveValue = (index) => {
  activeValueIndex.value = index;
  restartValueAutoplay();
};

const startValueAutoplay = () => {
  clearInterval(valueAutoplayTimer);
  const total = careers.core_values?.length || 1;
  valueAutoplayTimer = setInterval(() => {
    activeValueIndex.value = (activeValueIndex.value + 1) % total;
  }, 4000);
};

const restartValueAutoplay = () => startValueAutoplay();

onMounted(() => {
  startValueAutoplay();
});

onBeforeUnmount(() => {
  clearInterval(valueAutoplayTimer);
});
</script>

<style scoped>
/* Added smooth fade for tabs */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
