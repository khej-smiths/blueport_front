import { render, screen } from "@testing-library/react";
import { SectionTitle } from "../../../features/manage-resume/ui/SectionTitle";

describe("SectionTitle | ", () => {
  it("제목 요소가 정상적으로 렌더링 되어야 합니다", () => {
    render(<SectionTitle title="Test" />);
    const textarea = screen.getByRole("heading", { name: "section-heading" });
    expect(textarea).toBeInTheDocument();
  });
});
