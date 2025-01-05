import { render, screen } from "@testing-library/react";
import About from ".";

describe("About 컴포넌트", () => {
  it("기본 렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<About />);
    const about = screen.getByRole("article", { name: "about-section" });
    expect(about).toBeInTheDocument();
  });

  it("right prop이 true일 때 오른쪽 정렬되어야 합니다", () => {
    render(<About right />);
    const about = screen.getByRole("article", { name: "about-section" });
    expect(about).toHaveClass("flex-row-reverse");
  });

  it("right prop이 false일 때 왼쪽 정렬되어야 합니다", () => {
    render(<About />);
    const about = screen.getByRole("article", { name: "about-section" });
    expect(about).toHaveClass("flex-row");
  });

  it.todo("인사말이 있어야 합니다");
  it.todo("내용이 있어야 합니다");
  it.todo("기술스택이 있어야 합니다");
  it.todo("기술스택은 최대 15개입니다");
  it.todo(
    "더 알아보기를 누르면 navigation.push('/{username}/about')으로 이동합니다"
  );
});
