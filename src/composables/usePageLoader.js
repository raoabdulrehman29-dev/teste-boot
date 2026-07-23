import { nextTick, onMounted, ref } from "vue";

export function usePageLoader() {
  const isLoading = ref(true);

  onMounted(async () => {
    await nextTick();
    await new Promise((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(resolve));
    });

    const images = Array.from(document.images).filter(
      (image) => !image.closest("[data-page-loader]"),
    );

    await Promise.all(
      images.map((image) => {
        if (image.complete) {
          return Promise.resolve();
        }

        return new Promise((resolve) => {
          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", resolve, { once: true });
        });
      }),
    );

    isLoading.value = false;
  });

  return { isLoading };
}
