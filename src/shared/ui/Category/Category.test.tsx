import { render, screen } from "@testing-library/react";
import { Category } from ".";

describe("Category | ", () => {
  it("카테고리가 정상적으로 렌더링 되어야 합니다", () => {
    render(<Category category="Category" total={12} />);

    const category = screen.getByText("Category");
    expect(category).toBeInTheDocument();
  });
});
