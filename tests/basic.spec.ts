import { test, expect } from "@playwright/test";

test("기본 산술 테스트", async () => {
  expect(1 + 1).toBe(2);
});
