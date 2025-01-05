import { render, screen } from "@testing-library/react";
import Intro from ".";

describe("Intro 컴포넌트 | ", () => {
  it("기본 렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<Intro />);
    const intro = screen.getByRole("article", { name: "intro-section" });
    expect(intro).toBeInTheDocument();
  });

  it.todo("머릿말이 있어야 합니다");
  it.todo("꼬릿말이 있어야 합니다");
});
