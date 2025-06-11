import { render, screen } from "@testing-library/react";

import { Calendar } from ".";

describe("Calendar | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<Calendar />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });
});
