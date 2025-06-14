import { render, screen } from "@testing-library/react";

import { Toggle } from ".";

describe("Toggle | ", () => {
  it("버튼이 렌더링 되어야 합니다", () => {
    render(<Toggle>토글</Toggle>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
