import Landing from "./index";

describe("Landing barrel file", () => {
  it("모든 컴포넌트를 올바르게 내보내야 합니다", () => {
    expect(Landing.About).toBeDefined();
    expect(Landing.Intro).toBeDefined();
    expect(Landing.PopularPostList).toBeDefined();
    expect(Landing.RecentPostList).toBeDefined();
  });

  it("내보내는 컴포넌트 수가 정확해야 합니다", () => {
    const exportedComponents = Object.keys(Landing);
    expect(exportedComponents).toHaveLength(4);
  });
});
