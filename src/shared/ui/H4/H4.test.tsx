import { render, screen } from "@testing-library/react";

import { H4 } from ".";

describe("H4 | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<H4>Hello, world!</H4>);
    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });
});
