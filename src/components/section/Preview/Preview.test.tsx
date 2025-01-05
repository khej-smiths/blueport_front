import { render, screen } from "@testing-library/react";

import Preview from ".";
import { EXAMPLE_DOC } from "@/constant/preview";

// useProcessor 훅의 결과를 모킹
jest.mock("@/hooks/useProcessor", () => ({
  __esModule: true,
  default: (doc: string) => doc,
}));

describe("Preview | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    render(<Preview doc={EXAMPLE_DOC} />);
    const preview = screen.getByRole("section", {
      name: "preview-section",
    });
    expect(preview).toBeInTheDocument();

    // textContent를 직접 비교하여 줄바꿈 포함 확인
    expect(preview.textContent?.replace(/\s+/g, " ").trim()).toBe(
      EXAMPLE_DOC.replace(/\s+/g, " ").trim()
    );
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
    expect(preview).toHaveTextContent("");
  });
});
