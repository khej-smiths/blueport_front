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

import { ManageGNB } from ".";

describe("ManageGNB | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    render(
      <MemoryRouter>
        <ManageGNB />
      </MemoryRouter>
    );
    expect(screen.getByTestId("ManageGNB")).toBeInTheDocument();
  });
});
