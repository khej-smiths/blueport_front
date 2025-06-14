import { render, screen } from "@testing-library/react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from ".";

describe("Select | ", () => {
  it("트리거가 렌더링 되어야 합니다", () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
});
