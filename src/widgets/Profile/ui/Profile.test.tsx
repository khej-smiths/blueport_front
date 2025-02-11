import { render } from "@testing-library/react";
import { Profile } from ".";

describe("Profile | ", () => {
  it("블로그 상단 프로필이 정상적으로 렌더링 되어야 합니다", () => {
    render(<Profile />);
  });
});
