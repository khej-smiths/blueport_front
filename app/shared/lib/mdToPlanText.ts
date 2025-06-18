import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";

/** 마크다운 문서에서 마크다운 키워드를 제거한 텍스트로 변경 */
export function mdToPlanText(md: string) {
  const tree = unified().use(remarkParse).parse(md);

  let text = "";
  
  visit(tree, (node: any) => {
    if (node.type === "text") {
      text += node.value;
    }
    if (node.type === "code") {
      text += `\n${node.value}\n`;
    }
    if (node.type === "paragraph" || node.type === "heading") {
      text += "\n";
    }
    if (node.type === "listItem") {
      text += "\n";
    }
  });

  return text;
}