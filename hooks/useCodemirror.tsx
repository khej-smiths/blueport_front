"use client";

import { useEffect, useState, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, highlightActiveLine } from "@codemirror/view";
import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
import {
  indentOnInput,
  bracketMatching,
  syntaxHighlighting,
  defaultHighlightStyle,
} from "@codemirror/language";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { json } from "@codemirror/lang-json";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";

interface Props {
  initialDoc: string;
  onChange?: (state: EditorState) => void;
}

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
        keymap.of([...defaultKeymap, ...historyKeymap]),
        history(),
        indentOnInput(),
        bracketMatching(),
        syntaxHighlighting(defaultHighlightStyle),
        highlightActiveLine(),
        html(),
        css(),
        javascript({ typescript: true }),
        json(),
        python(),
        java(),
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
  }, [editorRef]);

  return [editorRef, editorView];
}
