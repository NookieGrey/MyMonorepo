import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "frontend-wmyr.onrender.com",
    port: 8003,
    hmr: {
      protocol: "wss",
      host: "frontend-wmyr.onrender.com",
      port: 8004,
      clientPort: 8007,
    },
    proxy: {
      "/api": {
        target: "https://194.67.125.199:8443/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
