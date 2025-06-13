import { render, screen } from "@testing-library/react";

import { ToggleGroup, ToggleGroupItem } from ".";

describe("ToggleGroup | ", () => {
  it("아이템이 렌더링 되어야 합니다", () => {
    render(
      <ToggleGroup type="single" defaultValue="1">
        <ToggleGroupItem value="1">하나</ToggleGroupItem>
      </ToggleGroup>
    );
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });
});
