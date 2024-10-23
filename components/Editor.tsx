"use client";

import { useCallback, useEffect } from "react";
import useCodemirror from "@/hooks/useCodemirror";

interface Props {}

export default function Editor(props: Props) {
  const [editorRef, editorView] = useCodemirror<HTMLDivElement>({
    initialDoc: "Hello World!",
    onChange: () => {},
  });

  useEffect(() => {
    if (editorView) {
      // 지금은 아무것도 안함
    }
  }, [editorView]);

  return (
    <div className="h-full" ref={editorRef}>
      Editor
    </div>
  );
}
