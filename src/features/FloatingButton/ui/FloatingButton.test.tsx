import { render, screen } from "@testing-library/react";
import { FloatingButton } from ".";
import { Plus } from "lucide-react";

describe("FloatingButton | ", () => {
  it("기본 요소가 정상적으로 렌더링 되어야 합니다", () => {
    render(<FloatingButton icon={<Plus />} />);
    const floatingButton = screen.getByRole("button");
    expect(floatingButton).toBeInTheDocument();
  });
});
