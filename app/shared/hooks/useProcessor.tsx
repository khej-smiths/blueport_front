import { Element, ElementContent, Properties, Text } from "hast";
import { createElement, Fragment, useEffect, useState } from "react";
import * as prod from "react/jsx-runtime";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import rehypeStringify from "rehype-stringify";
import remarkBreak from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { Node } from "unist";
import { visit } from "unist-util-visit";

import { Blockquote } from "../ui/Blockquote";
import { Code } from "../ui/Code";
import { H1 } from "../ui/H1";
import { H2 } from "../ui/H2";
import { H3 } from "../ui/H3";
import { H4 } from "../ui/H4";
import { Hyperlink } from "../ui/Hyperlink";
import { OrderedList } from "../ui/OrderedList";
import { Pre } from "../ui/Pre";
import { UnorderedList } from "../ui/UnorderedList";

interface HeadingElement extends Omit<Element, "children"> {
  type: "element";
  tagName: "h1" | "h2" | "h3" | "h4";
  properties: Properties & {
    id?: string;
  };
  children: (ElementContent | Text)[];
}

const production = {
  Fragment: prod.Fragment,
  jsx: prod.jsx,
  jsxs: prod.jsxs,
  components: {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    ul: UnorderedList,
    ol: OrderedList,
    a: Hyperlink,
    code: Code,
    pre: Pre,
    blockquote: Blockquote,
  },
};

/** Element가 HeadingElement인지 확인 */
function isHeadingElement(node: Node): node is HeadingElement {
  return (
    node.type === "element" &&
    "tagName" in node &&
    ["h1", "h2", "h3", "h4"].includes((node as HeadingElement).tagName)
  );
}

/** Post에서 목차 네비게이팅을 위한 Heading에 id 추가 */
const addHeadingIds = () => {
  /** id 속성 추가 시 중복을 체크하기 위한 Set */
  const usedIds = new Set<string>();

  return (tree: Node) => {
    visit(tree, "element", (node) => {
      if (isHeadingElement(node)) {
        const headingNode = node as HeadingElement;
        const text = headingNode.children
          .filter((child) => child.type === "text")
          .map((child) => child.value)
          .join("");

        /** 기본 id 생성 (Heading에 입력된 문자열) */
        const baseId = text
          ?.toLowerCase()
          .replace(/[^a-zA-Z0-9가-힣\s]/g, "")
          .replace(/\s+/g, "-");

        /** Heading 레벨을 접두사로 추가 */
        let id = `${headingNode.tagName}-${baseId}`;

        // 중복 ID가 있는 경우 숫자를 추가
        if (usedIds.has(id)) {
          let counter = 1;
          while (usedIds.has(`${id}-${counter}`)) {
            counter++;
          }

          id = `${id}-${counter}`;
        }

        // 사용한 ID 기록
        usedIds.add(id);
        headingNode.properties.id = id;
      }
    });
  };
};

/** 마크다운 문자열을 HTML로 변환한 뒤 React에서 사용할 수 있도록 변환시켜주는 Hook
 *
 * @param doc 마크다운 문자열
 * @return JSX.Element
 * @example const Content = useProcessor(doc);
 */
export function useProcessor(doc: string) {
  const [Content, setContent] = useState(createElement(Fragment));

  useEffect(() => {
    (async () => {
      const md = await unified()
        .use(remarkBreak)
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        //TODO: HTML 코드 입력 방지 추가해야함
        .use(rehypeRaw)
        .use(rehypeHighlight)
        .use(remarkMath)
        .use(rehypeKatex)
        .use(addHeadingIds)
        .use(rehypeStringify)
        .use(rehypeReact, production)
        .process(doc);

      setContent(md.result);
    })();
  }, [doc]);

  return Content;
}
