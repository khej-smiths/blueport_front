"use client";

import { useCallback } from "react";
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
    <div
      role="article"
      aria-label="editor-section"
      className="relative flex flex-col gap-3 w-full box-border h-full mb-16"
    >
      <div className="flex w-full flex-wrap items-center sticky top-[141px] bg-white z-10 p-2 border-y border-gray-200">
        <Toolbar editorView={editorView} />
      </div>
      <div className="w-full flex-1 px-5">
        <div ref={editorRef} />
      </div>
    </div>
  );
}
