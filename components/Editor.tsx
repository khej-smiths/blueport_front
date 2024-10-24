"use client";

import { useCallback, useEffect } from "react";
import useCodemirror from "@/hooks/useCodemirror";
import { EditorState } from "@codemirror/state";

interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
}

export default function Editor({ initialDoc, onChange }: Props) {
  const handleChange = useCallback(
    (state: EditorState) => onChange(state.doc.toString()),
    [onChange]
  );

  const [editorRef, editorView] = useCodemirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange,
  });

  useEffect(() => {
    if (editorView) {
      // 지금은 아무것도 안함
    }
  }, [editorView]);

  return <div className="h-full w-full p-12" ref={editorRef} />;
}
