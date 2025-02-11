import { render, screen } from "@testing-library/react";
import { Code } from ".";

describe("Code | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<Code>Hello, world!</Code>);
    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });
});
