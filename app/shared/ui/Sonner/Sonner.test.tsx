import { render } from "@testing-library/react";

beforeAll(() => {
  // JSDOM 환경에서 matchMedia를 모킹합니다.
  window.matchMedia =
    window.matchMedia ||
    (() => ({
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    })) as any;
});

import { Toaster } from ".";

describe("Toaster | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    const { container } = render(<Toaster />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
