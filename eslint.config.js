import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  { ignores: ["dist/", "node_modules/", ".claude/"] },

  js.configs.recommended,
  // "essential" = error-prevention rules only; stylistic concerns belong to Prettier
  ...pluginVue.configs["flat/essential"],
  prettier,

  {
    languageOptions: {
      globals: { ...globals.browser },
    },
    rules: {
      // Views are single-word by design (Home, About, Contact, ...) and referenced by the router
      "vue/multi-word-component-names": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
