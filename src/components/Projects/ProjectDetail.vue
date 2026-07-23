<template>
  <div v-if="project" class="fade-in-element">
    <div class="overflow-hidden px-4 sm:px-6 lg:px-8">
      <div
        class="banner relative isolate mx-auto mt-3 mb-10 flex min-h-[280px] items-center rounded-[25px] md:min-h-[400px] lg:min-h-[540px]"
      >
        <div class="absolute top-0 left-0 z-20 hidden lg:block rounded-3xl">
          <div class="relative">
            <div class="h-[66px] w-[100px] bg-white rounded-br-3xl overflow-hidden"></div>
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
          class="relative z-10 w-full px-6 py-12 pb-[5rem] md:px-6 md:py-16 md:pb-[6rem] lg:px-16 lg:py-20 xl:px-20"
        >
          <div
            class="grid gap-6 md:gap-8 xl:grid-cols-2 lg:items-stretch lg:gap-10 xl:gap-12 lg:my-6"
          >
            <div class="flex h-full flex-col justify-center text-white">
              <div
                class="inline-block px-3 py-1 md:px-4 md:py-1 rounded-full border border-white/20 text-[8px] md:text-[10px] uppercase tracking-[0.2em] mb-3 md:mb-6 bg-white/5 font-medium"
              >
                {{ project.industry }}
              </div>

              <h1
                class="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 leading-[1.1] text-center md:text-start"
              >
                {{ project.title }}
              </h1>

              <!-- Description - HIDDEN on mobile -->
              <p
                class="hidden md:block max-w-xl mb-6 md:mb-10 text-base leading-relaxed md:text-xl text-white/70"
              >
                {{ project.description }}
              </p>

              <!-- Duration/Team - HIDDEN on mobile -->
              <div
                class="hidden md:flex items-center mb-4 gap-4 md:gap-8 pt-4 md:pt-8 border-t border-white/10"
              >
                <div class="flex flex-col">
                  <span
                    class="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mb-1"
                    >Duration</span
                  >
                  <span class="text-base md:text-lg font-semibold"
                    >{{ project.duration_months }} Months</span
                  >
                </div>
                <div class="w-px h-8 md:h-10 bg-white/10"></div>
                <div class="flex flex-col">
                  <span
                    class="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mb-1"
                    >Team Size</span
                  >
                  <span class="text-base md:text-lg font-semibold"
                    >{{ project.team_size || "10" }} Developers</span
                  >
                </div>
              </div>
            </div>

            <div
              class="relative hidden overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 lg:mx-4 lg:mr-10 xl:flex lg:aspect-[16/9] lg:h-auto lg:self-center lg:items-center lg:justify-center xl:mx-6 xl:mr-14 xl:aspect-auto 2xl:h-full xl:min-h-[320px]"
            >
              <div class="absolute rounded-full opacity-50 -inset-4 bg-black/20 blur-3xl"></div>

              <div class="relative flex h-full w-full items-center justify-center p-4 xl:p-6">
                <svg viewBox="6 6 514.96 310" class="h-auto w-full max-w-[620px]">
                  <defs>
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
                    <linearGradient id="screen-glare" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.05" />
                      <stop offset="30%" stop-color="#ffffff" stop-opacity="0.02" />
                      <stop offset="70%" stop-color="#ffffff" stop-opacity="0" />
                      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.01" />
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
                        :src="`/${project.images[0]}`"
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

                  <!-- Tablet-->
                  <g transform="translate(0, 120)">
                    <ellipse cx="96.5" cy="165" rx="65" ry="6" fill="#000000" opacity="0.1" />

                    <rect x="40" y="75" width="113" height="85" rx="6" fill="#000000" />

                    <foreignObject x="43" y="78" width="107" height="79" rx="4">
                      <img
                        :src="`/${project.images[1]}`"
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

                  <!-- iPhone -->
                  <g transform="translate(370, 70)">
                    <ellipse cx="76.77" cy="200" rx="40" ry="5" fill="#000000" opacity="0.1" />

                    <rect x="43" y="50" width="67.5" height="145" rx="8" fill="#000000" />

                    <foreignObject x="46" y="53" width="61.5" height="139" rx="6">
                      <img
                        :src="`/${project.images[2]}`"
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

                    <!-- Dynamic Island -->
                    <g transform="translate(61, 55)">
                      <rect x="0" y="0" width="28" height="7" rx="3.5" fill="#000000" />
                      <circle cx="9" cy="3.5" r="1.8" fill="#1a1a1a" />
                      <circle cx="9" cy="3.5" r="1" fill="#2a6a2a" opacity="0.6" />
                      <rect
                        x="14"
                        y="2.5"
                        width="10"
                        height="2"
                        rx="1"
                        fill="#1a1a1a"
                        opacity="0.7"
                      />
                      <rect
                        x="1"
                        y="1"
                        width="26"
                        height="5"
                        rx="2.5"
                        fill="#ffffff"
                        opacity="0.06"
                      />
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
          </div>
        </div>

        <div class="absolute bottom-0 left-0 z-20">
          <div class="relative inline-block">
            <div
              class="absolute -top-[19px] left-0 h-[19px] w-[40px] bg-transparent rounded-bl-3xl"
              style="box-shadow: -10px 10px 0 9px #fff; z-index: 30"
            ></div>
            <div class="relative z-40">
              <div
                class="flex items-center gap-1 md:gap-2 px-3 md:px-5 py-1.5 md:py-3 text-xs md:text-base font-normal bg-white rounded-tr-3xl lg:px-20 lg:py-8"
              >
                <router-link to="/" class="underline">Home</router-link>
                <span class="text-[10px] md:text-base">/</span>
                <router-link to="/career" class="underline">Careers</router-link>
                <span class="text-[10px] md:text-base">/</span>
                <span>{{ project.title }}</span>
              </div>
            </div>
            <div
              class="absolute bottom-0 -right-[18px] md:-right-[18px] h-[30px] lg:h-[32px] w-[22px] md:w-[18px] bg-transparent rounded-bl-3xl"
              style="box-shadow: -11px 24px 0 10px #fff; z-index: 30"
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

    <!-- Key Results Section -->
    <div
      v-if="
        isVisible([
          project.title,
          ...(project.key_results || []),
          'key results achieved impact outcomes metrics',
        ])
      "
      class="mx-auto my-10 mt-14 w-full lg:mt-24 text-center max-w-[1450px]"
    >
      <h1 class="mb-4 text-xl font-bold leading-tight text-black lg:text-3xl xl:text-4xl">
        Key Results Achieved
      </h1>
      <p class="max-w-2xl mx-auto mb-12 text-gray-700">
        Measurable outcomes that demonstrate the success and impact of our solution.
      </p>

      <div class="flex flex-wrap justify-center gap-6 px-4">
        <div
          v-for="(result, index) in project.key_results"
          :key="index"
          class="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] bg-gray-50 rounded-[2rem] p-8 border border-gray-100 flex flex-col items-center transition-transform hover:scale-105"
        >
          <div
            class="flex items-center justify-center mb-6 bg-white rounded-full shadow-sm w-14 h-14"
          >
            <span v-if="index === 0">🚀</span>
            <span v-else-if="index === 1">⚡</span>
            <span v-else-if="index === 2">🎯</span>
            <span v-else>✨</span>
          </div>
          <h2 class="mb-2 text-3xl font-bold text-[#185464]">
            {{ result.split(" ").slice(0, 1).join("") }}
          </h2>
          <p class="font-medium leading-tight text-gray-700">
            {{ result.split(" ").slice(1).join(" ") }}
          </p>
        </div>
      </div>
    </div>
    <!-- Technologies Section -->
    <div
      v-if="
        isVisible([project.title, ...(project.technologies || []), 'technologies tools tech stack'])
      "
      class="mx-auto mt-24 mb-10 w-full text-center"
    >
      <h2 class="mb-4 text-xl font-bold leading-tight text-black lg:text-3xl xl:text-4xl">
        Technologies & Tools
      </h2>

      <div class="flex items-center justify-center w-full px-4">
        <div
          class="flex flex-wrap justify-center gap-2 p-3 bg-gray-50 rounded-[2.5rem] border border-gray-100 w-full max-w-4xl mx-auto"
        >
          <div
            v-for="tech in project.technologies"
            :key="tech"
            class="rounded-full border border-gray-100 bg-white text-[#185464] font-medium shadow-sm hover:border-[#185464] transition-all cursor-default text-center truncate px-3 py-2.5"
            :class="{
              'w-[calc(100%-0.25rem)] sm:w-[calc(33.333%-0.5rem)] md:w-[calc(25%-0.5rem)] lg:w-[calc(20%-0.5rem)] ':
                project.technologies.length >= 4,
              'w-[calc(50%-0.25rem)] sm:w-[calc(33.333%-0.5rem)] md:w-[calc(33.333%-0.5rem)] lg:w-[calc(25%-0.5rem)]':
                project.technologies.length === 3,
              'w-[calc(50%-0.25rem)] sm:w-[calc(50%-0.25rem)] md:w-[calc(33.333%-0.5rem)] lg:w-[calc(25%-0.5rem)]':
                project.technologies.length === 2,
            }"
            :title="tech"
          >
            {{ tech }}
          </div>
        </div>
      </div>
    </div>

    <!-- Tabs Section -->
    <div
      v-if="
        isVisible([
          project.title,
          project.overview,
          project.challenge,
          project.solution,
          ...(project.scope || []),
          ...(project.features || []),
          ...(project.challenge_points || []),
          ...(project.technical_approach || []),
          ...(project.implementation_strategy || []),
          ...(project.longterm_benifits || []),
          'overview challenge solution results',
        ])
      "
      :class="store.isSearchEmpty ? '' : 'mb-12 lg:mb-20'"
      class="mx-auto my-20 w-full px-4 md:px-6 lg:px-8 max-w-[1450px]"
    >
      <div class="flex items-center justify-center w-full px-4 mb-12">
        <div
          class="grid grid-cols-1 gap-2 p-2 bg-gray-50 rounded-[2.5rem] border border-gray-100 w-full max-w-2xl mx-auto sm:grid-cols-2 lg:grid-cols-4"
        >
          <button
            v-for="tab in ['Overview', 'Challenge', 'Solution', 'Results']"
            :key="tab"
            @click="currentTab = tab"
            :class="[
              'px-4 py-3 rounded-[2rem] text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap',
              currentTab === tab
                ? 'bg-gradient-to-r from-[#185464] to-[#2bb6c4] text-white shadow-md border border-gray-200'
                : 'text-gray-400 hover:text-[#185464] hover:bg-gray-100',
            ]"
          >
            <span v-if="tab === 'Overview'">📋</span>
            <span v-if="tab === 'Challenge'">🎯</span>
            <span v-if="tab === 'Solution'">💡</span>
            <span v-if="tab === 'Results'">📈</span>
            {{ tab }}
          </button>
        </div>
      </div>

      <div
        class="bg-white border border-gray-100 rounded-[3rem] p-6 md:p-10 lg:p-16 shadow-sm min-h-[500px]"
      >
        <!-- Overview Tab -->
        <div v-if="currentTab === 'Overview'" class="tab-fade-in">
          <h2 class="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">Project Overview</h2>
          <p class="mb-12 text-base md:text-lg leading-relaxed text-gray-700">
            {{ project.overview }}
          </p>

          <div class="grid gap-8 md:gap-16 md:grid-cols-2">
            <div>
              <h3
                class="mb-6 border-l-4 border-[#185464] pl-4 text-lg font-bold text-gray-900 md:text-xl"
              >
                Project Scope
              </h3>
              <ul class="space-y-4">
                <li
                  v-for="item in project.scope"
                  :key="item"
                  class="font-medium leading-tight text-gray-700 text-sm md:text-base"
                >
                  <span class="font-medium leading-tight text-gray-700 text-sm md:text-base"
                    >•</span
                  >
                  {{ item }}
                </li>
              </ul>
            </div>
            <div>
              <h3
                class="mb-6 border-l-4 border-[#185464] pl-4 text-lg font-bold text-gray-900 md:text-xl"
              >
                Key Features
              </h3>
              <ul class="space-y-4">
                <li
                  v-for="feat in project.features"
                  :key="feat"
                  class="font-medium leading-tight text-gray-700 text-sm md:text-base"
                >
                  <span class="text-[#185464] font-bold">•</span> {{ feat }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Challenge Tab -->
        <div v-if="currentTab === 'Challenge'" class="tab-fade-in">
          <h2 class="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">The Challenge</h2>
          <p class="mb-10 text-base md:text-lg leading-relaxed text-gray-700">
            {{ project.challenge }}
          </p>

          <div class="bg-gray-50 rounded-[2rem] p-6 md:p-12 border border-gray-100">
            <h3
              class="mb-6 border-l-4 border-[#185464] pl-4 text-lg font-bold text-gray-900 md:text-xl"
            >
              Key Challenges Addressed:
            </h3>

            <div class="grid md:grid-cols-2 gap-y-4 gap-x-12">
              <div
                v-for="(point, index) in project.challenge_points"
                :key="index"
                class="font-medium leading-tight text-gray-700 text-sm md:text-base"
              >
                <span class="text-[#185464] font-bold">•</span>
                {{ point }}
              </div>
            </div>
          </div>
        </div>

        <!-- Solution Tab -->
        <div v-if="currentTab === 'Solution'" class="tab-fade-in">
          <h2 class="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">Our Solution</h2>
          <p class="mb-12 text-base md:text-lg leading-relaxed text-gray-700">
            {{ project.solution }}
          </p>

          <div class="flex flex-col gap-8 md:gap-10 lg:flex-row">
            <div
              class="flex-1 bg-gray-50 rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-sm"
            >
              <h3 class="mb-6 flex items-center gap-3 text-lg font-bold text-gray-900 md:text-xl">
                <span class="w-2 h-8 bg-[#185464] rounded-full"></span>
                Technical Approach
              </h3>
              <ul class="space-y-4">
                <li
                  v-for="item in project.technical_approach"
                  :key="item"
                  class="flex items-start gap-3 group"
                >
                  <span
                    class="text-[#185464] font-bold text-xl leading-none transition-transform group-hover:scale-125"
                    >•</span
                  >
                  <span class="font-medium leading-tight text-gray-700 text-sm md:text-base">{{
                    item
                  }}</span>
                </li>
              </ul>
            </div>

            <div
              class="flex-1 bg-gray-50 rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-sm"
            >
              <h3 class="mb-6 flex items-center gap-3 text-lg font-bold text-gray-900 md:text-xl">
                <span class="w-2 h-8 bg-[#185464] rounded-full"></span>
                Implementation Strategy
              </h3>
              <ul class="space-y-4">
                <li
                  v-for="item in project.implementation_strategy"
                  :key="item"
                  class="flex items-start gap-3 group"
                >
                  <span
                    class="text-[#185464] font-bold text-xl leading-none transition-transform group-hover:scale-125"
                    >•</span
                  >
                  <span class="font-medium leading-tight text-gray-700 text-sm md:text-base">{{
                    item
                  }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Results Tab -->
        <div v-if="currentTab === 'Results'" class="tab-fade-in">
          <h2 class="mb-10 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Impact & Results
          </h2>

          <div class="space-y-8">
            <!-- Key Results Grid -->
            <div class="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
              <div
                v-for="(res, i) in project.key_results"
                :key="i"
                class="flex flex-col items-center gap-6 p-6 border border-gray-100 bg-gray-50 rounded-2xl"
              >
                <span class="text-3xl md:text-4xl font-bold text-[#185464] min-w-[100px]">
                  {{ res.split(" ").slice(0, 1).join("") }}
                </span>
                <span class="text-center text-sm font-medium text-gray-700 md:text-base">{{
                  res.split(" ").slice(1).join(" ")
                }}</span>
              </div>
            </div>

            <!-- Long Term Benefits -->
            <div class="bg-gray-50 rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-sm">
              <h3 class="mb-6 flex items-center gap-3 text-lg font-bold text-gray-900 md:text-xl">
                <span class="w-2 h-8 bg-[#185464] rounded-full"></span>
                Long Term Benefits
              </h3>
              <ul class="mt-10 space-y-4">
                <li
                  v-for="item in project.longterm_benefits"
                  :key="item"
                  class="flex items-start gap-3 group"
                >
                  <span
                    class="text-[#185464] font-bold text-xl leading-none transition-transform group-hover:scale-125"
                    >•</span
                  >
                  <span class="font-medium leading-tight text-gray-700 text-sm md:text-base">{{
                    item
                  }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { userSearchStore } from "@/stores/SearchStore";
import projectsData from "@/stores/projects.json";

const route = useRoute();
const project = ref(null);
const currentTab = ref("Overview");
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

const loadProject = async () => {
  try {
    const foundProject = projectsData.find((p) => p.slug === route.params.slug);

    if (foundProject) {
      project.value = foundProject;
    }
  } catch (error) {
    console.error("Error fetching project:", error);
  }
};

onMounted(loadProject);
watch(() => route.params.slug, loadProject);
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

/* Tab Animation */
.tab-fade-in {
  animation: fadeIn 0.5s ease-out;
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

@keyframes spin {
  0% {
    transform: scale(1) rotate(0);
  }
  50% {
    transform: scale(1.2) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}
</style>
