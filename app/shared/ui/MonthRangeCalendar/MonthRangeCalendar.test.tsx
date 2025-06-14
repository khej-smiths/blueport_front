import { render, screen } from "@testing-library/react";

import { MonthRangeCalendar } from ".";

describe("MonthRangeCalendar | ", () => {
  it("버튼이 렌더링 되어야 합니다", () => {
    render(<MonthRangeCalendar />);
    expect(screen.getAllByRole("button").length).toBeGreaterThan(0);
  });
});
