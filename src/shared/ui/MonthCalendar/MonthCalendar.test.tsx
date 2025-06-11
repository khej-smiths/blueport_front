import { render, screen } from "@testing-library/react";

import MonthCalendar from ".";

describe("MonthCalendar | ", () => {
  it("그리드가 렌더링 되어야 합니다", () => {
    render(<MonthCalendar select={new Date()} />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });
});
