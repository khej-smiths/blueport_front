import { render, screen } from "@testing-library/react";
import { Blockquote } from ".";

describe("Blockquote | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<Blockquote>Hello, world!</Blockquote>);
    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });
});
