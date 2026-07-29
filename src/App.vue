<template>
  <Analytics />
  <div class="relative w-full bg-white">
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isPageLoading"
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 backdrop-blur-sm"
      >
        <div class="loader">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    </Transition>

    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div class="relative flex min-h-screen w-full max-w-[2000px] mx-auto flex-col bg-white">
          <NavBar />

          <main class="flex-1">
            <div class="mx-auto w-full px-2 sm:px-4 md:px-8">
              <router-view />
            </div>
          </main>

          <Footer class="w-full" />
        </div>
      </div>
    </div>

    <ScrollButton />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, watch } from "vue";
import { useRoute } from "vue-router";
import router from "./router";

import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import ScrollButton from "./components/ScrollButton.vue";

import { isPageLoading } from "./router/pageLoader";
import { ScrollSmoother } from "@/lib/gsap";
import { Analytics } from "@vercel/analytics/vue";
import { useSchema } from "@/composables/useSchema";

let smoother;
const route = useRoute();
const { generatePageSchema, siteUrl, siteName } = useSchema();

const getSchemaForRoute = () => {
  const routeMeta = route.meta;
  const path = route.path;

  const breadcrumbItems = routeMeta.schema?.breadcrumb || [];
  const breadcrumbList = breadcrumbItems.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${siteUrl}${item.path}`
  }));

  const fullSchema = {
    '@context': 'https://schema.org',
    '@type': routeMeta.schema?.type || 'WebPage',
    name: routeMeta.title || siteName,
    description: routeMeta.description || 'Professional digital solutions company in Pakistan.',
    url: `${siteUrl}${path}`,
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl
    }
  };

  if (breadcrumbList.length > 0) {
    fullSchema.breadcrumb = {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbList
    };
  }

  return fullSchema;
};

const injectSchema = () => {
  // Remove existing schema script
  const existingScript = document.querySelector('#schema-json');
  if (existingScript) {
    existingScript.remove();
  }

  const schema = getSchemaForRoute();
  const script = document.createElement('script');
  script.id = 'schema-json';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

const injectCanonical = () => {
  const canonicalUrl = `${siteUrl}${route.path}`;

  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', canonicalUrl);
};

watch(
  () => route.path,
  () => {
    injectSchema();
    injectCanonical();
  },
  { immediate: true }
);

onMounted(async () => {
  await router.isReady();

  isPageLoading.value = false;

  smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.2,
    effects: true,
  });

  injectSchema();
  injectCanonical();
});

onUnmounted(() => {
  smoother?.kill();

  const existingScript = document.querySelector('#schema-json');
  if (existingScript) {
    existingScript.remove();
  }

});
</script>

<style scoped>
#app {
  font-family:
    "Inter",
    "Poppins",
    system-ui,
    -apple-system,
    sans-serif;
}

.loader {
  --dim: 3rem;
  width: var(--dim);
  height: var(--dim);
  position: relative;
  animation: spin988 2s linear infinite;
}

.loader .circle {
  --color: #185464;
  --dim: 1.2rem;

  width: var(--dim);
  height: var(--dim);

  position: absolute;

  border-radius: 9999px;
  background: var(--color);
}

.loader .circle:nth-child(1) {
  top: 0;
  left: 0;
}

.loader .circle:nth-child(2) {
  top: 0;
  right: 0;
}

.loader .circle:nth-child(3) {
  bottom: 0;
  left: 0;
}

.loader .circle:nth-child(4) {
  bottom: 0;
  right: 0;
}

@keyframes spin988 {
  0% {
    transform: scale(1) rotate(0deg);
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
