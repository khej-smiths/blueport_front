import { render, screen, fireEvent } from "@testing-library/react";
import { EditorView } from "@codemirror/view";
import { Toolbar } from ".";

// imageUpload 모킹
jest.mock("@/shared/lib/imageUpload", () => ({
  __esModule: true,
  default: jest.fn(),
}));

// EditorView Mock
const mockDispatch = jest.fn();
const mockFocus = jest.fn();
const mockSelection = {
  main: {
    from: 0,
    to: 0,
  },
  ranges: [{ from: 0, to: 0 }],
};

const mockEditorView = {
  state: {
    selection: mockSelection,
    doc: {
      sliceString: jest.fn().mockReturnValue(""),
      lineAt: jest.fn().mockReturnValue({ from: 0, to: 0, text: "" }),
    },
  },
  dispatch: mockDispatch,
  focus: mockFocus,
} as unknown as EditorView;

describe("Toolbar | ", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (mockEditorView.state.doc.sliceString as jest.Mock).mockReturnValue("");
  });

  describe("서식 핸들러 테스트", () => {
    describe("헤딩 핸들러", () => {
      it("선택된 텍스트에 H1 서식을 적용해야 합니다", () => {
        (mockEditorView.state.doc.sliceString as jest.Mock).mockReturnValue(
          "샘플 텍스트"
        );

        render(<Toolbar editorView={mockEditorView} />);
        const heading1Button = screen.getByText("1").closest("button");
        fireEvent.click(heading1Button!);

        expect(mockDispatch).toHaveBeenCalledWith(
          expect.objectContaining({
            changes: [
              {
                from: 0,
                to: 0,
                insert: "# ",
              },
            ],
          })
        );
      });

      it("선택된 텍스트에 H2 서식을 적용해야 합니다", () => {
        (mockEditorView.state.doc.sliceString as jest.Mock).mockReturnValue(
          "샘플 텍스트"
        );

        render(<Toolbar editorView={mockEditorView} />);
        const heading2Button = screen.getByText("2").closest("button");
        fireEvent.click(heading2Button!);

        expect(mockDispatch).toHaveBeenCalledWith(
          expect.objectContaining({
            changes: [
              {
                from: 0,
                to: 0,
                insert: "## ",
              },
            ],
          })
        );
      });

      it("선택된 텍스트에 H3 서식을 적용해야 합니다", () => {
        (mockEditorView.state.doc.sliceString as jest.Mock).mockReturnValue(
          "샘플 텍스트"
        );

        render(<Toolbar editorView={mockEditorView} />);
        const heading3Button = screen.getByText("3").closest("button");
        fireEvent.click(heading3Button!);

        expect(mockDispatch).toHaveBeenCalledWith(
          expect.objectContaining({
            changes: [
              {
                from: 0,
                to: 0,
                insert: "### ",
              },
            ],
          })
        );
      });

      it("선택된 텍스트에 H4 서식을 적용해야 합니다", () => {
        (mockEditorView.state.doc.sliceString as jest.Mock).mockReturnValue(
          "샘플 텍스트"
        );

        render(<Toolbar editorView={mockEditorView} />);
        const heading4Button = screen.getByText("4").closest("button");
        fireEvent.click(heading4Button!);

        expect(mockDispatch).toHaveBeenCalledWith(
          expect.objectContaining({
            changes: [
              {
                from: 0,
                to: 0,
                insert: "#### ",
              },
            ],
          })
        );
      });
    });

    describe("볼드 핸들러", () => {
      it("텍스트가 선택되지 않은 경우 기본 텍스트를 삽입해야 합니다", () => {
        render(<Toolbar editorView={mockEditorView} />);
        const boldButton = screen.getByTestId("format-bold");
        fireEvent.click(boldButton);

        expect(mockDispatch).toHaveBeenCalledWith(
          expect.objectContaining({
            changes: expect.objectContaining({
              insert: "**텍스트**",
            }),
          })
        );
      });

      it("선택된 텍스트에 볼드 서식을 적용해야 합니다", () => {
        (mockEditorView.state.doc.sliceString as jest.Mock).mockReturnValue(
          "샘플 텍스트"
        );

        render(<Toolbar editorView={mockEditorView} />);
        const boldButton = screen.getByTestId("format-bold");
        fireEvent.click(boldButton);

        expect(mockDispatch).toHaveBeenCalledWith(
          expect.objectContaining({
            changes: expect.objectContaining({
              insert: "**샘플 텍스트**",
            }),
          })
        );
      });

      it("이미 볼드 처리된 텍스트의 서식을 제거해야 합니다", () => {
        (mockEditorView.state.doc.sliceString as jest.Mock).mockReturnValue(
          "**샘플 텍스트**"
        );

        render(<Toolbar editorView={mockEditorView} />);
        const boldButton = screen.getByTestId("format-bold");
        fireEvent.click(boldButton);

        expect(mockDispatch).toHaveBeenCalledWith(
          expect.objectContaining({
            changes: expect.objectContaining({
              insert: "샘플 텍스트",
            }),
          })
        );
      });
    });

    describe("이탤릭 핸들러", () => {
      it("텍스트가 선택되지 않은 경우 기본 텍스트를 삽입해야 합니다", () => {
        render(<Toolbar editorView={mockEditorView} />);
        const italicButton = screen.getByTestId("format-italic");
        fireEvent.click(italicButton);

        expect(mockDispatch).toHaveBeenCalledWith(
          expect.objectContaining({
            changes: expect.objectContaining({
              insert: "_텍스트_",
            }),
          })
        );
      });

      it("선택된 텍스트에 이탤릭 서식을 적용해야 합니다", () => {
        (mockEditorView.state.doc.sliceString as jest.Mock).mockReturnValue(
          "샘플 텍스트"
        );

        render(<Toolbar editorView={mockEditorView} />);
        const italicButton = screen.getByTestId("format-italic");
        fireEvent.click(italicButton);

        expect(mockDispatch).toHaveBeenCalledWith(
          expect.objectContaining({
            changes: expect.objectContaining({
              insert: "_샘플 텍스트_",
            }),
          })
        );
      });
    });

    describe("취소선 핸들러", () => {
      it("텍스트가 선택되지 않은 경우 기본 텍스트를 삽입해야 합니다", () => {
        render(<Toolbar editorView={mockEditorView} />);
        const strikeButton = screen.getByTestId("format-strikethrough");
        fireEvent.click(strikeButton);

        expect(mockDispatch).toHaveBeenCalledWith(
          expect.objectContaining({
            changes: expect.objectContaining({
              insert: "~~텍스트~~",
            }),
          })
        );
      });

      it("선택된 텍스트에 취소선 서식을 적용해야 합니다", () => {
        (mockEditorView.state.doc.sliceString as jest.Mock).mockReturnValue(
          "샘플 텍스트"
        );

        render(<Toolbar editorView={mockEditorView} />);
        const strikeButton = screen.getByTestId("format-strikethrough");
        fireEvent.click(strikeButton);

        expect(mockDispatch).toHaveBeenCalledWith(
          expect.objectContaining({
            changes: expect.objectContaining({
              insert: "~~샘플 텍스트~~",
            }),
          })
        );
      });
    });

    describe("인용구 핸들러", () => {
      it("텍스트가 선택되지 않은 경우 기본 텍스트를 삽입해야 합니다", () => {
        render(<Toolbar editorView={mockEditorView} />);
        const quoteButton = screen.getByTestId("format-quote");
        fireEvent.click(quoteButton);

        expect(mockDispatch).toHaveBeenCalledWith(
          expect.objectContaining({
            changes: expect.objectContaining({
              insert: "> 텍스트",
            }),
          })
        );
      });

      it("선택된 텍스트에 인용구 서식을 적용해야 합니다", () => {
        (mockEditorView.state.doc.sliceString as jest.Mock).mockReturnValue(
          "샘플 텍스트"
        );

        render(<Toolbar editorView={mockEditorView} />);
        const quoteButton = screen.getByTestId("format-quote");
        fireEvent.click(quoteButton);

        expect(mockDispatch).toHaveBeenCalledWith(
          expect.objectContaining({
            changes: expect.objectContaining({
              insert: "> 샘플 텍스트",
            }),
          })
        );
      });
    });

    describe("코드블록 핸들러", () => {
      it("텍스트가 선택되지 않은 경우 기본 텍스트를 삽입해야 합니다", () => {
        render(<Toolbar editorView={mockEditorView} />);
        const codeblockButton = screen.getByTestId("format-codeblock");
        fireEvent.click(codeblockButton);

        expect(mockDispatch).toHaveBeenCalledWith(
          expect.objectContaining({
            changes: expect.objectContaining({
              insert: "```ts\n코드를 입력해주세요.\n```",
            }),
          })
        );
      });

      it("선택된 텍스트에 코드블록 서식을 적용해야 합니다", () => {
        (mockEditorView.state.doc.sliceString as jest.Mock).mockReturnValue(
          "샘플 코드"
        );

        render(<Toolbar editorView={mockEditorView} />);
        const codeblockButton = screen.getByTestId("format-codeblock");
        fireEvent.click(codeblockButton);

        expect(mockDispatch).toHaveBeenCalledWith(
          expect.objectContaining({
            changes: expect.objectContaining({
              insert: "```ts\n샘플 코드\n```",
            }),
          })
        );
      });
    });
  });

  describe("서식 제거 테스트", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // selection 초기화
      mockSelection.main = { from: 0, to: 0 };
      mockSelection.ranges = [{ from: 0, to: 0 }];
    });

    it("볼드 서식이 적용된 '텍스트'를 선택하면 서식이 제거되어야 합니다", () => {
      (mockEditorView.state.doc.sliceString as jest.Mock).mockReturnValue(
        "텍스트"
      );
      // selection 업데이트
      mockSelection.main = { from: 2, to: 5 };
      mockSelection.ranges = [{ from: 2, to: 5 }];

      render(<Toolbar editorView={mockEditorView} />);
      const boldButton = screen.getByTestId("format-bold");
      fireEvent.click(boldButton);

      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          changes: {
            from: 0,
            to: 7,
            insert: "",
          },
          selection: expect.any(Object),
        })
      );
    });

    it("이탤릭 서식이 적용된 '텍스트'를 선택하면 서식이 제거되어야 합니다", () => {
      (mockEditorView.state.doc.sliceString as jest.Mock).mockReturnValue(
        "텍스트"
      );
      // selection 업데이트
      mockSelection.main = { from: 1, to: 4 };
      mockSelection.ranges = [{ from: 1, to: 4 }];

      render(<Toolbar editorView={mockEditorView} />);
      const italicButton = screen.getByTestId("format-italic");
      fireEvent.click(italicButton);

      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          changes: {
            from: 0,
            to: 5,
            insert: "",
          },
          selection: expect.any(Object),
        })
      );
    });

    it("취소선 서식이 적용된 '텍스트'를 선택하면 서식이 제거되어야 합니다", () => {
      (mockEditorView.state.doc.sliceString as jest.Mock).mockReturnValue(
        "텍스트"
      );
      // selection 업데이트
      mockSelection.main = { from: 2, to: 5 };
      mockSelection.ranges = [{ from: 2, to: 5 }];

      render(<Toolbar editorView={mockEditorView} />);
      const strikeButton = screen.getByTestId("format-strikethrough");
      fireEvent.click(strikeButton);

      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          changes: {
            from: 0,
            to: 7,
            insert: "",
          },
          selection: expect.any(Object),
        })
      );
    });
  });

  describe("이미지 버튼", () => {
    it("이미지 업로드 버튼이 렌더링되어야 합니다", () => {
      render(<Toolbar editorView={mockEditorView} />);
      const imageButton = screen.getByTestId("format-image");
      expect(imageButton).toBeInTheDocument();
    });
  });
});
