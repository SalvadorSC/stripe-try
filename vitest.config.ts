import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // ✅ Ensures a browser-like environment
    setupFiles: "./test/setup.ts", // ✅ Your test setup file
    include: ["src/**/*.test.tsx"], // ✅ Only runs tests inside `src/`
  },
});
