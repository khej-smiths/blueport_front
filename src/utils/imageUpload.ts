import { EditorView } from "@codemirror/view";

export default async function imageUpload(file: File, editorView: EditorView) {
  const formData = new FormData();
  formData.append("image", file);

  try {
    // TODO: 이미지 업로드 api 연결 필요
    const response = await fetch("/api", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    const imageUrl = data.imageUrl;
    const imageMarkdown = `![이미지 설명](${imageUrl})`;
    const range = editorView.state.selection.main;

    return editorView.dispatch({
      changes: {
        from: range.from,
        insert: imageMarkdown,
      },
    });
  } catch (error) {
    console.error("이미지 업로드에 실패했습니다", error);
    const range = editorView.state.selection.main;
    return editorView.dispatch({
      changes: {
        from: range.from,
        insert: `![이미지 업로드에 실패했습니다]()`,
      },
    });
  }
}
