import { instance } from "../../api/axios";
import { EditorView } from "@codemirror/view";
import { EditorSelection } from "@codemirror/state";

export async function imageUpload(file: File, editorView: EditorView) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await instance.post<string>(
      "/upload/post-image",
      formData
    );
    const imageUrl = response.data;
    const imageMarkdown = `![이미지 설명](${imageUrl})`;
    const range = editorView.state.selection.main;
    const descStart = range.from + 2;
    const descEnd = descStart + 6;

    return editorView.dispatch({
      changes: {
        from: range.from,
        insert: imageMarkdown,
      },
      selection: EditorSelection.range(descStart, descEnd),
    });
  } catch (error) {
    console.error("이미지 업로드에 실패했습니다", error);
    const range = editorView.state.selection.main;
    return editorView.dispatch({
      changes: {
        from: range.from,
        insert: `![이미지 업로드에 실패했습니다]()`,
      },
      selection: EditorSelection.range(range.from + 2, range.from + 2 + 15),
    });
  }
}
