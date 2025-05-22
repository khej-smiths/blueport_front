import { render, screen } from "@testing-library/react";

import { LabelInput } from ".";

describe("LabelInput | ", () => {
  it("라벨 입력 요소가 정상적으로 렌더링 되어야 합니다", () => {
    render(<LabelInput>test</LabelInput>);
    const label = screen.getByRole("textbox");
    expect(label).toBeInTheDocument();
  });
});
