import { createRouter, createWebHistory } from "vue-router";
import { isPageLoading } from "./pageLoader";
import { ScrollSmoother } from "@/lib/gsap";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    // ScrollSmoother owns the scroll position; going through it avoids a
    // visible eased scroll across the whole new page on route change.
    const smoother = ScrollSmoother.get();
    if (smoother) {
      if (savedPosition) {
        smoother.scrollTop(savedPosition.top);
      } else if (to.hash) {
        smoother.scrollTo(to.hash, true);
      } else {
        smoother.scrollTop(0);
      }
      return false;
    }

    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return {
      top: 0,
    };
  },
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../components/Home.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../components/About.vue"),
    },
    {
      path: "/services",
      name: "Services",
      component: () => import("../components/ServicesHome.vue"),
    },
    {
      path: "/services/:slug",
      name: "ServiceDetail",
      component: () => import("../components/Services.vue"),
    },
    {
      path: "/projects",
      name: "Projects",
      component: () => import("../components/Projects.vue"),
    },

    {
      path: "/contact",
      name: "Contact",
      component: () => import("../components/Contact.vue"),
    },
    {
      path: "/project-details/:slug", // Must have the colon!
      name: "ProjectDetail",
      component: () => import("../components/Projects/ProjectDetail.vue"),
    },
    {
      path: "/career",
      name: "career",
      component: () => import("../components/Careers.vue"),
    },
    {
      path: "/careers/:slug", // The ":" is mandatory!
      name: "CareerDetail",
      component: () => import("../components/CareerDetail.vue"),
    },
    {
      path: "/applyfor/:slug",
      name: "ApplyFor",
      component: () => import("../components/ApplyFor.vue"),
    },
  ],
});

router.beforeEach(() => {
  isPageLoading.value = true;
});

router.afterEach(() => {
  isPageLoading.value = false;
});

router.onError(() => {
  isPageLoading.value = false;
});

export default router;
