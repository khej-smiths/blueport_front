import { render, screen } from "@testing-library/react";
import RecentPostItem from ".";

describe("RecentPostItem 컴포넌트 | ", () => {
  it("기본 렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<RecentPostItem />);
    const recentPostItem = screen.getByRole("feed", {
      name: "recent-post-item-section",
    });
    expect(recentPostItem).toBeInTheDocument();
  });

  it.todo("제목이 있어야 합니다");
  it.todo("작성일이 있어야 합니다");
  it.todo("작성자가 있어야 합니다");
  it.todo("요소를 누르면 navigation.push('/{username}/{post}')으로 이동합니다");
});
