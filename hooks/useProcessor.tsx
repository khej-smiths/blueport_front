import { Fragment, createElement, useEffect, useState } from "react";
import * as prod from "react/jsx-runtime";
import { unified } from "unified";
import remarkParse from "remark-parse";
// import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import remarkBreak from "remark-breaks";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import rehypeReact from "rehype-react";

const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };

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
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeStringify)
        .use(rehypeReact, production)
        .process(doc);

      setContent(md.result);
    })();
  }, [doc]);

  return Content;
}
