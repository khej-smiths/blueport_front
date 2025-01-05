import { render, screen } from "@testing-library/react";
import RecentPostList from ".";

describe("RecentPostList 컴포넌트 | ", () => {
  it("기본 렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<RecentPostList />);
    const recentPostList = screen.getByRole("listbox", {
      name: "recent-post-list-section",
    });
    expect(recentPostList).toBeInTheDocument();
  });

  it("RecentPostItem이 렌더링 되어야 합니다", () => {
    render(<RecentPostList />);
    const recentPostItems = screen.getAllByRole("feed", {
      name: "recent-post-item-section",
    });
    expect(recentPostItems.length).toBeGreaterThan(0);
  });

  it.todo("게시글 목록을 받아와야 합니다");
  it.todo("최근 게시글은 최대 10개입니다");
});
