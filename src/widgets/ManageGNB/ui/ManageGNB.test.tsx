import { vi } from "vitest";

// next/navigation의 useRouter를 mock 처리
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
}));

import { render, screen } from "@testing-library/react";

import { ManageGNB } from ".";

describe("ManageGNB | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<ManageGNB />);
    expect(screen.getByTestId("ManageGNB")).toBeInTheDocument();
  });
});
