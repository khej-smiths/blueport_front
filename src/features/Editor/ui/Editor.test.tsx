import { render, screen } from "@testing-library/react";
import { EXAMPLE_DOC } from "@/shared";
import { Editor } from ".";

describe("Editor | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<Editor initialDoc={EXAMPLE_DOC} onChange={() => {}} />);
    const editor = screen.getByRole("article", { name: "editor-section" });
    expect(editor).toBeInTheDocument();
  });

  it("initialDoc prop은 문자열이어야 합니다", () => {
    const initialDoc = "test";
    render(<Editor initialDoc={initialDoc} onChange={() => {}} />);
    const editor = screen.getByRole("article", { name: "editor-section" });
    expect(editor).toBeInTheDocument();
  });

  it.todo("문서가 변경될 때 콜백이 호출되어야 합니다");
});
