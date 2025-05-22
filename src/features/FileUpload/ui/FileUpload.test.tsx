import { render, screen } from "@testing-library/react";

import { FileUpload } from "..";

describe("FileUpload | ", () => {
  it("파일 업로드 요소가 정상적으로 렌더링 되어야 합니다", () => {
    render(<FileUpload />);
    const fileUpload = screen.getByRole("button");
    expect(fileUpload).toBeInTheDocument();
  });
});
