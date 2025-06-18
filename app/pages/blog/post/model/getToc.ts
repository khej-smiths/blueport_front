import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { Heading, HeadingNode } from "./type";
import { Text } from "mdast";

export const getToc = (markdown: string) => {
  const heading: Heading[] = [];
  const usedIds = new Set<string>();

  const tree = unified().use(remarkParse).use(remarkGfm).parse(markdown);

  visit(tree, "heading", (node: HeadingNode) => {
    const textNodes = node.children.filter(
      (child): child is Text => child.type === "text"
    );

    const text = textNodes.map((node) => node.value).join("");

    const baseId = text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9가-힣\s]/g, "")
      .replace(/\s+/g, "-");

    let id = `h${node.depth}-${baseId}`;

    if (usedIds.has(id)) {
      let counter = 1;
      while (usedIds.has(`${id}-${counter}`)) {
        counter++;
      }

      id = `${id}-${counter}`;
    }
    heading.push({
      text,
      level: node.depth,
      id,
    });
  });

  return heading;
};