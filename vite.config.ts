import { defineConfig, UserConfigExport } from "vite";

const config: UserConfigExport = defineConfig({
  server: {
    port: 3000,
  },
});

export default config;
