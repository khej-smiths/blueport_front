"use client";

import { useEffect, useState, useRef } from "react";
import { EditorState } from "@codemirror/state";
import {
  EditorView,
  keymap,
  // highlightActiveLine,
  placeholder,
} from "@codemirror/view";
import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from "@codemirror/commands";
import {
  indentOnInput,
  // bracketMatching,
  syntaxHighlighting,
  defaultHighlightStyle,
  // HighlightStyle,
} from "@codemirror/language";

import { languages } from "@codemirror/language-data";
// import { html } from "@codemirror/lang-html";
// import { css } from "@codemirror/lang-css";
// import { javascript } from "@codemirror/lang-javascript";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
// import { json } from "@codemirror/lang-json";
// import { python } from "@codemirror/lang-python";
// import { java } from "@codemirror/lang-java";
// import { oneDark } from "@codemirror/theme-one-dark";
import { customHighlightStyle, transparentTheme } from "@/style/editorStyle";

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
export default function useCodemirror<T extends Element>({
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
        // oneDark,
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
