import { render, screen } from "@testing-library/react";
import Logo from "../Logo";

describe("Logo 컴포넌트", () => {
  it("기본 로고가 정상적으로 렌더링 되어야 합니다", () => {
    render(<Logo />);
    const logo = screen.getByRole("heading", { name: "P.log" });
    expect(logo).toBeInTheDocument();
  });
});
