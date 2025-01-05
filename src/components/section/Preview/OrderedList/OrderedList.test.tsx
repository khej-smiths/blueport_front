import { render, screen } from "@testing-library/react";
import OrderedList from ".";

describe("OrderedList | ", () => {
  it("렌더링이 정상적으로 이루어져야 합니다", () => {
    render(
      <OrderedList>
        <li>첫 번째 항목</li>
        <li>두 번째 항목</li>
        <li>세 번째 항목</li>
      </OrderedList>
    );

    expect(screen.getByText("첫 번째 항목")).toBeInTheDocument();
    expect(screen.getByText("두 번째 항목")).toBeInTheDocument();
    expect(screen.getByText("세 번째 항목")).toBeInTheDocument();
  });

  it("ordered list 태그로 렌더링되어야 합니다", () => {
    render(
      <OrderedList>
        <li>테스트 항목</li>
      </OrderedList>
    );

    const list = screen.getByRole("list");
    expect(list.tagName).toBe("OL");
  });
});
