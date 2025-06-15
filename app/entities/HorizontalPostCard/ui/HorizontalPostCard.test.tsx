import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { HorizontalPostCard } from ".";

describe("Horizontal | ", () => {
  it("기본 렌더링이 정상적으로 이루어져야 합니다", () => {
    render(
      <MemoryRouter>
        <HorizontalPostCard />
      </MemoryRouter>
    );
    const horizontal = screen.getByRole("feed", {
      name: "horizontal-post-card",
    });
    expect(horizontal).toBeInTheDocument();
  });

  it.todo("작성일이 있어야 합니다");
  it.todo("작성자가 있어야 합니다");
  it.todo("제목이 있어야 합니다");
  it.todo("내용이 있어야 합니다");
  it.todo(
    "더보기를 누르면 navigation.push('/{username}/{post}')으로 이동합니다"
  );
});
