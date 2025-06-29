import { vi } from "vitest";

vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof import("react-router")>(
    "react-router",
  );
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ManageGNB } from ".";

describe("ManageGNB | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <ManageGNB />
        </QueryClientProvider>
      </MemoryRouter>
    );
    expect(screen.getByTestId("ManageGNB")).toBeInTheDocument();
  });
});
