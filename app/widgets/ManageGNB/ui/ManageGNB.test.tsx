import { vi } from "vitest";

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useNavigate: () => vi.fn(),
}));

import { render, screen } from "@testing-library/react";

import { ManageGNB } from ".";

describe("ManageGNB | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<ManageGNB />);
    expect(screen.getByTestId("ManageGNB")).toBeInTheDocument();
  });
});
