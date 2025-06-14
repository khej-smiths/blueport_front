import { render, screen } from "@testing-library/react";

import { Label } from ".";

describe("Label | ", () => {
  it("텍스트가 정상적으로 렌더링 되어야 합니다", () => {
    render(<Label>라벨</Label>);
    expect(screen.getByText("라벨")).toBeInTheDocument();
  });
});
