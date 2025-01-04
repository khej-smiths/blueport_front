import { render, screen } from "@testing-library/react";
import { Input } from "../Input";

describe("Input 컴포넌트", () => {
  it("기본 입력 요소가 정상적으로 렌더링 되어야 합니다", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
});
