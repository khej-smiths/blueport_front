import { render, screen } from "@testing-library/react";
import Pre from ".";

describe("Pre | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    const codeContent = "const example = 'test';";
    render(<Pre>{codeContent}</Pre>);
    expect(screen.getByText(codeContent)).toBeInTheDocument();
  });

  it("pre 태그로 렌더링되어야 합니다", () => {
    render(<Pre>테스트 코드</Pre>);
    const preElement = screen.getByText("테스트 코드");
    expect(preElement.tagName).toBe("PRE");
  });
});
