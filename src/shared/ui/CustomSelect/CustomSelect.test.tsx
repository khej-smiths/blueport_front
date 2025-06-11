import { render, screen } from "@testing-library/react";

import { CustomSelect } from ".";

describe("CustomSelect | ", () => {
  const options = [
    { label: "옵션1", value: "option1" },
    { label: "옵션2", value: "option2" },
  ];

  it("플레이스홀더가 정상적으로 렌더링 되어야 합니다", () => {
    render(<CustomSelect selectOptions={options} placeholder="선택" />);
    expect(screen.getByText("선택")).toBeInTheDocument();
  });
});
