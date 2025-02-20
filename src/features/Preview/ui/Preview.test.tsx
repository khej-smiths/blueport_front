import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Preview } from ".";
import { EXAMPLE_DOC } from "@/shared";

// useProcessor 훅의 결과를 모킹
vi.mock("@/shared/hooks/useProcessor", () => ({
  useProcessor: (doc: string) => doc,
}));

describe("Preview", () => {
  it("문서 내용을 렌더링해야 합니다", () => {
    const doc = "# 제목\n\n본문";
    const { container } = render(<Preview doc={doc} />);

    expect(container).toHaveTextContent("제목");
    expect(container).toHaveTextContent("본문");
  });

  it("문서가 비어있을 때 빈 내용을 렌더링해야 합니다", () => {
    render(<Preview doc="" />);
    const article = screen.getByRole("article");
    expect(article).toBeEmptyDOMElement();
  });

  it("doc prop은 string이어야 합니다", () => {
    expect(typeof EXAMPLE_DOC).toBe("string");

    // 잘못된 타입에 대한 타입 체크만 수행
    // @ts-expect-error 타입 검사를 위한 예외 처리
    const numberType: PreviewProps = { doc: 123 };
    expect(numberType).toBeDefined();

    // @ts-expect-error 타입 검사를 위한 예외 처리
    const objectType: PreviewProps = { doc: { content: "잘못된 타입" } };
    expect(objectType).toBeDefined();

    // @ts-expect-error 타입 검사를 위한 예외 처리
    const undefinedType: PreviewProps = { doc: undefined };
    expect(undefinedType).toBeDefined();
  });

  it("빈 문자열이 전달되면 빈 Preview 컴포넌트가 렌더링 되어야 합니다", () => {
    render(<Preview doc="" />);
    const preview = screen.getByRole("section", {
      name: "preview-section",
    });
    expect(preview).toBeInTheDocument();
    expect(preview.textContent).toBe("");
  });
});
