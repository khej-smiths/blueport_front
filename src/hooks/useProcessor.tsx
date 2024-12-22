import { Fragment, createElement, useEffect, useState } from "react";
import * as prod from "react/jsx-runtime";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkBreak from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import rehypeReact from "rehype-react";
import H1 from "@/components/section/Preview/H1";
import H2 from "@/components/section/Preview/H2";
import H3 from "@/components/section/Preview/H3";
import H4 from "@/components/section/Preview/H4";
import UnorderedList from "@/components/section/Preview/UnorderdList";
import OrderedList from "@/components/section/Preview/OrderedList";
import Hyperlink from "@/components/section/Preview/Hyperlink";
import Code from "@/components/section/Preview/Code";
import Pre from "@/components/section/Preview/Pre";
import Blockquote from "@/components/section/Preview/Blockquote";

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
  passNode: true,
};

/** 마크다운 문자열을 HTML로 변환한 뒤 React에서 사용할 수 있도록 변환시켜주는 Hook
 *
 * @param doc 마크다운 문자열
 * @return JSX.Element
 * @example const Content = useProcessor(doc);
 */
export default function useProcessor(doc: string) {
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
        .use(rehypeStringify)
        //@ts-expect-error boolean 넣으라는 에러 발생하는데 여기에 넣는 값은 boolean이 아님 https://github.com/rehypejs/rehype-react?tab=readme-ov-file#options
        .use(rehypeReact, production)
        .process(doc);

      setContent(md.result);
    })();
  }, [doc]);

  return Content;
}
