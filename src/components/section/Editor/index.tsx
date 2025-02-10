"use client";

import { useCallback } from "react";
import useCodemirror from "@/hooks/useCodemirror";
import { EditorState } from "@codemirror/state";
import Toolbar from "./Toolbar";
import { cn } from "@/shared/lib/cn";

interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
  isCategoryInputFocused: boolean;
}

export default function Editor({
  initialDoc,
  onChange,
  isCategoryInputFocused,
}: Props) {
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
      className="relative mb-16 box-border flex h-full w-full flex-col gap-3"
    >
      <div
        className={cn(
          "sticky top-[141px] z-10 flex w-full flex-wrap items-center border-y border-gray-200 bg-white p-2 transition-colors",
          isCategoryInputFocused && "border-t-1 border-t-black"
        )}
      >
        <Toolbar editorView={editorView} />
      </div>
      <div className="w-full flex-1 px-5">
        <div ref={editorRef} />
      </div>
    </div>
  );
}
