import { render, screen } from "@testing-library/react";

import { Loading } from ".";

describe("Loading | ", () => {
  it("로딩 인디케이터가 정상적으로 렌더링 되어야 합니다", () => {
    render(<Loading />);
    expect(screen.getByRole("feed")).toBeInTheDocument();
  });
});
