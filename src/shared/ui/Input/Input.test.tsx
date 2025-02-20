import { vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from ".";

describe("Input 컴포넌트", () => {
  it("기본 입력 요소가 정상적으로 렌더링 되어야 합니다", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("placeholder 속성이 정상적으로 렌더링 되어야 합니다", () => {
    render(<Input placeholder="test" />);
    const input = screen.getByPlaceholderText("test");
    expect(input).toBeInTheDocument();
  });

  it("onChange 이벤트가 정상적으로 동작해야 합니다", () => {
    const onChange = vi.fn();
    render(<Input onChange={onChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });

    // 이벤트 객체의 target.value를 확인
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toBe("test");
  });

  it("disabled 상태일 때 입력이 불가능해야 합니다", () => {
    render(<Input disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });
});
