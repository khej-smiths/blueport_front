import { render, screen } from "@testing-library/react";
import { Textarea } from ".";

describe("Textarea | ", () => {
  it("입력 요소가 정상적으로 렌더링 되어야 합니다", () => {
    render(<Textarea />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeInTheDocument();
  });
});
