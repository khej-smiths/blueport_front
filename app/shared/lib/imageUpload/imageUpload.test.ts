import { EditorView } from "@codemirror/view";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { instance } from "../../api/axios";

import { imageUpload } from ".";

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
      dispatch: vi.fn(),
    } as unknown as EditorView;

    // axios 인스턴스 모킹
    vi.spyOn(instance, "post").mockResolvedValue(undefined as never);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("이미지 업로드 성공 시 마크다운 문법이 삽입되어야 합니다", async () => {
    const mockFile = new File(["test"], "test.png", { type: "image/png" });
    const mockImageUrl = "https://example.com/image.png";

    (instance.post as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      data: mockImageUrl,
    });

    await imageUpload(mockFile, mockEditorView);

    // FormData가 올바르게 생성되었는지 확인
    expect(instance.post).toHaveBeenCalledWith(
      "/upload/post-image",
      expect.any(FormData)
    );

    // 에디터에 마크다운 문법이 삽입되었는지 확인
    expect(mockEditorView.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        changes: {
          from: 0,
          insert: `![이미지 설명](${mockImageUrl})`,
        },
        selection: expect.any(Object),
      })
    );

    const selection = (mockEditorView.dispatch as ReturnType<typeof vi.fn>).mock
      .calls[0][0].selection;
    expect(selection.from).toBe(2);
    expect(selection.to).toBe(8);
  });

  it("이미지 업로드 실패 시 에러 메시지가 삽입되어야 합니다", async () => {
    const mockFile = new File(["test"], "test.png", { type: "image/png" });
    const consoleErrorSpy = vi.spyOn(console, "error");

    (instance.post as ReturnType<typeof vi.fn>).mockRejectedValueOnce(
      new Error("Upload failed")
    );

    await imageUpload(mockFile, mockEditorView);

    // 에러가 콘솔에 기록되었는지 확인
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "이미지 업로드에 실패했습니다",
      expect.any(Error)
    );

    // FormData가 올바르게 생성되었는지 확인
    expect(instance.post).toHaveBeenCalledWith(
      "/upload/post-image",
      expect.any(FormData)
    );

    // 에디터에 에러 메시지가 삽입되었는지 확인
    expect(mockEditorView.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        changes: {
          from: 0,
          insert: "![이미지 업로드에 실패했습니다]()",
        },
        selection: expect.any(Object),
      })
    );

    const selection = (mockEditorView.dispatch as ReturnType<typeof vi.fn>).mock
      .calls[0][0].selection;
    expect(selection.from).toBe(2);
    expect(selection.to).toBe(17);

    consoleErrorSpy.mockRestore();
  });
});
