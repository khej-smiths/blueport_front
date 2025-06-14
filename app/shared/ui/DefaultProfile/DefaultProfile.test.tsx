import { render } from "@testing-library/react";

import { DefaultProfile } from ".";

describe("DefaultProfile | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    const { container } = render(<DefaultProfile variant="default" />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
