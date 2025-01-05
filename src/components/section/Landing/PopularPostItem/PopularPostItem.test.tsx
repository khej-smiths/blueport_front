import { render, screen } from "@testing-library/react";
import PopularPostItem from ".";

describe("PopularPostItem | ", () => {
  it("기본 렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<PopularPostItem />);
    const popularPostItem = screen.getByRole("feed", {
      name: "popular-post-item-section",
    });
    expect(popularPostItem).toBeInTheDocument();
  });

  it.todo("작성일이 있어야 합니다");
  it.todo("작성자가 있어야 합니다");
  it.todo("제목이 있어야 합니다");
  it.todo("내용이 있어야 합니다");
  it.todo(
    "더보기를 누르면 navigation.push('/{username}/{post}')으로 이동합니다"
  );
});
