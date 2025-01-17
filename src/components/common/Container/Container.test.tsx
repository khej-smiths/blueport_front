import { render, screen } from "@testing-library/react";
import Container from ".";

describe("Container | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<Container />);
    expect(screen.getByRole("container")).toBeInTheDocument();
  });
});
