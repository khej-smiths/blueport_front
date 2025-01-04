import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  // 스토리 파일들의 위치 패턴
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  // 사용할 애드온들
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],

  // 사용할 프레임워크 설정
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  // 문서 자동 생성 설정
  docs: {
    autodocs: "tag",
  },

  // 웹팩 설정
  webpackFinal: async (config) => {
    if (config.watchOptions) {
      config.watchOptions = {
        ...config.watchOptions,
        poll: 1000,
      };
    }
    return config;
  },
};

export default config;
