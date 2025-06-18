import { render, screen } from "@testing-library/react";

import { Hashtag } from ".";

describe("Hashtag | ", () => {
  it("해시테그가 정상적으로 렌더링 되어야 합니다", () => {
    render(<Hashtag hashtag="Hashtag" total={12} />);

    const hashtag = screen.getByText("Hashtag");
    expect(hashtag).toBeInTheDocument();
  });
});
