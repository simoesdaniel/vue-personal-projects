import WindiCSS from "vite-plugin-windicss";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  build: {
    cssCodeSplit: false,
  },
  optimizeDeps: {
    include: [
      "vue",
      "vue-router",
      "vuex",
      // etc.
    ],
  },
  plugins: [vue(), WindiCSS()],
});
