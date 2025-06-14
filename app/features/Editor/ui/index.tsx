import { cn } from "@/shared";

import { useEditor } from "../model/useEditor";
import { Toolbar } from "./Toolbar";

interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
  isCategoryInputFocused?: boolean;
}

export function Editor({
  initialDoc,
  onChange,
  isCategoryInputFocused,
}: Props) {
  const { editorRef, editorView } = useEditor({ initialDoc, onChange });
  return (
    <div
      role="article"
      aria-label="editor-section"
      className="relative mb-16 box-border flex h-full w-full flex-col gap-3"
    >
      <div
        className={cn(
          "sticky top-[141px] z-10 flex w-full flex-wrap items-center border-y border-gray-200 bg-white p-2 transition-colors",
          isCategoryInputFocused && "border-t-primary border-t-1"
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
