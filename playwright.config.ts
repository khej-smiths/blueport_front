import { defineConfig, devices } from "@playwright/test";

/**
 * 환경 변수를 파일에서 읽어옵니다.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * 설정에 대한 자세한 내용은 다음을 참조하세요:
 * https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  /* 파일의 테스트를 병렬로 실행 */
  fullyParallel: true,
  /* 실수로 소스 코드에 test.only를 남겨둔 경우 CI에서 빌드 실패 처리 */
  forbidOnly: !!process.env.CI,
  /* CI 환경에서만 재시도 */
  retries: process.env.CI ? 2 : 0,
  /* CI 환경에서는 병렬 테스트 비활성화 */
  workers: process.env.CI ? 1 : undefined,
  /* 사용할 리포터. https://playwright.dev/docs/test-reporters 참조 */
  reporter: "html",
  /* 아래 모든 프로젝트에 공유되는 설정. https://playwright.dev/docs/api/class-testoptions 참조 */
  use: {
    /* `await page.goto('/')` 같은 동작에서 사용할 기본 URL */
    // baseURL: 'http://127.0.0.1:3000',

    /* 실패한 테스트를 재시도할 때 추적 정보 수집. https://playwright.dev/docs/trace-viewer 참조 */
    trace: "on-first-retry",
  },

  /* 주요 브라우저별 테스트 설정 */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    /* 모바일 뷰포트에서의 테스트 */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* 브랜드별 브라우저 테스트 */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* 테스트 시작 전 로컬 개발 서버 실행 */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});