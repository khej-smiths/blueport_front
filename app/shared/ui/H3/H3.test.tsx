import { render, screen } from "@testing-library/react";

import { H3 } from ".";

describe("H3 | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<H3>Hello, world!</H3>);
    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });
});
