import { render, screen } from "@testing-library/react";

import PopularPostList from ".";

describe("PopularPostList 컴포넌트 | ", () => {
  it("기본 렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<PopularPostList />);
    const popularPostList = screen.getByRole("listbox", {
      name: "popular-post-list-section",
    });
    expect(popularPostList).toBeInTheDocument();
  });

  it("PopularPostItem이 렌더링 되어야 합니다", () => {
    render(<PopularPostList />);
    const popularPostItems = screen.getAllByRole("feed", {
      name: "popular-post-item-section",
    });
    expect(popularPostItems.length).toBeGreaterThan(0);
  });

  it.todo("게시글 목록을 받와야 합니다");
  it.todo("인기 게시글은 최대 10개입니다");
});
