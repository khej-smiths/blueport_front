import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button 컴포넌트", () => {
  it("기본 버튼이 정상적으로 렌더링 되어야 합니다", () => {
    render(<Button>테스트 버튼</Button>);
    const button = screen.getByRole("button", { name: "테스트 버튼" });
    expect(button).toBeInTheDocument();
  });

  it("variant prop에 따라 올바른 스타일이 적용되어야 합니다", () => {
    // 1. destructive variant를 가진 버튼을 처음 렌더링
    // rerender 함수를 구조분해할당으로 가져와서 나중에 다시 렌더링할 때 사용
    const { rerender } = render(
      <Button variant="destructive">테스트 버튼</Button>
    );

    // 2. 렌더링된 버튼 요소를 찾음 (role="button"인 요소)
    let button = screen.getByRole("button");

    // 3. destructive variant에 해당하는 클래스가 적용되었는지 확인
    expect(button).toHaveClass("bg-destructive");

    // 4. 같은 컨테이너에 outline variant로 버튼을 다시 렌더링
    rerender(<Button variant="outline">테스트 버튼</Button>);

    // 5. 다시 렌더링된 버튼 요소를 찾음
    button = screen.getByRole("button");

    // 6. outline variant에 해당하는 클래스가 적용되었는지 확인
    expect(button).toHaveClass("border-input");
  });

  it("size prop에 따라 올바른 크기가 적용되어야 합니다", () => {
    const { rerender } = render(<Button size="sm">테스트 버튼</Button>);
    let button = screen.getByRole("button");
    expect(button).toHaveClass("h-8");

    rerender(<Button size="lg">테스트 버튼</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("h-10");
  });

  it("disabled prop이 true일 때 버튼이 비활성화되어야 합니다", () => {
    render(<Button disabled>테스트 버튼</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:opacity-50");
  });

  it("asChild prop이 true일 때 다른 엘리먼트로 렌더링 되어야 합니다", () => {
    render(
      <Button asChild>
        <a href="/test">테스트 버튼</a>
      </Button>
    );
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent("테스트 버튼");
    expect(link).toHaveAttribute("href", "/test");
  });

  it("asChild prop이 false일 때 button 엘리먼트로 렌더링 되어야 합니다", () => {
    render(<Button>테스트 버튼</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("BUTTON");
  });
});
