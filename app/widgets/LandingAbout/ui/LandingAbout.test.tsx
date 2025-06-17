import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import type { ReadBlogListQuery } from "@/shared";

import { LandingAbout } from ".";

const blog: ReadBlogListQuery["readBlogList"][number] = {
  id: "1",
  name: "블로그",
  domain: "test",
  greeting: "안녕하세요",
  photo: "",
  introduction: "소개",
  skills: ["TS"],
  email: "",
  github: "",
  ownerId: "",
};

describe("LandingAbout | ", () => {
  it("기본 렌더링이 정상적으로 이루어져야 합니다", () => {
    render(
      <MemoryRouter>
        <LandingAbout blog={blog} />
      </MemoryRouter>
    );
    const about = screen.getByRole("article", { name: "about-section" });
    expect(about).toBeInTheDocument();
  });

  it("right prop이 true일 때 오른쪽 정렬되어야 합니다", () => {
    render(
      <MemoryRouter>
        <LandingAbout right blog={blog} />
      </MemoryRouter>
    );
    const about = screen.getByRole("article", { name: "about-section" });
    expect(about).toHaveClass("flex-row-reverse");
  });

  it("right prop이 false일 때 왼쪽 정렬되어야 합니다", () => {
    render(
      <MemoryRouter>
        <LandingAbout blog={blog} />
      </MemoryRouter>
    );
    const about = screen.getByRole("article", { name: "about-section" });
    expect(about).toHaveClass("flex-row");
  });

  it.todo("인사말이 있어야 합니다");
  it.todo("내용이 있어야 합니다");
  it.todo("기술스택이 있어야 합니다");
  it.todo("기술스택은 최대 15개입니다");
  it.todo(
    "더 알아보기를 누르면 navigation.push('/{username}/about')으로 이동합니다"
  );
});
