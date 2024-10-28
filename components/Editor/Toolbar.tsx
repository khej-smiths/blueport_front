import { EditorView } from "@codemirror/view";
import ToolbarItem from "./ToolbarItem";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatStrikethrough,
  MdInsertLink,
  MdFormatQuote,
  MdImage,
  MdCode,
} from "react-icons/md";
import { EditorSelection } from "@codemirror/state";

interface Props {
  editorView: EditorView | undefined;
}

function Heading({ level }: { level: string }) {
  return (
    <div className="text-[1rem] font-bold font-[serif]">
      H<span className="text-[0.75rem]">{level}</span>
    </div>
  );
}

function Separator() {
  return <div className="w-[1px] h-[1.25rem] mx-2 bg-[#dee2e6]" />;
}

export default function Toolbar({ editorView }: Props) {
  const handleItemClick = (mode: string) => {
    if (!editorView) return;

    const handler: { [key: string]: Function } = {
      ...[1, 2, 3, 4]
        .map((number) => () => {
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
        //TODO: 링크 추가방식 생각해봐야함
        return console.log("link");
      },
      image: () => {
        //TODO: 이미지 업로드 방식 생각해봐야함
        return console.log("image");
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

  return (
    <div className="flex w-full flex-wrap items-center sticky top-0">
      <ToolbarItem
        icon={<Heading level={"1"} />}
        onClick={() => handleItemClick("heading1")}
      />
      <ToolbarItem
        icon={<Heading level={"2"} />}
        onClick={() => handleItemClick("heading2")}
      />
      <ToolbarItem
        icon={<Heading level={"3"} />}
        onClick={() => handleItemClick("heading3")}
      />
      <ToolbarItem
        icon={<Heading level={"4"} />}
        onClick={() => handleItemClick("heading4")}
      />
      <Separator />
      <ToolbarItem
        icon={<MdFormatBold />}
        onClick={() => handleItemClick("bold")}
      />
      <ToolbarItem
        icon={<MdFormatItalic />}
        onClick={() => handleItemClick("italic")}
      />
      <ToolbarItem
        icon={<MdFormatStrikethrough />}
        onClick={() => handleItemClick("strike")}
      />
      <Separator />
      <ToolbarItem
        icon={<MdFormatQuote />}
        onClick={() => handleItemClick("quote")}
      />
      <ToolbarItem
        icon={<MdInsertLink />}
        onClick={() => handleItemClick("link")}
      />
      <ToolbarItem
        icon={<MdImage />}
        onClick={() => handleItemClick("image")}
      />
      <ToolbarItem
        icon={<MdCode />}
        onClick={() => handleItemClick("codeblock")}
      />
    </div>
  );
}