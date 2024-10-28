"use client";

import { useCallback, useEffect } from "react";
import useCodemirror from "@/hooks/useCodemirror";
import { EditorState } from "@codemirror/state";
import Toolbar from "./Toolbar";

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

  return (
    <div className="relative flex flex-col gap-3 w-full box-border overflow-y-auto">
      <Toolbar editorView={editorView} />
      <div className="w-full " ref={editorRef} />
    </div>
  );
}
