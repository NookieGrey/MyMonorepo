import { defineConfig } from "vite";

export default defineConfig({
  base: "http://localhost:8005",
  server: {
    hmr: {
      port: 3005,
    },
  },
});
