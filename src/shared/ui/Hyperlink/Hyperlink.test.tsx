import { render, screen } from "@testing-library/react";
import { Hyperlink } from ".";

describe("Hyperlink | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    const href = "https://example.com";
    render(<Hyperlink href={href}>링크 텍스트</Hyperlink>);

    const link = screen.getByText("링크 텍스트");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", href);
  });

  it("target과 rel 속성이 올바르게 설정되어야 합니다", () => {
    render(<Hyperlink href="https://example.com">링크 텍스트</Hyperlink>);

    const link = screen.getByText("링크 텍스트");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
