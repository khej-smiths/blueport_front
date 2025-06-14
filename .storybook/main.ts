import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // 스토리 파일들의 위치 패턴
  stories: ["../app/**/*.mdx", "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  // 사용할 애드온들
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-coverage",
    "@storybook/addon-jest",
  ],

  // 사용할 프레임워크 설정
  framework: '@storybook/react-vite',

  // 문서 자동 생성 설정
  docs: {
    autodocs: "tag",
  },
};

export default config;