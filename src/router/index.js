import { createRouter, createWebHistory } from "vue-router";
import { isPageLoading } from "./pageLoader";
import { ScrollSmoother } from "@/lib/gsap";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
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
      meta: {
        title: "Invictus Hub | AI & Software Development Company",
        description:
          "Invictus Hub provides AI solutions, software development, cloud services, digital transformation, UI/UX design, and custom web and mobile applications.",
        schema: {
          type: "WebPage",
          breadcrumb: [{ name: "Home", path: "/" }],
        },
      },
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../components/About.vue"),
      meta: {
        title: "About Us | Invictus Hub",
        description:
          "Learn about Invictus Hub, our mission, expertise, and commitment to delivering AI, software, and digital transformation solutions.",
        schema: {
          type: "AboutPage",
          breadcrumb: [
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ],
        },
      },
    },
    {
      path: "/services",
      name: "Services",
      component: () => import("../components/ServicesHome.vue"),
      meta: {
        title: "Software Development Services | Invictus Hub",
        description:
          "Explore our AI, web development, mobile app development, cloud, UI/UX, ERP, CRM, and digital transformation services.",
        schema: {
          type: "CollectionPage",
          breadcrumb: [
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ],
        },
      },
    },
    {
      path: "/services/:slug",
      name: "ServiceDetail",
      component: () => import("../components/Services.vue"),
      meta: {
        title: "Service Details | Invictus Hub",
        description:
          "Learn more about our professional software and AI services tailored to your business needs.",
        schema: {
          type: "Service",
          breadcrumb: [
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Service Details", path: "/services/:slug" },
          ],
        },
      },
    },
    {
      path: "/projects",
      name: "Projects",
      component: () => import("../components/Projects.vue"),
      meta: {
        title: "Our Projects | Invictus Hub",
        description:
          "Browse our portfolio of successful software, AI, cloud, and digital transformation projects.",
        schema: {
          type: "CollectionPage",
          breadcrumb: [
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ],
        },
      },
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../components/Contact.vue"),
      meta: {
        title: "Contact Invictus Hub | Let's Build Your Next Project",
        description:
          "Get in touch with Invictus Hub for AI solutions, software development, cloud services, UI/UX design, digital transformation, and custom web & mobile applications.",
        schema: {
          type: "ContactPage",
          breadcrumb: [
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ],
        },
      },
    },
    {
      path: "/project-details/:slug",
      name: "ProjectDetail",
      component: () => import("../components/Projects/ProjectDetail.vue"),
      meta: {
        title: "Project Details | Invictus Hub",
        description:
          "View detailed information about one of Invictus Hub's successful client projects.",
        schema: {
          type: "CreativeWork",
          breadcrumb: [
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Project Details", path: "/project-details/:slug" },
          ],
        },
      },
    },
    {
      path: "/career",
      name: "career",
      component: () => import("../components/Careers.vue"),
      meta: {
        title: "Careers | Invictus Hub",
        description:
          "Join Invictus Hub and build your career in AI, software engineering, cloud technologies, and digital transformation.",
        schema: {
          type: "CollectionPage",
          breadcrumb: [
            { name: "Home", path: "/" },
            { name: "Careers", path: "/career" },
          ],
        },
      },
    },
    {
      path: "/careers/:slug",
      name: "CareerDetail",
      component: () => import("../components/CareerDetail.vue"),
      meta: {
        title: "Career Opportunity | Invictus Hub",
        description:
          "Explore this career opportunity and become part of the Invictus Hub team.",
        schema: {
          type: "JobPosting",
          breadcrumb: [
            { name: "Home", path: "/" },
            { name: "Careers", path: "/career" },
            { name: "Career Details", path: "/careers/:slug" },
          ],
        },
      },
    },
    {
      path: "/applyfor/:slug",
      name: "ApplyFor",
      component: () => import("../components/ApplyFor.vue"),
      meta: {
        title: "Apply Now | Invictus Hub",
        description:
          "Submit your application and start your career journey with Invictus Hub.",
        schema: {
          type: "WebPage",
          breadcrumb: [
            { name: "Home", path: "/" },
            { name: "Careers", path: "/career" },
            { name: "Apply", path: "/applyfor/:slug" },
          ],
        },
      },
    },
  ],
});

router.beforeEach(() => {
  isPageLoading.value = true;
});

router.afterEach((to) => {
  isPageLoading.value = false;

  document.title =
    to.meta.title ?? "Invictus Hub | AI & Software Development Company";

  const description = document.querySelector('meta[name="description"]');
  description?.setAttribute(
    "content",
    to.meta.description ??
    "Invictus Hub provides AI solutions, software development, cloud services, and digital transformation."
  );

  // Update canonical URL
  // Update canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute(
      "href",
      `${window.location.origin}${to.path}`
    );
  }

  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute("content", to.meta.title || "Invictus Hub");
  }

  const ogDescription = document.querySelector(
    'meta[property="og:description"]'
  );
  if (ogDescription) {
    ogDescription.setAttribute(
      "content",
      to.meta.description ||
      "Professional digital solutions company in Pakistan."
    );
  }

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute("content", `${window.location.origin}${to.path}`);
  }
});

router.onError(() => {
  isPageLoading.value = false;
});

export default router;