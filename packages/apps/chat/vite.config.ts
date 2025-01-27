import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  base: "http://localhost:8006",
  plugins: [
    react(),
    createHtmlPlugin({
      minify: {
        removeComments: false,
        collapseWhitespace: true,
      },
    }),
  ],
  server: {
    hmr: {
      port: 3006,
    },
  },
});
