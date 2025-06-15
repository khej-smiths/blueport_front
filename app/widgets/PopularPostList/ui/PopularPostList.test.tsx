import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { PopularPostList } from ".";

describe("PopularPostList | ", () => {
  it("기본 렌더링이 정상적으로 이루어져야 합니다", () => {
    render(
      <MemoryRouter>
        <PopularPostList />
      </MemoryRouter>
    );
    const popularPostList = screen.getByRole("listbox", {
      name: "popular-post-list-section",
    });
    expect(popularPostList).toBeInTheDocument();
  });

  it("PopularPostItem이 렌더링 되어야 합니다", () => {
    render(
      <MemoryRouter>
        <PopularPostList />
      </MemoryRouter>
    );
    const popularPostItems = screen.getAllByRole("feed", {
      name: "horizontal-post-card",
    });
    expect(popularPostItems.length).toBeGreaterThan(0);
  });

  it.todo("게시글 목록을 받와야 합니다");
  it.todo("인기 게시글은 최대 10개입니다");
});
