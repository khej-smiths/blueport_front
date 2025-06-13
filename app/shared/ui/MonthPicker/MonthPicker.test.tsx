import { render, screen } from "@testing-library/react";

import { MonthPicker } from ".";

describe("MonthPicker | ", () => {
  it("버튼이 렌더링 되어야 합니다", () => {
    render(<MonthPicker date={new Date()} setDate={() => {}} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
