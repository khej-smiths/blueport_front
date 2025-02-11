import { EditorState } from "@codemirror/state";
import { useCallback } from "react";
import { useCodemirror } from "./useCodemirror";

interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
}

export function useEditor({ initialDoc, onChange }: Props) {
  const handleChange = useCallback(
    (state: EditorState) => onChange(state.doc.toString()),
    [onChange]
  );

  const [editorRef, editorView] = useCodemirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange,
  });

  return { editorRef, editorView };
}
