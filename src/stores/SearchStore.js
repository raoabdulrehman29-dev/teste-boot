import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const userSearchStore = defineStore("search", () => {
  const searchQuery = ref("");

  function updateSearch(val) {
    searchQuery.value = val;
  }

  function clearSearch() {
    searchQuery.value = "";
  }

  const isSearchEmpty = computed(() => searchQuery.value.trim().length === 0);

  return {
    searchQuery,
    updateSearch,
    updateSeach: updateSearch,
    clearSearch,
    isSearchEmpty,
  };
});
