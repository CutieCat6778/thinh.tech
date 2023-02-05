import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "f1uv6a",
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: "http://localhost:3000"
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
