import "@testing-library/jest-dom";

import { cleanup } from "@testing-library/react";
import * as React from "react";
import { afterEach } from "vitest";

global.React = React

// 각 테스트 후에 cleanup 실행
afterEach(() => {
  cleanup();
});

// JSDOM에서 필요한 전역 객체 모킹
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};