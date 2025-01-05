import { render, screen } from "@testing-library/react";
import H2 from ".";

describe("H2 | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<H2>Hello, world!</H2>);
    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });
});
