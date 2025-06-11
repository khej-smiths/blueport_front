import { render, screen } from "@testing-library/react";

import { FormLabel } from ".";

describe("FormLabel | ", () => {
  it("텍스트가 정상적으로 렌더링 되어야 합니다", () => {
    render(<FormLabel>라벨</FormLabel>);
    expect(screen.getByText("라벨")).toBeInTheDocument();
  });
});
