import { render, screen } from "@testing-library/react";
import GNB from ".";

describe("GNB | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<GNB />);
    expect(screen.getByText("Pangho's Blog")).toBeInTheDocument();
  });

  it.todo("Github 링크가 보여야 합니다");
  it.todo("사용자명이 보여야 합니다");
  it.todo("사용자 자세히 보기 페이지로 이동해야 합니다");
});
