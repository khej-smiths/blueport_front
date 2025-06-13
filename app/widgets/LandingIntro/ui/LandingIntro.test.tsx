import { render, screen } from "@testing-library/react";

import { LandingIntro } from ".";

describe("LandingIntro | ", () => {
  it("기본 렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<LandingIntro />);
    const intro = screen.getByRole("article", { name: "intro-section" });
    expect(intro).toBeInTheDocument();
  });

  it.todo("머릿말이 있어야 합니다");
  it.todo("꼬릿말이 있어야 합니다");
});
