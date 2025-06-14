import { render, screen } from "@testing-library/react";

import { Popover, PopoverTrigger } from ".";

describe("Popover | ", () => {
  it("트리거 버튼이 렌더링 되어야 합니다", () => {
    render(
      <Popover>
        <PopoverTrigger>열기</PopoverTrigger>
      </Popover>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
