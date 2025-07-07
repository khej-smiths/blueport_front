import { EditorSelection } from "@codemirror/state";
import { EditorView } from "@codemirror/view";

import { imageUpload } from "@/shared";

interface Props {
  editorView: EditorView | undefined;
}

export function useToolbar({ editorView }: Props) {
  const handleItemClick = (mode: string) => {
    if (!editorView) return;

    const handler: { [key: string]: () => void } = {
      ...[1, 2, 3, 4]
        .map((number) => () => {
          // 선택 안하고 사용한 경우 쓰이는 범위 값;
          const range = editorView.state.selection.main;

          const keyword = "#".repeat(number);
          const changes = [];

          // 선택된 범위 지정
          for (const range of editorView.state.selection.ranges) {
            const startLine = editorView.state.doc.lineAt(range.from);
            const endLine = editorView.state.doc.lineAt(range.to);

            // 범위 내 각 라인에 대한 처리
            for (
              let pos = startLine.from;
              pos <= endLine.from;
              pos = editorView.state.doc.lineAt(pos).to + 1
            ) {
              const line = editorView.state.doc.lineAt(pos);
              const plain = line.text.trimStart().replace(/^#+\s*/, "");

              changes.push({
                from: line.from,
                to: line.to,
                insert: `${keyword} ${plain}`,
              });
            }
          }

          if (changes.length > 0) {
            editorView.dispatch({
              changes,
              selection: EditorSelection.range(
                range.from + number + 1,
                range.to + number + 1
              ),
            });
          }
        })
        .reduce((handlers, handler, index) => {
          return Object.assign(handlers, { [`heading${index + 1}`]: handler });
        }, {}),
      bold: () => {
        const range = editorView.state.selection.main;
        const selectedText = editorView.state.doc
          .sliceString(range.from, range.to)
          .trim();

        // 선택한 문자열이 없는 경우
        if (selectedText === "") {
          editorView.dispatch({
            changes: {
              from: range.from,
              insert: `**텍스트**`,
            },
            selection: EditorSelection.range(range.from + 2, range.to + 5),
          });

          return;
        }

        // 선택한 문자열이 없는 경우 취소
        if (selectedText === "텍스트") {
          editorView.dispatch({
            changes: {
              from: range.from - 2,
              to: range.to + 2,
              insert: "",
            },
            selection: EditorSelection.cursor(range.to - 5),
          });

          return;
        }

        // 드래그하여 선택한 문자열이 있는 경우
        editorView.dispatch({
          changes: {
            from: range.from,
            to: range.to,
            insert: /\*\*/g.test(selectedText)
              ? `${selectedText.replace(/\*\*/g, "")}`
              : `**${selectedText}**`,
          },
          selection: /\*\*/g.test(selectedText)
            ? EditorSelection.range(range.from, range.to - 4)
            : EditorSelection.range(range.from, range.to + 4),
        });

        return;
      },
      italic: () => {
        const range = editorView.state.selection.main;
        const selectedText = editorView.state.doc
          .sliceString(range.from, range.to)
          .trim();

        // 선택한 문자열이 없는 경우
        if (selectedText === "") {
          editorView.dispatch({
            changes: {
              from: range.from,
              insert: `_텍스트_`,
            },
            selection: EditorSelection.range(range.from + 1, range.to + 4),
          });

          return;
        }

        // 선택한 문자열이 없는 경우 취소
        if (selectedText === "텍스트") {
          editorView.dispatch({
            changes: {
              from: range.from - 1,
              to: range.to + 1,
              insert: "",
            },
            selection: EditorSelection.cursor(range.to - 4),
          });

          return;
        }

        // 드래그하여 선택한 문자열이 있는 경우
        editorView.dispatch({
          changes: {
            from: range.from,
            to: range.to,
            insert: /\_/g.test(selectedText)
              ? `${selectedText.replace(/\_/g, "")}`
              : `_${selectedText}_`,
          },
          selection: /\_/g.test(selectedText)
            ? EditorSelection.range(range.from, range.to - 2)
            : EditorSelection.range(range.from, range.to + 2),
        });

        return;
      },
      strike: () => {
        const range = editorView.state.selection.main;
        const selectedText = editorView.state.doc
          .sliceString(range.from, range.to)
          .trim();

        // 선택한 문자열이 없는 경우
        if (selectedText === "") {
          editorView.dispatch({
            changes: {
              from: range.from,
              insert: `~~텍스트~~`,
            },
            selection: EditorSelection.range(range.from + 2, range.to + 5),
          });

          return;
        }

        // 선택한 문자열이 없는 경우 취소
        if (selectedText === "텍스트") {
          editorView.dispatch({
            changes: {
              from: range.from - 2,
              to: range.to + 2,
              insert: "",
            },
            selection: EditorSelection.cursor(range.to - 5),
          });

          return;
        }

        // 드래그하여 선택한 문자열이 있는 경우
        editorView.dispatch({
          changes: {
            from: range.from,
            to: range.to,
            insert: /\~\~/g.test(selectedText)
              ? `${selectedText.replace(/\~\~/g, "")}`
              : `~~${selectedText}~~`,
          },
          selection: /\~\~/g.test(selectedText)
            ? EditorSelection.range(range.from, range.to - 4)
            : EditorSelection.range(range.from, range.to + 4),
        });

        return;
      },
      quote: () => {
        const range = editorView.state.selection.main;
        const selectedText = editorView.state.doc
          .sliceString(range.from, range.to)
          .trim();

        // 선택한 문자열이 없는 경우
        if (selectedText === "") {
          editorView.dispatch({
            changes: {
              from: range.from,
              insert: `> 텍스트`,
            },
            selection: EditorSelection.range(range.from + 2, range.to + 5),
          });

          return;
        }

        // 선택한 문자열이 없는 경우 취소
        if (selectedText === "텍스트") {
          editorView.dispatch({
            changes: {
              from: range.from - 2,
              to: range.to,
              insert: "",
            },
            selection: EditorSelection.cursor(range.to - 5),
          });

          return;
        }

        // 드래그하여 선택한 문자열이 있는 경우
        editorView.dispatch({
          changes: {
            from: range.from,
            to: range.to,
            insert: /\>\s/g.test(selectedText)
              ? `${selectedText.replace(/\>\s/g, "")}`
              : `> ${selectedText}`,
          },
          selection: /\>\s/g.test(selectedText)
            ? EditorSelection.range(range.from, range.to - 2)
            : EditorSelection.range(range.from, range.to + 2),
        });

        return;
      },
      link: () => {
        const range = editorView.state.selection.main;
        const linkMarkdown = `[링크](URL을 입력해 주세요)`;
        // 삽입 후 selection 범위 계산: 괄호 위치를 기준으로 정확히 계산
        const insertFrom = range.from;
        const openParen = linkMarkdown.indexOf("(");
        const closeParen = linkMarkdown.indexOf(")");
        const urlStart = insertFrom + openParen + 1;
        const urlEnd = insertFrom + closeParen;
        editorView.dispatch({
          changes: {
            from: range.from,
            to: range.to,
            insert: linkMarkdown,
          },
          selection: EditorSelection.range(urlStart, urlEnd),
        });
        return;
      },
      image: () => {
        /** 이미지 업로드 api를 통해 cloud flare images에 업로드 후 받아온 url을 입력함 */
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.onchange = () => {
          if (fileInput.files && fileInput.files.length > 0) {
            const file = fileInput.files[0];
            imageUpload(file, editorView);
          }
        };
        fileInput.click();
        return;
      },
      codeblock: () => {
        const range = editorView.state.selection.main;
        const selectedText = editorView.state.doc
          .sliceString(range.from, range.to)
          .trim();

        // 선택한 문자열이 없는 경우
        if (selectedText === "") {
          editorView.dispatch({
            changes: {
              from: range.from,
              insert: "```ts\n코드를 입력해주세요.\n```",
            },
            selection: EditorSelection.range(range.from + 6, range.to + 17),
          });

          return;
        }

        // 선택한 문자열이 없는 경우 취소
        if (selectedText === "코드를 입력해주세요.") {
          editorView.dispatch({
            changes: {
              from: range.from - 6,
              to: range.to + 4,
              insert: "",
            },
            selection: EditorSelection.cursor(range.to - 17),
          });

          return;
        }

        // 드래그하여 선택한 문자열이 있는 경우
        editorView.dispatch({
          changes: {
            from: range.from,
            to: range.to,
            insert: /```ts|```/g.test(selectedText)
              ? `${selectedText.replace(/```ts|```/g, "")}`
              : "```ts\n" + selectedText + "\n```",
          },
          selection: /```ts|```/g.test(selectedText)
            ? EditorSelection.range(range.from + 1, range.to - 8)
            : EditorSelection.range(range.from + 6, range.to + 6),
        });

        return;
      },
    };

    const action = handler[mode];

    if (!action) return;
    action();
    editorView.focus();
  };

  return { handleItemClick };
}
