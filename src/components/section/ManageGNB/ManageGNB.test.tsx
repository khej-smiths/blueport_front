import { render, screen } from "@testing-library/react";
import ManageGNB from ".";

describe("ManageGNB | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<ManageGNB />);
    expect(screen.getByText("EP.")).toBeInTheDocument();
  });
});
