import { nextTick, onMounted, onUnmounted, watch } from "vue";
import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";

/**
 * Site-wide scroll animation system. Tag elements in the template:
 *
 *   data-hero-el       above-the-fold intro — rises in on mount, staggered
 *   data-split         short headline — SplitText word reveal (masked lines) on enter
 *   data-reveal        rises+fades in when scrolled into view (batched stagger)
 *   data-reveal-group  container whose CHILDREN wave-stagger in (grids/card rows)
 *   data-parallax      decorative element — scrubbed vertical drift
 *
 * All animations run only under (prefers-reduced-motion: no-preference) and are
 * scoped to rootRef. Pass reactive sources via rebuildOn (e.g. search query,
 * filter tabs) so v-if/v-for remounts get fresh ScrollTriggers.
 */
export function useScrollReveal(rootRef, { rebuildOn = [] } = {}) {
  let mm;

  const build = () => {
    mm?.revert();
    const root = rootRef.value;
    if (!root) return;

    mm = gsap.matchMedia(root);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const pick = (sel) => gsap.utils.toArray(root.querySelectorAll(sel));

      const heroItems = pick("[data-hero-el]");
      if (heroItems.length) {
        gsap.from(heroItems, {
          autoAlpha: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          delay: 0.15,
        });
      }

      pick("[data-split]").forEach((el) => {
        SplitText.create(el, {
          type: "lines,words",
          mask: "lines",
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.words, {
              yPercent: 110,
              duration: 0.8,
              stagger: 0.04,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
            });
          },
        });
      });

      const reveals = pick("[data-reveal]");
      if (reveals.length) {
        gsap.set(reveals, { autoAlpha: 0, y: 48 });
        ScrollTrigger.batch(reveals, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.12,
              overwrite: true,
            }),
        });
      }

      pick("[data-reveal-group]").forEach((group) => {
        const items = gsap.utils.toArray(group.children);
        if (!items.length) return;
        gsap.set(items, { autoAlpha: 0, y: 24, scale: 0.96 });
        ScrollTrigger.create({
          trigger: group,
          start: "top 85%",
          once: true,
          onEnter: () =>
            gsap.to(items, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              ease: "back.out(1.4)",
              stagger: { each: 0.06, grid: "auto", from: "start" },
              overwrite: true,
            }),
        });
      });

      pick("[data-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 80 },
          {
            y: -80,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );
      });
    });
  };

  onMounted(async () => {
    await nextTick();
    build();
  });

  if (rebuildOn.length) {
    watch(rebuildOn, async () => {
      await nextTick();
      build();
    });
  }

  onUnmounted(() => {
    mm?.revert();
  });

  return { rebuild: build };
}
