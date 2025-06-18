import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

vi.mock("@/shared", async () => {
  const actual = await vi.importActual<typeof import("@/shared")>("@/shared");
  return {
    ...actual,
    HOOKS: {
      ...actual.HOOKS,
      useGetPostList: () => ({
        data: [
          {
            id: "1",
            title: "title",
            content: "content",
            createdAt: new Date(),
            hashtagList: ["tag"],
            writer: {
              id: "1",
              name: "writer",
              email: "",
              blog: { id: "1", domain: "domain" },
            },
          },
        ],
      }),
    },
  };
});

import { PopularPostList } from ".";

describe("PopularPostList | ", () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  it("기본 렌더링이 정상적으로 이루어져야 합니다", () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <PopularPostList />
        </QueryClientProvider>
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
        <QueryClientProvider client={queryClient}>
          <PopularPostList />
        </QueryClientProvider>
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
