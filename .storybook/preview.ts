import type { Preview } from "@storybook/react";
import "../app/globals.css"; // Tailwind CSS 임포트
import { withTests } from "@storybook/addon-jest";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// results 파일이 없을 때를 대비한 조건부 처리
let results = {};
try {
  results = require("../.jest-test-results.json");
} catch (e) {
  console.log("Jest 테스트 결과 파일을 찾을 수 없습니다.");
}

export const decorators = [
  withTests({
    results,
  }),
];

export default preview;