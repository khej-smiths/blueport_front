import { cn, useResponsive } from "@/shared";

import { useEditor } from "../model/useEditor";
import { Toolbar } from "./Toolbar";

interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
  isHashtagInputFocused?: boolean;
}

export function Editor({ initialDoc, onChange, isHashtagInputFocused }: Props) {
  const { editorRef, editorView } = useEditor({ initialDoc, onChange });
  const { isMobile } = useResponsive();

  return (
    <div
      role="article"
      aria-label="editor-section"
      className="relative box-border flex h-full w-full flex-col gap-3"
    >
      <div
        className={cn(
          "sticky top-[141px] z-10 flex w-full flex-wrap items-center border-y border-gray-200 bg-white p-2 transition-colors not-xl:top-22",
          isHashtagInputFocused && "border-t-primary border-t-1"
        )}
      >
        <Toolbar editorView={editorView} />
      </div>
      <div
        className="w-full flex-1 cursor-text px-5"
        onClick={() => editorView?.focus()}
      >
        <div ref={editorRef} className="h-full pb-16" />
      </div>
    </div>
  );
}
