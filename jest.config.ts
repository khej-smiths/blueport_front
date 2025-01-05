/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  // Next.js 앱의 경로를 제공하여 테스트 환경에서 next.config.js와 .env 파일을 로드합니다
  dir: "./",
});

const config: Config = {
  // 모든 테스트에서 가져온 모듈을 자동으로 모의(mock)할지 여부
  // automock: false,

  // `n`번의 실패 후 테스트 실행을 중지
  // bail: 0,

  // Jest가 의존성 정보를 캐시할 디렉토리
  // cacheDirectory: "C:\\Users\\Username\\AppData\\Local\\Temp\\jest",

  // 각 테스트 전에 모의 호출, 인스턴스, 컨텍스트 및 결과를 자동으로 초기화
  clearMocks: true,

  // 테스트 실행 중 코드 커버리지 정보를 수집할지 여부
  collectCoverage: true,

  // 코드 커버리지 정보를 수집할 파일들을 지정하는 glob 패턴 배열
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/types.ts",
    "!src/**/*.stories.{js,jsx,ts,tsx}",
  ],

  // Jest가 커버리지 파일을 출력할 디렉토리
  coverageDirectory: "coverage",

  // 코드 커버리지를 위한 도구 설정
  coverageProvider: "v8",

  // 테스트 환경 설정 (jsdom: 브라우저와 유사한 DOM 환경 제공)
  testEnvironment: "jest-environment-jsdom",

  // 테스트 실행 전 추가 설정을 로드
  setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],

  // 모듈 경로 매핑 설정
  moduleNameMapper: {
    // src 디렉토리의 절대 경로 지원
    "^@/(.*)$": "<rootDir>/src/$1",
    // 이미지/스타일 파일 모의 처리
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },

  // 테스트 파일 탐지를 위한 glob 패턴
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],

  // 테스트에서 제외할 경로 패턴
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/cypress/",
  ],

  // 변환이 필요한 파일 패턴과 변환기 설정
  transform: {
    "^.+\\.(ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
};

// createJestConfig는 next/jest가 비동기적인 Next.js 설정을 로드할 수 있도록 이 방식으로 내보내집니다
export default createJestConfig(config);
