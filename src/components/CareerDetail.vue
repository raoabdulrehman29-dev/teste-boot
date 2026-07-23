<template>
  <div v-if="job" class="fade-in">
    <div class="overflow-hidden">
      <div
        class="banner relative isolate rounded-[25px] mt-3 mb-10 min-h-[280px] md:min-h-[400px] lg:min-h-[540px] flex items-center"
      >
        <!-- Top Left Decoration -->
        <div class="absolute top-0 left-0 z-20 hidden lg:block rounded-3xl">
          <div class="relative">
            <div class="h-[66px] w-[100px] overflow-hidden rounded-br-3xl bg-white"></div>
            <div
              class="absolute top-0 -right-[19px] h-[40px] w-[19px] bg-transparent rounded-tl-3xl"
              style="box-shadow: -24px -24px 0 23px #fff; z-index: 30"
            ></div>
            <div
              class="absolute -bottom-[19px] left-0 h-[19px] w-[40px] bg-transparent rounded-tl-3xl"
              style="box-shadow: -19px -19px 0 18px #fff; z-index: 30"
            ></div>
          </div>
        </div>

        <div
          class="relative z-10 my-4 w-full px-4 py-12 pb-[5rem] md:my-6 md:px-6 md:py-16 md:pb-[6rem] lg:my-8 lg:px-20 lg:py-20"
        >
          <div class="grid xl:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start md:py-6">
            <div class="text-white mb-4">
              <div
                class="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/20 text-[8px] md:text-[10px] uppercase tracking-[0.2em] mb-3 md:mb-6 bg-white/5 font-medium"
              >
                {{ job.department }}
              </div>

              <h1 class="text-2xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-6 leading-[1.1]">
                {{ job.title }}
              </h1>

              <!-- Description - HIDDEN on mobile -->
              <p
                class="hidden md:block max-w-xl mb-6 md:mb-10 text-base leading-relaxed md:text-xl text-white/70"
              >
                {{ job.short_description }}
              </p>

              <!-- Experience/Type/Location - HIDDEN on mobile -->
              <div
                class="hidden md:flex items-center gap-4 md:gap-8 pt-4 md:pt-8 border-t border-white/10"
              >
                <div class="flex flex-col">
                  <span
                    class="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mb-1"
                    >Experience</span
                  >
                  <span class="text-base md:text-lg font-semibold">{{ job.experience }}</span>
                </div>
                <div class="w-px h-8 md:h-10 bg-white/10"></div>
                <div class="flex flex-col">
                  <span
                    class="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mb-1"
                    >Type</span
                  >
                  <span class="text-base md:text-lg font-semibold">{{ job.type }}</span>
                </div>
                <div class="w-px h-8 md:h-10 bg-white/10"></div>
                <div class="flex flex-col">
                  <span
                    class="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mb-1"
                    >Location</span
                  >
                  <span class="text-base md:text-lg font-semibold">{{ job.location }}</span>
                </div>
              </div>
            </div>

            <!-- Technologies - HIDDEN on mobile -->
            <div class="hidden xl:flex relative justify-center lg:pl-10">
              <div class="absolute rounded-full opacity-30 -inset-4 bg-cyan-400 blur-3xl"></div>
              <div
                class="relative bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-[2.5rem] border border-white/20 text-white w-full max-w-md"
              >
                <h4 class="mb-3 md:mb-4 text-lg md:text-xl font-bold">Required Technologies</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in job.technologies"
                    :key="tech"
                    class="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm border bg-white/10 rounded-xl border-white/10"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom breadcrumb - Made smaller on mobile -->
        <div class="absolute bottom-0 left-0 z-20">
          <div class="relative inline-block">
            <!-- Bottom Left Shadow - Hidden on mobile, shown on md+ -->
            <div
              class="absolute -top-[19px] left-0 z-30 h-[19px] w-[40px] rounded-bl-3xl bg-transparent shadow-[-10px_10px_0_9px_#fff]"
            ></div>
            <div class="relative z-40">
              <div
                class="flex items-center gap-1 md:gap-2 px-3 md:px-5 py-1.5 md:py-3 text-xs md:text-base font-normal bg-white rounded-tr-3xl lg:px-20 lg:py-8"
              >
                <router-link to="/" class="underline">Home</router-link>
                <span class="text-[10px] md:text-base">/</span>
                <router-link to="/career" class="underline">Careers</router-link>
                <span class="text-[10px] md:text-base">/</span>
                <span class="page-title">{{ job.title }}</span>
              </div>
            </div>
            <!-- Bottom Right Shadow - Hidden on mobile, shown on md+ -->
            <div
              class="absolute bottom-0 -right-[18px] z-30 h-[30px] w-[22px] rounded-bl-3xl bg-transparent shadow-[-11px_24px_0_10px_#fff] md:-right-[18px] md:w-[18px] lg:h-[32px]"
            ></div>
          </div>
        </div>

        <!-- Bottom right decoration - hidden on mobile -->
        <div class="absolute bottom-0 right-0 z-20 hidden lg:block">
          <div class="relative">
            <div class="h-[14.21vw] w-[90px] bg-white rounded-br-3xl rounded-tl-3xl"></div>
            <div
              class="absolute -top-[19px] right-0 h-[19px] w-[40px] bg-transparent rounded-br-3xl"
              style="box-shadow: 13px 11px 0 10px #fff; z-index: 30"
            ></div>
            <div
              class="absolute bottom-0 -left-[19px] h-[40px] w-[19px] bg-transparent rounded-br-3xl"
              style="box-shadow: 6px 9px 0 4px #fff; z-index: 30"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="
        isVisible([
          job.title,
          job.long_description,
          ...(job.requirements || []),
          ...(job.technologies || []),
          job.application_details?.cta_text,
          job.application_details?.instruction,
          'job description requirements technologies apply',
        ])
      "
      :class="store.isSearchEmpty ? '' : 'mb-12 lg:mb-20'"
      class="mx-auto px-4 md:px-6 lg:px-24 py-12 md:py-20 grid lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16"
    >
      <div class="space-y-10 md:space-y-12 lg:col-span-2">
        <section>
          <h2 class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl">Job Description</h2>
          <p class="text-base md:text-lg leading-relaxed text-gray-600">
            {{ job.long_description }}
          </p>
        </section>

        <section>
          <h2 class="mb-4 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl">Requirements</h2>
          <ul class="space-y-3 md:space-y-4">
            <li
              v-for="req in job.requirements"
              :key="req"
              class="flex gap-3 text-base md:text-lg text-gray-600"
            >
              <span class="font-bold text-cyan-500">•</span> {{ req }}
            </li>
          </ul>
        </section>
      </div>

      <div class="lg:col-span-1">
        <div class="sticky top-10 bg-gray-50 p-6 md:p-8 rounded-[2.5rem] border border-gray-100">
          <h3 class="mb-2 text-xl md:text-2xl font-bold">
            {{ job.application_details?.cta_text || "Apply Now" }}
          </h3>
          <p class="mb-4 md:mb-6 text-sm md:text-base text-gray-500">
            {{ job.application_details?.instruction || "Submit your application to join our team" }}
          </p>
          <router-link :to="`/applyfor/${job.slug}`">
            <button
              class="w-full rounded-2xl border border-[#185464] bg-transparent px-3 py-3 text-sm font-bold text-[#185464] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)] md:py-4 md:text-base"
            >
              Apply For This Position
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="flex items-center justify-center min-h-screen px-6 text-center">
    <div>
      <h1 class="mb-3 text-3xl font-bold text-[#185464]">Job Not Found</h1>
      <p class="mb-6 text-gray-500">
        The job you're looking for doesn't exist or has been removed.
      </p>
      <router-link
        to="/career"
        class="inline-flex items-center rounded-2xl border border-[#185464] bg-transparent px-6 py-3 font-semibold text-[#185464] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(24,84,100,0.8),0_4px_6px_-2px_rgba(24,84,100,0.5)]"
      >
        Browse Careers
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { userSearchStore } from "@/stores/SearchStore";
import careerData from "@/stores/career.json";

const route = useRoute();
const job = ref(null);
const store = userSearchStore();

const isVisible = (tags) => {
  const query = store.searchQuery.toLowerCase().trim();

  if (!query) {
    return true;
  }

  const content = (Array.isArray(tags) ? tags.join(" ") : tags).toLowerCase();
  const keywords = query.split(/\s+/).filter(Boolean);

  return keywords.every((word) => content.includes(word));
};

onMounted(async () => {
  try {
    job.value = careerData.find((j) => j.slug === route.params.slug);
  } catch (error) {
    console.error("Error loading job details:", error);
  }
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

.fade-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
