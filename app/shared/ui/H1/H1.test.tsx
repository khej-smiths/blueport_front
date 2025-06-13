import { render, screen } from "@testing-library/react";

import { H1 } from ".";

describe("H1 | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<H1>Hello, world!</H1>);
    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });
});
