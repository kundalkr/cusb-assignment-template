import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-console": "error",
      "no-use-before-define": "error",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "error",
       "no-console": "error"  
    },
  },
]);
