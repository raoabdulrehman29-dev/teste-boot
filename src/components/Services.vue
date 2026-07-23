<template>
  <PageBanner
    :title="` ${selectedService.title} `"
    :currentPage="selectedService.title"
    sideText="Invictus Hub"
  />

  <section class="mx-auto max-w-7xl px-4 pb-16 lg:px-8">
    <div v-if="selectedService" class="space-y-16">
      <div
        v-if="
          isVisible(
            `contact ${selectedService.intro.heading} ${selectedService.intro.text[0]} ${selectedService.intro.text[1]} `,
          )
        "
        class="mx-auto mt-14 w-full text-center lg:mt-24 max-w-[1450px]"
      >
        <h1 class="mb-4 text-xl font-bold leading-tight text-black lg:text-3xl xl:text-4xl">
          {{ selectedService.intro.heading }}
        </h1>
        <p class="mx-auto mb-6 max-w-3xl leading-7 text-gray-500 md:text-base">
          {{ selectedService.intro.text[0] }}
        </p>
        <p class="mx-auto max-w-3xl leading-7 text-gray-500 md:text-base">
          {{ selectedService.intro.text[1] }}
        </p>
      </div>

      <div class="flex justify-center px-4 mb-12">
        <div
          class="inline-flex flex-wrap justify-center gap-2 bg-gray-50 border border-gray-100 rounded-[2.5rem] p-2 max-w-[1450px]"
        >
          <button
            v-for="title in tabTitles"
            :key="title"
            @click="activeTab = title"
            :class="[
              'flex items-center justify-center px-4 py-3 rounded-[2rem]  font-semibold whitespace-nowrap transition-all duration-300',
              'basis-full md:basis-[calc(50%-0.25rem)] lg:basis-[calc(18%-0.375rem)]',
              activeTab === title
                ? 'bg-gradient-to-r from-[#185464] to-[#2bb6c4] text-white shadow-md border border-gray-200'
                : 'text-gray-400 hover:text-[#185464] hover:bg-gray-100',
            ]"
          >
            {{ title }}
          </button>
        </div>
      </div>

      <div
        v-if="
          isVisible(
            `contact ${activeTabData.heading} ${activeTabData.subheading}  ${searchKeywords} `,
          )
        "
        id="tab-content"
        class="mx-auto w-full max-w-[1450px]"
      >
        <div class="space-y-6 text-center">
          <h2 class="mb-2 text-xl font-bold leading-tight text-black lg:text-3xl xl:text-4xl">
            {{ activeTabData.heading }}
          </h2>
          <p class="mx-auto max-w-3xl leading-7 text-gray-500 md:text-base">
            {{ activeTabData.subheading || "" }}
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="(item, index) in activeTabData.content"
            :key="item.title + index"
            class="rounded-[2rem] border border-slate-200 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div class="flex items-center justify-start gap-4">
              <div
                class="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-2xl"
              >
                {{ itemIcons[index % itemIcons.length] }}
              </div>
              <h3 class="text-xl font-semibold text-slate-900">
                {{ item.title }}
              </h3>
            </div>
            <p class="mt-4 leading-7 text-slate-600 md:text-base">
              {{ item.desc }}
            </p>
            <ul v-if="item.bullets?.length" class="mt-4 space-y-2 pl-5 text-slate-600">
              <li
                v-for="bullet in item.bullets"
                :key="bullet"
                class="flex items-start gap-3 leading-7 md:text-base"
              >
                <span class="mt-1 text-cyan-500">●</span>
                <span>{{ bullet }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      v-else
      class="rounded-[2rem] border border-slate-200 bg-white p-8 text-slate-700 shadow-sm"
    >
      <h2 class="text-3xl font-semibold">Service not found</h2>
      <p class="mt-4">Please choose a valid service tab from the navigation.</p>
    </div>
    <div
      v-if="
        isVisible(`contact ${selectedService.hero.tagline} ${selectedService.hero.description}`)
      "
      class="mx-auto mt-8 overflow-hidden rounded-3xl bg-gradient-to-r from-white via-[#A9C8DA]/50 to-white sm:py-12 md:mt-10 md:px-12 lg:mt-20 xl:mt-20 2xl:py-24 max-w-[1450px]"
    >
      <div class="flex flex-col items-center text-center">
        <h1
          class="mx-4 my-4 text-[33px] font-bold leading-tight text-gray-900 md:text-[35px] lg:text-[44px] xl:text-[55px] 2xl:text-[55px]"
        >
          {{ selectedService.hero.tagline }}
        </h1>
        <h3
          class="max-w-3xl mx-4 my-2 text-base font-medium leading-7 text-gray-700 md:text-lg md:leading-8"
        >
          {{ selectedService.hero.description }}
        </h3>
      </div>

      <div class="flex flex-col items-stretch justify-center gap-2 mt-8 md:flex-row lg:gap-4 py-2">
        <a
          href="/contact"
          class="group flex items-center justify-center gap-2 rounded-2xl border border-[#185464] bg-transparent px-5 py-4 text-[#185464] shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:text-white hover:shadow-lg"
        >
          <span>{{ selectedService.hero.buttons[0] }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>

        <a
          href="#tab-content"
          class="group flex items-center justify-center gap-2 rounded-2xl border border-[#185464] bg-gray-800 px-5 py-4 text-white shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#185464] hover:to-[#2bb6c4] hover:shadow-lg"
        >
          <span>{{ selectedService.hero.buttons[1] }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import servicesData from "@/stores/Services.json";
import PageBanner from "@/components/PageBanner.vue";

const route = useRoute();
const allServices = servicesData.categories.flatMap((category) => category.services);

const selectedServiceId = computed(() => route.params.slug || allServices[0]?.id);
const selectedService = computed(
  () => allServices.find((item) => item.id === selectedServiceId.value) || allServices[0] || null,
);

const activeTab = ref("");
const tabTitles = computed(() =>
  selectedService.value ? Object.keys(selectedService.value.tabs) : [],
);
const activeTabData = computed(() => {
  if (!selectedService.value) return {};
  return (
    selectedService.value.tabs[activeTab.value] ||
    selectedService.value.tabs[tabTitles.value[0]] ||
    {}
  );
});

const itemIcons = ["🚀", "⚡", "🎯", "✨", "🔹", "💼", "📈"];
const searchKeywords = computed(() => {
  if (!activeTabData.value || !activeTabData.value.content) return "";

  // Extract titles from the content array and join them with spaces
  const allTitles = activeTabData.value.content.map((item) => item.title).join(" ");

  return allTitles.toLowerCase();
});

watch(
  () => selectedService.value,
  (service) => {
    if (service) {
      activeTab.value = Object.keys(service.tabs)[0] || "";
    }
  },
  { immediate: true },
);

//filter logic
import { userSearchStore } from "@/stores/SearchStore";

const store = userSearchStore();

const isVisible = (tags) => {
  const query = store.searchQuery.toLowerCase().trim();

  if (!query) {
    return true;
  }

  const keywords = query.split(/\s+/).filter(Boolean);
  const content = tags.toLowerCase();

  return keywords.every((word) => content.includes(word));
};
</script>

<style scoped></style>
