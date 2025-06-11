import { render, screen } from "@testing-library/react";

import { AlertDialog, AlertDialogTrigger } from ".";

describe("Dialog | ", () => {
  it("트리거 버튼이 렌더링 되어야 합니다", () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>열기</AlertDialogTrigger>
      </AlertDialog>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
