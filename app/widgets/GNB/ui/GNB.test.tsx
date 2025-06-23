import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { GNB } from ".";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

describe("GNB | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <GNB />
        </QueryClientProvider>
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { name: "title" })).toBeInTheDocument();
  });

  it.todo("Github 링크가 보여야 합니다");
  it.todo("사용자명이 보여야 합니다");
  it.todo("사용자 자세히 보기 페이지로 이동해야 합니다");
});
