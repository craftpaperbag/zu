import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // 既定は node 環境（render.test.js は自前で JSDOM を起動する）。
    // data.test.js は先頭の `// @vitest-environment jsdom` で DOMParser を使う。
    environment: "node",
    include: ["tests/**/*.test.js"],
  },
});
