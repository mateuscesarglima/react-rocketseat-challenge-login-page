import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-rocketseat-challenge-login-page/",
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "./src") },
      { find: "@Assets", replacement: resolve(__dirname, "./src/assets") },
      {
        find: "@Components",
        replacement: resolve(__dirname, "./src/components"),
      },
      { find: "@Pages", replacement: resolve(__dirname, "./src/pages") },
      { find: "@Utils", replacement: resolve(__dirname, "./src/utils") },
    ],
  },
});
