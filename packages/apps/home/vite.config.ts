import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {antdGlobalThemeToken} from "./src/antdConfig.ts";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: antdGlobalThemeToken,
      },
    },
  },
});
