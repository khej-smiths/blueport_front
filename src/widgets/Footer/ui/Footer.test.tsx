import { render, screen } from "@testing-library/react";
import { Footer } from ".";

describe("Footer | ", () => {
  it("Footer가 정상적으로 렌더링 되어야 합니다", () => {
    render(<Footer />);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });
});
