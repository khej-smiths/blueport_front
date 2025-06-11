import { render, screen } from "@testing-library/react";

import { DatePicker } from ".";

describe("DatePicker | ", () => {
  it("버튼이 정상적으로 렌더링 되어야 합니다", () => {
    render(<DatePicker date={undefined} setDate={() => {}} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
