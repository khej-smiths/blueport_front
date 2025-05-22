/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
    include: ["src/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    reporters: [
      "default",
      [
        "json",
        {
          outputFile: ".jest-test-results.json",
          classicOutput: true, // Jest 스타일의 출력을 사용
        },
      ],
    ],
    deps: {
      optimizer: {
        web: {
          include: [/@testing-library\/react/] as any,
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
