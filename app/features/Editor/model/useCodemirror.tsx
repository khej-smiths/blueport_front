import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from "@codemirror/commands";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import {
  defaultHighlightStyle,
  indentOnInput,
  syntaxHighlighting,
} from "@codemirror/language";
import { languages } from "@codemirror/language-data";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, placeholder } from "@codemirror/view";
import { useEffect, useRef, useState } from "react";

import { customHighlightStyle, transparentTheme } from "./editorStyle";

interface Props {
  initialDoc: string;
  onChange?: (state: EditorState) => void;
}

/** 코드미러6 에디터 생성 Hook
 *
 * @param initialDoc - 초기 문서
 * @param onChange - 문서 변경 시 호출할 함수
 * @return [editorRef, editorView]
 * @example
 * const [editorRef, editorView] = useCodemirror({ initialDoc: "" });
 */
export function useCodemirror<T extends Element>({
  initialDoc,
  onChange,
}: Props): [React.MutableRefObject<T | null>, EditorView?] {
  const editorRef = useRef<T>(null);
  const [editorView, setEditorView] = useState<EditorView>();

  useEffect(() => {
    if (!editorRef.current) return;

    const startState = EditorState.create({
      doc: initialDoc,
      extensions: [
        keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
        placeholder("지금 생각하고있는 이야기를 써보세요..."),
        history(),
        indentOnInput(),
        markdown({
          base: markdownLanguage,
          codeLanguages: languages,
          addKeymap: true,
        }),
        transparentTheme,
        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
        syntaxHighlighting(customHighlightStyle),
        EditorView.lineWrapping,
        EditorView.updateListener.of((update) => {
          if (update.changes && onChange) {
            onChange(update.state);
          }
        }),
      ],
    });

    const view = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    setEditorView(view);

    return () => {
      view.destroy();
    };

    // initialDoc, onChange 들어갈 경우 에디터 리렌더링되어 작성 불가능
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorRef]);

  return [editorRef, editorView];
}
