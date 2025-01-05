import { EditorView } from "@codemirror/view";
import imageUpload from "./imageUpload";

describe("imageUpload", () => {
  let mockEditorView: EditorView;

  beforeEach(() => {
    // EditorView 모킹
    mockEditorView = {
      state: {
        selection: {
          main: {
            from: 0,
          },
        },
      },
      dispatch: jest.fn(),
    } as unknown as EditorView;

    // fetch 전역 모킹
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("이미지 업로드 성공 시 마크다운 문법이 삽입되어야 합니다", async () => {
    const mockFile = new File(["test"], "test.png", { type: "image/png" });
    const mockImageUrl = "https://example.com/image.png";

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve({ imageUrl: mockImageUrl }),
    });

    await imageUpload(mockFile, mockEditorView);

    // FormData가 올바르게 생성되었는지 확인
    expect(global.fetch).toHaveBeenCalledWith("/api", {
      method: "POST",
      body: expect.any(FormData),
    });

    // 에디터에 마크다운 문법이 삽입되었는지 확인
    expect(mockEditorView.dispatch).toHaveBeenCalledWith({
      changes: {
        from: 0,
        insert: `![이미지 설명](${mockImageUrl})`,
      },
    });
  });

  it("이미지 업로드 실패 시 에러 메시지가 삽입되어야 합니다", async () => {
    const mockFile = new File(["test"], "test.png", { type: "image/png" });
    const consoleErrorSpy = jest.spyOn(console, "error");

    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error("Upload failed")
    );

    await imageUpload(mockFile, mockEditorView);

    // 에러가 콘솔에 기록되었는지 확인
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "이미지 업로드에 실패했습니다",
      expect.any(Error)
    );

    // 에디터에 에러 메시지가 삽입되었는지 확인
    expect(mockEditorView.dispatch).toHaveBeenCalledWith({
      changes: {
        from: 0,
        insert: "![이미지 업로드에 실패했습니다]()",
      },
    });

    consoleErrorSpy.mockRestore();
  });
});
